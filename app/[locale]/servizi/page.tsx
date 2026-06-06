import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/i18n-config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
    title: 'Servizi | Baywatch Travel',
    description:
        'Transfer, escursioni, soggiorni di gruppo e itinerari su misura. I servizi di Baywatch Travel.',
};

const px = (id: number, w = 2000) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const HERO = px(31976189, 2400); // Sant'Angelo coastal view, Nati / Pexels

type Service = {
    id: string;
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
    image: string;
    imageAlt: string;
    credit: string;
    imageRight: boolean;
};

const services: Service[] = [
    {
        id: 'transfer',
        eyebrow: 'Mobilità',
        title: 'Transfer da e per gli aeroporti',
        body:
            'Ti veniamo a prendere a Napoli Capodichino, Roma Fiumicino, Salerno, o ovunque atterri. Auto privata, autista che conosce le strade, niente attese strane. Se viaggi con amici o famiglia, organizziamo van o minibus.',
        bullets: [
            'Aeroporti principali del Centro-Sud',
            'Porti di Napoli, Pozzuoli, Salerno',
            'Auto privata, van, minibus',
            'Autisti che parlano italiano e inglese',
        ],
        image: px(28284095),
        imageAlt: 'Berlina nera per transfer privato',
        credit: 'Foto: Jonas Alteneder / Pexels',
        imageRight: true,
    },
    {
        id: 'escursioni',
        eyebrow: 'Territorio',
        title: 'Pacchetti escursioni nelle mete del sito',
        body:
            'Per ogni destinazione che racconti sul sito abbiamo un’escursione pronta o costruita su richiesta. Capri in barca, Pompei con guida, Costiera Amalfitana giornata intera, Ischia in giro per terme. Gruppi piccoli, niente bus turistici.',
        bullets: [
            'Capri, Procida, Ischia in barca',
            'Pompei e Vesuvio con guida abilitata',
            'Costiera Amalfitana giornata intera',
            'Tour gastronomici e cantine',
        ],
        image: px(8206930),
        imageAlt: 'Gruppo in escursione su un sentiero in Campania',
        credit: 'Foto: Michele Busce / Pexels',
        imageRight: false,
    },
    {
        id: 'soggiorni-gruppo',
        eyebrow: 'Ospitalità',
        title: 'Soggiorni di gruppo in hotel',
        body:
            'Se viaggi con amici, colleghi, o organizzi un evento, ti troviamo gli hotel giusti. Lavoriamo con strutture che conosciamo di persona, prenotiamo blocchi camere, gestiamo check-in coordinati, sale per cene private. Senza il caos di prenotare in dieci.',
        bullets: [
            'Blocchi camere in hotel 4-5 stelle',
            'Soggiorni team building e incentive',
            'Eventi privati, matrimoni, ricorrenze',
            'Tariffe negoziate per gruppi',
        ],
        image: px(33535399),
        imageAlt: 'Facciata di hotel europeo elegante',
        credit: 'Foto: Goszton / Pexels',
        imageRight: true,
    },
    {
        id: 'su-misura',
        eyebrow: 'Su misura',
        title: 'Itinerari personalizzati',
        body:
            'Se quello che cerchi non rientra in nessuna casella, ne parliamo. Ci racconti dove vorresti andare, con chi, quanti giorni, che ritmo. Noi costruiamo l’itinerario, tu ci dici se va bene o cosa cambiare. Lo facciamo tutti i giorni.',
        bullets: [
            'Briefing iniziale per capire le tue esigenze',
            'Proposta scritta con voci e prezzi chiari',
            'Modifiche illimitate fino a che è giusta',
            'Assistenza dedicata durante il viaggio',
        ],
        image: px(7634231),
        imageAlt: 'Mano su una mappa con appunti di viaggio',
        credit: 'Foto: Marina Zasorina / Pexels',
        imageRight: false,
    },
];

const eyebrowStyle = {
    fontFamily: 'var(--font-futura)',
    fontSize: '0.6875rem',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.28em',
    lineHeight: 1.2,
};

export default async function ServiziPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header dict={dict} lang={locale} />

            <main className="flex-1">
                {/* ── HERO ── */}
                <section className="relative overflow-hidden">
                    <div className="relative w-full" style={{ minHeight: '70vh' }}>
                        <Image
                            src={HERO}
                            alt="Costa di Ischia, dove ha sede Baywatch Travel"
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
                        <div
                            className="relative container mx-auto px-4 flex items-center justify-center"
                            style={{ minHeight: '70vh' }}
                        >
                            <div className="text-center max-w-3xl py-24">
                                <FadeIn>
                                    <p className="text-white/85 mb-6" style={eyebrowStyle}>
                                        Cosa facciamo
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
                                        I nostri servizi
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
                                        Trasferimenti, escursioni, soggiorni di gruppo e itinerari fatti su di te.
                                        Quattro modi di lavorare con noi.
                                    </p>
                                </FadeIn>
                                <FadeIn delay={320}>
                                    <div
                                        className="mt-10 mx-auto"
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

                {/* ── SERVICES — alternating editorial blocks ── */}
                <section
                    className="bg-white"
                    style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto space-y-24 lg:space-y-36">
                            {services.map((s, i) => (
                                <FadeIn key={s.id} delay={i * 40}>
                                    <article
                                        id={s.id}
                                        className={`flex flex-col gap-10 lg:gap-20 items-center ${
                                            s.imageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        }`}
                                    >
                                        {/* Text */}
                                        <div className="w-full lg:w-1/2">
                                            <p className="text-midnight/45 mb-5" style={eyebrowStyle}>
                                                {s.eyebrow}
                                            </p>
                                            <h2
                                                className="font-serif text-black leading-tight mb-6"
                                                style={{
                                                    fontSize: 'clamp(1.75rem, 3vw, 2.625rem)',
                                                    fontWeight: 400,
                                                }}
                                            >
                                                {s.title}
                                            </h2>
                                            <p
                                                className="text-black/65 mb-8"
                                                style={{
                                                    fontFamily: 'var(--font-inter)',
                                                    fontSize: '1.0625rem',
                                                    lineHeight: 1.8,
                                                }}
                                            >
                                                {s.body}
                                            </p>
                                            <ul className="space-y-3 border-t border-black/[0.10] pt-6">
                                                {s.bullets.map((b) => (
                                                    <li
                                                        key={b}
                                                        className="flex gap-3 text-black/75"
                                                        style={{
                                                            fontFamily: 'var(--font-inter)',
                                                            fontSize: '0.9375rem',
                                                            lineHeight: 1.6,
                                                        }}
                                                    >
                                                        <span
                                                            aria-hidden="true"
                                                            className="text-midnight/35 shrink-0"
                                                            style={{ marginTop: '0.5rem' }}
                                                        >
                                                            <span
                                                                style={{
                                                                    display: 'inline-block',
                                                                    width: '14px',
                                                                    height: '1px',
                                                                    background: 'currentColor',
                                                                }}
                                                            />
                                                        </span>
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div
                                                className="mt-8"
                                                style={{
                                                    width: '2.5rem',
                                                    height: '1px',
                                                    background: 'rgba(0,0,0,0.18)',
                                                }}
                                            />
                                        </div>

                                        {/* Image */}
                                        <div className="w-full lg:w-1/2">
                                            <figure
                                                className="relative overflow-hidden"
                                                style={{ aspectRatio: '4/3' }}
                                            >
                                                <Image
                                                    src={s.image}
                                                    alt={s.imageAlt}
                                                    fill
                                                    loading="lazy"
                                                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                />
                                            </figure>
                                            <p
                                                className="mt-3 text-midnight/40"
                                                style={{
                                                    fontFamily: 'var(--font-inter)',
                                                    fontSize: '0.7rem',
                                                    letterSpacing: '0.06em',
                                                }}
                                            >
                                                {s.credit}
                                            </p>
                                        </div>
                                    </article>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section
                    className="bg-[#FBFAF7] border-t border-black/[0.05]"
                    style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
                >
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <FadeIn>
                            <p className="text-midnight/55 mb-4" style={eyebrowStyle}>
                                Pronto a partire
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
                                Raccontaci che viaggio hai in mente
                            </h2>
                        </FadeIn>
                        <FadeIn delay={180}>
                            <p
                                className="text-midnight/70 mb-10"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontSize: '1.0625rem',
                                    lineHeight: 1.7,
                                }}
                            >
                                Scrivici dove vorresti andare, con chi, quanti giorni. Ti torniamo con una proposta
                                concreta, senza giri di parole.
                            </p>
                        </FadeIn>
                        <FadeIn delay={260}>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href={`/${locale}/chi-siamo-contatti`}
                                    className="bay-btn bay-btn-dark px-8 py-3 text-xs"
                                >
                                    Richiedi informazioni
                                </Link>
                                <Link
                                    href={`/${locale}/destinazioni`}
                                    className="bay-btn bay-btn-dark px-8 py-3 text-xs"
                                    style={{ background: 'transparent', color: '#111' }}
                                >
                                    Vedi le destinazioni
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>

            <Footer dict={dict} lang={locale} />
            <WhatsAppButton />
        </div>
    );
}
