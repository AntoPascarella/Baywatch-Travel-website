import { i18n } from '@/i18n-config';
import '@/app/globals.css';
import { Inter, EB_Garamond, Cormorant_Garamond, Jost } from 'next/font/google';


// Body. Inter, neutral sans
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

// Display/headings. EB Garamond (matches sailingcollective journal; thin luxury serif)
const ebGaramond = EB_Garamond({
    subsets: ['latin'],
    variable: '--font-display',
    weight: ['400', '500', '600'],
    style: ['normal', 'italic'],
    display: 'swap',
});

// Accent serif. Cormorant Garamond (Sang Bleu substitute, thin elegant)
const cormorantGaramond = Cormorant_Garamond({
    weight: ['300', '400', '500', '600'],
    subsets: ['latin'],
    variable: '--font-cormorant',
    style: ['normal', 'italic'],
    display: 'swap',
});

// Futura Std substitute. Jost, geometric sans with thin weights
const jost = Jost({
    subsets: ['latin'],
    variable: '--font-jost',
    weight: ['200', '300', '400', '500', '600'],
    style: ['normal', 'italic'],
    display: 'swap',
});

export const metadata = {
    title: 'Baywatch Travel',
    description: 'La tua agenzia di viaggi a Ischia',
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
        <html lang={locale} className={`${inter.variable} ${ebGaramond.variable} ${cormorantGaramond.variable} ${jost.variable}`} suppressHydrationWarning>
            <body className="antialiased">{children}</body>
        </html>
    );
}
