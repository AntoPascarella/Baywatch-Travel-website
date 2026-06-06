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
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0) 100%)',
                        zIndex: 1,
                    }}
                />

                {/* Bottom gradient. description + CTA readability */}
                <div
                    className="absolute inset-x-0 bottom-0 pointer-events-none"
                    style={{
                        height: '55%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.28) 60%, rgba(0,0,0,0) 100%)',
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
                            fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)',
                            fontWeight: 400,
                            color: '#ffffff',
                            lineHeight: 1.1,
                            letterSpacing: '0.01em',
                            textShadow: '0 1px 8px rgba(0,0,0,0.25)',
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
                        className="line-clamp-2"
                        style={{
                            fontFamily: 'var(--font-inter)',
                            fontSize: '0.9375rem',
                            fontWeight: 400,
                            color: 'rgba(255,255,255,0.85)',
                            lineHeight: 1.65,
                            letterSpacing: '0.01em',
                            textShadow: '0 1px 4px rgba(0,0,0,0.30)',
                            maxWidth: '22rem',
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
