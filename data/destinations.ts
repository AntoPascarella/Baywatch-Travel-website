import type { Locale } from '@/i18n-config';

type TranslatedFields = {
    name: string;
    subTitle: string;
    region: string;
    bestSeason: string;
    shortDescription: string;
    highlights: string[];
};

// Top-level text fields are Italian; `en` holds the English version of the same fields.
export type Destination = TranslatedFields & {
    slug: string;
    types: ('Mare' | 'Cultura' | 'Natura' | 'Gastronomia' | 'Storia')[];
    image: string;
    alt: { it: string; en: string };
    en: TranslatedFields;
};

export const destinations: Destination[] = [
    {
        slug: 'ischia',
        name: 'Ischia',
        subTitle: 'L’Isola Verde',
        region: 'Campania',
        types: ['Mare', 'Natura', 'Gastronomia'],
        bestSeason: 'Aprile / Ottobre',
        shortDescription: 'Terme che fumano in spiaggia, giardini fitti, il Castello Aragonese sull’acqua.',
        highlights: ['Castello Aragonese', 'Giardini La Mortella', 'Sant’Angelo', 'Terme di Poseidon', 'Villa Arbusto'],
        image: 'https://images.pexels.com/photos/38542043/pexels-photo-38542043.jpeg?auto=compress&cs=tinysrgb&w=2000',
        alt: {
            it: 'Ombrelloni sulla spiaggia con il Castello Aragonese di Ischia sullo sfondo',
            en: 'Beach umbrellas with the Aragonese Castle of Ischia in the background',
        },
        en: {
            name: 'Ischia',
            subTitle: 'The Green Island',
            region: 'Campania',
            bestSeason: 'April to October',
            shortDescription: 'Thermal springs steaming on the beach, lush gardens, the Aragonese Castle rising from the water.',
            highlights: ['Aragonese Castle', 'La Mortella Gardens', 'Sant’Angelo', 'Poseidon Gardens', 'Villa Arbusto'],
        },
    },
    {
        slug: 'capri',
        name: 'Capri',
        subTitle: 'Eleganza sospesa',
        region: 'Campania',
        types: ['Cultura', 'Storia', 'Natura'],
        bestSeason: 'Aprile / Ottobre',
        shortDescription: 'Faraglioni, Grotta Azzurra, Villa Lysis. Eleganza che non passa di moda.',
        highlights: ['Grotta Azzurra', 'Faraglioni', 'Piazzetta', 'Villa San Michele', 'Villa Lysis'],
        image: '/images/destinations/capri/Capri.jpg',
        alt: {
            it: 'I Faraglioni di Capri al tramonto',
            en: 'Capri’s Faraglioni sea stacks at sunset',
        },
        en: {
            name: 'Capri',
            subTitle: 'Timeless elegance',
            region: 'Campania',
            bestSeason: 'April to October',
            shortDescription: 'The Faraglioni, the Blue Grotto, Villa Lysis. Elegance that never goes out of style.',
            highlights: ['Blue Grotto', 'Faraglioni', 'The Piazzetta', 'Villa San Michele', 'Villa Lysis'],
        },
    },
    {
        slug: 'procida',
        name: 'Procida',
        subTitle: 'Capitale della Cultura',
        region: 'Campania',
        types: ['Storia', 'Cultura', 'Gastronomia'],
        bestSeason: 'Primavera / Autunno',
        shortDescription: 'Case color confetto, barche di pescatori, giornate senza fretta.',
        highlights: ['Corricella', 'Terra Murata', 'Chiaiolella', 'Lingua di Procida'],
        image: '/images/destinations/procida/procida.jpg',
        alt: {
            it: 'Le case colorate di Marina Corricella a Procida',
            en: 'Colorful houses of Marina Corricella in Procida',
        },
        en: {
            name: 'Procida',
            subTitle: 'Capital of Culture',
            region: 'Campania',
            bestSeason: 'Spring / Autumn',
            shortDescription: 'Pastel houses, fishing boats, unhurried days.',
            highlights: ['Corricella', 'Terra Murata', 'Chiaiolella', 'Lingua di Procida'],
        },
    },
    {
        slug: 'napoli',
        name: 'Napoli',
        subTitle: 'Mille volti, una città',
        region: 'Campania',
        types: ['Storia', 'Cultura', 'Gastronomia'],
        bestSeason: 'Tutto l’anno',
        shortDescription: 'Pizza, vicoli, Vesuvio sullo sfondo. Una città che non ti chiede permesso.',
        highlights: ['Spaccanapoli', 'Vesuvio', 'MANN', 'Cristo Velato', 'Murales Maradona', 'Certosa di San Martino'],
        image: '/images/destinations/napoli/Napoli.jpg',
        alt: {
            it: 'Il lungomare di Napoli con il Vesuvio sullo sfondo',
            en: 'Naples waterfront with Vesuvius in the background',
        },
        en: {
            name: 'Naples',
            subTitle: 'A thousand faces, one city',
            region: 'Campania',
            bestSeason: 'All year round',
            shortDescription: 'Pizza, narrow alleys, Vesuvius in the background. A city that doesn’t ask your permission.',
            highlights: ['Spaccanapoli', 'Vesuvius', 'MANN', 'Veiled Christ', 'Maradona mural', 'Certosa di San Martino'],
        },
    },
    {
        slug: 'sicilia',
        name: 'Sicilia',
        subTitle: 'L’Isola del Sole',
        region: 'Sicilia',
        types: ['Storia', 'Mare', 'Gastronomia', 'Cultura'],
        bestSeason: 'Primavera / Autunno',
        shortDescription: 'Templi greci, borghi barocchi, l’Etna fumante. Un viaggio dentro al viaggio.',
        highlights: ['Etna', 'Taormina', 'Valle dei Templi', 'Palermo', 'Ortigia'],
        image: '/images/destinations/sicilia/Sicilia.jpg',
        alt: {
            it: 'Il teatro greco di Taormina con l’Etna',
            en: 'Greek theatre of Taormina with Mount Etna',
        },
        en: {
            name: 'Sicily',
            subTitle: 'The Island of the Sun',
            region: 'Sicily',
            bestSeason: 'Spring / Autumn',
            shortDescription: 'Greek temples, Baroque towns, smoking Etna. A journey within a journey.',
            highlights: ['Etna', 'Taormina', 'Valley of the Temples', 'Palermo', 'Ortigia'],
        },
    },
    {
        slug: 'sardegna',
        name: 'Sardegna',
        subTitle: 'Costa Smeralda',
        region: 'Sardegna',
        types: ['Mare', 'Natura'],
        bestSeason: 'Estate',
        shortDescription: 'Acque cristalline, calette nascoste, entroterra ostinato.',
        highlights: ['Costa Smeralda', 'La Maddalena', 'Nuraghe Su Nuraxi', 'Alghero'],
        image: '/images/destinations/sardegna/Sardegna.jpg',
        alt: {
            it: 'Acque cristalline della Costa Smeralda in Sardegna',
            en: 'Crystal clear waters of Costa Smeralda in Sardinia',
        },
        en: {
            name: 'Sardinia',
            subTitle: 'Costa Smeralda',
            region: 'Sardinia',
            bestSeason: 'Summer',
            shortDescription: 'Crystal-clear water, hidden coves, a stubborn interior.',
            highlights: ['Costa Smeralda', 'La Maddalena', 'Su Nuraxi nuraghe', 'Alghero'],
        },
    },
    {
        slug: 'puglia',
        name: 'Puglia',
        subTitle: 'Bianco su blu',
        region: 'Puglia',
        types: ['Mare', 'Cultura', 'Gastronomia', 'Storia'],
        bestSeason: 'Primavera / Estate / Autunno',
        shortDescription: 'Trulli, masserie, città bianche e un mare che cambia colore ogni cento metri.',
        highlights: ['Alberobello', 'Polignano a Mare', 'Ostuni', 'Lecce', 'Salento'],
        image: 'https://images.pexels.com/photos/17697735/pexels-photo-17697735.jpeg?auto=compress&cs=tinysrgb&w=2000',
        alt: {
            it: 'Polignano a Mare arroccata sulla scogliera della Puglia',
            en: 'Polignano a Mare perched on Puglia’s cliffs',
        },
        en: {
            name: 'Puglia',
            subTitle: 'White on blue',
            region: 'Puglia',
            bestSeason: 'Spring / Summer / Autumn',
            shortDescription: 'Trulli, masserie, white towns and a sea that changes colour every hundred metres.',
            highlights: ['Alberobello', 'Polignano a Mare', 'Ostuni', 'Lecce', 'Salento'],
        },
    },
    {
        slug: 'calabria',
        name: 'Calabria',
        subTitle: 'Costa degli Dei',
        region: 'Calabria',
        types: ['Mare', 'Natura', 'Storia'],
        bestSeason: 'Estate / Inizio autunno',
        shortDescription: 'Tropea, Scilla, scogliere a picco e un mare che sembra dei Caraibi.',
        highlights: ['Tropea', 'Scilla', 'Capo Vaticano', 'Pizzo', 'Costa degli Dei'],
        image: 'https://images.pexels.com/photos/36681293/pexels-photo-36681293.jpeg?auto=compress&cs=tinysrgb&w=2000',
        alt: {
            it: 'Tropea, scogliera e mare turchese della Costa degli Dei',
            en: 'Tropea, cliffs and turquoise sea of the Coast of the Gods',
        },
        en: {
            name: 'Calabria',
            subTitle: 'The Coast of the Gods',
            region: 'Calabria',
            bestSeason: 'Summer / Early autumn',
            shortDescription: 'Tropea, Scilla, sheer cliffs and a sea that looks like the Caribbean.',
            highlights: ['Tropea', 'Scilla', 'Capo Vaticano', 'Pizzo', 'Coast of the Gods'],
        },
    },
    {
        slug: 'roma',
        name: 'Roma',
        subTitle: 'La Città Eterna',
        region: 'Lazio',
        types: ['Storia', 'Cultura', 'Gastronomia'],
        bestSeason: 'Tutto l’anno',
        shortDescription: 'Duemila anni di storia ad ogni angolo. La Città Eterna sa ancora sorprendere.',
        highlights: ['Colosseo', 'Vaticano', 'Pantheon', 'Fontana di Trevi'],
        image: '/images/destinations/roma/Roma.jpg',
        alt: {
            it: 'Il Colosseo di Roma al tramonto',
            en: 'Rome’s Colosseum at sunset',
        },
        en: {
            name: 'Rome',
            subTitle: 'The Eternal City',
            region: 'Lazio',
            bestSeason: 'All year round',
            shortDescription: 'Two thousand years of history around every corner. The Eternal City can still surprise you.',
            highlights: ['Colosseum', 'Vatican', 'Pantheon', 'Trevi Fountain'],
        },
    },
    {
        slug: 'toscana',
        name: 'Toscana',
        subTitle: 'Rinascimento e vigne',
        region: 'Toscana',
        types: ['Cultura', 'Gastronomia', 'Natura', 'Storia'],
        bestSeason: 'Primavera / Autunno',
        shortDescription: 'Colline ondulate, cipressi, borghi medievali, vini che sanno di terra.',
        highlights: ['Firenze', 'Siena', 'Val d’Orcia', 'Pisa'],
        image: '/images/destinations/toscana/Toscana.jpg',
        alt: {
            it: 'Colline toscane e cipressi della Val d’Orcia',
            en: 'Tuscan hills and cypress trees in Val d’Orcia',
        },
        en: {
            name: 'Tuscany',
            subTitle: 'Renaissance and vineyards',
            region: 'Tuscany',
            bestSeason: 'Spring / Autumn',
            shortDescription: 'Rolling hills, cypresses, medieval villages, wines that taste of the land.',
            highlights: ['Florence', 'Siena', 'Val d’Orcia', 'Pisa'],
        },
    },
];

/** Destinations with their text fields in the requested language. */
export function getDestinations(locale: Locale): Destination[] {
    if (locale === 'it') return destinations;
    return destinations.map((d) => ({ ...d, ...d[locale] }));
}
