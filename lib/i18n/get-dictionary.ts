import 'server-only';
import type { Locale } from '../../i18n-config';
import type { Dictionary } from './types';

// We enumerate all dictionaries here for better tree-shaking support
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
    it: () => import('../../dictionaries/it.json').then((module) => module.default),
    en: () => import('../../dictionaries/en.json').then((module) => module.default),
    de: () => import('../../dictionaries/de.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
    return (dictionaries[locale] ?? dictionaries.it)();
};
