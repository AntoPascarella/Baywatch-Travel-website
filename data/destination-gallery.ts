/**
 * Per-destination editorial gallery.
 *
 * Remote images sourced from Pexels (Pexels License) and Unsplash (Unsplash License),
 * both free for commercial and editorial web use; attribution preserved in `credit`.
 *
 * Selezione editoriale: ogni destinazione copre più soggetti, landmark
 * iconici, scorci secondari, dettagli architettonici, atmosfera locale.
 *
 * Layout convention used by the detail page:
 *   gallery[0]      → hero full-bleed
 *   gallery[1]      → full-bleed atmospheric break + final CTA background
 *   gallery[2..9]   → 8-image editorial grid (2 rows × 4 columns, near full-width)
 *
 * Total: 10 photos per destination.
 *
 * Remote hosts allowed in next.config.ts: images.pexels.com.
 */

export type GalleryImage = {
    src: string;
    alt: string;
    caption?: string;
    credit?: string;
    focus?: string;
    /** English alt text and caption; `alt` and `caption` above are Italian. */
    en?: { alt: string; caption?: string };
};

const px = (id: number) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2000`;

export const destinationGallery: Record<string, GalleryImage[]> = {
    // Costa soleggiata · Sant'Angelo · porto · baie · vita di mare
    ischia: [
        {
            src: px(38542039),
            alt: 'Porticciolo di Ischia con barche ed edifici storici sotto un cielo limpido',
            caption: 'Ischia Ponte, antico borgo di pescatori.',
            en: {
                alt: 'Harbour scene on Ischia with boats and historic buildings under a clear sky',
                caption: 'Ischia Ponte, an old fishing village.',
            },
            credit: 'Foto: Nati / Pexels',
        },
        {
            src: px(31976189),
            alt: 'Vista costiera del borgo di Sant’Angelo a Ischia',
            caption: 'Sant’Angelo: borgo pedonale, terme naturali, niente auto.',
            en: {
                alt: 'Coastal view of the village of Sant’Angelo on Ischia',
                caption: 'Sant’Angelo: a pedestrian village, natural hot springs, no cars.',
            },
            credit: 'Foto: Nati / Pexels',
        },
        { src: px(37270074), alt: 'Borgo costiero colorato di Sant’Angelo a Ischia', en: { alt: 'Colourful coastal village of Sant’Angelo on Ischia' }, credit: 'Foto: Heinz Klier / Pexels' },
        { src: px(6070658), alt: 'Vista dal Castello Aragonese sul porto di Ischia', en: { alt: 'View from the Aragonese Castle over Ischia’s harbour' }, credit: 'Foto: Domenico Paolella / Pexels' },
        { src: px(36428584), alt: 'Baia di Ischia con barche di pescatori', en: { alt: 'Bay on Ischia with fishing boats' }, credit: 'Foto: Ree A / Pexels' },
        { src: px(13407814), alt: 'Strada panoramica con vista sulla penisola di Sant’Angelo', en: { alt: 'Scenic road overlooking the Sant’Angelo peninsula' }, credit: 'Foto: Nati / Pexels' },
        { src: px(5597694), alt: 'Vista aerea di Ischia con il porto e il borgo', en: { alt: 'Aerial view of Ischia with the harbour and the village' }, credit: 'Foto: Domenico Paolella / Pexels' },
        { src: px(36470301), alt: 'Cortile caratteristico di Ischia con auto d’epoca', en: { alt: 'Characterful courtyard on Ischia with a vintage car' }, credit: 'Foto: Pexels' },
        { src: px(33535835), alt: 'Scorcio di una via caratteristica a Ischia', en: { alt: 'Glimpse of a characteristic street on Ischia' }, credit: 'Foto: Steffi Hapunkt / Pexels' },
        { src: px(13043851), alt: 'Castello Aragonese visto dalla spiaggia con ombrelloni', en: { alt: 'The Aragonese Castle seen from the beach, with parasols' }, credit: 'Foto: Nati / Pexels' },
    ],

    // Faraglioni · sentieri · Marina Grande · borghi · scorci aerei
    capri: [
        {
            src: px(36702049),
            alt: 'Vista aerea dei Faraglioni di Capri',
            caption: 'I Faraglioni, la firma geologica dell’isola.',
            en: {
                alt: 'Aerial view of the Faraglioni of Capri',
                caption: 'The Faraglioni, the island’s geological signature.',
            },
            credit: 'Foto: Vlada Juravliov / Pexels',
        },
        {
            src: px(33704022),
            alt: 'Sentiero a strapiombo sulla costa di Capri',
            caption: 'Sentieri scolpiti nella roccia, qui si cammina sospesi.',
            en: {
                alt: 'Cliffside path on the coast of Capri',
                caption: 'Paths carved into the rock: here you walk suspended in mid-air.',
            },
            credit: 'Foto: Akhil Prasad / Pexels',
        },
        { src: px(27940645), alt: 'Vista aerea di Capri', en: { alt: 'Aerial view of Capri' }},
        { src: px(33336433), alt: 'Bar a Capri', en: { alt: 'A bar on Capri' }},
        { src: px(33336429), alt: 'Vicolo a Capri', en: { alt: 'Narrow lane on Capri' }},
        { src: px(36717897), alt: 'Giardino lussureggiante a Capri, atmosfera Villa Lysis', en: { alt: 'Lush garden on Capri, with the atmosphere of Villa Lysis' }, credit: 'Foto: Violeta Galeana / Pexels' },
        { src: px(36471721), alt: 'Vetrina negozio a Capri', en: { alt: 'Shop window on Capri' }},
        { src: px(35501956), alt: 'Statua antica fra rovine coperte di vite a Capri', en: { alt: 'Ancient statue among vine-covered ruins on Capri' }, credit: 'Foto: Magda Ehlers / Pexels' },
        { src: px(17599722), alt: 'Arco naturale sul mare a Capri', en: { alt: 'Natural arch over the sea on Capri' }, credit: 'Foto: Pexels' },
        { src: px(28580408), alt: 'Faraglioni di Capri al tramonto', en: { alt: 'The Faraglioni of Capri at sunset' }},
    ],

    // Corricella · vicoli · facciate · barche · porto
    procida: [
        {
            src: px(6015199),
            alt: 'Vista aerea delle case color pastello di Procida sul mare',
            caption: 'Le facciate erano dipinte per essere riconosciute dal mare.',
            en: {
                alt: 'Aerial view of Procida’s pastel houses by the sea',
                caption: 'The façades were painted so they could be recognised from the sea.',
            },
            credit: 'Foto: Vuzeca / Pexels',
        },
        {
            src: px(26976105),
            alt: 'Edifici colorati di un borgo di Procida',
            caption: 'Procida è piccola, marittima e senza fretta, un sogno ad occhi aperti.',
            en: {
                alt: 'Colourful buildings in a village on Procida',
                caption: 'Procida is small, seafaring and unhurried, a daydream come true.',
            },
            credit: 'Foto: Josh Withers / Pexels',
        },
        { src: px(26976100), alt: 'Vicolo caratteristico di Procida con barche e facciate colorate', en: { alt: 'Characteristic lane on Procida with boats and colourful façades' }, credit: 'Foto: Josh Withers / Pexels' },
        { src: px(19960223), alt: 'Borgo di Procida sulla costa sotto un cielo terso', en: { alt: 'Village on Procida’s coast under a clear sky' }, credit: 'Foto: Nati / Pexels' },
        { src: px(26976092), alt: 'Esterno di una casa tipica di Procida', en: { alt: 'Exterior of a typical house on Procida' }, credit: 'Foto: Josh Withers / Pexels' },
        { src: px(33997746), alt: 'La lingua di Procida, sfoglia con crema e zucchero a velo', en: { alt: 'Lingua di Procida, puff pastry with cream and icing sugar' }, credit: 'Foto: Pexels' },
        { src: px(26976094), alt:'Facciata di casa a Procida con barchetta', en: { alt: 'House façade on Procida with a small boat' }, credit: 'Foto: Josh Withers / Pexels' },
        { src: px(13610997), alt: 'Vista aerea del borgo di Marina Corricella a Procida', en: { alt: 'Aerial view of the village of Marina Corricella on Procida' }, credit: 'Foto: Nati / Pexels' },
        { src: px(13613091), alt: 'Barche al pontile di Marina Corricella', en: { alt: 'Boats at the jetty in Marina Corricella' }, credit: 'Foto: Nati / Pexels' },
        { src: px(13613152), alt: 'Sedia souvenir shop a Procida', en: { alt: 'Chair outside a souvenir shop on Procida' } },
    ],

    // Vesuvio · Murales Maradona · Certosa · MANN · Cristo Velato · vita urbana
    napoli: [
        {
            src: px(17311125),
            alt: 'Vista aerea del porto di Napoli con il Vesuvio sullo sfondo',
            caption: 'Napoli e il suo porto, tra traghetti e Vesuvio.',
            en: {
                alt: 'Aerial view of the port of Naples with Vesuvius in the background',
                caption: 'Naples and its port, between ferries and Vesuvius.',
            },
            credit: 'Foto: Kelly / Pexels',
        },
        {
            src: px(32481196),
            alt: 'Coppia abbracciata davanti a un murales nei Quartieri Spagnoli di Napoli',
            caption: 'Il murales di Maradona, un’icona della città.',
            en: {
                alt: 'Couple embracing in front of a mural in the Quartieri Spagnoli of Naples',
                caption: 'The Maradona mural, an icon of the city.',
            },
            credit: 'Foto: Hamza Yaich / Pexels',
            focus: 'center 65%',
        },
        { src: px(36754427), alt: 'Chiostro affrescato di una certosa napoletana', en: { alt: 'Frescoed cloister of a Neapolitan charterhouse' }, credit: 'Foto: Antonio Vacca / Pexels' },
        { src: px(12530470), alt: 'Vista aerea della città di Napoli', en: { alt: 'Aerial view of the city of Naples' }, credit: 'Foto: Kelly / Pexels' },
        { src: px(30652771), alt: 'Street art colorata su edificio storico di Napoli', en: { alt: 'Colourful street art on a historic building in Naples' }, credit: 'Foto: Luca Musella / Pexels' },
        { src: px(9692497), alt: 'Piazza del Plebiscito con la Basilica di San Francesco di Paola a Napoli', en: { alt: 'Piazza del Plebiscito with the Basilica of San Francesco di Paola in Naples' }, credit: 'Foto: Daniel Eliashevsky / Pexels' },
        { src: px(20697535), alt: 'Chiesa di San Gregorio Armeno in fondo alla strada', en: { alt: 'The church of San Gregorio Armeno at the end of the street' }, credit: 'Foto: Leefinvrede / Pexels' },
        { src: 'https://images.unsplash.com/photo-1629368901202-0e1fcdec451b?auto=format&fit=crop&w=2000&q=80', alt: 'Due uomini in maglietta bianca in una strada di Napoli', en: { alt: 'Two men in white T-shirts on a street in Naples' }, credit: 'Foto: Alberto Sharif Ali Soleiman / Unsplash' },
        { src: px(36754434), alt: 'Vicolo colorato nel centro storico di Napoli', en: { alt: 'Colourful alley in the historic centre of Naples' }, credit: 'Foto: Antonio Vacca / Pexels' },
        { src: 'https://images.unsplash.com/photo-1670275559226-cacd73cdfc32?auto=format&fit=crop&w=2000&q=80', alt: 'Scatole di pizza impilate su un bancone a Napoli', en: { alt: 'Pizza boxes stacked on a counter in Naples' }, credit: 'Foto: David Tadmor / Unsplash' },
    ],

    // Aerial · scogliera · limoni (mercato + albero) · marina · porto · vita locale
    sorrento: [
        {
            src: px(9940305),
            alt: 'Vista aerea di Sorrento e Villa Comunale',
            caption: 'Sorrento è una città sospesa: tufo sotto, golfo davanti.',
            credit: 'Foto: Daniel Eliashevsky / Pexels',
        },
        {
            src: px(7518588),
            alt: 'Limoni di Sorrento appesi all’albero',
            caption: 'Il limone IGP, la base del vero limoncello, e tanto altro.',
            credit: 'Foto: Alessandro Ascione / Pexels',
        },
        { src: px(35424486), alt: 'Limoni freschi con foglie nelle cassette di un mercato', credit: 'Foto: Magda Ehlers / Pexels' },
        { src: px(19143135), alt: 'Scogliera di Sorrento con il borgo a strapiombo', credit: 'Foto: Kelly / Pexels' },
        { src: px(10229034), alt: 'Sorrento vista dall’alto, città sulla costa', credit: 'Foto: Daniel Eliashevsky / Pexels' },
        { src: px(9718902), alt: 'Borgo costiero di Sorrento con pontile sul mare', credit: 'Foto: Daniel Eliashevsky / Pexels' },
        { src: px(9118507), alt: 'Banco di frutta fresca a Sorrento', credit: 'Foto: Domenico Paolella / Pexels' },
        { src: px(35973968), alt: 'Bancarella di limoni colorati al mercato italiano', credit: 'Foto: Adri Ana / Pexels' },
        { src: px(10229029), alt: 'Vista dall’alto della città e del porto di Sorrento', credit: 'Foto: Daniel Eliashevsky / Pexels' },
        { src: px(37981343), alt: 'Limoncello e limoni della penisola sorrentina', credit: 'Foto: Pexels' },
    ],

    // Costa · Duomo · Atrani · Ravello · scorci villaggi · architettura
    amalfi: [
        {
            src: px(29172648),
            alt: 'Vista panoramica della Costiera Amalfitana',
            caption: 'La Costiera disegnata dalla SS163, agrumeti sopra, blu sotto.',
            credit: 'Foto: Rishabh Lakra / Pexels',
        },
        {
            src: px(35177569),
            alt: 'Duomo di Amalfi nel cuore della Campania',
            caption: 'Il Duomo di Sant’Andrea: romanico, arabo, gotico, barocco.',
            credit: 'Foto: edocoledoco / Pexels',
        },
        { src: px(35424458), alt: 'Campanile del Duomo di Amalfi al tramonto', credit: 'Foto: Magda Ehlers / Pexels' },
        { src: px(31914565), alt: 'Vista della Costiera Amalfitana da Ravello', credit: 'Foto: Poliakova / Pexels' },
        { src: px(11750019), alt: 'Atrani vista dall’alto, sulla Costiera Amalfitana', credit: 'Foto: Salvatore Monetti / Pexels' },
        { src: px(19143174), alt: 'Tetti dei palazzi di Amalfi sotto il sole', credit: 'Foto: Kelly / Pexels' },
        { src: px(33839177), alt: 'Ceramiche artigianali della Costiera Amalfitana', credit: 'Foto: Pexels' },
        { src: px(358223), alt: 'Edificio sulla scogliera della Costiera Amalfitana', credit: 'Foto: Pixabay / Pexels' },
        { src: px(19102629), alt: 'Vista della Costiera Amalfitana', credit: 'Foto: Alejandro Henriquez / Pexels' },
        { src: px(36451592), alt: 'Costiera Amalfitana con scogliere colorate', credit: 'Foto: Margo Evardson / Pexels' },
    ],

    // Ruderi · affreschi · strada antica · Vesuvio · stanze · teatro
    pompei: [
        {
            src: px(35626653),
            alt: 'Rovine di Pompei con colonne e statua',
            caption: 'Una città romana fermata nel 79 d.C.',
            credit: 'Foto: Alex Revilla / Pexels',
        },
        {
            src: px(33799097),
            alt: 'Strada antica di Pompei in basolato',
            caption: 'Lastroni di pietra solcati dalle ruote dei carri.',
            credit: 'Foto: Fran / Pexels',
        },
        { src: px(35626657), alt: 'Affresco antico in una stanza di Pompei', credit: 'Foto: Alex Revilla / Pexels' },
        { src: px(35750762), alt: 'Rovine di Pompei con il Vesuvio sullo sfondo', credit: 'Foto: Gaborbalazs97 / Pexels' },
        { src: px(35663051), alt: 'Affreschi nelle rovine di Pompei', credit: 'Foto: Elijah J Cobb / Pexels' },
        { src: px(32010399), alt: 'Stanza affrescata di una domus a Pompei', credit: 'Foto: Leon Hellegers / Pexels' },
        { src: px(30204924), alt: 'Colonne di Pompei al sole', credit: 'Foto: Jiri Dockal / Pexels' },
        { src: px(36368551), alt: 'Rovine di Pompei sotto un cielo azzurro', credit: 'Foto: Grisha Besko / Pexels' },
        { src: px(12509369), alt: 'Teatro romano di Pompei', credit: 'Foto: Icarus / Pexels' },
        { src: px(35626656), alt: 'Antiche rovine di Pompei con affreschi', credit: 'Foto: Alex Revilla / Pexels' },
    ],

    // Taormina · Valle dei Templi · Ortigia · Isola Bella · borghi · cattedrali
    sicilia: [
        {
            src: px(4089282),
            alt: 'Teatro greco di Taormina con vista sul mare',
            caption: 'Il teatro greco di Taormina, l’Etna sullo sfondo, il mare davanti.',
            en: {
                alt: 'The Greek theatre of Taormina overlooking the sea',
                caption: 'The Greek theatre of Taormina, Etna behind it, the sea in front.',
            },
            credit: 'Foto: Giota Sakellariou / Pexels',
        },
        {
            src: px(17056526),
            alt: 'Tempio della Concordia ad Agrigento',
            caption: 'La Valle dei Templi: più templi dorici di Atene.',
            en: {
                alt: 'Temple of Concordia in Agrigento',
                caption: 'The Valley of the Temples: more Doric temples than Athens.',
            },
            credit: 'Foto: Andrea Mosti / Pexels',
        },
        { src: px(18282035), alt:'Duomo di Palermo', en: { alt: 'Palermo Cathedral' } },
        { src: px(20406063), alt: 'Vista aerea di Isola Bella a Taormina', en: { alt: 'Aerial view of Isola Bella in Taormina' }, credit: 'Foto: Aleksandra S / Pexels' },
        { src: px(37861659), alt: 'Escursionisti che esplorano il paesaggio aspro dell’Etna, in Sicilia, sotto un cielo limpido.', en: { alt: 'Hikers exploring the rugged landscape of Etna, in Sicily, under a clear sky.' }, credit: 'Foto: Pexels' },
        { src: px(29311299), alt: 'Teatro antico di Taormina', en: { alt: 'The ancient theatre of Taormina' }, credit: 'Foto: Pexels' },
        { src: px(2998945), alt: 'Cassata siciliana su un piatto a Noto', en: { alt: 'Sicilian cassata on a plate in Noto' }, credit: 'Foto: Pexels' },
        { src: px(26971420), alt: 'Borgo siciliano arroccato su una collina', en: { alt: 'Sicilian village perched on a hill' }, credit: 'Foto: Leotrim Canaj / Pexels' },
        { src: px(17056555), alt: 'Valle dei Templi, Agrigento', en: { alt: 'Valley of the Temples, Agrigento' }, credit: 'Foto: Andrea Mosti / Pexels' },
        { src: px(17319013), alt: 'Lungomare di Ortigia, Siracusa', en: { alt: 'The Ortigia seafront, Syracuse' }, credit: 'Foto: Keke Cheng / Pexels' },
    ],

    // Acque turchesi · Costa Smeralda · Alghero (skyline + vicoli) · dune · borghi
    sardegna: [
        {
            src: px(34951691),
            alt: 'Acque turchesi cristalline lungo una costa rocciosa della Sardegna',
            caption: 'Il blu della Sardegna, sì, è davvero così.',
            en: {
                alt: 'Crystal-clear turquoise water along a rocky stretch of Sardinia’s coast',
                caption: 'The blue of Sardinia: yes, it really is like that.',
            },
            credit: 'Foto: Bovistas / Pexels',
        },
        {
            src: px(16112384),
            alt: 'Skyline di Alghero con la cattedrale, Sardegna',
            caption: 'Alghero, catalano nelle insegne, mura cinquecentesche sul mare.',
            en: {
                alt: 'Alghero skyline with the cathedral, Sardinia',
                caption: 'Alghero: Catalan on the street signs, 16th-century walls on the sea.',
            },
            credit: 'Foto: Efrem Efre / Pexels',
        },
        { src: px(35531263), alt: 'Dune di sabbia con vegetazione costiera in Sardegna', en: { alt: 'Sand dunes with coastal vegetation in Sardinia' }, credit: 'Foto: Domenico Adornato / Pexels' },
        { src: px(27916102), alt: 'Porto Cervo, Sardegna, costa e imbarcazioni', en: { alt: 'Porto Cervo, Sardinia, coastline and boats' }, credit: 'Foto: Jakub Krystkiewicz / Pexels' },
        { src: px(18198929), alt: 'Vicolo in pietra ad Alghero', en: { alt: 'Stone alley in Alghero' }, credit: 'Foto: Efrem Efre / Pexels' },
        { src: px(29006111), alt: 'Acque turchesi e spiaggia della Sardegna', en: { alt: 'Turquoise water and beach in Sardinia' }, credit: 'Foto: Hub Jacqu / Pexels' },
        { src: px(18258840), alt: 'Edifici tipici di Alghero', en: { alt: 'Typical buildings in Alghero' }, credit: 'Foto: Efrem Efre / Pexels' },
        { src: px(19244534), alt: 'Strada acciottolata di Alghero', en: { alt: 'Cobbled street in Alghero' }, credit: 'Foto: Efrem Efre / Pexels' },
        { src: px(36337808), alt: 'Strada caratteristica di Alghero con cupola storica', en: { alt: 'Characteristic street in Alghero with a historic dome' }, credit: 'Foto: Domenico Adornato / Pexels' },
        { src: px(38494876), alt: 'Dune di sabbia di Porto Pino, Sardegna', en: { alt: 'Sand dunes at Porto Pino, Sardinia' }, credit: 'Foto: Pexels' },
    ],

    // Colosseo · Trastevere · Pantheon · Piazza Navona · vicoli · monumenti
    roma: [
        {
            src: px(36581129),
            alt: 'Il Colosseo di Roma all’alba',
            caption: 'Il Colosseo all’ora dorata, l’icona della Roma antica.',
            en: {
                alt: 'The Colosseum in Rome at dawn',
                caption: 'The Colosseum at golden hour, the icon of ancient Rome.',
            },
            credit: 'Foto: delot / Pexels',
        },
        {
            src: px(36391026),
            alt: 'Vicolo caratteristico di Trastevere a Roma',
            caption: 'Trastevere, perdersi tra i vicoli è il miglior modo di scoprirlo.',
            en: {
                alt: 'Characteristic alley in Trastevere, Rome',
                caption: 'Trastevere: getting lost in its lanes is the best way to discover it.',
            },
            credit: 'Foto: Yuliya Duzhaya / Pexels',
        },
        { src: px(22391732), alt: 'Il Pantheon visto dalla piazza', en: { alt: 'The Pantheon seen from the square' }, credit: 'Foto: Henry Acevedo / Pexels' },
        { src: px(32489797), alt: 'Fontana dei Quattro Fiumi in Piazza Navona', en: { alt: 'Fountain of the Four Rivers in Piazza Navona' }, credit: 'Foto: Leefinvrede / Pexels' },
        { src: px(32661483), alt: 'Vicolo in pietra di Trastevere', en: { alt: 'Stone alley in Trastevere' }, credit: 'Foto: Wai Sing / Pexels' },
        { src: px(28720807), alt: 'Auto d’epoca in una via storica di Roma', en: { alt: 'Vintage car on a historic street in Rome' }, credit: 'Foto: Can Alibali / Pexels' },
        { src: px(29359353), alt: 'Il Tempio di Esculapio a Villa Borghese in autunno', en: { alt: 'The Temple of Aesculapius in Villa Borghese in autumn' }, credit: 'Foto: Henry Acevedo / Pexels' },
        { src: px(36495569), alt: 'Piatti di pasta italiana in una trattoria romana', en: { alt: 'Plates of Italian pasta in a Roman trattoria' }, credit: 'Foto: Valentina Bešker / Pexels' },
        { src: px(38041941), alt: 'Il Colosseo di Roma in una giornata di sole, in tutta la sua imponenza', en: { alt: 'The Colosseum in Rome on a sunny day, in all its architectural grandeur' }, credit: 'Foto: Marija / Pexels' },
        { src: px(38135841), alt: 'Il Vittoriano (Altare della Patria) al tramonto', en: { alt: 'The Vittoriano (Altare della Patria) at sunset' }, credit: 'Foto: Ludovic Delot / Pexels' },
    ],

    // Val d'Orcia · Firenze · Siena · Chianti · vigneti · castelli
    toscana: [
        {
            src: px(29844248),
            alt: 'Colline ondulate e cipressi della Val d’Orcia',
            caption: 'Cipressi in fila e colline ondulate. Val d’Orcia, patrimonio UNESCO.',
            en: {
                alt: 'Rolling hills and cypresses in the Val d’Orcia',
                caption: 'Rows of cypresses and rolling hills. The Val d’Orcia, a UNESCO World Heritage Site.',
            },
            credit: 'Foto: Duc Tinh Ngo / Pexels',
        },
        {
            src: px(33626496),
            alt: 'Cattedrale di Firenze in Piazza del Duomo al tramonto',
            caption: 'Firenze, Siena, vigneti, la Toscana si cammina con calma.',
            en: {
                alt: 'Florence Cathedral in Piazza del Duomo at sunset',
                caption: 'Florence, Siena, vineyards: Tuscany is meant to be walked slowly.',
            },
            credit: 'Foto: Gio Spigo / Pexels',
        },
        { src: px(15319055), alt: 'Cityscape di Siena con la cattedrale', en: { alt: 'Siena cityscape with the cathedral' }, credit: 'Foto: Lorenc Memaga / Pexels' },
        { src: px(33261307), alt: 'Paesaggio toscano con vigneti del Chianti', en: { alt: 'Tuscan landscape with Chianti vineyards' }, credit: 'Foto: Kay de Vries / Pexels' },
        { src: px(37061972), alt: 'Il fiasco del Chianti classico', en: { alt: 'The traditional Chianti Classico flask' }, credit: 'Foto: Pexels' },
        { src: px(26382354), alt: 'Castello nel Chianti, Toscana', en: { alt: 'Castle in Chianti, Tuscany' }, credit: 'Foto: Tony Nojmansk / Pexels' },
        { src: px(29844283), alt: 'Paesaggio toscano con colline ondulate', en: { alt: 'Tuscan landscape with rolling hills' }, credit: 'Foto: Duc Tinh Ngo / Pexels' },
        { src: px(30323198), alt: 'Campagna toscana con cipressi', en: { alt: 'Tuscan countryside with cypresses' }, credit: 'Foto: Anh Nguyen / Pexels' },
        { src: px(36511067), alt: 'Vigneto toscano al tramonto', en: { alt: 'Tuscan vineyard at sunset' }, credit: 'Foto: Antek Korczak / Pexels' },
        { src: px(23441099), alt: 'Vigneto estivo con nuvole sopra la Toscana', en: { alt: 'Summer vineyard under clouds in Tuscany' }, credit: 'Foto: Wolfgang Weiser / Pexels' },
    ],

    // Case verticali · spiaggia · Sentiero degli Dei · scorci · vita balneare
    positano: [
        {
            src: px(19390872),
            alt: 'Case di Positano sulla collina, sopra la spiaggia',
            caption: 'Case rosa e ocra che scendono verso il mare. Positano è verticale.',
            credit: 'Foto: Lucia Manes / Pexels',
        },
        {
            src: px(29223302),
            alt: 'Sentiero degli Dei con vista su Positano',
            caption: 'Il Sentiero degli Dei, una delle camminate più belle del Mediterraneo.',
            credit: 'Foto: Karl K / Pexels',
        },
        { src: px(19143062), alt: 'Gommoni colorati sulla spiaggia di Positano', credit: 'Foto: Kelly / Pexels' },
        { src: px(19990863), alt: 'Positano vista dall’alto', credit: 'Foto: Small Steps / Pexels' },
        { src: px(33839184), alt: 'Giornata di sole sulla spiaggia di Positano', credit: 'Foto: Fran / Pexels' },
        { src: px(31300662), alt: 'Vista panoramica della spiaggia di Positano con barche', credit: 'Foto: Leon Hellegers / Pexels' },
        { src: px(4155138), alt: 'Costa rocciosa di Positano con case sulla collina', credit: 'Foto: Ana Eva / Pexels' },
        { src: px(36426022), alt: 'Costa di Positano in bianco e nero', credit: 'Foto: Allan van Gasbeck / Pexels' },
        { src: px(28580407), alt: 'Spiaggia affollata di Positano in estate', credit: 'Foto: Simeon Theartist / Pexels' },
        { src: px(4155130), alt: 'Paesaggio costiero di Positano', credit: 'Foto: Ana Eva / Pexels' },
    ],

    // Polignano · Alberobello · Ostuni · Lecce · masserie · mare
    puglia: [
        {
            src: px(17697735),
            alt: 'Polignano a Mare arroccata sulla scogliera',
            caption: 'Polignano: città a strapiombo, Lama Monachile sotto.',
            en: {
                alt: 'Polignano a Mare perched on the cliff',
                caption: 'Polignano: a clifftop town, with Lama Monachile below.',
            },
            credit: 'Foto: Josh Withers / Pexels',
        },
        {
            src: px(30099422),
            alt: 'Trulli storici di Alberobello',
            caption: 'I trulli di Alberobello, patrimonio UNESCO.',
            en: {
                alt: 'Historic trulli in Alberobello',
                caption: 'The trulli of Alberobello, a UNESCO World Heritage Site.',
            },
            credit: 'Foto: AXP Photography / Pexels',
        },
        { src: px(25524426), alt: 'Spiaggia di Lama Monachile a Polignano a Mare', en: { alt: 'Lama Monachile beach in Polignano a Mare' }, credit: 'Foto: Serban Mihaila / Pexels' },
        { src: px(37952378), alt: 'Vicoli imbiancati di Ostuni', en: { alt: 'Whitewashed alleys of Ostuni' }, credit: 'Foto: Merwak Raw / Pexels' },
        { src: px(30007376), alt: 'Facciata barocca di Lecce', en: { alt: 'Baroque façade in Lecce' }, credit: 'Foto: AXP Photography / Pexels' },
        { src: px(19143328), alt: 'Borgo di mare pugliese visto dall’alto', en: { alt: 'Seaside village in Puglia seen from above' }, credit: 'Foto: Kelly / Pexels' },
        { src: px(30417101), alt: 'Porticciolo di Monopoli', en: { alt: 'The little harbour of Monopoli' }, credit: 'Foto: AXP Photography / Pexels' },
        { src: px(36597377), alt: 'Orecchiette fatte a mano, tradizione di Bari', en: { alt: 'Handmade orecchiette, a Bari tradition' }, credit: 'Foto: Pexels' },
        { src: px(36600237), alt: 'Strada caratteristica di Ostuni con bicicletta', en: { alt: 'Characteristic street in Ostuni with a bicycle' }, credit: 'Foto: Carina Ackerman / Pexels' },
        { src: px(34119017), alt: 'Marina di Bari con barche', en: { alt: 'Bari marina with boats' }, credit: 'Foto: Liza Sigareva / Pexels' },
    ],

    // Tropea · Scilla · Capo Vaticano · vicoli · mare turchese
    calabria: [
        {
            src: px(36681293),
            alt: 'Tropea, scogliera con architettura sul mare',
            caption: 'Tropea, scogliera bianca sul blu della Costa degli Dei.',
            en: {
                alt: 'Tropea, clifftop buildings above the sea',
                caption: 'Tropea: white cliffs above the blue of the Coast of the Gods.',
            },
            credit: 'Foto: Isabella Pieroni / Pexels',
        },
        {
            src: px(27373540),
            alt: 'Spiaggia di Tropea con bagnanti',
            caption: 'Acqua trasparente e sabbia bianca, marchio di fabbrica calabrese.',
            en: {
                alt: 'Tropea beach with swimmers',
                caption: 'Clear water and white sand, Calabria’s trademark.',
            },
            credit: 'Foto: Luciana Evrard / Pexels',
        },
        { src: px(11019940), alt: 'Vista aerea di Scilla, case affacciate sul mare', en: { alt: 'Aerial view of Scilla, houses overlooking the sea' }, credit: 'Foto: Walkers / Pexels' },
        { src: px(34549208), alt: 'Veduta costiera di Capo Vaticano', en: { alt: 'Coastal view of Capo Vaticano' }, credit: 'Foto: 0xd1ma / Pexels' },
        { src: px(36962401), alt: 'Vicolo di Scilla che porta al mare', en: { alt: 'Alley in Scilla leading down to the sea' }, credit: 'Foto: Domenico Adornato / Pexels' },
        { src: px(36671321), alt: 'Spiaggia calabrese con ombrelloni colorati', en: { alt: 'Calabrian beach with colourful parasols' }, credit: 'Foto: Rey Mart Ramos / Pexels' },
        { src: px(36781750), alt: 'Costa turchese vista dall’alto', en: { alt: 'Turquoise coastline seen from above' }, credit: 'Foto: Fedigioia / Pexels' },
        { src: px(34477139), alt: 'Borgo a strapiombo con antica fortezza', en: { alt: 'Clifftop village with an ancient fortress' }, credit: 'Foto: 0xd1ma / Pexels' },
        { src: px(27373485), alt: 'Chiesa di Tropea sull’isolotto', en: { alt: 'Tropea’s church on its islet' }, credit: 'Foto: Luciana Evrard / Pexels' },
        { src: px(34150665), alt: 'La spiaggia di Tropea vista dalla grotta', en: { alt: 'Tropea beach seen from a cave' }, credit: 'Foto: Pexels' },
    ],
};
