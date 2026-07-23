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
};

const px = (id: number) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2000`;

export const destinationGallery: Record<string, GalleryImage[]> = {
    // Costa soleggiata · Sant'Angelo · porto · baie · vita di mare
    ischia: [
        {
            src: px(38542043),
            alt: 'Ombrelloni sulla spiaggia con il Castello Aragonese di Ischia sullo sfondo',
            caption: 'Ischia in pieno sole, come si vive davvero.',
            credit: 'Foto: Nati / Pexels',
        },
        {
            src: px(31976189),
            alt: 'Vista costiera del borgo di Sant’Angelo a Ischia',
            caption: 'Sant’Angelo: borgo pedonale, terme naturali, niente auto.',
            credit: 'Foto: Nati / Pexels',
        },
        { src: px(37270074), alt: 'Borgo costiero colorato di Sant’Angelo a Ischia', credit: 'Foto: Heinz Klier / Pexels' },
        { src: px(6070658), alt: 'Vista dal Castello Aragonese sul porto di Ischia', credit: 'Foto: Domenico Paolella / Pexels' },
        { src: px(36428584), alt: 'Baia di Ischia con barche di pescatori', credit: 'Foto: Ree A / Pexels' },
        { src: px(13407814), alt: 'Strada panoramica con vista sulla penisola di Sant’Angelo', credit: 'Foto: Nati / Pexels' },
        { src: px(5597694), alt: 'Vista aerea di Ischia con il porto e il borgo', credit: 'Foto: Domenico Paolella / Pexels' },
        { src: px(36470301), alt: 'Cortile caratteristico di Ischia con auto d’epoca', credit: 'Foto: Pexels' },
        { src: px(33535835), alt: 'Scorcio di una via caratteristica a Ischia', credit: 'Foto: Steffi Hapunkt / Pexels' },
        { src: px(13043851), alt: 'Castello Aragonese visto dalla spiaggia con ombrelloni', credit: 'Foto: Nati / Pexels' },
    ],

    // Faraglioni · sentieri · Marina Grande · borghi · scorci aerei
    capri: [
        {
            src: px(36702049),
            alt: 'Vista aerea dei Faraglioni di Capri',
            caption: 'I Faraglioni, la firma geologica dell’isola.',
            credit: 'Foto: Vlada Juravliov / Pexels',
        },
        {
            src: px(33704022),
            alt: 'Sentiero a strapiombo sulla costa di Capri',
            caption: 'Sentieri scolpiti nella roccia, qui si cammina sospesi.',
            credit: 'Foto: Akhil Prasad / Pexels',
        },
        { src: px(35501916), alt: 'Vista aerea di Capri sulla costa mediterranea', credit: 'Foto: Magda Ehlers / Pexels' },
        { src: px(36701983), alt: 'Vista aerea di Marina Grande, Capri', credit: 'Foto: Vlada Juravliov / Pexels' },
        { src: px(36368547), alt: 'Colline verdi di Capri, vicino a Villa Lysis', credit: 'Foto: Grisha Besko / Pexels' },
        { src: px(36717897), alt: 'Giardino lussureggiante a Capri, atmosfera Villa Lysis', credit: 'Foto: Violeta Galeana / Pexels' },
        { src: px(35501915), alt: 'Vista aerea panoramica della costa e del borgo di Capri', credit: 'Foto: Magda Ehlers / Pexels' },
        { src: px(35501956), alt: 'Statua antica fra rovine coperte di vite a Capri', credit: 'Foto: Magda Ehlers / Pexels' },
        { src: px(17599722), alt: 'Arco naturale sul mare a Capri', credit: 'Foto: Pexels' },
        { src: px(15027805), alt: 'Faraglioni di Capri sotto un cielo blu con nuvole', credit: 'Foto: Hessam Vakili / Pexels' },
    ],

    // Corricella · vicoli · facciate · barche · porto
    procida: [
        {
            src: px(6015199),
            alt: 'Vista aerea delle case color pastello di Procida sul mare',
            caption: 'Le facciate erano dipinte per essere riconosciute dal mare.',
            credit: 'Foto: Vuzeca / Pexels',
        },
        {
            src: px(26976105),
            alt: 'Edifici colorati di un borgo di Procida',
            caption: 'Procida è piccola, marittima e senza fretta, un sogno ad occhi aperti.',
            credit: 'Foto: Josh Withers / Pexels',
        },
        { src: px(36806550), alt: 'Le facciate vivaci di Procida affacciate sul mare', credit: 'Foto: Pexels' },
        { src: px(19960223), alt: 'Borgo di Procida sulla costa sotto un cielo terso', credit: 'Foto: Nati / Pexels' },
        { src: px(26976092), alt: 'Esterno di una casa tipica di Procida', credit: 'Foto: Josh Withers / Pexels' },
        { src: px(33997746), alt: 'La lingua di Procida, sfoglia con crema e zucchero a velo', credit: 'Foto: Pexels' },
        { src: px(26976069), alt: 'Vicoli e facciate tradizionali di Procida', credit: 'Foto: Pexels' },
        { src: px(34487899), alt: 'Il borgo di Procida al crepuscolo', credit: 'Foto: Pexels' },
        { src: px(13613091), alt: 'Barche al pontile di Marina Corricella', credit: 'Foto: Nati / Pexels' },
        { src: px(26976075), alt: 'Lettini e palme sulla spiaggia di Procida', credit: 'Foto: Pexels' },
    ],

    // Vesuvio · Murales Maradona · Certosa · MANN · Cristo Velato · vita urbana
    napoli: [
        {
            src: px(34159696),
            alt: 'Il Vesuvio visto dal Golfo di Napoli',
            caption: 'Il vulcano che sta sempre nello sfondo, anche in cucina.',
            credit: 'Foto: Sam Folls / Pexels',
        },
        {
            src: px(30652770),
            alt: 'Murales di Maradona nei Quartieri Spagnoli di Napoli',
            caption: 'Il murales di Maradona ai Quartieri Spagnoli, devozione popolare.',
            credit: 'Foto: Luca Musella / Pexels',
        },
        { src: px(36754427), alt: 'Chiostro affrescato di una certosa napoletana', credit: 'Foto: Antonio Vacca / Pexels' },
        { src: px(12530470), alt: 'Vista aerea della città di Napoli', credit: 'Foto: Kelly / Pexels' },
        { src: px(30652771), alt: 'Street art colorata su edificio storico di Napoli', credit: 'Foto: Luca Musella / Pexels' },
        { src: px(12530468), alt: 'Vista aerea di Castel Sant’Elmo a Napoli', credit: 'Foto: Kelly / Pexels' },
        { src: px(20697535), alt: 'Chiesa di San Gregorio Armeno in fondo alla strada', credit: 'Foto: Leefinvrede / Pexels' },
        { src: 'https://images.unsplash.com/photo-1629368901202-0e1fcdec451b?auto=format&fit=crop&w=2000&q=80', alt: 'Due uomini in maglietta bianca in una strada di Napoli', credit: 'Foto: Alberto Sharif Ali Soleiman / Unsplash' },
        { src: px(36754434), alt: 'Vicolo colorato nel centro storico di Napoli', credit: 'Foto: Antonio Vacca / Pexels' },
        { src: px(36799463), alt: 'Pizza napoletana appena sfornata', credit: 'Foto: Pexels' },
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
            credit: 'Foto: Giota Sakellariou / Pexels',
        },
        {
            src: px(17056526),
            alt: 'Tempio della Concordia ad Agrigento',
            caption: 'La Valle dei Templi: più templi dorici di Atene.',
            credit: 'Foto: Andrea Mosti / Pexels',
        },
        { src: px(31467750), alt: 'Lungomare storico di Ortigia, Siracusa', credit: 'Foto: Kiki K / Pexels' },
        { src: px(20406063), alt: 'Vista aerea di Isola Bella a Taormina', credit: 'Foto: Aleksandra S / Pexels' },
        { src: px(36725883), alt: 'Antica fortificazione a Ortigia', credit: 'Foto: Jose Barbosa / Pexels' },
        { src: px(36378367), alt: 'Strada caratteristica di un borgo storico siciliano', credit: 'Foto: Roberto Copernico / Pexels' },
        { src: px(36835363), alt: 'Cannoli siciliani al pistacchio', credit: 'Foto: Pexels' },
        { src: px(26971420), alt: 'Borgo siciliano arroccato su una collina', credit: 'Foto: Leotrim Canaj / Pexels' },
        { src: px(7733701), alt: 'Cattedrale di Siracusa, Sicilia', credit: 'Foto: Chiara Boracchi / Pexels' },
        { src: px(17319013), alt: 'Lungomare di Ortigia, Siracusa', credit: 'Foto: Keke Cheng / Pexels' },
    ],

    // Acque turchesi · Costa Smeralda · Alghero (skyline + vicoli) · dune · borghi
    sardegna: [
        {
            src: px(34951691),
            alt: 'Acque turchesi cristalline lungo una costa rocciosa della Sardegna',
            caption: 'Il blu della Sardegna, sì, è davvero così.',
            credit: 'Foto: Bovistas / Pexels',
        },
        {
            src: px(16112384),
            alt: 'Skyline di Alghero con la cattedrale, Sardegna',
            caption: 'Alghero, catalano nelle insegne, mura cinquecentesche sul mare.',
            credit: 'Foto: Efrem Efre / Pexels',
        },
        { src: px(35531263), alt: 'Dune di sabbia con vegetazione costiera in Sardegna', credit: 'Foto: Domenico Adornato / Pexels' },
        { src: px(27916102), alt: 'Porto Cervo, Sardegna, costa e imbarcazioni', credit: 'Foto: Jakub Krystkiewicz / Pexels' },
        { src: px(18198929), alt: 'Vicolo in pietra ad Alghero', credit: 'Foto: Efrem Efre / Pexels' },
        { src: px(29006111), alt: 'Acque turchesi e spiaggia della Sardegna', credit: 'Foto: Hub Jacqu / Pexels' },
        { src: px(18258840), alt: 'Edifici tipici di Alghero', credit: 'Foto: Efrem Efre / Pexels' },
        { src: px(19244534), alt: 'Strada acciottolata di Alghero', credit: 'Foto: Efrem Efre / Pexels' },
        { src: px(36337808), alt: 'Strada caratteristica di Alghero con cupola storica', credit: 'Foto: Domenico Adornato / Pexels' },
        { src: px(38494876), alt: 'Dune di sabbia di Porto Pino, Sardegna', credit: 'Foto: Pexels' },
    ],

    // Colosseo · Trastevere · Pantheon · Piazza Navona · vicoli · monumenti
    roma: [
        {
            src: px(36581129),
            alt: 'Il Colosseo di Roma all’alba',
            caption: 'Il Colosseo all’ora dorata, l’icona della Roma antica.',
            credit: 'Foto: delot / Pexels',
        },
        {
            src: px(36391026),
            alt: 'Vicolo caratteristico di Trastevere a Roma',
            caption: 'Trastevere, vicoli, sampietrini, cene lunghe.',
            credit: 'Foto: Yuliya Duzhaya / Pexels',
        },
        { src: px(22391732), alt: 'Il Pantheon visto dalla piazza', credit: 'Foto: Henry Acevedo / Pexels' },
        { src: px(32489797), alt: 'Fontana dei Quattro Fiumi in Piazza Navona', credit: 'Foto: Leefinvrede / Pexels' },
        { src: px(32661483), alt: 'Vicolo in pietra di Trastevere', credit: 'Foto: Wai Sing / Pexels' },
        { src: px(33008947), alt: 'Pantheon e fontana in Piazza della Rotonda', credit: 'Foto: AXP Photography / Pexels' },
        { src: px(23020602), alt: 'Fontana del Nettuno in Piazza Navona', credit: 'Foto: Masi / Pexels' },
        { src: px(36445107), alt: 'Pasta fresca in vetrina in una trattoria romana', credit: 'Foto: Pexels' },
        { src: px(31492108), alt: 'Scena di strada storica nel Trastevere romano', credit: 'Foto: Marija / Pexels' },
        { src: px(18471732), alt: 'Portico del Pantheon romano', credit: 'Foto: Jovan Vasiljevic / Pexels' },
    ],

    // Val d'Orcia · Firenze · Siena · Chianti · vigneti · castelli
    toscana: [
        {
            src: px(29844248),
            alt: 'Colline ondulate e cipressi della Val d’Orcia',
            caption: 'Cipressi in fila e colline ondulate. Val d’Orcia, patrimonio UNESCO.',
            credit: 'Foto: Duc Tinh Ngo / Pexels',
        },
        {
            src: px(33626496),
            alt: 'Cattedrale di Firenze in Piazza del Duomo al tramonto',
            caption: 'Firenze, Siena, vigneti, la Toscana si cammina con calma.',
            credit: 'Foto: Gio Spigo / Pexels',
        },
        { src: px(15319055), alt: 'Cityscape di Siena con la cattedrale', credit: 'Foto: Lorenc Memaga / Pexels' },
        { src: px(33261307), alt: 'Paesaggio toscano con vigneti del Chianti', credit: 'Foto: Kay de Vries / Pexels' },
        { src: px(37061972), alt: 'Il fiasco del Chianti classico', credit: 'Foto: Pexels' },
        { src: px(26382354), alt: 'Castello nel Chianti, Toscana', credit: 'Foto: Tony Nojmansk / Pexels' },
        { src: px(29844283), alt: 'Paesaggio toscano con colline ondulate', credit: 'Foto: Duc Tinh Ngo / Pexels' },
        { src: px(30323198), alt: 'Campagna toscana con cipressi', credit: 'Foto: Anh Nguyen / Pexels' },
        { src: px(36511067), alt: 'Vigneto toscano al tramonto', credit: 'Foto: Antek Korczak / Pexels' },
        { src: px(23441099), alt: 'Vigneto estivo con nuvole sopra la Toscana', credit: 'Foto: Wolfgang Weiser / Pexels' },
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
            credit: 'Foto: Josh Withers / Pexels',
        },
        {
            src: px(30099422),
            alt: 'Trulli storici di Alberobello',
            caption: 'I trulli di Alberobello, patrimonio UNESCO.',
            credit: 'Foto: AXP Photography / Pexels',
        },
        { src: px(25524426), alt: 'Spiaggia di Lama Monachile a Polignano a Mare', credit: 'Foto: Serban Mihaila / Pexels' },
        { src: px(37952378), alt: 'Vicoli imbiancati di Ostuni', credit: 'Foto: Merwak Raw / Pexels' },
        { src: px(30007376), alt: 'Facciata barocca di Lecce', credit: 'Foto: AXP Photography / Pexels' },
        { src: px(19143328), alt: 'Borgo di mare pugliese visto dall’alto', credit: 'Foto: Kelly / Pexels' },
        { src: px(30417101), alt: 'Porticciolo di Monopoli', credit: 'Foto: AXP Photography / Pexels' },
        { src: px(36597377), alt: 'Orecchiette fatte a mano, tradizione di Bari', credit: 'Foto: Pexels' },
        { src: px(36600237), alt: 'Strada caratteristica di Ostuni con bicicletta', credit: 'Foto: Carina Ackerman / Pexels' },
        { src: px(34119017), alt: 'Marina di Bari con barche', credit: 'Foto: Liza Sigareva / Pexels' },
    ],

    // Tropea · Scilla · Capo Vaticano · vicoli · mare turchese
    calabria: [
        {
            src: px(36681293),
            alt: 'Tropea, scogliera con architettura sul mare',
            caption: 'Tropea, scogliera bianca sul blu della Costa degli Dei.',
            credit: 'Foto: Isabella Pieroni / Pexels',
        },
        {
            src: px(27373540),
            alt: 'Spiaggia di Tropea con bagnanti',
            caption: 'Acqua trasparente e sabbia bianca, marchio di fabbrica calabrese.',
            credit: 'Foto: Luciana Evrard / Pexels',
        },
        { src: px(11019940), alt: 'Vista aerea di Scilla, case affacciate sul mare', credit: 'Foto: Walkers / Pexels' },
        { src: px(34549208), alt: 'Veduta costiera di Capo Vaticano', credit: 'Foto: 0xd1ma / Pexels' },
        { src: px(36962401), alt: 'Vicolo di Scilla che porta al mare', credit: 'Foto: Domenico Adornato / Pexels' },
        { src: px(36671321), alt: 'Spiaggia calabrese con ombrelloni colorati', credit: 'Foto: Rey Mart Ramos / Pexels' },
        { src: px(36781750), alt: 'Costa turchese vista dall’alto', credit: 'Foto: Fedigioia / Pexels' },
        { src: px(34477139), alt: 'Borgo a strapiombo con antica fortezza', credit: 'Foto: 0xd1ma / Pexels' },
        { src: px(27373485), alt: 'Chiesa di Tropea sull’isolotto', credit: 'Foto: Luciana Evrard / Pexels' },
        { src: px(34150665), alt: 'La spiaggia di Tropea vista dalla grotta', credit: 'Foto: Pexels' },
    ],
};
