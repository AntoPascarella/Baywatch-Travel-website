import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/i18n-config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FadeIn from '@/components/FadeIn';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Chi Siamo & Contatti | Baywatch Travel',
    description: 'Contattaci per pianificare la tua prossima vacanza in Italia.',
};

export default async function ContactPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const formLabels = dict.form;

    const contactCards = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: dict.contact.visit,
            lines: ['Via Castiglione, 36', '80074 Casamicciola Terme (NA), Italia'],
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: dict.contact.email_us,
            lines: ['info@baywatchtravel.it', 'booking@baywatchtravel.it'],
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: dict.contact.call_us,
            lines: ['+39 081 333 1096', dict.contact.hours],
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-cream">
            <Header dict={dict} lang={locale} />

            <main className="flex-1">
                {/* Hero */}
                <section className="relative overflow-hidden" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <Image
                        src="https://images.unsplash.com/photo-1622385444566-99dcb428a483?q=80&w=2400&auto=format&fit=crop"
                        alt="Case bianche e azzurre affacciate sul mare"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                        style={{ objectPosition: 'center 85%' }}
                    />
                    {/* Dark overlay for white-text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sea-blue/60 via-midnight/50 to-midnight/70" />

                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <FadeIn>
                            <h1 className="text-h1 font-serif font-normal text-white mb-6 drop-shadow-lg">
                                {dict.contact.hero_title}
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                                {dict.contact.hero_subtitle}
                            </p>
                            <div className="section-divider !bg-gradient-to-r !from-peach !to-white/50 mt-6" />
                        </FadeIn>
                    </div>
                </section>

                {/* Content */}
                <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                            {/* Contact Info Column */}
                            <div className="lg:w-1/2">
                                <FadeIn>
                                    <h2 className="text-h3 font-serif font-normal text-midnight mb-8">
                                        {dict.contact.info_title}
                                    </h2>

                                    <div className="space-y-6">
                                        {contactCards.map((card, i) => (
                                            <div key={i} className="card p-5 flex gap-4 items-start">
                                                <div className="bg-gradient-to-br from-peach/40 to-soft-coral/20 p-3 rounded-xl text-midnight flex-shrink-0">
                                                    {card.icon}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-midnight text-body mb-1">
                                                        {card.title}
                                                    </h3>
                                                    {card.lines.map((line, j) => (
                                                        <p key={j} className="text-gray-500 text-small">
                                                            {line}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* WhatsApp CTA */}
                                    <div className="mt-8">
                                        <p className="text-small text-gray-400 mb-3">
                                            {dict.contact.whatsapp_cta}
                                        </p>
                                        <Link
                                            href="https://wa.me/390813331096"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 bg-[#25D366] text-white py-3 px-6 rounded-full font-bold hover:bg-[#20BD5A] transition-all hover:scale-105 shadow-lg"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                                            </svg>
                                            WhatsApp
                                        </Link>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Form Column */}
                            <div className="lg:w-1/2">
                                <FadeIn delay={200}>
                                    <div className="card p-8">
                                        <h2 className="text-h3 font-serif font-normal text-midnight mb-6">
                                            {dict.contact.form_title}
                                        </h2>
                                        <ContactForm labels={formLabels} />
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer dict={dict} lang={locale} />
            <WhatsAppButton />
        </div>
    );
}
