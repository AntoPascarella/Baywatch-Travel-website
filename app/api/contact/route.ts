import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Mock delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const body = await request.json();
    console.log('Form submission:', body);

    return NextResponse.json({ status: 'ok', message: 'Message received' });
}
