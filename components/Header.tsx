'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LangSwitcher from './LangSwitcher';
import { Locale } from '@/i18n-config';
import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dict = Record<string, any>;

export default function Header({
    dict,
    lang,
}: {
    dict: Dict;
    lang: Locale;
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: `/${lang}`, label: dict.nav.home },
        { href: `/${lang}/destinazioni`, label: dict.nav.destinations },
        { href: `/${lang}/chi-siamo-contatti`, label: dict.nav.contact },
    ];

    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-midnight shadow-md border-b border-white/5 transition-colors duration-300">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href={`/${lang}`} className="flex items-center gap-2 group">
                    <span className="text-2xl text-white flex items-baseline">
                        <span className="font-serif italic font-normal text-3xl mr-1">B</span>
                        <span className="font-serif italic font-normal">Baywatch Travel</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map(link => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium tracking-widest uppercase transition-all duration-200 
                                    ${isActive
                                        ? 'text-white border-b-2 border-soft-coral pb-1'
                                        : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white/20 pb-1'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-6">
                    <LangSwitcher />

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-midnight border-t border-white/10 shadow-lg animate-[faqOpen_0.3s_ease]">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                        {navLinks.map(link => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium tracking-widest uppercase py-3 px-4 rounded-lg transition-colors
                                        ${isActive
                                            ? 'bg-white/10 text-white'
                                            : 'text-white/80 hover:text-white hover:bg-white/5'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
}
