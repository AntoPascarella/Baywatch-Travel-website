export type Destination = {
    slug: string;
    name: string;
    subTitle: string;
    region: string;
    types: ('Beach' | 'Culture' | 'Nature' | 'Food' | 'History')[];
    bestSeason: string;
    shortDescription: string;
    highlights: string[];
    image: string;
    alt: { it: string; en: string };
};

export const destinations: Destination[] = [
    {
        slug: 'ischia',
        name: 'Ischia',
        subTitle: 'L\u2019Isola Verde',
        region: 'Campania',
        types: ['Beach', 'Nature', 'Food'],
        bestSeason: 'Spring / Summer',
        shortDescription: 'Famous for its thermal waters, lush gardens, and the Aragonese Castle.',
        highlights: ['Castello Aragonese', 'Giardini La Mortella', 'Sant\u2019Angelo', 'Terme di Poseidon'],
        image: '/images/destinations/ischia/cover.svg',
        alt: {
            it: 'Vista panoramica di Ischia con il Castello Aragonese',
            en: 'Panoramic view of Ischia with the Aragonese Castle',
        },
    },
    {
        slug: 'capri',
        name: 'Capri',
        subTitle: 'The Pearl of the Mediterranean',
        region: 'Campania',
        types: ['Culture', 'History', 'Nature'],
        bestSeason: 'Spring / Summer',
        shortDescription: 'Iconic sea stacks, the Blue Grotto, and timeless elegance.',
        highlights: ['Grotta Azzurra', 'Faraglioni', 'Piazzetta', 'Villa San Michele'],
        image: '/images/destinations/capri/cover.svg',
        alt: {
            it: 'I Faraglioni di Capri al tramonto',
            en: 'Capri\u2019s Faraglioni sea stacks at sunset',
        },
    },
    {
        slug: 'procida',
        name: 'Procida',
        subTitle: 'Capital of Culture',
        region: 'Campania',
        types: ['History', 'Culture', 'Food'],
        bestSeason: 'Spring / Autumn',
        shortDescription: 'Colorful fishermen\u2019s houses and a peaceful atmosphere.',
        highlights: ['Corricella', 'Terra Murata', 'Chiaiolella'],
        image: '/images/destinations/procida/cover.svg',
        alt: {
            it: 'Le case colorate di Marina Corricella a Procida',
            en: 'Colorful houses of Marina Corricella in Procida',
        },
    },
    {
        slug: 'napoli',
        name: 'Napoli',
        subTitle: 'A City of Layers',
        region: 'Campania',
        types: ['History', 'Culture', 'Food'],
        bestSeason: 'All year',
        shortDescription: 'The vibrant heart of the south, pizza, and history.',
        highlights: ['Spaccanapoli', 'Vesuvio', 'Museo Archeologico', 'Piazza del Plebiscito'],
        image: '/images/destinations/napoli/cover.svg',
        alt: {
            it: 'Il lungomare di Napoli con il Vesuvio sullo sfondo',
            en: 'Naples waterfront with Vesuvius in the background',
        },
    },
    {
        slug: 'sorrento',
        name: 'Sorrento',
        subTitle: 'Gateway to the Amalfi Coast',
        region: 'Campania',
        types: ['Nature', 'Food', 'History'],
        bestSeason: 'Spring / Autumn',
        shortDescription: 'Lemons, sea views, and a romantic atmosphere.',
        highlights: ['Vallone dei Mulini', 'Marina Grande', 'Chiostro di San Francesco'],
        image: '/images/destinations/sorrento/cover.svg',
        alt: {
            it: 'Scogliere di Sorrento e il golfo al tramonto',
            en: 'Sorrento cliffs and the gulf at sunset',
        },
    },
    {
        slug: 'amalfi',
        name: 'Amalfi',
        subTitle: 'The Maritime Republic',
        region: 'Campania',
        types: ['History', 'Beach', 'Nature'],
        bestSeason: 'Spring / Summer',
        shortDescription: 'A historic powerhouse with stunning coastal views.',
        highlights: ['Duomo di Amalfi', 'Valle delle Ferriere', 'Paper Museum'],
        image: '/images/destinations/amalfi/cover.svg',
        alt: {
            it: 'Il Duomo di Amalfi e la costiera',
            en: 'Amalfi Cathedral and the coastline',
        },
    },
    {
        slug: 'pompei',
        name: 'Pompei',
        subTitle: 'Frozen in Time',
        region: 'Campania',
        types: ['History', 'Culture'],
        bestSeason: 'Spring / Autumn',
        shortDescription: 'The world\u2019s most famous archaeological site.',
        highlights: ['Villa of Mysteries', 'The Forum', 'Amphitheatre'],
        image: '/images/destinations/pompei/cover.svg',
        alt: {
            it: 'Le rovine di Pompei con il Vesuvio',
            en: 'Ruins of Pompeii with Vesuvius',
        },
    },
    {
        slug: 'sicilia',
        name: 'Sicilia',
        subTitle: 'Island of the Sun',
        region: 'Sicily',
        types: ['History', 'Beach', 'Food', 'Culture'],
        bestSeason: 'Spring / Autumn',
        shortDescription: 'Ancient Greek temples, baroque towns, and Etna.',
        highlights: ['Etna', 'Taormina', 'Valle dei Templi', 'Palermo'],
        image: '/images/destinations/sicilia/cover.svg',
        alt: {
            it: 'Il teatro greco di Taormina con l\u2019Etna',
            en: 'Greek theatre of Taormina with Mount Etna',
        },
    },
    {
        slug: 'sardegna',
        name: 'Sardegna',
        subTitle: 'Emerald Coast',
        region: 'Sardinia',
        types: ['Beach', 'Nature'],
        bestSeason: 'Summer',
        shortDescription: 'Crystal clear waters and wild interior landscapes.',
        highlights: ['Costa Smeralda', 'La Maddalena', 'Nuraghe Su Nuraxi'],
        image: '/images/destinations/sardegna/cover.svg',
        alt: {
            it: 'Acque cristalline della Costa Smeralda in Sardegna',
            en: 'Crystal clear waters of Costa Smeralda in Sardinia',
        },
    },
    {
        slug: 'roma',
        name: 'Roma',
        subTitle: 'The Eternal City',
        region: 'Lazio',
        types: ['History', 'Culture', 'Food'],
        bestSeason: 'Spring / Autumn',
        shortDescription: 'The capital of the world, where history lives.',
        highlights: ['Colosseum', 'Vatican', 'Pantheon', 'Trevi Fountain'],
        image: '/images/destinations/roma/cover.svg',
        alt: {
            it: 'Il Colosseo di Roma al tramonto',
            en: 'Rome\u2019s Colosseum at sunset',
        },
    },
    {
        slug: 'toscana',
        name: 'Toscana',
        subTitle: 'Renaissance & Wine',
        region: 'Tuscany',
        types: ['Culture', 'Food', 'Nature', 'History'],
        bestSeason: 'Spring / Autumn',
        shortDescription: 'Rolling hills, vineyards, and art cities.',
        highlights: ['Florence', 'Siena', 'Val d\u2019Orcia', 'Pisa'],
        image: '/images/destinations/toscana/cover.svg',
        alt: {
            it: 'Colline toscane e cipressi della Val d\u2019Orcia',
            en: 'Tuscan hills and cypress trees in Val d\u2019Orcia',
        },
    },
];
