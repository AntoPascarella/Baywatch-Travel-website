'use client';

import { useState, useEffect, useSyncExternalStore, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Locale } from '@/i18n-config';
import type { Dictionary } from '@/lib/i18n/types';
import { useHeaderState } from './hooks/useHeaderState';
import LangSwitcher from './LangSwitcher';

const MQ = '(prefers-reduced-motion: reduce)';
function subscribeRM(cb: () => void) {
    const mq = window.matchMedia(MQ);
    mq.addEventListener('change', cb);
    return () => mq.removeEventListener('change', cb);
}
function getRM() { return window.matchMedia(MQ).matches; }
function getRMServer() { return false; }

// Matches Tailwind's `xl`: from here up the full desktop header fits, below it the menu button takes over.
const DESKTOP_MQ = '(min-width: 1280px)';
const FOCUSABLE = 'a[href], button:not([disabled])';
const PHONE = '+39 081 333 1096';
const EMAIL = 'info@baywatchtravel.it';

export default function Header({
    labels,
    lang,
}: {
    labels: Dictionary['nav'];
    lang: Locale;
}) {
    const pathname = usePathname();
    const { state, isCompact } = useHeaderState(60);
    const prefersReducedMotion = useSyncExternalStore(subscribeRM, getRM, getRMServer);

    const [bouncing, setBouncing] = useState(false);
    const prevStateRef = useRef(state);

    const [menuOpen, setMenuOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        // Subtle bounce only on top → scrolled transition
        if (state === 'scrolled' && prevStateRef.current === 'top' && !prefersReducedMotion) {
            const t1 = setTimeout(() => setBouncing(true), 0);
            const t2 = setTimeout(() => setBouncing(false), 400);
            return () => { clearTimeout(t1); clearTimeout(t2); };
        }
        prevStateRef.current = state;
    }, [state, prefersReducedMotion]);

    // While the mobile menu is open: lock page scroll, keep Tab inside header + menu, close on Escape
    // or when the window grows to the desktop layout.
    useEffect(() => {
        if (!menuOpen) return;

        const html = document.documentElement;
        const prevOverflow = html.style.overflow;
        html.style.overflow = 'hidden';

        const close = () => setMenuOpen(false);
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close();
                menuButtonRef.current?.focus();
                return;
            }
            if (e.key !== 'Tab') return;
            const items = [headerRef.current, panelRef.current]
                .flatMap((root) => Array.from(root?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []))
                .filter((el) => el.getClientRects().length > 0);
            if (!items.length) return;
            const first = items[0];
            const last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        const desktop = window.matchMedia(DESKTOP_MQ);

        document.addEventListener('keydown', onKeyDown);
        desktop.addEventListener('change', close);
        panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

        return () => {
            html.style.overflow = prevOverflow;
            document.removeEventListener('keydown', onKeyDown);
            desktop.removeEventListener('change', close);
        };
    }, [menuOpen]);

    // State B: dark overlay (brief overscroll at top)
    // State C: white translucent (scrolled into page, or mobile menu open)
    const isOverlay = state === 'top-overscroll' && !menuOpen;
    const isScrolled = state === 'scrolled';
    const isSolid = isScrolled || menuOpen;

    // White scrolled bg uses dark text; transparent/overlay states use white text
    const textColor = isSolid ? '#1a1a1a' : '#ffffff';

    const links = [
        { href: `/${lang}`, label: labels.home },
        { href: `/${lang}/destinazioni`, label: labels.destinations },
        { href: `/${lang}/servizi`, label: labels.services },
        { href: `/${lang}/chi-siamo-contatti`, label: labels.about },
    ];

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
        <header
            ref={headerRef}
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
                // Above the open menu panel (55) and the WhatsApp button (50)
                zIndex: menuOpen ? 60 : 50,
                // State A: transparent | State B: dark overlay | State C: white translucent
                background: isOverlay
                    ? 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 100%)'
                    : isSolid
                        ? 'rgba(255,255,255,0.78)'
                        : 'transparent',
                backdropFilter: isSolid ? 'blur(8px)' : 'blur(0px)',
                WebkitBackdropFilter: isSolid ? 'blur(8px)' : 'blur(0px)',
                borderBottom: isSolid
                    ? '1px solid rgba(0,0,0,0.1)'
                    : '1px solid rgba(230,230,230,.65)',
                transition: prefersReducedMotion
                    ? 'none'
                    : 'height .3s ease-in-out, background .3s ease-in-out, transform .3s ease-in-out, box-shadow .3s ease-in-out, backdrop-filter .3s ease-in-out',
            }}
        >
            {/* Inner grid: [logo 1fr] [brand+nav auto] [phone+btn 1fr]. 24px gutters */}
            <div
                className="px-4 sm:px-6"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                {/* ── LEFT: Logo (sole sull'orizzonte, eredita textColor via currentColor) ── */}
                <div style={{ marginLeft: '-2px' }}>
                    <Link
                        href={`/${lang}`}
                        aria-label="Baywatch Travel. Home"
                        onClick={closeMenu}
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
                        {/* Full lockup. white on transparent/overlay states, colored on scrolled light bg */}
                        <Image
                            src={isSolid ? '/images/logo-colored.png' : '/images/logo-white.png'}
                            alt="Baywatch Travel"
                            width={isSolid ? 509 : 499}
                            height={isSolid ? 241 : 229}
                            priority
                            className={isCompact ? 'h-8 xl:h-[42px]' : 'h-9 xl:h-12'}
                            style={{
                                display: 'block',
                                width: 'auto',
                                transition: prefersReducedMotion ? 'none' : 'height .3s ease-in-out, opacity .3s ease-in-out',
                            }}
                        />
                    </Link>
                </div>

                {/* ── CENTER: Brand mark + nav (wordmark from sm, nav from xl) ── */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px' }}>
                    <Link href={`/${lang}`} onClick={closeMenu} className="hidden sm:block xl:mt-[10px]" style={{ textDecoration: 'none' }}>
                        <span
                            className={isCompact
                                ? 'text-[20px] md:text-[24px] xl:text-[36px] tracking-[0.16em] xl:tracking-[0.18em]'
                                : 'text-[22px] md:text-[26px] xl:text-[39px] tracking-[0.18em] xl:tracking-[0.22em]'}
                            style={{
                                display: 'block',
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                lineHeight: '1.1em',
                                color: textColor,
                                whiteSpace: 'nowrap',
                                transition: prefersReducedMotion
                                    ? 'none'
                                    : 'font-size .3s ease-in-out, letter-spacing .3s ease-in-out, color .3s ease-in-out',
                            }}
                        >
                            Baywatch Travel
                        </span>
                    </Link>

                    <nav className="hidden xl:flex" style={{ alignItems: 'center', gap: '150px' }}>
                        {links.map(l => (
                            <Link
                                key={l.href}
                                href={l.href}
                                aria-current={pathname === l.href ? 'page' : undefined}
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

                {/* ── RIGHT: Language + phone + contact button (desktop) / menu button (mobile) ── */}
                <div className="flex items-center justify-end">
                    <div className="hidden xl:flex items-center gap-6">
                        <LangSwitcher scrolled={isScrolled} label={labels.language} />

                        <a
                            href="tel:+390813331096"
                            className="bay-phone hidden min-[1800px]:block"
                            style={{
                                whiteSpace: 'nowrap',
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
                            {PHONE}
                        </a>

                        <Link
                            href={`/${lang}/chi-siamo-contatti#contatti`}
                            className={`bay-btn ${isScrolled ? 'bay-btn-dark' : 'bay-btn-light'}`}
                        >
                            {labels.contact}
                        </Link>
                    </div>

                    <button
                        ref={menuButtonRef}
                        type="button"
                        className="xl:hidden -mr-2.5 flex h-11 w-11 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-current"
                        style={{ color: textColor, transition: prefersReducedMotion ? 'none' : 'color .3s ease-in-out' }}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        aria-label={menuOpen ? labels.close_menu : labels.open_menu}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <span aria-hidden="true" className="relative block h-[13px] w-[22px]">
                            <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-[top,transform] duration-300 ${menuOpen ? 'top-[6px] rotate-45' : 'top-0'}`} />
                            <span className={`absolute left-0 top-[6px] h-[1.5px] w-full bg-current transition-opacity duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-[top,transform] duration-300 ${menuOpen ? 'top-[6px] -rotate-45' : 'top-[12px]'}`} />
                        </span>
                    </button>
                </div>
            </div>
        </header>

        {/*
          Mobile menu. Sibling of <header>, not a child: the header's backdrop-filter would
          otherwise become the containing block of this fixed panel and clip it to the bar.
        */}
        <div
            id="mobile-menu"
            ref={panelRef}
            className={`xl:hidden fixed inset-0 overflow-y-auto overscroll-contain bg-white ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
            style={{
                zIndex: 55,
                paddingTop: 'var(--header-h)',
                // Visible (and focusable) at once on open; on close, hidden only after the fade-out.
                transition: menuOpen ? 'opacity .3s ease, visibility 0s' : 'opacity .3s ease, visibility 0s linear .3s',
            }}
        >
            <div className="container mx-auto px-6 sm:px-10 pt-6 pb-10 flex flex-col min-h-full">
                <nav aria-label={labels.menu}>
                    <ul className="border-t border-black/10">
                        {links.map((l) => (
                            <li key={l.href} className="border-b border-black/10">
                                <Link
                                    href={l.href}
                                    onClick={closeMenu}
                                    aria-current={pathname === l.href ? 'page' : undefined}
                                    className={`flex items-center justify-between gap-4 py-5 font-serif leading-tight transition-colors ${pathname === l.href ? 'text-midnight' : 'text-midnight/70 hover:text-midnight'}`}
                                    style={{ fontSize: 'clamp(1.75rem, 6vw, 2.25rem)' }}
                                >
                                    {l.label}
                                    <span aria-hidden="true" className="text-midnight/30 text-xl">&rarr;</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Link
                    href={`/${lang}/chi-siamo-contatti#contatti`}
                    onClick={closeMenu}
                    className="bay-btn bay-btn-dark mt-10 w-full !py-4 !text-xs !bg-midnight !text-white"
                >
                    {labels.contact}
                </Link>

                <div className="mt-8 flex flex-col items-start text-midnight/70" style={{ fontFamily: 'var(--font-inter)' }}>
                    <a href="tel:+390813331096" className="py-2.5 hover:text-midnight transition-colors">{PHONE}</a>
                    <a href={`mailto:${EMAIL}`} className="py-2.5 hover:text-midnight transition-colors">{EMAIL}</a>
                </div>

                <div className="mt-auto pt-10 flex">
                    <LangSwitcher scrolled label={labels.language} size="lg" onNavigate={closeMenu} />
                </div>
            </div>
        </div>
        </>
    );
}
