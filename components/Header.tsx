'use client';

import { useState, useEffect, useSyncExternalStore, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/i18n-config';
import { useHeaderState } from './hooks/useHeaderState';
import Logo from './Logo';

const MQ = '(prefers-reduced-motion: reduce)';
function subscribeRM(cb: () => void) {
    const mq = window.matchMedia(MQ);
    mq.addEventListener('change', cb);
    return () => mq.removeEventListener('change', cb);
}
function getRM() { return window.matchMedia(MQ).matches; }
function getRMServer() { return false; }

export default function Header({
    lang,
}: {
    dict?: Record<string, unknown>;
    lang: Locale;
}) {
    const pathname = usePathname();
    const { state, isCompact } = useHeaderState(60);
    const prefersReducedMotion = useSyncExternalStore(subscribeRM, getRM, getRMServer);

    const [bouncing, setBouncing] = useState(false);
    const prevStateRef = useRef(state);

    useEffect(() => {
        // Subtle bounce only on top → scrolled transition
        if (state === 'scrolled' && prevStateRef.current === 'top' && !prefersReducedMotion) {
            const t1 = setTimeout(() => setBouncing(true), 0);
            const t2 = setTimeout(() => setBouncing(false), 400);
            return () => { clearTimeout(t1); clearTimeout(t2); };
        }
        prevStateRef.current = state;
    }, [state, prefersReducedMotion]);

    // State B: dark overlay (brief overscroll at top)
    // State C: white translucent (scrolled into page)
    const isOverlay = state === 'top-overscroll';
    const isScrolled = state === 'scrolled';

    // White scrolled bg uses dark text; transparent/overlay states use white text
    const textColor = isScrolled ? '#1a1a1a' : '#ffffff';

    const links = [
        { href: `/${lang}`, label: 'HOME' },
        { href: `/${lang}/destinazioni`, label: 'DESTINAZIONI' },
        { href: `/${lang}/servizi`, label: 'SERVIZI' },
        { href: `/${lang}/chi-siamo-contatti`, label: 'CHI SIAMO' },
    ];

    return (
        <header
            data-state={state}
            className={[
                'bay-header',
                isCompact ? 'bay-header--compact' : '',
                bouncing && !prefersReducedMotion ? 'bay-header--bouncing' : '',
            ].filter(Boolean).join(' ')}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                height: isCompact ? '72px' : '88px',
                // State A: transparent | State B: dark overlay | State C: white translucent
                background: isOverlay
                    ? 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 100%)'
                    : isScrolled
                        ? 'rgba(255,255,255,0.78)'
                        : 'transparent',
                backdropFilter: isScrolled ? 'blur(8px)' : 'blur(0px)',
                WebkitBackdropFilter: isScrolled ? 'blur(8px)' : 'blur(0px)',
                borderBottom: isScrolled
                    ? '1px solid rgba(0,0,0,0.1)'
                    : '1px solid rgba(230,230,230,.65)',
                transition: prefersReducedMotion
                    ? 'none'
                    : 'height .3s ease-in-out, background .3s ease-in-out, transform .3s ease-in-out, box-shadow .3s ease-in-out, backdrop-filter .3s ease-in-out',
            }}
        >
            {/* Inner grid: [logo 1fr] [brand+nav auto] [phone+btn 1fr]. 24px gutters */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    alignItems: 'center',
                    height: '100%',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                }}
            >
                {/* ── LEFT: Logo (sole sull'orizzonte, eredita textColor via currentColor) ── */}
                <div style={{ marginLeft: '-2px' }}>
                    <Link
                        href={`/${lang}`}
                        aria-label="Baywatch Travel. Home"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            color: textColor,
                            opacity: 0.92,
                            transition: prefersReducedMotion ? 'none' : 'opacity .3s ease, color .3s ease',
                            textDecoration: 'none',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.92'; }}
                    >
                        <Logo variant="mark" size={isCompact ? 26 : 30} title="Baywatch Travel" />
                    </Link>
                </div>

                {/* ── CENTER: Brand mark + nav ── */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Link href={`/${lang}`} style={{ textDecoration: 'none', marginTop: '10px' }}>
                        <span style={{
                            display: 'block',
                            fontFamily: 'var(--font-display)',
                            fontSize: isCompact ? '28px' : '30px',
                            fontWeight: 400,
                            textTransform: 'uppercase',
                            letterSpacing: isCompact ? '0.18em' : '0.22em',
                            lineHeight: '1.1em',
                            color: textColor,
                            whiteSpace: 'nowrap',
                            transition: prefersReducedMotion
                                ? 'none'
                                : 'font-size .3s ease-in-out, letter-spacing .3s ease-in-out, color .3s ease-in-out',
                        }}>
                            Baywatch Travel
                        </span>
                    </Link>

                    <nav style={{ display: 'flex', alignItems: 'center', gap: '150px' }}>
                        {links.map(l => (
                            <Link
                                key={l.href}
                                href={l.href}
                                style={{
                                    fontFamily: 'var(--font-futura, var(--font-inter))',
                                    fontWeight: 600,
                                    fontSize: '15px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    lineHeight: '1em',
                                    color: textColor,
                                    opacity: pathname === l.href ? 1 : 0.65,
                                    transition: prefersReducedMotion
                                        ? 'none'
                                        : 'opacity .3s ease-in-out, color .3s ease-in-out',
                                    textDecoration: 'none',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* ── RIGHT: Phone + CONTATTACI button ── */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '24px' }}>
                    <a
                        href="tel:+390811234567"
                        className="bay-phone hidden lg:block"
                        style={{
                            fontFamily: 'var(--font-futura, var(--font-inter))',
                            fontWeight: 600,
                            fontSize: '16px',
                            letterSpacing: '0.1em',
                            color: textColor,
                            opacity: isScrolled ? 0.7 : 0.85,
                            transition: prefersReducedMotion
                                ? 'none'
                                : 'opacity .3s ease-in-out, color .3s ease-in-out',
                            textDecoration: 'none',
                        }}
                    >
                        +39 081 123 4567
                    </a>

                    <Link
                        href={`/${lang}/chi-siamo-contatti#contatti`}
                        className={`bay-btn ${isScrolled ? 'bay-btn-dark' : 'bay-btn-light'}`}
                    >
                        CONTATTACI
                    </Link>
                </div>
            </div>
        </header>
    );
}
