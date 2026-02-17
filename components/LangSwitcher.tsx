'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/i18n-config';

export default function LangSwitcher() {
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
        <div className="flex bg-sea-blue/10 rounded-full p-1 border border-white/10">
            {i18n.locales.map((locale) => {
                const isActive = currentLocale === locale;
                return (
                    <button
                        key={locale}
                        onClick={() => router.push(redirectedPathName(locale))}
                        className={`uppercase px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-sea-blue ${isActive
                                ? 'bg-sea-blue text-midnight shadow-sm'
                                : 'text-white/70 hover:text-white'
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
