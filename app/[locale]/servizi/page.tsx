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
        'Transfer di gruppo e privati, soggiorni con assistenza multilingue, escursioni, tour enogastronomici, hiking e termali. I servizi di Baywatch Travel.',
};

const px = (id: number, w = 2000) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const HERO = px(37270135, 2400); // Ischia soleggiata, Heinz Klier / Pexels

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
        eyebrow: 'Punto di forza',
        title: 'Transfer di gruppo, in bus Gran Turismo',
        body:
            'Il nostro pane quotidiano. Bus Gran Turismo per spostare gruppi da e per aeroporti, porti, hotel. Affidabili, puliti, con autisti che fanno questo da una vita. Per chi viaggia da solo o in coppia ci sono anche auto private con conducente.',
        bullets: [
            'Bus Gran Turismo 30-55 posti',
            'Auto private e van per piccoli gruppi',
            'Aeroporti del Centro-Sud e porti di Napoli, Pozzuoli, Salerno',
            'Coordinamento con voli e traghetti',
        ],
        image: px(13232525),
        imageAlt: 'Man on a ferry looking at coastal town and castle under blue sky.',
        credit: 'Foto: Nati, Pexels',
        imageRight: true,
    },
    {
        id: 'soggiorni',
        eyebrow: 'La nostra firma',
        title: 'Soggiorni di gruppo, gestiti su misura',
        body:
            'La gestione dei gruppi è il punto forte della nostra vita professionale. Lavoriamo con strutture alberghiere di ogni livello, dalle famiglie alle agenzie. Costruiamo pacchetti ad hoc, con assistenza multilingue in ogni fase del viaggio.',
        bullets: [
            'Ampia scelta di hotel e strutture, selezionate negli anni',
            'Pacchetti su misura per gruppi grandi e piccoli',
            'Assistenza multilingue dedicata',
            'Eventi privati, ricorrenze, team building',
        ],
        image: px(16014522),
        imageAlt: 'Rilassante vista su un resort mediterraneo a Capri, in Italia, con sdraio e ombrelloni a bordo piscina, ideale per chi è alla ricerca di viaggi e svago.',
        credit: 'Foto: Pexels',
        imageRight: false,
    },
    {
        id: 'escursioni',
        eyebrow: 'Esperienze',
        title: 'Escursioni, con o senza guida',
        body:
            'Gite di mezza giornata o di una giornata intera, organizzate per gruppi o piccoli. Si può scegliere con guida abilitata o solo trasferimento e accesso al posto. Esempi: giro dell’isola di Ischia in 3 ore e mezza con soste, parchi termali con biglietto + transfer, Capri in barca con skipper.',
        bullets: [
            'Giro dell’isola di Ischia (~3h30 con soste)',
            'Parchi termali (giornata o mezza giornata)',
            'Tour in barca Capri, Procida, Costiera',
            'Pompei, Vesuvio, Reggia di Caserta',
            'Tour enogastronomici e cantine',
            'Hiking sui sentieri Epomeo, Sentiero degli Dei',
        ],
        image: px(8206930),
        imageAlt: 'Gruppo in escursione su un sentiero in Campania',
        credit: 'Foto: Michele Busce / Pexels',
        imageRight: true,
    },
    {
        id: 'su-misura',
        eyebrow: 'Su misura',
        title: 'Pacchetti personalizzati',
        body:
            'Se ti serve qualcosa che non sta in una scheda standard, lo costruiamo insieme. Itinerari su misura per famiglie, coppie, gruppi di amici, aziende. Lavoriamo a fondo per capire cosa vuoi e da lì partiamo.',
        bullets: [
            'Briefing iniziale per capire le tue esigenze',
            'Proposta scritta con voci e prezzi chiari',
            'Modifiche fino a quando il programma è giusto',
            'Assistenza dedicata durante il viaggio',
        ],
        image: px(7634231),
        imageAlt: 'Mano su una mappa con appunti di viaggio',
        credit: 'Foto: Marina Zasorina / Pexels',
        imageRight: false,
    },
];

// Pacchetto tipo (lavorazione completa). Mostrato come timeline.
type Step = { title: string; body: string };
const packageSteps: Step[] = [
    { title: 'Pick-up a Capodichino', body: 'Ti aspettiamo all’aeroporto di Napoli con autista assegnato e nome ben visibile.' },
    { title: 'Transfer con assistente fino all’hotel', body: 'Trasferimento accompagnato da una persona del team, che ti aiuta con bagagli, info pratiche, eventuali soste.' },
    { title: 'Cocktail di benvenuto', body: 'In hotel ti offriamo un cocktail di benvenuto e ti raccontiamo brevemente il programma settimanale previsto, con consigli ed informazioni utili al soggiorno.' },
    { title: 'Materiale escursioni e programmi', body: 'Mappa, programma dei giorni, contatti, voucher escursioni. Tutto cartaceo e digitale.' },
    { title: 'Assistenza giornaliera durante il soggiorno', body: 'Una persona di riferimento è raggiungibile tutti i giorni per qualsiasi cosa serva, dal cambio prenotazione al consiglio cena.' },
    { title: 'Trasferimento al ritorno', body: 'Pick-up dall’hotel e ritorno all’aeroporto.' },
];

// Tour packages: destinazioni dove offriamo gite e transfer, non soggiorni
type TourPackage = {
    slug: string;
    name: string;
    eyebrow: string;
    tagline: string;
    activities: string[];
    image: string;
    imageAlt: string;
    credit: string;
};

const tourPackages: TourPackage[] = [
    {
        slug: 'amalfi',
        name: 'Costiera Amalfitana',
        eyebrow: 'Gita giornaliera',
        tagline: 'Da Amalfi a Positano lungo la SS163, con barca o pullman a seconda di voi.',
        activities: [
            'Tour in barca Amalfi, Furore, Conca dei Marini',
            'Visita Duomo di Amalfi + Atrani a piedi',
            'Pullman panoramico SS163 con soste fotografiche',
            'Pranzo in agriturismo con vista golfo',
        ],
        image: px(29172648),
        imageAlt: 'Vista panoramica della Costiera Amalfitana',
        credit: 'Foto: Rishabh Lakra / Pexels',
    },
    {
        slug: 'positano',
        name: 'Positano',
        eyebrow: 'Mezza giornata o giornata',
        tagline: 'Verticale, fotogenica, una scenografia naturale che funziona ancora.',
        activities: [
            'Tour in barca con sosta bagno a Li Galli e Praiano',
            'Spiaggia Grande + visita al borgo',
            'Hiking Sentiero degli Dei (Bomerano-Nocelle) con guida',
            'Tramonto in terrazza con aperitivo',
        ],
        image: px(19390872),
        imageAlt: 'Case di Positano sulla collina, sopra la spiaggia',
        credit: 'Foto: Lucia Manes / Pexels',
    },
    {
        slug: 'pompei',
        name: 'Pompei',
        eyebrow: 'Mezza giornata o giornata',
        tagline: 'Una città romana ferma nel 79 d.C. Sempre con guida abilitata.',
        activities: [
            'Visita scavi di Pompei con guida abilitata (~3h)',
            'Ercolano + MAV Museo Archeologico Virtuale',
            'Estensione Vesuvio: cratere a piedi (45 min andata)',
            'Pranzo in agriturismo + degustazione vini del Vesuvio',
        ],
        image: px(35626653),
        imageAlt: 'Rovine di Pompei con colonne e statua',
        credit: 'Foto: Alex Revilla / Pexels',
    },
    {
        slug: 'sorrento',
        name: 'Sorrento',
        eyebrow: 'Mezza giornata o giornata',
        tagline: 'Base per la Costiera o tappa singola. Limoneti, vista golfo, vita lenta.',
        activities: [
            'Visita guidata centro storico, Chiostro San Francesco',
            'Vallone dei Mulini e Marina Grande',
            'Tour limoni: visita agrumeto + degustazione limoncello',
            'Bagni della Regina Giovanna: piscina naturale tra rovine romane',
        ],
        image: px(9940305),
        imageAlt: 'Vista aerea di Sorrento e Villa Comunale',
        credit: 'Foto: Daniel Eliashevsky / Pexels',
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
                        <div className="relative container mx-auto px-4 flex items-center justify-center" style={{ minHeight: '70vh' }}>
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
                                        className="text-white/90 max-w-xl mx-auto"
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                            fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)',
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        Transfer di gruppo, soggiorni con assistenza multilingue, escursioni con o senza guida. Quattro modi di lavorare con noi.
                                    </p>
                                </FadeIn>
                                <FadeIn delay={320}>
                                    <div className="mt-10 mx-auto" style={{ width: '3rem', height: '1px', background: 'rgba(255,255,255,0.55)' }} />
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 4 SERVIZI principali ── */}
                <section className="bg-white" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto space-y-24 lg:space-y-36">
                            {services.map((s, i) => (
                                <FadeIn key={s.id} delay={i * 40}>
                                    <article
                                        id={s.id}
                                        className={`flex flex-col gap-10 lg:gap-20 items-center ${s.imageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                    >
                                        <div className="w-full lg:w-1/2">
                                            <p className="text-midnight/45 mb-5" style={eyebrowStyle}>{s.eyebrow}</p>
                                            <h2 className="font-serif text-black leading-tight mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.625rem)', fontWeight: 400 }}>
                                                {s.title}
                                            </h2>
                                            <p className="text-black/70 mb-8" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', lineHeight: 1.8 }}>
                                                {s.body}
                                            </p>
                                            <ul className="space-y-3 border-t border-black/[0.10] pt-6">
                                                {s.bullets.map((b) => (
                                                    <li key={b} className="flex gap-3 text-black/80" style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: 1.6 }}>
                                                        <span aria-hidden="true" className="text-midnight/35 shrink-0" style={{ marginTop: '0.55rem' }}>
                                                            <span style={{ display: 'inline-block', width: '14px', height: '1px', background: 'currentColor' }} />
                                                        </span>
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-8" style={{ width: '2.5rem', height: '1px', background: 'rgba(0,0,0,0.18)' }} />
                                        </div>
                                        <div className="w-full lg:w-1/2">
                                            <figure className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                                                <Image
                                                    src={s.image}
                                                    alt={s.imageAlt}
                                                    fill
                                                    loading="lazy"
                                                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                />
                                            </figure>
                                            <p className="mt-3 text-midnight/40" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', letterSpacing: '0.06em' }}>{s.credit}</p>
                                        </div>
                                    </article>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PACCHETTO TIPO ── */}
                <section className="bg-[#FBFAF7] border-t border-black/[0.05]" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <FadeIn>
                                <p className="text-midnight/55 mb-4 text-center" style={eyebrowStyle}>Pacchetto tipo</p>
                            </FadeIn>
                            <FadeIn delay={100}>
                                <h2 className="font-serif text-midnight text-center leading-[1.1] mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 400 }}>
                                    Come funziona un soggiorno con noi
                                </h2>
                            </FadeIn>
                            <FadeIn delay={180}>
                                <p className="text-midnight/70 text-center max-w-2xl mx-auto mb-14" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', lineHeight: 1.7 }}>
                                    Un esempio di pacchetto completo. Lo personalizziamo in base al gruppo, alla durata, alla destinazione.
                                </p>
                            </FadeIn>

                            <ol className="space-y-8">
                                {packageSteps.map((step, i) => (
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

                {/* ── TOUR PACKAGES: destinazioni per gite (Amalfi, Positano, Pompei, Sorrento) ── */}
                <section className="bg-white" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <FadeIn>
                                <p className="text-midnight/55 mb-4 text-center" style={eyebrowStyle}>Destinazioni per le gite</p>
                            </FadeIn>
                            <FadeIn delay={100}>
                                <h2 className="font-serif text-midnight text-center leading-[1.1] mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 400 }}>
                                    Tour ed escursioni nelle mete che amiamo
                                </h2>
                            </FadeIn>
                            <FadeIn delay={180}>
                                <p className="text-midnight/70 text-center max-w-2xl mx-auto mb-16" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', lineHeight: 1.7 }}>
                                    Costiera Amalfitana, Positano, Pompei e Sorrento sono mete dove offriamo gite di una giornata e transfer. Non soggiorni, ma esperienze su misura.
                                </p>
                            </FadeIn>

                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
                                {tourPackages.map((t, i) => (
                                    <FadeIn key={t.slug} delay={i * 60}>
                                        <article className="flex flex-col">
                                            <figure className="relative overflow-hidden mb-6" style={{ aspectRatio: '4/3' }}>
                                                <Image
                                                    src={t.image}
                                                    alt={t.imageAlt}
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
                                                        <span aria-hidden="true" className="text-midnight/35 shrink-0" style={{ marginTop: '0.5rem' }}>
                                                            <span style={{ display: 'inline-block', width: '12px', height: '1px', background: 'currentColor' }} />
                                                        </span>
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

                {/* ── CTA ── */}
                <section className="bg-[#FBFAF7] border-t border-black/[0.05]" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <FadeIn>
                            <p className="text-midnight/55 mb-4" style={eyebrowStyle}>Pronto a partire</p>
                        </FadeIn>
                        <FadeIn delay={100}>
                            <h2 className="font-serif text-midnight leading-[1.1] mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 400 }}>
                                Raccontaci che viaggio hai in mente
                            </h2>
                        </FadeIn>
                        <FadeIn delay={180}>
                            <p className="text-midnight/70 mb-10" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.125rem', lineHeight: 1.7 }}>
                                Scrivici dove vorresti andare, con chi, quanti giorni. Ti torniamo con una proposta concreta, senza giri di parole.
                            </p>
                        </FadeIn>
                        <FadeIn delay={260}>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href={`/${locale}/chi-siamo-contatti`} className="bay-btn bay-btn-dark px-8 py-3 text-xs">
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
