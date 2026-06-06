import * as React from 'react';

/**
 * Baywatch Travel. Logo
 *
 * Concept: sole sull'orizzonte. Cerchio sottile + retta orizzontale = sole
 * che tocca il mare. Geometria pura, due primitivi grafici, zero decorazione.
 *
 * Color: usa `currentColor`. Eredita dal parent (bianco su header trasparente,
 * scuro su header scrollato). Niente fill, solo stroke.
 *
 * Variants:
 *   - "mark"     → simbolo solo (favicon, avatar, header mobile compatto)
 *   - "wordmark" → testo solo "BAYWATCH TRAVEL"
 *   - "full"     → simbolo + wordmark inline orizzontale (default)
 *
 * Clear space minimo consigliato: altezza-x del simbolo (≈ size/2) su tutti i lati.
 * Dimensione minima leggibile: 20px (mark), 120px largo (full).
 */

type Variant = 'mark' | 'wordmark' | 'full';

type Props = {
    variant?: Variant;
    /** Pixel height of the symbol. Wordmark scales proportionally. */
    size?: number;
    className?: string;
    title?: string;
    style?: React.CSSProperties;
};

export default function Logo({
    variant = 'full',
    size = 28,
    className,
    title = 'Baywatch Travel',
    style,
}: Props) {
    const Mark = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            role="img"
            aria-label={title}
            style={{ display: 'block', flexShrink: 0, color: 'currentColor' }}
        >
            <title>{title}</title>
            {/* Sole / sigillo / baia */}
            <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.25" />
            {/* Orizzonte. taglia il sole appena sotto il centro */}
            <line
                x1="1.5"
                y1="14"
                x2="22.5"
                y2="14"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
            />
        </svg>
    );

    if (variant === 'mark') {
        return <span className={className} style={style}>{Mark}</span>;
    }

    const wordmark = (
        <span
            style={{
                fontFamily: 'var(--font-display)',
                fontSize: Math.round(size * 0.46),
                fontWeight: 400,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                lineHeight: 1,
                color: 'currentColor',
                whiteSpace: 'nowrap',
            }}
        >
            Baywatch&nbsp;Travel
        </span>
    );

    if (variant === 'wordmark') {
        return <span className={className} style={style}>{wordmark}</span>;
    }

    return (
        <span
            className={className}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: Math.round(size * 0.42),
                color: 'currentColor',
                ...style,
            }}
        >
            {Mark}
            {wordmark}
        </span>
    );
}
