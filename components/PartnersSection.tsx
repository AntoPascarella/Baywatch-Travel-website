'use client';

import Image from 'next/image';
import { partners } from '@/data/partners';

export default function PartnersSection({ title = 'I nostri partner' }: { title?: string }) {
    return (
        <section className="py-12 bg-white overflow-hidden" aria-label={title}>
            < div className="container mx-auto px-4 mb-8 text-center">
                < h2 className="text-h3 font-serif text-midnight uppercase tracking-wider">
                    {title}
                </h2 >
            </div >

            <div className="relative w-full max-w-[1920px] mx-auto">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                < div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Scrolling Container */}
                <div className="flex w-max hover:[animation-play-state:paused] group">
                    {/* First Loop */}
                    <div className="flex items-center gap-12 px-6 animate-scroll-left-slow">
                        {
                            partners.map((partner) => (
                                <div
                                    key={partner.id}
                                    className="relative h-12 w-48 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                >
                                    <Image
                                        src={partner.logo}
                                        alt={partner.alt}
                                        fill
                                        className="object-contain"
                                        sizes="192px"
                                    />
                                </div >
                            ))
                        }
                    </div >

                    {/* Second Loop (Duplicate) */}
                    < div className="flex items-center gap-12 px-6 animate-scroll-left-slow" aria-hidden="true">
                        {
                            partners.map((partner) => (
                                <div
                                    key={`dup-${partner.id}`}
                                    className="relative h-12 w-48 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                >
                                    <Image
                                        src={partner.logo}
                                        alt={partner.alt}
                                        fill
                                        className="object-contain"
                                        sizes="192px"
                                    />
                                </div >
                            ))
                        }
                    </div >
                </div >
            </div >
        </section >
    );
}
