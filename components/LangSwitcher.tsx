'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { i18n, type Locale } from '@/i18n-config';

// Each language is named in its own language, so it is recognisable whatever the current page is in.
const LANGUAGE_NAMES: Record<Locale, string> = { it: 'Italiano', en: 'English', de: 'Deutsch' };

export default function LangSwitcher({ scrolled = false, label }: { scrolled?: boolean; label: string }) {
    const pathname = usePathname();
    const router = useRouter();

    const redirectedPathName = (locale: string) => {
        if (!pathname) return `/${locale}`;
        const segments = pathname.split('/');
        segments[1] = locale;
        return segments.join('/');
    };

    const currentLocale = pathname?.split('/')[1] || i18n.defaultLocale;

    return (
        <nav
            aria-label={label}
            className={`flex rounded-full p-0.5 border transition-colors duration-300 ${scrolled
                ? 'bg-black/5 border-black/10'
                : 'bg-white/10 border-white/20'
            }`}
        >
            {i18n.locales.map((locale) => {
                const isActive = currentLocale === locale;
                const href = redirectedPathName(locale);
                return (
                    <Link
                        key={locale}
                        href={href}
                        hrefLang={locale}
                        lang={locale}
                        onClick={(e) => {
                            // Keep the visitor on the same section (e.g. #contatti) in the other language.
                            const { hash } = window.location;
                            if (!hash) return;
                            e.preventDefault();
                            router.push(href + hash);
                        }}
                        className={`uppercase px-3 py-1 text-[10px] font-bold rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-black/40 ${isActive
                                ? scrolled
                                    ? 'bg-midnight text-white shadow-sm'
                                    : 'bg-white text-midnight shadow-sm'
                                : scrolled
                                    ? 'text-midnight/50 hover:text-midnight'
                                    : 'text-white/60 hover:text-white'
                            }`}
                        aria-label={LANGUAGE_NAMES[locale]}
                        aria-current={isActive ? 'true' : undefined}
                    >
                        {locale}
                    </Link>
                );
            })}
        </nav>
    );
}
