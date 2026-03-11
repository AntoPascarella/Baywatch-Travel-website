'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/i18n-config';

export default function LangSwitcher({ scrolled = false }: { scrolled?: boolean }) {
    const pathname = usePathname();
    const router = useRouter();

    const redirectedPathName = (locale: string) => {
        if (!pathname) return '/';
        const segments = pathname.split('/');
        segments[1] = locale;
        return segments.join('/');
    };

    const currentLocale = pathname?.split('/')[1] || i18n.defaultLocale;

    return (
        <div className={`flex rounded-full p-0.5 border transition-colors duration-300 ${scrolled
                ? 'bg-black/5 border-black/10'
                : 'bg-white/10 border-white/20'
            }`}>
            {i18n.locales.map((locale) => {
                const isActive = currentLocale === locale;
                return (
                    <button
                        key={locale}
                        onClick={() => router.push(redirectedPathName(locale))}
                        className={`uppercase px-3 py-1 text-[10px] font-bold rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-sea-blue ${isActive
                                ? scrolled
                                    ? 'bg-midnight text-white shadow-sm'
                                    : 'bg-white text-midnight shadow-sm'
                                : scrolled
                                    ? 'text-midnight/50 hover:text-midnight'
                                    : 'text-white/60 hover:text-white'
                            }`}
                        aria-label={`Switch to ${locale === 'it' ? 'Italiano' : 'English'}`}
                        aria-current={isActive ? 'true' : undefined}
                    >
                        {locale}
                    </button>
                );
            })}
        </div>
    );
}
