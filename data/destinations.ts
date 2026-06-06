export type Destination = {
    slug: string;
    name: string;
    subTitle: string;
    region: string;
    types: ('Mare' | 'Cultura' | 'Natura' | 'Gastronomia' | 'Storia')[];
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
        subTitle: 'L’Isola Verde',
        region: 'Campania',
        types: ['Mare', 'Natura', 'Gastronomia'],
        bestSeason: 'Primavera / Estate',
        shortDescription: 'Terme fumanti, giardini rigogliosi e il Castello Aragonese a picco sul mare.',
        highlights: ['Castello Aragonese', 'Giardini La Mortella', 'Sant’Angelo', 'Terme di Poseidon'],
        image: '/images/destinations/ischia/Ischia.jpg',
        alt: {
            it: 'Vista panoramica di Ischia con il Castello Aragonese',
            en: 'Panoramic view of Ischia with the Aragonese Castle',
        },
    },
    {
        slug: 'capri',
        name: 'Capri',
        subTitle: 'La Perla del Mediterraneo',
        region: 'Campania',
        types: ['Cultura', 'Storia', 'Natura'],
        bestSeason: 'Primavera / Estate',
        shortDescription: 'Faraglioni leggendari, Grotta Azzurra e un’eleganza che non passa mai di moda.',
        highlights: ['Grotta Azzurra', 'Faraglioni', 'Piazzetta', 'Villa San Michele'],
        image: '/images/destinations/capri/Capri.jpg',
        alt: {
            it: 'I Faraglioni di Capri al tramonto',
            en: 'Capri’s Faraglioni sea stacks at sunset',
        },
    },
    {
        slug: 'procida',
        name: 'Procida',
        subTitle: 'Capitale della Cultura',
        region: 'Campania',
        types: ['Storia', 'Cultura', 'Gastronomia'],
        bestSeason: 'Primavera / Autunno',
        shortDescription: 'Case color pastello, barche dei pescatori e ritmi lenti, un sogno ad occhi aperti.',
        highlights: ['Corricella', 'Terra Murata', 'Chiaiolella'],
        image: '/images/destinations/procida/procida.jpg',
        alt: {
            it: 'Le case colorate di Marina Corricella a Procida',
            en: 'Colorful houses of Marina Corricella in Procida',
        },
    },
    {
        slug: 'napoli',
        name: 'Napoli',
        subTitle: 'La Città dai Mille Volti',
        region: 'Campania',
        types: ['Storia', 'Cultura', 'Gastronomia'],
        bestSeason: 'Tutto l’anno',
        shortDescription: 'Pizza, vicoli, Vesuvio all’orizzonte: una città che si respira a pieni polmoni.',
        highlights: ['Spaccanapoli', 'Vesuvio', 'Museo Archeologico', 'Piazza del Plebiscito'],
        image: '/images/destinations/napoli/Napoli.jpg',
        alt: {
            it: 'Il lungomare di Napoli con il Vesuvio sullo sfondo',
            en: 'Naples waterfront with Vesuvius in the background',
        },
    },
    {
        slug: 'sorrento',
        name: 'Sorrento',
        subTitle: 'Porta della Costiera',
        region: 'Campania',
        types: ['Natura', 'Gastronomia', 'Storia'],
        bestSeason: 'Primavera / Autunno',
        shortDescription: 'Limoni profumati, terrazze sul golfo e una dolcezza che resta dentro.',
        highlights: ['Vallone dei Mulini', 'Marina Grande', 'Chiostro di San Francesco'],
        image: '/images/destinations/sorrento/Sorrento.jpg',
        alt: {
            it: 'Scogliere di Sorrento e il golfo al tramonto',
            en: 'Sorrento cliffs and the gulf at sunset',
        },
    },
    {
        slug: 'amalfi',
        name: 'Amalfi',
        subTitle: 'L’Antica Repubblica Marinara',
        region: 'Campania',
        types: ['Storia', 'Mare', 'Natura'],
        bestSeason: 'Primavera / Estate',
        shortDescription: 'Antica repubblica marinara, scorci da cartolina e il mare che sembra dipinto.',
        highlights: ['Duomo di Amalfi', 'Valle delle Ferriere', 'Museo della Carta'],
        image: '/images/destinations/amalfi/Amalfi.jpg',
        alt: {
            it: 'Il Duomo di Amalfi e la costiera',
            en: 'Amalfi Cathedral and the coastline',
        },
    },
    {
        slug: 'pompei',
        name: 'Pompei',
        subTitle: 'Ferma nel Tempo',
        region: 'Campania',
        types: ['Storia', 'Cultura'],
        bestSeason: 'Primavera / Autunno',
        shortDescription: 'Una città romana congelata nel tempo, sotto lo sguardo silenzioso del Vesuvio.',
        highlights: ['Villa dei Misteri', 'Il Foro', 'Anfiteatro'],
        image: '/images/destinations/pompei/Pompei.jpg',
        alt: {
            it: 'Le rovine di Pompei con il Vesuvio',
            en: 'Ruins of Pompeii with Vesuvius',
        },
    },
    {
        slug: 'sicilia',
        name: 'Sicilia',
        subTitle: 'L’Isola del Sole',
        region: 'Sicilia',
        types: ['Storia', 'Mare', 'Gastronomia', 'Cultura'],
        bestSeason: 'Primavera / Autunno',
        shortDescription: 'Templi greci, borghi barocchi, l’Etna fumante. Un’isola che è già un viaggio.',
        highlights: ['Etna', 'Taormina', 'Valle dei Templi', 'Palermo'],
        image: '/images/destinations/sicilia/Sicilia.jpg',
        alt: {
            it: 'Il teatro greco di Taormina con l’Etna',
            en: 'Greek theatre of Taormina with Mount Etna',
        },
    },
    {
        slug: 'sardegna',
        name: 'Sardegna',
        subTitle: 'Costa Smeralda',
        region: 'Sardegna',
        types: ['Mare', 'Natura'],
        bestSeason: 'Estate',
        shortDescription: 'Acque cristalline, calette nascoste e un entroterra selvaggio da esplorare.',
        highlights: ['Costa Smeralda', 'La Maddalena', 'Nuraghe Su Nuraxi'],
        image: '/images/destinations/sardegna/Sardegna.jpg',
        alt: {
            it: 'Acque cristalline della Costa Smeralda in Sardegna',
            en: 'Crystal clear waters of Costa Smeralda in Sardinia',
        },
    },
    {
        slug: 'roma',
        name: 'Roma',
        subTitle: 'La Città Eterna',
        region: 'Lazio',
        types: ['Storia', 'Cultura', 'Gastronomia'],
        bestSeason: 'Primavera / Autunno',
        shortDescription: 'Duemila anni di storia ad ogni angolo. La Città Eterna sa ancora sorprenderti.',
        highlights: ['Colosseo', 'Vaticano', 'Pantheon', 'Fontana di Trevi'],
        image: '/images/destinations/roma/Roma.jpg',
        alt: {
            it: 'Il Colosseo di Roma al tramonto',
            en: 'Rome’s Colosseum at sunset',
        },
    },
    {
        slug: 'toscana',
        name: 'Toscana',
        subTitle: 'Rinascimento e Vigne',
        region: 'Toscana',
        types: ['Cultura', 'Gastronomia', 'Natura', 'Storia'],
        bestSeason: 'Primavera / Autunno',
        shortDescription: 'Colline dorate, cipressi, borghi medievali e vini che raccontano la terra.',
        highlights: ['Firenze', 'Siena', 'Val d’Orcia', 'Pisa'],
        image: '/images/destinations/toscana/Toscana.jpg',
        alt: {
            it: 'Colline toscane e cipressi della Val d’Orcia',
            en: 'Tuscan hills and cypress trees in Val d’Orcia',
        },
    },
    {
        slug: 'positano',
        name: 'Positano',
        subTitle: 'Amore a Strapiombo',
        region: 'Campania',
        types: ['Mare', 'Natura', 'Gastronomia'],
        bestSeason: 'Primavera / Estate',
        shortDescription: 'Arroccata sulla scogliera, spiagge baciate dal sole e la dolce vita che non ti aspetti.',
        highlights: ['Il San Pietro', 'Villa Tre Ville', 'Le Sirenuse'],
        image: '/images/destinations/positano/Positano.jpg',
        alt: {
            it: 'La vista mozzafiato su uno dei borghi più belli della Costiera Amalfitana',
            en: 'The breathtaking view over Positano',
        },
    },
];
