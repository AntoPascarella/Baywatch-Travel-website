import Link from 'next/link';
import { Locale } from '@/i18n-config';
import type { Dictionary } from '@/lib/i18n/types';

export default function Footer({ dict, lang }: { dict: Dictionary; lang: Locale }) {
    const f = dict.footer;

    return (
        <footer className="bg-cream border-t border-black/5">
            <div className="container mx-auto px-4 py-14">
                {/* Columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                    {/* Sito */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-midnight mb-4">
                            {f.col_site}
                        </h4>
                        <ul className="space-y-2.5">
                            <li>
                                <Link href={`/${lang}`} className="text-sm text-midnight/50 hover:text-midnight transition-colors">
                                    {f.link_home}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/destinazioni`} className="text-sm text-midnight/50 hover:text-midnight transition-colors">
                                    {f.link_destinations}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/servizi`} className="text-sm text-midnight/50 hover:text-midnight transition-colors">
                                    {f.link_services}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/chi-siamo-contatti`} className="text-sm text-midnight/50 hover:text-midnight transition-colors">
                                    {f.link_about}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Informazioni */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-midnight mb-4">
                            {f.col_info}
                        </h4>
                        <ul className="space-y-2.5">
                            <li>
                                <Link href="#" className="text-sm text-midnight/50 hover:text-midnight transition-colors">
                                    {f.link_faq}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-midnight/50 hover:text-midnight transition-colors">
                                    {f.link_terms}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/privacy`} className="text-sm text-midnight/50 hover:text-midnight transition-colors">
                                    {f.link_privacy}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/cookie`} className="text-sm text-midnight/50 hover:text-midnight transition-colors">
                                    {f.link_cookies}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-midnight mb-4">
                            {f.col_contact}
                        </h4>
                        <ul className="space-y-2.5">
                            <li>
                                <a href={`mailto:${f.contact_email}`} className="text-sm text-midnight/50 hover:text-midnight transition-colors">
                                    {f.contact_email}
                                </a>
                            </li>
                            <li>
                                <a href={`tel:${f.contact_phone.replace(/\s/g, '')}`} className="text-sm text-midnight/50 hover:text-midnight transition-colors">
                                    {f.contact_phone}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-black/5">
                <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center text-xs text-midnight/30 gap-2">
                    <p>&copy; {new Date().getFullYear()} Baywatch Travel</p>
                    <p>Casamicciola Terme, Ischia</p>
                </div>
            </div>
        </footer>
    );
}
