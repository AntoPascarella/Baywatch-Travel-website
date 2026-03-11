'use client';

import Image from 'next/image';
import FadeIn from './FadeIn';

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
            className="bg-white"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                    {/* Text (left) */}
                    <FadeIn className="lg:w-1/2 w-full">
                        <h2 className="text-h2 font-serif text-midnight mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-midnight/65 leading-relaxed whitespace-pre-line">
                            {body}
                        </p>
                    </FadeIn>

                    {/* Office photo (right) */}
                    <FadeIn delay={200} className="lg:w-1/2 w-full">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-cream">
                            <Image
                                src="/images/office/casamicciola-placeholder.jpg"
                                alt={imageAlt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                }}
                            />
                            {/* Fallback if image doesn't load */}
                            <div className="absolute inset-0 flex items-center justify-center text-midnight/20">
                                <div className="text-center">
                                    <svg className="w-16 h-16 mx-auto mb-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <p className="text-sm font-medium">Casamicciola Terme, NA</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
