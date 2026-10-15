import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactSchema } from '@/lib/contact-schema';
import { destinations } from '@/data/destinations';

export const runtime = 'nodejs';

const DEFAULT_TO = 'info@baywatchtravel.it';

function getTransport() {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
    const port = Number(SMTP_PORT) || 465;
    return nodemailer.createTransport({
        host: SMTP_HOST,
        port,
        secure: port === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
}

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ status: 'error', message: 'Invalid JSON' }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json({ status: 'error', message: 'Invalid form data' }, { status: 400 });
    }
    const values = parsed.data;

    // Honeypot filled: pretend it worked, send nothing.
    if (values.website) {
        return NextResponse.json({ status: 'ok' });
    }

    const transport = getTransport();
    if (!transport) {
        console.error('Contact form: SMTP_HOST, SMTP_USER and SMTP_PASS must be set.');
        return NextResponse.json({ status: 'error', message: 'Mail not configured' }, { status: 500 });
    }

    const destinationName = values.destination
        ? destinations.find((d) => d.slug === values.destination)?.name ?? values.destination
        : '';
    const name = values.name.replace(/[\r\n]+/g, ' ');

    const text = [
        `Nome: ${name}`,
        `Email: ${values.email}`,
        `Telefono: ${values.phone || '-'}`,
        `Destinazione: ${destinationName || '-'}`,
        '',
        values.message,
    ].join('\n');

    try {
        await transport.sendMail({
            from: { name: 'Sito Baywatch Travel', address: process.env.CONTACT_FROM || process.env.SMTP_USER! },
            to: process.env.CONTACT_TO || DEFAULT_TO,
            replyTo: { name, address: values.email },
            subject: `Richiesta dal sito: ${name}${destinationName ? ` (${destinationName})` : ''}`,
            text,
        });
    } catch (error) {
        console.error('Contact form: sending failed', error);
        return NextResponse.json({ status: 'error', message: 'Send failed' }, { status: 502 });
    }

    return NextResponse.json({ status: 'ok' });
}
