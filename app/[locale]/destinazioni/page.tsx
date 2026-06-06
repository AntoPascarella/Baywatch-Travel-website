import Image from 'next/image';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/i18n-config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FadeIn from '@/components/FadeIn';
import DestinationCard from '@/components/DestinationCard';
import { destinations } from '@/data/destinations';

export const metadata = {
    title: 'Destinazioni | Baywatch Travel',
    description:
        'Le nostre destinazioni in Italia: Ischia, Capri, Costiera Amalfitana, Roma, Toscana e molto altro.',
};

export default async function DestinationsPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const descriptions = dict.destinations.descriptions as Record<string, string>;

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header dict={dict} lang={locale} />

            <main className="flex-1">
                {/* ═══════════════════════════════════
                    HERO. Italy photo background
                   ═══════════════════════════════════ */}
                <section className="relative overflow-hidden">
                    <div className="relative w-full" style={{ minHeight: '70vh' }}>
                        <Image
                            src="/images/hero/Italia_Destinazioni.jpg"
                            alt="Costiera italiana. Positano al tramonto"
                            fill
                            priority
                            className="object-cover"
                            sizes="100vw"
                        />
                        {/* Readability overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.55) 100%)',
                            }}
                        />

                        <div className="relative container mx-auto px-4 flex items-center justify-center" style={{ minHeight: '70vh' }}>
                            <div className="text-center max-w-3xl py-24">
                                <FadeIn>
                                    <p
                                        className="text-white/85 mb-6"
                                        style={{
                                            fontFamily: 'var(--font-futura)',
                                            fontSize: 'clamp(0.6875rem, 1.4vw, 0.8125rem)',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.32em',
                                        }}
                                    >
                                        {dict.destinations.hero_eyebrow}
                                    </p>
                                </FadeIn>
                                <FadeIn delay={120}>
                                    <h1
                                        className="font-serif text-white leading-[1.05] mb-6 drop-shadow-sm"
                                        style={{
                                            fontSize: 'clamp(2.75rem, 6vw, 5rem)',
                                            fontWeight: 400,
                                        }}
                                    >
                                        {dict.destinations.hero_title}
                                    </h1>
                                </FadeIn>
                                <FadeIn delay={220}>
                                    <p
                                        className="text-white/85 max-w-xl mx-auto"
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                            fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {dict.destinations.hero_subtitle}
                                    </p>
                                </FadeIn>
                                <FadeIn delay={320}>
                                    <div
                                        className="mt-10 mx-auto"
                                        style={{
                                            width: '3rem',
                                            height: '1px',
                                            background: 'rgba(255,255,255,0.5)',
                                        }}
                                    />
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════
                    DESTINATIONS GRID
                   ═══════════════════════════════════ */}
                <section
                    className="bg-white"
                    style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
                >
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 lg:gap-x-5 lg:gap-y-14 max-w-7xl mx-auto">
                            {destinations.map((dest, i) => (
                                <FadeIn key={dest.slug} delay={i * 50}>
                                    <DestinationCard
                                        destination={dest}
                                        lang={locale}
                                        discoverLabel={dict.destinations.discover}
                                        description={descriptions[dest.slug] ?? dest.shortDescription}
                                    />
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer dict={dict} lang={locale} />
            <WhatsAppButton />
        </div>
    );
}
