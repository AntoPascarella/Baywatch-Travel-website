import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/i18n-config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FadeIn from '@/components/FadeIn';
import PartnersSection from '@/components/PartnersSection';
import DestinationCard from '@/components/DestinationCard';
import VideoTextSection from '@/components/VideoTextSection';
import ServicesSection from '@/components/ServicesSection';
import ServizioSection from '@/components/ServizioSection';
import ReviewSection from '@/components/ReviewSection';
import PlanTripSection from '@/components/PlanTripSection';
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

    const featuredSlugs = ['ischia', 'capri', 'procida', 'amalfi', 'positano', 'roma'];
    const sortedDestinations = featuredSlugs
        .map(slug => destinations.find(d => d.slug === slug))
        .filter(Boolean) as typeof destinations;

    return (
        <div className="min-h-screen flex flex-col bg-white font-sans">
            <Header dict={dict} lang={locale} />

            <main className="flex-1">
                {/* ═══════════════════════════════════
                    HERO SECTION. Full-screen
                   ═══════════════════════════════════ */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    {/* Background image */}
                    <Image
                        src="/images/hero/Spiaggia_dei_Pescatori.jpg"
                        alt="Panorama di Ischia"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <FadeIn>
                            <h1 className="text-display font-cormorant text-white font-light leading-[1.05] mb-6 max-w-4xl mx-auto tracking-widest drop-shadow-sm">
                                {dict.home.hero.headline}
                            </h1>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <p className="text-lg md:text-xl font-futura text-white/80 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                                {dict.home.hero.subheadline}
                            </p>
                        </FadeIn>
                        <FadeIn delay={400}>
                            <Link href={`/${locale}/destinazioni`} className="btn btn-outline-white">
                                {dict.home.hero.cta_quote}
                            </Link>
                        </FadeIn>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                        <div className="w-px h-12 bg-white/30" />
                    </div>
                </section>

                {/* ═══════════════════════════════════
                    VIDEO + TEXT SECTION
                   ═══════════════════════════════════ */}
                <VideoTextSection
                    title={dict.home.video_section.title}
                    body={dict.home.video_section.body}
                />

                {/* ═══════════════════════════════════
                    DESTINATIONS. "Scegli la tua destinazione"
                   ═══════════════════════════════════ */}
                <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }} className="bg-white">
                    <div className="container mx-auto px-4">
                        <FadeIn>
                            <div className="text-center mb-16">
                                <h2
                                    className="text-black mb-3"
                                    style={{
                                        fontFamily: 'var(--font-futura)',
                                        fontSize: 'clamp(0.6875rem, 1.4vw, 0.875rem)',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.28em',
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {dict.home.destinations.title}
                                </h2>
                            </div>
                        </FadeIn>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 lg:gap-x-5 lg:gap-y-14">
                            {sortedDestinations.map((dest, i) => (
                                <FadeIn key={dest.slug} delay={i * 80}>
                                    <DestinationCard
                                        destination={dest}
                                        lang={locale}
                                        discoverLabel={dict.destinations.discover}
                                        description={(dict.destinations.descriptions as Record<string, string>)[dest.slug]}
                                    />
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════
                    SERVIZI. Editorial 4-service section
                   ═══════════════════════════════════ */}
                <div className="border-t border-black/5">
                    <ServizioSection />
                </div>

                {/* ═══════════════════════════════════
                    CHI SIAMO / ABOUT SPLIT
                   ═══════════════════════════════════ */}
                <div className="border-t border-black/5">
                    <ServicesSection
                        title={dict.home.services_about.title}
                        body={dict.home.services_about.body}
                        imageAlt={dict.home.services_about.image_alt}
                    />
                </div>

                {/* ═══════════════════════════════════
                    REVIEW. Full-width
                   ═══════════════════════════════════ */}
                <ReviewSection
                    quote={dict.home.review.quote}
                    author={dict.home.review.author}
                    buttonLabel={dict.home.review.button}
                    buttonHref="#"
                />

                {/* ═══════════════════════════════════
                    PLAN YOUR TRIP
                   ═══════════════════════════════════ */}
                <div className="border-t border-black/5">
                    <PlanTripSection
                        title={dict.home.plan_trip.title}
                        body={dict.home.plan_trip.body}
                    />
                </div>

                {/* ═══════════════════════════════════
                    PARTNERS MARQUEE
                   ═══════════════════════════════════ */}
                <div className="border-t border-black/5">
                    <PartnersSection title={dict.home.partners.title} />
                </div>
            </main>

            <Footer dict={dict} lang={locale} />
            <WhatsAppButton />
        </div>
    );
}
