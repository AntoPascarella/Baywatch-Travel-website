'use client';

import Link from 'next/link';
import Image from 'next/image';
import { type Destination } from '@/data/destinations';
import { Locale } from '@/i18n-config';

export default function DestinationCard({
    destination,
    lang,
    discoverLabel,
    description,
}: {
    destination: Destination;
    lang: Locale;
    discoverLabel?: string;
    description?: string;
}) {
    const altText = destination.alt[lang] || destination.name;
    const ctaText = discoverLabel || 'Scopri';
    const descriptionText = description || destination.shortDescription;
    const href = `/${lang}/destinazioni/${destination.slug}`;

    return (
        /**
         * Outer div: non-Link wrapper. keeps HTML valid (no nested <a>).
         * Two sibling <Link> elements: one invisible full-card link (z-0, aria-hidden)
         * and one visible CTA button (z-10). Both point to the same href.
         */
        <div className="group relative overflow-hidden border border-black/[0.09] shadow-[0_2px_12px_rgba(0,0,0,0.07)] transition-all duration-500 ease-out hover:-translate-y-[6px] hover:shadow-[0_24px_64px_rgba(0,0,0,0.20)] cursor-pointer">

            {/* ── Full-card invisible link (keyboard-hidden, behind everything) ── */}
            <Link
                href={href}
                className="absolute inset-0 z-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white focus-visible:outline-none"
                tabIndex={-1}
                aria-hidden="true"
            />

            {/* ── Image + overlay content ── */}
            <div className="relative aspect-[3/4]">

                {/* Background image */}
                <Image
                    src={destination.image}
                    alt={altText}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Top gradient. title readability */}
                <div
                    className="absolute inset-x-0 top-0 pointer-events-none"
                    style={{
                        height: '55%',
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0) 100%)',
                        zIndex: 1,
                    }}
                />

                {/* Bottom gradient. description + CTA readability */}
                <div
                    className="absolute inset-x-0 bottom-0 pointer-events-none"
                    style={{
                        height: '62%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.42) 60%, rgba(0,0,0,0) 100%)',
                        zIndex: 1,
                    }}
                />

                {/* ── Title (top-left, inside image) ── */}
                <div
                    className="absolute top-0 inset-x-0 p-7 text-center pointer-events-none"
                    style={{ zIndex: 2 }}
                >
                    <h3
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(1.9rem, 3vw, 2.75rem)',
                            fontWeight: 700,
                            color: '#ffffff',
                            lineHeight: 1.1,
                            letterSpacing: '0.01em',
                            textShadow: '0 2px 14px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.65)',
                        }}
                    >
                        {destination.name}
                    </h3>
                </div>

                {/* ── Bottom: description + CTA ── */}
                <div
                    className="absolute bottom-0 left-0 right-0 p-7 flex flex-col items-center gap-5 text-center"
                    style={{ zIndex: 10 }}
                >
                    <p
                        className="line-clamp-3"
                        style={{
                            fontFamily: 'var(--font-inter)',
                            fontSize: 'clamp(1.0625rem, 1.2vw, 1.1875rem)',
                            fontWeight: 600,
                            color: '#ffffff',
                            lineHeight: 1.55,
                            letterSpacing: '0.005em',
                            textShadow: '0 2px 10px rgba(0,0,0,0.85), 0 1px 3px rgba(0,0,0,0.7)',
                            maxWidth: '24rem',
                        }}
                    >
                        {descriptionText}
                    </p>

                    {/*
                     * CTA button. reuses .bay-btn + .bay-btn-light from globals.css,
                     * identical to the "CONTATTACI" button in Header.tsx (line 201-204).
                     */}
                    <Link
                        href={href}
                        className="bay-btn bay-btn-light px-8 py-3 text-xs focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:outline-none"
                    >
                        {ctaText}
                    </Link>
                </div>

            </div>
        </div>
    );
}
