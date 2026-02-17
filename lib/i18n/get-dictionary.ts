import 'server-only';
import type { Locale } from '../../i18n-config';

// We enumerate all dictionaries here for better tree-shaking support
const dictionaries = {
    it: () => import('../../dictionaries/it.json').then((module) => module.default),
    en: () => import('../../dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
    if (dictionaries[locale as keyof typeof dictionaries]) {
        return dictionaries[locale as keyof typeof dictionaries]();
    }
    return dictionaries.it();
};
