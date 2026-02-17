import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/i18n-config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FadeIn from '@/components/FadeIn';
import DestinationCard from '@/components/DestinationCard';
import ContactForm from '@/components/ContactForm';
import { destinations } from '@/data/destinations';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    const featuredSlugs = ['ischia', 'capri', 'procida', 'amalfi', 'roma', 'toscana'];
    const sortedDestinations = featuredSlugs
        .map(slug => destinations.find(d => d.slug === slug))
        .filter(Boolean) as typeof destinations;

    const formLabels = dict.form;

    return (
        <div className="min-h-screen flex flex-col bg-cream font-sans">
            <Header dict={dict} lang={locale} />

            <main className="flex-1">
                {/* ═══════════════════════════════════
                    HERO SECTION
                   ═══════════════════════════════════ */}
                <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                    {/* Background image */}
                    <Image
                        src="/images/hero/Spiaggia_dei_Pescatori.jpg"
                        alt={locale === 'it' ? 'Panorama di Ischia' : 'Ischia panorama'}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-midnight/70 via-midnight/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-cream/30 to-transparent" />

                    <div className="relative z-10 container mx-auto px-4 py-20">
                        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
                            {/* Left: Copy + CTAs */}
                            <div className="lg:w-1/2 text-white">
                                <FadeIn>
                                    <h1 className="text-h1 font-serif font-bold leading-tight mb-6 drop-shadow-lg">
                                        {dict.home.hero.headline}
                                    </h1>
                                </FadeIn>
                                <FadeIn delay={200}>
                                    <p className="text-xl text-white/85 font-light mb-8 max-w-lg leading-relaxed">
                                        {dict.home.hero.subheadline}
                                    </p>
                                </FadeIn>
                                <FadeIn delay={400} className="flex flex-col sm:flex-row gap-4">
                                    <Link href="#contact-form" className="btn btn-primary">
                                        {dict.home.hero.cta_quote}
                                    </Link>
                                    <Link
                                        href="https://wa.me/390811234567"
                                        className="btn btn-secondary !bg-white/15 !text-white !border-white/40 hover:!bg-white/30"
                                    >
                                        {dict.home.hero.cta_whatsapp}
                                    </Link>
                                </FadeIn>
                            </div>

                            {/* Right: Quick Request card */}
                            <div className="lg:w-5/12 w-full">
                                <FadeIn delay={300}>
                                    <div className="glass rounded-2xl p-6 shadow-elevated">
                                        <h3 className="text-h4 font-serif font-bold text-midnight mb-4">
                                            {dict.home.quick_request.title}
                                        </h3>
                                        <ContactForm labels={formLabels} variant="compact" />
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════
                    PARTNER STRIP
                   ═══════════════════════════════════ */}
                <section className="py-8 bg-white border-b border-cream-dark/50">
                    <div className="container mx-auto px-4">
                        <p className="text-center text-small text-gray-400 uppercase tracking-widest mb-6">
                            {dict.home.partners.title}
                        </p>
                        <div className="flex justify-center items-center gap-10 md:gap-16 flex-wrap opacity-30">
                            {['Partner A', 'Partner B', 'Partner C', 'Partner D', 'Partner E'].map(name => (
                                <div key={name} className="w-24 h-8 bg-gray-300 rounded flex items-center justify-center text-[10px] text-gray-500 font-medium">
                                    {name}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════
                    USP SECTION
                   ═══════════════════════════════════ */}
                <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }} className="bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            {[
                                { icon: '✈️', data: dict.home.usps.incoming },
                                { icon: '🤝', data: dict.home.usps.local },
                                { icon: '📞', data: dict.home.usps.assistance },
                            ].map((usp, i) => (
                                <FadeIn key={i} delay={i * 150}>
                                    <div className="card p-8 h-full">
                                        <div className="w-16 h-16 bg-gradient-to-br from-peach/40 to-soft-coral/20 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl">
                                            {usp.icon}
                                        </div>
                                        <h3 className="text-h4 font-serif font-bold text-midnight mb-3">
                                            {usp.data.title}
                                        </h3>
                                        <p className="text-body text-gray-500 leading-relaxed">
                                            {usp.data.desc}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════
                    FEATURED DESTINATIONS
                   ═══════════════════════════════════ */}
                <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }} className="bg-cream">
                    <div className="container mx-auto px-4">
                        <FadeIn>
                            <div className="text-center mb-14">
                                <h2 className="text-h2 font-serif font-bold text-midnight mb-4">
                                    {dict.home.destinations.title}
                                </h2>
                                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                                    {dict.home.destinations.subtitle}
                                </p>
                                <div className="section-divider" />
                            </div>
                        </FadeIn>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sortedDestinations.map((dest, i) => (
                                <FadeIn key={dest.slug} delay={i * 100}>
                                    <DestinationCard
                                        destination={dest}
                                        lang={locale}
                                        discoverLabel={dict.destinations.discover}
                                    />
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════
                    INCOMING SERVICES
                   ═══════════════════════════════════ */}
                <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }} className="bg-white">
                    <div className="container mx-auto px-4">
                        <FadeIn>
                            <div className="text-center mb-14">
                                <h2 className="text-h2 font-serif font-bold text-midnight">
                                    {dict.home.services.title}
                                </h2>
                                <div className="section-divider" />
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                            {[
                                { icon: '🚐', key: 'transfer' },
                                { icon: '🏨', key: 'hotel' },
                                { icon: '🗺️', key: 'tours' },
                                { icon: '🧖‍♀️', key: 'thermal' },
                                { icon: '🍷', key: 'dinner' },
                            ].map((service, i) => (
                                <FadeIn key={service.key} delay={i * 80}>
                                    <div className="card p-6 text-center hover:bg-cream/40 group cursor-default">
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <h4 className="font-bold text-midnight text-small">
                                            {dict.home.services.items[service.key as keyof typeof dict.home.services.items]}
                                        </h4>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════
                    HOW IT WORKS
                   ═══════════════════════════════════ */}
                <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }} className="bg-cream">
                    <div className="container mx-auto px-4">
                        <FadeIn>
                            <div className="text-center mb-14">
                                <h2 className="text-h2 font-serif font-bold text-midnight">
                                    {dict.home.how_it_works.title}
                                </h2>
                                <div className="section-divider" />
                            </div>
                        </FadeIn>

                        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-6 max-w-4xl mx-auto relative">
                            {/* Connecting line (desktop only) */}
                            <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-peach via-soft-coral to-sea-blue" />

                            {[1, 2, 3].map((step, i) => (
                                <FadeIn key={step} delay={i * 200} className="flex flex-col items-center text-center flex-1 relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-sea-blue to-sea-blue-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg ring-4 ring-cream">
                                        {step}
                                    </div>
                                    <p className="text-body font-medium text-gray-700 max-w-xs">
                                        {dict.home.how_it_works[`step${step}` as keyof typeof dict.home.how_it_works]}
                                    </p>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════
                    TESTIMONIALS
                   ═══════════════════════════════════ */}
                <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }} className="bg-white">
                    <div className="container mx-auto px-4">
                        <FadeIn>
                            <div className="text-center mb-14">
                                <h2 className="text-h2 font-serif font-bold text-midnight">
                                    {dict.home.testimonials.title}
                                </h2>
                                <div className="section-divider" />
                            </div>
                        </FadeIn>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                { review: dict.home.testimonials.review1, author: dict.home.testimonials.author1 },
                                { review: dict.home.testimonials.review2, author: dict.home.testimonials.author2 },
                            ].map((t, i) => (
                                <FadeIn key={i} delay={i * 150}>
                                    <div className="card p-8 relative">
                                        {/* Quote mark */}
                                        <div className="absolute top-4 left-6 text-6xl text-peach/30 font-serif leading-none select-none">
                                            &ldquo;
                                        </div>

                                        {/* Stars */}
                                        <div className="flex gap-1 mb-4 text-soft-coral">
                                            {[...Array(5)].map((_, j) => (
                                                <svg key={j} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Review text */}
                                        <p className="text-gray-600 italic text-lg font-serif leading-relaxed mb-6 relative z-10">
                                            {t.review}
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-peach to-soft-coral flex items-center justify-center text-white font-bold text-small">
                                                {t.author.charAt(0)}
                                            </div>
                                            <span className="font-bold text-sea-blue-dark text-small">
                                                {t.author}
                                            </span>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════
                    FAQ
                   ═══════════════════════════════════ */}
                <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }} className="bg-cream">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <FadeIn>
                            <div className="text-center mb-14">
                                <h2 className="text-h2 font-serif font-bold text-midnight">
                                    {dict.home.faq.title}
                                </h2>
                                <div className="section-divider" />
                            </div>
                        </FadeIn>

                        <div className="space-y-4">
                            {[1, 2, 3].map((q, i) => (
                                <FadeIn key={q} delay={i * 100}>
                                    <details className="faq-item card">
                                        <summary className="p-6 font-bold text-midnight text-body cursor-pointer">
                                            {dict.home.faq[`q${q}` as keyof typeof dict.home.faq]}
                                        </summary>
                                        <div className="faq-answer px-6 pb-6 text-gray-600">
                                            {dict.home.faq[`a${q}` as keyof typeof dict.home.faq]}
                                        </div>
                                    </details>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════
                    FINAL CTA & CONTACT FORM
                   ═══════════════════════════════════ */}
                <section id="contact-form" className="relative overflow-hidden" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-sea-blue via-sea-blue-dark to-midnight" />
                    <div className="relative z-10 container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
                            <div className="lg:w-1/2 text-center lg:text-left text-white">
                                <FadeIn>
                                    <h2 className="text-h2 font-serif font-bold mb-6">
                                        {dict.home.cta_final.title}
                                    </h2>
                                    <p className="text-xl text-white/80 mb-8 leading-relaxed">
                                        {dict.home.cta_final.subtitle}
                                    </p>
                                    <Link
                                        href="https://wa.me/390811234567"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-[#25D366] text-white py-3 px-6 rounded-full font-bold hover:bg-[#20BD5A] transition-all hover:scale-105 shadow-lg"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                                        </svg>
                                        {dict.home.hero.cta_whatsapp}
                                    </Link>
                                </FadeIn>
                            </div>

                            <div className="lg:w-1/2 w-full">
                                <FadeIn delay={200}>
                                    <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-elevated">
                                        <h3 className="text-h4 font-serif font-bold text-midnight mb-5">
                                            {dict.contact?.form_title || dict.home.cta_final.button}
                                        </h3>
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
