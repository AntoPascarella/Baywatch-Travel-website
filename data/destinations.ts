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
        bestSeason: 'Aprile / Ottobre',
        shortDescription: 'Terme che fumano in spiaggia, giardini fitti, il Castello Aragonese sull’acqua.',
        highlights: ['Castello Aragonese', 'Giardini La Mortella', 'Sant’Angelo', 'Terme di Poseidon', 'Villa Arbusto'],
        image: 'https://images.pexels.com/photos/37270135/pexels-photo-37270135.jpeg?auto=compress&cs=tinysrgb&w=2000',
        alt: {
            it: 'Vista soleggiata della costa di Ischia con architettura locale',
            en: 'Sunny coastal view of Ischia with local architecture',
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
    },
    {
        slug: 'procida',
        name: 'Procida',
        subTitle: 'Capitale della Cultura',
        region: 'Campania',
        types: ['Storia', 'Cultura', 'Gastronomia'],
        bestSeason: 'Primavera / Autunno',
        shortDescription: 'Case color confetto, barche di pescatori, ritmi lenti.',
        highlights: ['Corricella', 'Terra Murata', 'Chiaiolella', 'Lingua di Procida'],
        image: '/images/destinations/procida/procida.jpg',
        alt: {
            it: 'Le case colorate di Marina Corricella a Procida',
            en: 'Colorful houses of Marina Corricella in Procida',
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
    },
    {
        slug: 'roma',
        name: 'Roma',
        subTitle: 'La Città Eterna',
        region: 'Lazio',
        types: ['Storia', 'Cultura', 'Gastronomia'],
        bestSeason: 'Primavera / Autunno',
        shortDescription: 'Duemila anni di storia ad ogni angolo. La Città Eterna sa ancora sorprendere.',
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
    },
];
