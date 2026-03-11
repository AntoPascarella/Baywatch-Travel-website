'use client';

import Image from 'next/image';
import { partners } from '@/data/partners';

export default function PartnersSection({ title = 'I nostri partner' }: { title?: string }) {
    return (
        <section className="py-16 bg-white overflow-hidden" aria-label={title}>
            <div className="container mx-auto px-4 mb-10 text-center">
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-midnight/40">
                    {title}
                </h2>
            </div>

            <div className="relative w-full max-w-[1920px] mx-auto marquee-container">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Scrolling Container */}
                <div className="flex w-max group hover:[animation-play-state:paused]">
                    {/* First Loop */}
                    <div className="flex items-center gap-16 px-8 marquee-track animate-scroll-left-slow">
                        {partners.map((partner) => (
                            <div
                                key={partner.id}
                                className="relative h-10 w-40 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.alt}
                                    fill
                                    className="object-contain"
                                    sizes="160px"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Second Loop (Duplicate) */}
                    <div className="flex items-center gap-16 px-8 marquee-track animate-scroll-left-slow" aria-hidden="true">
                        {partners.map((partner) => (
                            <div
                                key={`dup-${partner.id}`}
                                className="relative h-10 w-40 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.alt}
                                    fill
                                    className="object-contain"
                                    sizes="160px"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
