import { i18n } from '@/i18n-config';
import '@/app/globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata = {
    title: 'Baywatch Travel',
    description: 'Your travel agency in Ischia',
};

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    return (
        <html lang={locale} className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
            <body className="antialiased">{children}</body>
        </html>
    );
}
