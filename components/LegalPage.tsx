import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { Locale } from '@/i18n-config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dict = Record<string, any>;

/** Data controller details shown on the privacy and cookie pages. */
export const CONTROLLER = {
    name: 'Baywatch Travel',
    address: 'Via Castiglione, 36, 80074 Casamicciola Terme (NA), Italia',
    email: 'info@baywatchtravel.it',
    phone: '+39 081 333 1096',
};

export const LAST_UPDATED = '15 ottobre 2026';

/**
 * Shared shell for legal pages. The dark top band keeps the white header
 * text readable; long-form copy is styled through the `.legal-body` rules.
 */
export default function LegalPage({
    dict,
    lang,
    eyebrow,
    title,
    children,
}: {
    dict: Dict;
    lang: Locale;
    eyebrow: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header dict={dict} lang={lang} />

            <main className="flex-1">
                <section className="bg-midnight text-white" style={{ paddingTop: 'calc(108px + 4rem)', paddingBottom: '4rem' }}>
                    <div className="container mx-auto px-4 max-w-3xl">
                        <p
                            className="text-white/60 mb-5"
                            style={{
                                fontFamily: 'var(--font-futura)',
                                fontSize: '0.6875rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.28em',
                            }}
                        >
                            {eyebrow}
                        </p>
                        <h1 className="font-serif font-normal leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                            {title}
                        </h1>
                        <p className="mt-6 text-sm text-white/50">Ultimo aggiornamento: {LAST_UPDATED}</p>
                    </div>
                </section>

                <article className="legal-body container mx-auto px-4 max-w-3xl" style={{ paddingTop: '4rem', paddingBottom: 'var(--section-py)' }}>
                    {children}
                </article>
            </main>

            <Footer dict={dict} lang={lang} />
            <WhatsAppButton />
        </div>
    );
}
