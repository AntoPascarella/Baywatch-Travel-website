import Image from 'next/image';
import FadeIn from './FadeIn';

const services = [
    {
        id: 'trasferimenti',
        eyebrow: 'Logistica',
        title: 'Trasferimenti Privati',
        body: 'Ogni viaggio inizia e finisce con la stessa cura. I nostri trasferimenti privati da e verso gli aeroporti garantiscono comfort assoluto, puntualità impeccabile e un\'atmosfera serena fin dal primo momento. Ci occupiamo di ogni dettaglio affinché tu possa concentrarti solo sul piacere di arrivare.',
        image: '/images/destinations/amalfi/Amalfi.jpg',
        imageAlt: 'Costiera Amalfitana. trasferimenti privati',
        imageRight: true,
    },
    {
        id: 'soggiorni',
        eyebrow: 'Ospitalità',
        title: 'Soggiorni Su Misura',
        body: 'Che si tratti di una fuga romantica di pochi giorni o di un soggiorno prolungato per scoprire l\'isola in profondità, selezioniamo per te le sistemazioni più autentiche e raffinate. Ogni proposta è curata nei minimi dettagli per un\'esperienza che resti nel tempo.',
        image: '/images/destinations/positano/Positano.jpg',
        imageAlt: 'Positano. soggiorni su misura',
        imageRight: false,
    },
    {
        id: 'escursioni',
        eyebrow: 'Territorio',
        title: 'Escursioni Nel Cuore del Paesaggio',
        body: 'Guide esperte del territorio ti accompagnano alla scoperta di sentieri nascosti, panorami mozzafiato e angoli segreti che solo chi vive questi luoghi può rivelare. Ogni escursione è un racconto autentico. sicuro, memorabile, da portare con sé per sempre.',
        image: '/images/destinations/capri/Capri.jpg',
        imageAlt: 'Capri. escursioni guidate nella natura',
        imageRight: true,
    },
    {
        id: 'termali',
        eyebrow: 'Benessere',
        title: 'Acque Termali',
        body: 'Le sorgenti termali di Ischia sono tra le più celebrate d\'Europa. Ti guidiamo verso i migliori parchi e strutture wellness dell\'isola per un\'esperienza di relax profondo.',
        image: '/images/destinations/ischia/Ischia.jpg',
        imageAlt: 'Ischia. parchi termali e benessere',
        imageRight: false,
    },
];

export default function ServizioSection() {
    return (
        <section
            style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
            className="bg-white"
        >
            <div className="container mx-auto px-4">

                {/* ── Section label ── */}
                <FadeIn>
                    <div className="text-center mb-20">
                        <p
                            className="text-black"
                            style={{
                                fontFamily: 'var(--font-futura)',
                                fontSize: 'clamp(0.6875rem, 1.4vw, 0.875rem)',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.28em',
                                lineHeight: 1.2,
                            }}
                        >
                            Servizi
                        </p>
                    </div>
                </FadeIn>

                {/* ── Services list ── */}
                <div className="max-w-6xl mx-auto space-y-24 lg:space-y-36">
                    {services.map((service, i) => (
                        <FadeIn key={service.id} delay={i * 60}>
                            <div
                                className={`flex flex-col gap-10 lg:gap-20 items-center ${
                                    service.imageRight
                                        ? 'lg:flex-row'
                                        : 'lg:flex-row-reverse'
                                }`}
                            >
                                {/* ── Text column ── */}
                                <div className="w-full lg:w-1/2">
                                    <p
                                        style={{
                                            fontFamily: 'var(--font-futura)',
                                            fontSize: '0.6875rem',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.28em',
                                            color: 'rgba(17,17,17,0.4)',
                                            lineHeight: 1.2,
                                        }}
                                        className="mb-5"
                                    >
                                        {service.eyebrow}
                                    </p>

                                    <h2
                                        className="font-serif text-black leading-tight mb-6"
                                        style={{
                                            fontSize: 'clamp(1.75rem, 3vw, 2.625rem)',
                                            fontWeight: 400,
                                        }}
                                    >
                                        {service.title}
                                    </h2>

                                    <p
                                        className="text-black/60 leading-relaxed"
                                        style={{
                                            fontSize: '1.0625rem',
                                            lineHeight: 1.8,
                                            fontFamily: 'var(--font-inter)',
                                        }}
                                    >
                                        {service.body}
                                    </p>

                                    {/* Refined rule */}
                                    <div
                                        className="mt-8"
                                        style={{
                                            width: '2.5rem',
                                            height: '1px',
                                            background: 'rgba(0,0,0,0.18)',
                                        }}
                                    />
                                </div>

                                {/* ── Image column ── */}
                                <div className="w-full lg:w-1/2">
                                    <div
                                        className="relative overflow-hidden"
                                        style={{ aspectRatio: '4/3' }}
                                    >
                                        <Image
                                            src={service.image}
                                            alt={service.imageAlt}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
