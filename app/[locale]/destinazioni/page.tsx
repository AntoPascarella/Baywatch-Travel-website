import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/i18n-config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FadeIn from '@/components/FadeIn';
import DestinationCard from '@/components/DestinationCard';
import { destinations } from '@/data/destinations';

export const metadata = {
    title: 'Destinations | Baywatch Travel',
    description: 'Explore our curated destinations in Southern Italy.',
};

export default async function DestinationsPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <div className="min-h-screen flex flex-col bg-cream">
            <Header dict={dict} lang={locale} />

            <main className="flex-1">
                {/* Page Hero */}
                <section className="relative overflow-hidden" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-midnight via-sea-blue-dark to-sea-blue" />
                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-peach/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-soft-coral/10 rounded-full blur-3xl" />

                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <FadeIn>
                            <h1 className="text-h1 font-serif font-bold text-white mb-6 drop-shadow-lg">
                                {dict.destinations.hero_title}
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                                {dict.destinations.hero_subtitle}
                            </p>
                            <div className="section-divider !bg-gradient-to-r !from-peach !to-white/50 mt-6" />
                        </FadeIn>
                    </div>
                </section>

                {/* Destinations Grid */}
                <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {destinations.map((dest, i) => (
                                <FadeIn key={dest.slug} delay={i * 60}>
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
            </main>

            <Footer dict={dict} lang={locale} />
            <WhatsAppButton />
        </div>
    );
}
