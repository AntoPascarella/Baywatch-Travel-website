import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale, i18n } from '@/i18n-config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FadeIn from '@/components/FadeIn';
import DestinationCard from '@/components/DestinationCard';
import { destinations } from '@/data/destinations';
import { destinationContent } from '@/data/destination-content';
import { destinationGallery, type GalleryImage } from '@/data/destination-gallery';

export async function generateStaticParams() {
    const params: { locale: Locale; slug: string }[] = [];
    for (const locale of i18n.locales) {
        for (const d of destinations) {
            params.push({ locale, slug: d.slug });
        }
    }
    return params;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const dest = destinations.find((d) => d.slug === slug);
    if (!dest) return {};
    const content = destinationContent[slug];
    return {
        title: `${dest.name} | Baywatch Travel`,
        description: content?.heroSubtitle ?? dest.shortDescription,
        openGraph: {
            title: `${dest.name}. Baywatch Travel`,
            description: content?.heroSubtitle ?? dest.shortDescription,
            images: [{ url: dest.image }],
        },
    };
}

const eyebrowStyle: React.CSSProperties = {
    fontFamily: 'var(--font-futura)',
    fontSize: '0.6875rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.32em',
};

export default async function DestinationDetailPage({
    params,
}: {
    params: Promise<{ locale: Locale; slug: string }>;
}) {
    const { locale, slug } = await params;
    const dest = destinations.find((d) => d.slug === slug);
    if (!dest) notFound();

    const content = destinationContent[slug];
    if (!content) notFound();

    const dict = await getDictionary(locale);
    const altText = dest.alt[locale] || dest.name;

    const otherDestinations = destinations.filter((d) => d.slug !== slug).slice(0, 3);
    const descriptions = (dict.destinations.descriptions ?? {}) as Record<string, string>;

    const gallery: GalleryImage[] = destinationGallery[slug] ?? [];
    const fallback: GalleryImage = { src: dest.image, alt: altText };
    const g = (i: number): GalleryImage => gallery[i] ?? fallback;
    const heroImg = g(0);
    const breakImg = g(1);
    const gridImages: GalleryImage[] = gallery.slice(2, 10);
    const showGrid = gridImages.length >= 4;

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header dict={dict} lang={locale} />

            <main className="flex-1">
                {/* ── HERO ── */}
                <section className="relative overflow-hidden">
                    <div className="relative w-full" style={{ minHeight: '85vh' }}>
                        <Image
                            src={heroImg.src}
                            alt={heroImg.alt || altText}
                            fill
                            priority
                            className="object-cover"
                            sizes="100vw"
                            style={heroImg.focus ? { objectPosition: heroImg.focus } : undefined}
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    'linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.65) 100%)',
                            }}
                        />
                        <div
                            className="relative container mx-auto px-4 flex items-end"
                            style={{ minHeight: '85vh' }}
                        >
                            <div className="max-w-3xl pb-20 md:pb-28">
                                <FadeIn>
                                    <p className="text-white/85 mb-5" style={eyebrowStyle}>
                                        {content.eyebrow}
                                    </p>
                                </FadeIn>
                                <FadeIn delay={120}>
                                    <h1
                                        className="font-serif text-white leading-[1.02] mb-6"
                                        style={{
                                            fontSize: 'clamp(3rem, 7vw, 6rem)',
                                            fontWeight: 400,
                                            letterSpacing: '0.005em',
                                        }}
                                    >
                                        {dest.name}
                                    </h1>
                                </FadeIn>
                                <FadeIn delay={220}>
                                    <p
                                        className="text-white/90 max-w-xl"
                                        style={{
                                            fontFamily: 'var(--font-cormorant)',
                                            fontStyle: 'italic',
                                            fontSize: 'clamp(1.25rem, 1.8vw, 1.625rem)',
                                            lineHeight: 1.45,
                                            fontWeight: 300,
                                        }}
                                    >
                                        {content.heroSubtitle}
                                    </p>
                                </FadeIn>
                                <FadeIn delay={320}>
                                    <div
                                        className="mt-10"
                                        style={{
                                            width: '3rem',
                                            height: '1px',
                                            background: 'rgba(255,255,255,0.55)',
                                        }}
                                    />
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── BREADCRUMB ── */}
                <nav
                    aria-label="Breadcrumb"
                    className="border-b border-black/[0.08]"
                    style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}
                >
                    <div className="container mx-auto px-4">
                        <ol
                            className="flex items-center gap-2 text-midnight/65"
                            style={{
                                fontFamily: 'var(--font-futura)',
                                fontSize: '0.6875rem',
                                letterSpacing: '0.22em',
                                textTransform: 'uppercase',
                            }}
                        >
                            <li>
                                <Link href={`/${locale}`} className="hover:text-midnight transition">
                                    Home
                                </Link>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li>
                                <Link href={`/${locale}/destinazioni`} className="hover:text-midnight transition">
                                    Destinazioni
                                </Link>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li className="text-midnight">{dest.name}</li>
                        </ol>
                    </div>
                </nav>

                {/* ── INTRO + KEY FACTS ── */}
                <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 max-w-6xl mx-auto">
                            <div className="lg:col-span-7">
                                <FadeIn>
                                    <p className="text-midnight/55 mb-6" style={eyebrowStyle}>
                                        Panoramica
                                    </p>
                                </FadeIn>
                                <FadeIn delay={100}>
                                    <h2
                                        className="font-serif text-midnight leading-[1.1] mb-8"
                                        style={{
                                            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                                            fontWeight: 400,
                                        }}
                                    >
                                        {dest.subTitle}
                                    </h2>
                                </FadeIn>
                                {content.intro.map((para, i) => (
                                    <FadeIn key={i} delay={150 + i * 60}>
                                        <p
                                            className="text-midnight/80 mb-5"
                                            style={{
                                                fontFamily: 'var(--font-inter)',
                                                fontSize: '1.0625rem',
                                                lineHeight: 1.75,
                                            }}
                                        >
                                            {para}
                                        </p>
                                    </FadeIn>
                                ))}
                            </div>

                            <aside className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-black/[0.08]">
                                <FadeIn delay={200}>
                                    <p className="text-midnight/55 mb-6" style={eyebrowStyle}>
                                        In sintesi
                                    </p>
                                </FadeIn>
                                <dl className="space-y-5">
                                    <FactRow label="Regione" value={dest.region} />
                                    <FactRow label="Stagione consigliata" value={dest.bestSeason} />
                                    <FactRow label="Ideale per" value={content.characteristics.idealePer.join(' · ')} />
                                    <FactRow label="Vibe" value={content.characteristics.vibe} />
                                </dl>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* ── CHARACTERISTICS ── */}
                <section
                    className="bg-[#FBFAF7]"
                    style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <FadeIn>
                                <p className="text-midnight/55 mb-4 text-center" style={eyebrowStyle}>
                                    Carattere del luogo
                                </p>
                            </FadeIn>
                            <FadeIn delay={100}>
                                <h2
                                    className="font-serif text-midnight text-center leading-[1.1] mb-16"
                                    style={{
                                        fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                                        fontWeight: 400,
                                    }}
                                >
                                    Cosa aspettarsi
                                </h2>
                            </FadeIn>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                                <CharRow label="Paesaggio" value={content.characteristics.paesaggio} />
                                <CharRow label="Mare e coste" value={content.characteristics.mare} />
                                <CharRow label="Borghi e città" value={content.characteristics.borghi} />
                                <CharRow label="Stagionalità" value={content.characteristics.stagionalita} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── LOCATION ── */}
                <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
                            <div className="lg:col-span-5">
                                <FadeIn>
                                    <p className="text-midnight/55 mb-4" style={eyebrowStyle}>
                                        Dove si trova
                                    </p>
                                </FadeIn>
                                <FadeIn delay={100}>
                                    <h2
                                        className="font-serif text-midnight leading-[1.1] mb-6"
                                        style={{
                                            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                                            fontWeight: 400,
                                        }}
                                    >
                                        Posizione & arrivo
                                    </h2>
                                </FadeIn>
                            </div>
                            <div className="lg:col-span-7 space-y-6">
                                <FactBlock label="Dove" value={content.location.dove} />
                                <FactBlock label="Area" value={content.location.area} />
                                <FactBlock label="Come arrivare" value={content.location.comeArrivare} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── FULL-BLEED IMAGE BREAK ── */}
                <section className="relative w-full" style={{ height: 'clamp(28rem, 65vh, 42rem)' }}>
                    <Image
                        src={breakImg.src}
                        alt={breakImg.alt}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        style={breakImg.focus ? { objectPosition: breakImg.focus } : undefined}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                'linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.45) 100%)',
                        }}
                    />
                    {breakImg.caption ? (
                        <div className="absolute bottom-0 inset-x-0 px-6 pb-10 md:pb-14">
                            <div className="container mx-auto">
                                <p
                                    className="text-white/95 max-w-2xl"
                                    style={{
                                        fontFamily: 'var(--font-cormorant)',
                                        fontStyle: 'italic',
                                        fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                                        lineHeight: 1.4,
                                        fontWeight: 300,
                                        textShadow: '0 1px 8px rgba(0,0,0,0.30)',
                                    }}
                                >
                                    {breakImg.caption}
                                </p>
                            </div>
                        </div>
                    ) : null}
                </section>

                {/* ── FUN FACTS ── */}
                <section
                    className="bg-[#FBFAF7]"
                    style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <FadeIn>
                                <p className="text-midnight/55 mb-4 text-center" style={eyebrowStyle}>
                                    Curiosità
                                </p>
                            </FadeIn>
                            <FadeIn delay={100}>
                                <h2
                                    className="font-serif text-midnight text-center leading-[1.1] mb-14"
                                    style={{
                                        fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                                        fontWeight: 400,
                                    }}
                                >
                                    Lo sapevi che…
                                </h2>
                            </FadeIn>
                            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                                {content.funFacts.map((f, i) => (
                                    <FadeIn key={i} delay={100 + i * 50}>
                                        <li className="flex gap-5">
                                            <span
                                                className="font-serif text-midnight/40 leading-none shrink-0"
                                                style={{ fontSize: '2rem', fontWeight: 400, lineHeight: 1 }}
                                            >
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <p
                                                className="text-midnight/80"
                                                style={{
                                                    fontFamily: 'var(--font-inter)',
                                                    fontSize: '1rem',
                                                    lineHeight: 1.7,
                                                }}
                                            >
                                                {f}
                                            </p>
                                        </li>
                                    </FadeIn>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ── ITINERARIES ── */}
                <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <FadeIn>
                                <p className="text-midnight/55 mb-4 text-center" style={eyebrowStyle}>
                                    Itinerari
                                </p>
                            </FadeIn>
                            <FadeIn delay={100}>
                                <h2
                                    className="font-serif text-midnight text-center leading-[1.1] mb-14"
                                    style={{
                                        fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                                        fontWeight: 400,
                                    }}
                                >
                                    Come la puoi vivere
                                </h2>
                            </FadeIn>
                            <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
                                {content.itineraries.map((it, i) => (
                                    <FadeIn key={it.title} delay={100 + i * 60}>
                                        <article className="border-t border-black/[0.12] pt-8">
                                            <p className="text-midnight/55 mb-2" style={eyebrowStyle}>
                                                {it.duration}
                                            </p>
                                            <h3
                                                className="font-serif text-midnight mb-5"
                                                style={{
                                                    fontSize: '1.625rem',
                                                    fontWeight: 400,
                                                    lineHeight: 1.2,
                                                }}
                                            >
                                                {it.title}
                                            </h3>
                                            <ol className="space-y-3">
                                                {it.steps.map((s, j) => (
                                                    <li
                                                        key={j}
                                                        className="flex gap-4 text-midnight/80"
                                                        style={{
                                                            fontFamily: 'var(--font-inter)',
                                                            fontSize: '0.9375rem',
                                                            lineHeight: 1.7,
                                                        }}
                                                    >
                                                        <span className="text-midnight/35 shrink-0">{j + 1}.</span>
                                                        <span>{s}</span>
                                                    </li>
                                                ))}
                                            </ol>
                                        </article>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── MUST SEE ── */}
                <section
                    className="bg-[#FBFAF7]"
                    style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <FadeIn>
                                <p className="text-midnight/55 mb-4 text-center" style={eyebrowStyle}>
                                    Cosa non perdere
                                </p>
                            </FadeIn>
                            <FadeIn delay={100}>
                                <h2
                                    className="font-serif text-midnight text-center leading-[1.1] mb-14"
                                    style={{
                                        fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                                        fontWeight: 400,
                                    }}
                                >
                                    I luoghi e le esperienze
                                </h2>
                            </FadeIn>
                            <ul className="divide-y divide-black/[0.10]">
                                {content.mustSee.map((m, i) => (
                                    <FadeIn key={m.title} delay={80 + i * 40}>
                                        <li className="grid md:grid-cols-12 gap-6 py-7">
                                            <div className="md:col-span-1 text-midnight/40 font-serif" style={{ fontSize: '1.125rem' }}>
                                                {String(i + 1).padStart(2, '0')}
                                            </div>
                                            <h3
                                                className="md:col-span-4 font-serif text-midnight"
                                                style={{
                                                    fontSize: '1.375rem',
                                                    fontWeight: 400,
                                                    lineHeight: 1.25,
                                                }}
                                            >
                                                {m.title}
                                            </h3>
                                            <p
                                                className="md:col-span-7 text-midnight/75"
                                                style={{
                                                    fontFamily: 'var(--font-inter)',
                                                    fontSize: '0.9375rem',
                                                    lineHeight: 1.7,
                                                }}
                                            >
                                                {m.note}
                                            </p>
                                        </li>
                                    </FadeIn>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ── EDITORIAL GALLERY GRID. 2 rows × 4 columns, near full-width ── */}
                {showGrid ? (
                    <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                        <div className="px-4 sm:px-6 lg:px-10 xl:px-14">
                            <div className="text-center mb-12 lg:mb-16">
                                <FadeIn>
                                    <p className="text-midnight/55 mb-4" style={eyebrowStyle}>
                                        Un assaggio per gli occhi
                                    </p>
                                </FadeIn>
                                <FadeIn delay={100}>
                                    <h2
                                        className="font-serif text-midnight leading-[1.1]"
                                        style={{
                                            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                                            fontWeight: 400,
                                        }}
                                    >
                                        {dest.name} in immagini
                                    </h2>
                                </FadeIn>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                                {gridImages.slice(0, 8).map((img, i) => (
                                    <FadeIn key={`${img.src}-${i}`} delay={Math.min(i, 4) * 50}>
                                        <figure className="relative w-full overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                fill
                                                loading="lazy"
                                                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                                style={img.focus ? { objectPosition: img.focus } : undefined}
                                            />
                                        </figure>
                                    </FadeIn>
                                ))}
                            </div>

                            {gridImages.some((m) => m.credit) ? (
                                <p
                                    className="mt-8 text-midnight/45 text-center"
                                    style={{
                                        fontFamily: 'var(--font-inter)',
                                        fontSize: '0.7rem',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    Foto: Pexels. {Array.from(new Set(
                                        gridImages
                                            .map((m) => m.credit)
                                            .filter((c): c is string => Boolean(c))
                                            .map((c) => c.replace(/^Foto:\s*/, '').replace(/\s*\/\s*Pexels$/i, ''))
                                    )).join(' · ')}
                                </p>
                            ) : null}
                        </div>
                    </section>
                ) : null}

                {/* ── HIGHLIGHTS chips (from data) ── */}
                {dest.highlights?.length ? (
                    <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                        <div className="container mx-auto px-4">
                            <div className="max-w-5xl mx-auto text-center">
                                <FadeIn>
                                    <p className="text-midnight/55 mb-4" style={eyebrowStyle}>
                                        Highlights
                                    </p>
                                </FadeIn>
                                <FadeIn delay={100}>
                                    <h2
                                        className="font-serif text-midnight leading-[1.1] mb-10"
                                        style={{
                                            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                                            fontWeight: 400,
                                        }}
                                    >
                                        Le icone di {dest.name}
                                    </h2>
                                </FadeIn>
                                <FadeIn delay={150}>
                                    <ul className="flex flex-wrap justify-center gap-x-3 gap-y-4">
                                        {dest.highlights.map((h) => (
                                            <li
                                                key={h}
                                                className="border border-black/15 px-5 py-2 text-midnight/85"
                                                style={{
                                                    fontFamily: 'var(--font-inter)',
                                                    fontSize: '0.875rem',
                                                    letterSpacing: '0.02em',
                                                }}
                                            >
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </FadeIn>
                            </div>
                        </div>
                    </section>
                ) : null}

                {/* ── PRACTICAL TIPS ── */}
                <section
                    className="bg-[#FBFAF7]"
                    style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <FadeIn>
                                <p className="text-midnight/55 mb-4 text-center" style={eyebrowStyle}>
                                    Consigli pratici
                                </p>
                            </FadeIn>
                            <FadeIn delay={100}>
                                <h2
                                    className="font-serif text-midnight text-center leading-[1.1] mb-14"
                                    style={{
                                        fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                                        fontWeight: 400,
                                    }}
                                >
                                    Prima di partire
                                </h2>
                            </FadeIn>
                            <div className="grid md:grid-cols-3 gap-x-10 gap-y-10">
                                <TipCard label="Periodo migliore" value={content.tips.periodo} />
                                <TipCard label="Tempo ideale" value={content.tips.durata} />
                                <TipCard label="Buono a sapersi" value={content.tips.note} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── FINAL CTA ── */}
                <section
                    className="relative overflow-hidden"
                    style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
                >
                    <div className="absolute inset-0 -z-10">
                        <Image
                            src={breakImg.src}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="100vw"
                            style={breakImg.focus ? { objectPosition: breakImg.focus } : undefined}
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 100%)',
                            }}
                        />
                    </div>
                    <div className="container mx-auto px-4 text-center text-white">
                        <FadeIn>
                            <p className="text-white/80 mb-4" style={eyebrowStyle}>
                                Pronto a partire
                            </p>
                        </FadeIn>
                        <FadeIn delay={100}>
                            <h2
                                className="font-serif leading-[1.05] mb-6 max-w-2xl mx-auto"
                                style={{
                                    fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                                    fontWeight: 400,
                                }}
                            >
                                Costruiamo insieme il tuo viaggio a {dest.name}.
                            </h2>
                        </FadeIn>
                        <FadeIn delay={180}>
                            <p
                                className="text-white/85 max-w-xl mx-auto mb-10"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontSize: '1.0625rem',
                                    lineHeight: 1.7,
                                }}
                            >
                                Itinerario su misura, transfer, hotel selezionati ed esperienze locali.
                                Raccontaci cosa vorresti vivere: pensiamo a tutto noi.
                            </p>
                        </FadeIn>
                        <FadeIn delay={260}>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href={`/${locale}/chi-siamo-contatti`}
                                    className="bay-btn bay-btn-light px-8 py-3 text-xs"
                                >
                                    Richiedi informazioni
                                </Link>
                                <Link
                                    href={`/${locale}/destinazioni`}
                                    className="bay-btn bay-btn-light px-8 py-3 text-xs"
                                >
                                    Tutte le destinazioni
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* ── OTHER DESTINATIONS ── */}
                <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <FadeIn>
                                <p className="text-midnight/55 mb-4 text-center" style={eyebrowStyle}>
                                    Continua a esplorare
                                </p>
                            </FadeIn>
                            <FadeIn delay={100}>
                                <h2
                                    className="font-serif text-midnight text-center leading-[1.1] mb-14"
                                    style={{
                                        fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                                        fontWeight: 400,
                                    }}
                                >
                                    Altre destinazioni
                                </h2>
                            </FadeIn>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 lg:gap-x-5">
                                {otherDestinations.map((d, i) => (
                                    <FadeIn key={d.slug} delay={i * 60}>
                                        <DestinationCard
                                            destination={d}
                                            lang={locale}
                                            discoverLabel={dict.destinations.discover}
                                            description={descriptions[d.slug] ?? d.shortDescription}
                                        />
                                    </FadeIn>
                                ))}
                            </div>
                            <div className="text-center mt-14">
                                <Link
                                    href={`/${locale}/destinazioni`}
                                    className="bay-btn bay-btn-dark px-8 py-3 text-xs"
                                >
                                    Vedi tutte
                                </Link>
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

function FactRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col gap-1">
            <dt className="text-midnight/55" style={eyebrowStyle}>
                {label}
            </dt>
            <dd
                className="text-midnight/85"
                style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                }}
            >
                {value}
            </dd>
        </div>
    );
}

function CharRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="border-t border-black/[0.12] pt-6">
            <p className="text-midnight/55 mb-3" style={eyebrowStyle}>
                {label}
            </p>
            <p
                className="text-midnight/85"
                style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '1.0625rem',
                    lineHeight: 1.7,
                }}
            >
                {value}
            </p>
        </div>
    );
}

function FactBlock({ label, value }: { label: string; value: string }) {
    return (
        <div className="border-l-2 border-black/15 pl-6">
            <p className="text-midnight/55 mb-2" style={eyebrowStyle}>
                {label}
            </p>
            <p
                className="text-midnight/85"
                style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '1.0625rem',
                    lineHeight: 1.7,
                }}
            >
                {value}
            </p>
        </div>
    );
}

function TipCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="text-center">
            <p className="text-midnight/55 mb-3" style={eyebrowStyle}>
                {label}
            </p>
            <p
                className="text-midnight/85 max-w-sm mx-auto"
                style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                }}
            >
                {value}
            </p>
        </div>
    );
}
