import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/i18n-config';
import type { Dictionary } from '@/lib/i18n/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FadeIn from '@/components/FadeIn';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    return {
        title: dict.services_page.meta_title,
        description: dict.services_page.meta_description,
    };
}

const px = (id: number, w = 2000) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const HERO = px(37270135, 2400); // Ischia soleggiata, Heinz Klier / Pexels

type Copy = Dictionary['services_page'];

// Testi del servizio, dal dizionario (services_page.services).
type ServiceCopy = {
    index_label: string;
    eyebrow?: string;
    title: string;
    body?: string[];
    // Ogni elemento di body è un paragrafo; un array annidato diventa un elenco puntato.
    subsections?: { title: string; body: (string | string[])[] }[];
    bullets?: string[];
    image_alt: string;
};

type Service = ServiceCopy & {
    id: string;
    image: string;
    credit: string;
    imageRight: boolean;
};

// Immagini e layout dei servizi, con le stesse chiavi dei testi nel dizionario; `id` è l'ancora in pagina.
const serviceMedia = {
    transfer: { id: 'transfer', image: px(13232525), credit: 'Nati, Pexels', imageRight: true },
    // Soggiorni balneari + soggiorni di gruppo in un unico blocco
    soggiorni: { id: 'soggiorni', image: px(16014522), credit: 'Pexels', imageRight: false },
    // Tour ed esperienze + escursioni in un unico blocco
    escursioni: { id: 'escursioni', image: px(8206930), credit: 'Michele Busce / Pexels', imageRight: true },
    su_misura: { id: 'su-misura', image: px(7634231), credit: 'Marina Zasorina / Pexels', imageRight: false },
} satisfies Record<keyof Copy['services'], Omit<Service, keyof ServiceCopy>>;

function getServices(copy: Copy): Record<keyof Copy['services'], Service> {
    const keys = Object.keys(serviceMedia) as (keyof Copy['services'])[];
    return Object.fromEntries(
        keys.map((key) => [key, { ...(copy.services[key] as ServiceCopy), ...serviceMedia[key] }]),
    ) as Record<keyof Copy['services'], Service>;
}

// Tour packages: destinazioni dove offriamo gite e transfer, non soggiorni
const tourPackageMedia: { slug: keyof Copy['tours']['packages']; image: string }[] = [
    { slug: 'amalfi', image: px(29172648) }, // Rishabh Lakra / Pexels
    { slug: 'positano', image: px(19390872) }, // Lucia Manes / Pexels
    { slug: 'pompei', image: px(35626653) }, // Alex Revilla / Pexels
    { slug: 'sorrento', image: px(9940305) }, // Daniel Eliashevsky / Pexels
];

const eyebrowStyle = {
    fontFamily: 'var(--font-futura)',
    fontSize: '0.6875rem',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.28em',
    lineHeight: 1.2,
};

// Trattino degli elenchi: alto quanto una riga di testo, così resta centrato sulla prima riga.
function ListDash({ width = 14 }: { width?: number }) {
    return (
        <span aria-hidden="true" className="text-midnight/35 shrink-0 flex items-center" style={{ height: '1lh' }}>
            <span style={{ width: `${width}px`, height: '1px', background: 'currentColor' }} />
        </span>
    );
}

function ServiceBlock({ s, locale, copy, photoLabel }: { s: Service; locale: Locale; copy: Copy; photoLabel: string }) {
    return (
        <article
            id={s.id}
            className={`scroll-mt-32 flex flex-col gap-10 lg:gap-20 lg:items-start ${s.imageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
        >
            <div className="w-full lg:w-1/2">
                {s.eyebrow && <p className="text-midnight/45 mb-5" style={eyebrowStyle}>{s.eyebrow}</p>}
                <h2 className="font-serif text-black leading-tight mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.625rem)', fontWeight: 400 }}>
                    {s.title}
                </h2>
                {s.body?.map((para) => (
                    <p key={para} className="text-black/70 mb-8 md:text-justify md:hyphens-auto" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', lineHeight: 1.8 }}>
                        {para}
                    </p>
                ))}
                {s.subsections?.map((sub) => (
                    <div key={sub.title}>
                        <h3 className="font-serif text-black leading-tight mb-4" style={{ fontSize: '1.5rem', fontWeight: 400 }}>
                            {sub.title}
                        </h3>
                        {sub.body.map((para) =>
                            Array.isArray(para) ? (
                                <ul key={para.join('|')} className="space-y-2 mb-8 -mt-4">
                                    {para.map((item) => (
                                        <li key={item} className="flex gap-3 text-black/70" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', lineHeight: 1.8 }}>
                                            <ListDash />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p key={para} className="text-black/70 mb-8 md:text-justify md:hyphens-auto" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', lineHeight: 1.8 }}>
                                    {para}
                                </p>
                            )
                        )}
                    </div>
                ))}
                {s.bullets && (
                <ul className="space-y-3 border-t border-black/[0.10] pt-6">
                    {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-black/80" style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: 1.6 }}>
                            <ListDash />
                            <span>{b}</span>
                        </li>
                    ))}
                </ul>
                )}
                <Link
                    href={`/${locale}/chi-siamo-contatti`}
                    className="inline-block mt-8 pb-1 border-b border-black/30 text-midnight hover:border-midnight transition-colors"
                    style={eyebrowStyle}
                >
                    {copy.request_info}
                </Link>
            </div>
            <div className="w-full lg:w-1/2 order-first lg:order-none lg:sticky lg:top-32">
                <figure className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <Image
                        src={s.image}
                        alt={s.image_alt}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </figure>
                {s.credit && <p className="mt-3 text-midnight/40" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', letterSpacing: '0.06em' }}>{photoLabel}: {s.credit}</p>}
            </div>
        </article>
    );
}

export default async function ServiziPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const copy = dict.services_page;
    const { transfer, soggiorni, escursioni, su_misura: suMisura } = getServices(copy);
    // Indice in testa alla pagina, nell'ordine in cui compaiono i servizi
    const serviceIndex = [transfer, soggiorni, escursioni, suMisura].map((s) => ({ id: s.id, label: s.index_label }));
    const tourPackages = tourPackageMedia.map((m) => ({ ...m, ...copy.tours.packages[m.slug] }));

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header labels={dict.nav} lang={locale} />

            <main className="flex-1">
                {/* ── HERO ── */}
                <section className="relative overflow-hidden">
                    <div className="relative w-full" style={{ minHeight: '70vh' }}>
                        <Image
                            src={HERO}
                            alt={copy.hero.image_alt}
                            fill
                            priority
                            className="object-cover"
                            sizes="100vw"
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.60) 100%)',
                            }}
                        />
                        <div className="relative container mx-auto px-4 flex items-center justify-center" style={{ minHeight: '70vh' }}>
                            <div className="text-center max-w-3xl py-24">
                                <FadeIn>
                                    <p className="text-white/85 mb-6" style={eyebrowStyle}>
                                        {copy.hero.eyebrow}
                                    </p>
                                </FadeIn>
                                <FadeIn delay={120}>
                                    <h1
                                        className="font-serif text-white leading-[1.05] mb-6"
                                        style={{
                                            fontSize: 'clamp(2.75rem, 6vw, 5rem)',
                                            fontWeight: 400,
                                        }}
                                    >
                                        {copy.hero.title}
                                    </h1>
                                </FadeIn>
                                <FadeIn delay={220}>
                                    <p
                                        className="text-white/90 max-w-xl mx-auto"
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                            fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)',
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {copy.hero.subtitle}
                                    </p>
                                </FadeIn>
                                <FadeIn delay={320}>
                                    <div className="mt-10 mx-auto" style={{ width: '3rem', height: '1px', background: 'rgba(255,255,255,0.55)' }} />
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── INTRO + INDICE + TRANSFER + SOGGIORNI ── */}
                <section className="bg-white" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="container mx-auto px-4">
                        <FadeIn>
                            <div className="max-w-3xl mx-auto mb-12">
                                {copy.intro.map((para) => (
                                    <p key={para} className="text-black/70 mb-6 last:mb-0 md:text-justify md:hyphens-auto" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.1875rem', lineHeight: 1.8 }}>
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </FadeIn>
                        <FadeIn delay={80}>
                            <nav aria-label={copy.index_label} className="max-w-3xl mx-auto mb-24 lg:mb-36 border-y border-black/[0.10] py-5">
                                <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                                    {serviceIndex.map((item) => (
                                        <li key={item.id}>
                                            <a href={`#${item.id}`} className="text-midnight/60 hover:text-midnight transition-colors" style={eyebrowStyle}>
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </FadeIn>
                        <div className="max-w-6xl mx-auto space-y-24 lg:space-y-36">
                            <FadeIn threshold={0}>
                                <ServiceBlock s={transfer} locale={locale} copy={copy} photoLabel={dict.common.photo} />
                            </FadeIn>
                            <FadeIn threshold={0}>
                                <ServiceBlock s={soggiorni} locale={locale} copy={copy} photoLabel={dict.common.photo} />
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* ── PACCHETTO TIPO ── */}
                <section className="bg-[#FBFAF7] border-t border-black/[0.05]" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <FadeIn>
                                <p className="text-midnight/55 mb-4 text-center" style={eyebrowStyle}>{copy.package.eyebrow}</p>
                            </FadeIn>
                            <FadeIn delay={100}>
                                <h2 className="font-serif text-midnight text-center leading-[1.1] mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 400 }}>
                                    {copy.package.title}
                                </h2>
                            </FadeIn>
                            <FadeIn delay={180}>
                                <p className="text-midnight/70 text-center max-w-2xl mx-auto mb-14" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', lineHeight: 1.7 }}>
                                    {copy.package.intro}
                                </p>
                            </FadeIn>

                            <ol className="space-y-8">
                                {copy.package.steps.map((step, i) => (
                                    <FadeIn key={step.title} delay={80 + i * 50}>
                                        <li className="grid md:grid-cols-12 gap-6 border-t border-black/[0.10] pt-7">
                                            <div className="md:col-span-1 text-midnight/40 font-serif" style={{ fontSize: '1.5rem' }}>
                                                {String(i + 1).padStart(2, '0')}
                                            </div>
                                            <div className="md:col-span-4">
                                                <h3 className="font-serif text-midnight" style={{ fontSize: '1.375rem', fontWeight: 400, lineHeight: 1.25 }}>
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <p className="md:col-span-7 text-midnight/75" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', lineHeight: 1.75 }}>
                                                {step.body}
                                            </p>
                                        </li>
                                    </FadeIn>
                                ))}
                            </ol>
                        </div>
                    </div>
                </section>

                {/* ── TOUR ED ESCURSIONI + destinazioni per le gite (Amalfi, Positano, Pompei, Sorrento) ── */}
                <section className="bg-white" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <FadeIn threshold={0}>
                                <ServiceBlock s={escursioni} locale={locale} copy={copy} photoLabel={dict.common.photo} />
                            </FadeIn>
                        </div>
                        <div className="max-w-6xl mx-auto mt-24 lg:mt-36">
                            <FadeIn>
                                <p className="text-midnight/55 mb-4 text-center" style={eyebrowStyle}>{copy.tours.eyebrow}</p>
                            </FadeIn>
                            <FadeIn delay={100}>
                                <h2 className="font-serif text-midnight text-center leading-[1.1] mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 400 }}>
                                    {copy.tours.title}
                                </h2>
                            </FadeIn>
                            <FadeIn delay={180}>
                                <p className="text-midnight/70 text-center max-w-2xl mx-auto mb-16" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', lineHeight: 1.7 }}>
                                    {copy.tours.intro}
                                </p>
                            </FadeIn>

                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
                                {tourPackages.map((t, i) => (
                                    <FadeIn key={t.slug} delay={i * 60}>
                                        <article className="flex flex-col">
                                            <figure className="relative overflow-hidden mb-6" style={{ aspectRatio: '4/3' }}>
                                                <Image
                                                    src={t.image}
                                                    alt={t.image_alt}
                                                    fill
                                                    loading="lazy"
                                                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            </figure>
                                            <p className="text-midnight/55 mb-3" style={eyebrowStyle}>{t.eyebrow}</p>
                                            <h3 className="font-serif text-midnight mb-3" style={{ fontSize: '1.75rem', fontWeight: 400, lineHeight: 1.2 }}>
                                                {t.name}
                                            </h3>
                                            <p className="text-midnight/75 mb-5" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', lineHeight: 1.65 }}>
                                                {t.tagline}
                                            </p>
                                            <ul className="space-y-2 border-t border-black/[0.10] pt-5">
                                                {t.activities.map((a) => (
                                                    <li key={a} className="flex gap-3 text-midnight/80" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', lineHeight: 1.65 }}>
                                                        <ListDash width={12} />
                                                        <span>{a}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── VIAGGI SU MISURA ── */}
                <section className="bg-white border-t border-black/[0.05]" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <FadeIn threshold={0}>
                                <ServiceBlock s={suMisura} locale={locale} copy={copy} photoLabel={dict.common.photo} />
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="bg-[#FBFAF7] border-t border-black/[0.05]" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <FadeIn>
                            <p className="text-midnight/55 mb-4" style={eyebrowStyle}>{copy.cta.eyebrow}</p>
                        </FadeIn>
                        <FadeIn delay={100}>
                            <h2 className="font-serif text-midnight leading-[1.1] mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 400 }}>
                                {copy.cta.title}
                            </h2>
                        </FadeIn>
                        <FadeIn delay={180}>
                            <p className="text-midnight/70 mb-10" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', lineHeight: 1.7 }}>
                                {copy.cta.body}
                            </p>
                        </FadeIn>
                        <FadeIn delay={260}>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href={`/${locale}/chi-siamo-contatti`} className="bay-btn bay-btn-dark px-8 py-3 text-xs">
                                    {copy.cta.primary}
                                </Link>
                                <Link
                                    href={`/${locale}/destinazioni`}
                                    className="bay-btn bay-btn-dark px-8 py-3 text-xs"
                                    style={{ background: 'transparent', color: '#111' }}
                                >
                                    {copy.cta.secondary}
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>

            <Footer dict={dict} lang={locale} />
            <WhatsAppButton labels={dict.whatsapp} />
        </div>
    );
}
