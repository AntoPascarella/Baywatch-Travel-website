import Image from 'next/image';
import FadeIn from './FadeIn';
import type { Dictionary } from '@/lib/i18n/types';

type Copy = Dictionary['home']['servizi'];

// Text comes from the dictionary (home.servizi.items), keyed by id.
const media: { id: keyof Copy['items']; image: string; imageRight: boolean }[] = [
    { id: 'trasferimenti', image: '/images/destinations/amalfi/Amalfi.jpg', imageRight: true },
    { id: 'soggiorni', image: '/images/destinations/positano/Positano.jpg', imageRight: false },
    { id: 'escursioni', image: '/images/destinations/capri/Capri.jpg', imageRight: true },
    { id: 'termali', image: '/images/destinations/ischia/Ischia.jpg', imageRight: false },
];

export default function ServizioSection({ copy }: { copy: Copy }) {
    const services = media.map((m) => ({ ...m, ...copy.items[m.id] }));

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
                            {copy.label}
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
                                        className="text-black/60 leading-relaxed text-justify hyphens-auto"
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
                                            alt={service.image_alt}
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
