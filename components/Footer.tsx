'use client';

import Link from 'next/link';
import { Locale } from '@/i18n-config';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dict = Record<string, any>;

export default function Footer({ dict, lang }: { dict: Dict; lang: Locale }) {
    const [email, setEmail] = useState('');
    const f = dict.footer;

    return (
        <footer className="bg-cream border-t border-black/5">
            {/* Newsletter bar */}
            <div className="container mx-auto px-4 py-14">
                <div className="max-w-md mx-auto text-center mb-16">
                    <h3 className="text-h4 font-serif text-midnight mb-4">
                        {f.newsletter_title}
                    </h3>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={f.newsletter_placeholder}
                            className="flex-1 px-4 py-2.5 border border-black/10 rounded-full text-sm bg-white text-midnight outline-none focus:border-midnight/40 transition-colors"
                        />
                        <button className="btn btn-dark !py-2.5 !px-6 !text-xs">
                            {f.newsletter_button}
                        </button>
                    </div>
                </div>

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
                                    {f.link_services ?? 'Servizi'}
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
