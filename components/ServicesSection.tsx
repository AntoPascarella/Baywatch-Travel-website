'use client';

import Image from 'next/image';
import FadeIn from './FadeIn';

/**
 * "Chi siamo" section.
 * Background: Ischia aerial (Pexels. Domenico Paolella) with overlay for legibility.
 * Foreground photo: Ischia harbour scene representing Casamicciola Terme area
 * (Pexels. Ree A). Pexels does not have a strictly Casamicciola-tagged
 * high-quality photo at the time of writing, so we use a coherent Ischia
 * harbour shot and label it accurately in the alt text.
 */
const BG_ISCHIA_AERIAL =
    'https://images.pexels.com/photos/5597694/pexels-photo-5597694.jpeg?auto=compress&cs=tinysrgb&w=2400';
const PHOTO_CASAMICCIOLA =
    'https://images.pexels.com/photos/36834243/pexels-photo-36834243.jpeg?auto=compress&cs=tinysrgb&w=2000';

export default function ServicesSection({
    title,
    body,
    imageAlt,
}: {
    title: string;
    body: string;
    imageAlt: string;
}) {
    return (
        <section
            style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
            className="relative overflow-hidden"
        >
            {/* ── Background: Ischia vista dall'alto ── */}
            <Image
                src={BG_ISCHIA_AERIAL}
                alt=""
                fill
                priority={false}
                sizes="100vw"
                className="object-cover -z-10"
            />
            {/* Overlay per leggibilità: scuro tenue + sfumatura inferiore */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background:
                        'linear-gradient(180deg, rgba(8,12,18,0.72) 0%, rgba(8,12,18,0.62) 50%, rgba(8,12,18,0.78) 100%)',
                }}
            />

            <div className="container mx-auto px-4 relative">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                    {/* Text (left) */}
                    <FadeIn className="lg:w-1/2 w-full">
                        <p
                            className="text-white/70 mb-5"
                            style={{
                                fontFamily: 'var(--font-futura)',
                                fontSize: '0.6875rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.32em',
                            }}
                        >
                            Casamicciola Terme, Ischia
                        </p>
                        <h2 className="text-h2 font-serif text-white mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-white/80 leading-relaxed whitespace-pre-line">
                            {body}
                        </p>
                    </FadeIn>

                    {/* Casamicciola photo (right) */}
                    <FadeIn delay={200} className="lg:w-1/2 w-full">
                        <figure className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src={PHOTO_CASAMICCIOLA}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <figcaption
                                className="absolute bottom-0 left-0 right-0 px-5 py-3 text-white/85"
                                style={{
                                    background:
                                        'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)',
                                    fontFamily: 'var(--font-futura)',
                                    fontSize: '0.7rem',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Casamicciola Terme, dove tutto è iniziato
                            </figcaption>
                        </figure>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
