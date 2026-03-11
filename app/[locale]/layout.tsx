import { i18n } from '@/i18n-config';
import '@/app/globals.css';
import { Inter, DM_Serif_Display, Josefin_Sans, Cormorant_Garamond, Jost } from 'next/font/google';



const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const dmSerif = DM_Serif_Display({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap',
    style: ['normal', 'italic'],
});

// Futura Std substitute — closest geometric sans on Google Fonts
const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    variable: '--font-futura',
    weight: ['400', '600', '700'],
    display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
    weight: ['600', '700'],
    subsets: ['latin'],
    variable: '--font-cormorant',
    display: 'swap',
});

const jost = Jost({
    subsets: ['latin'],
    variable: '--font-jost',
    weight: ['300', '400'],
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
        <html lang={locale} className={`${inter.variable} ${dmSerif.variable} ${josefinSans.variable} ${cormorantGaramond.variable} ${jost.variable}`} suppressHydrationWarning>
            <body className="antialiased">{children}</body>
        </html>
    );
}
