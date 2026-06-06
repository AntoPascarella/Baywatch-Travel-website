export type Itinerary = {
    title: string;
    duration: string;
    steps: string[];
};

export type DestinationContent = {
    eyebrow: string;
    heroSubtitle: string;
    intro: string[];
    characteristics: {
        paesaggio: string;
        mare: string;
        borghi: string;
        vibe: string;
        stagionalita: string;
        idealePer: string[];
    };
    location: {
        dove: string;
        area: string;
        comeArrivare: string;
    };
    funFacts: string[];
    itineraries: Itinerary[];
    mustSee: { title: string; note: string }[];
    tips: {
        periodo: string;
        durata: string;
        note: string;
    };
};

export const destinationContent: Record<string, DestinationContent> = {
    ischia: {
        eyebrow: 'Golfo di Napoli. Campania',
        heroSubtitle:
            'Un’isola vulcanica dove le terme sgorgano in spiaggia e il verde scivola dentro al mare.',
        intro: [
            'Ischia è la più grande delle isole del Golfo di Napoli, un cono vulcanico ancora attivo che ha modellato calette, sorgenti termali e giardini sospesi sul mare.',
            'Non è un’isola da copertina lucida: è ruvida nei punti giusti, dolce in quelli che contano. Si gira piano, si mangia bene, ci si ferma più del previsto.',
        ],
        characteristics: {
            paesaggio:
                'Monte Epomeo al centro, vigneti terrazzati, pinete e colate laviche fino al mare.',
            mare: 'Calette di sabbia scura e baie come Sant’Angelo, Cartaromana e Sorgeto, dove l’acqua bolle naturalmente.',
            borghi: 'Sei comuni distinti: Ischia Porto, Casamicciola, Lacco Ameno, Forio, Serrara Fontana e Barano. Ognuno con il suo carattere.',
            vibe: 'Lenta, terapeutica, autentica. Più isola di vita vera che cartolina.',
            stagionalita:
                'Tutto l’anno, con anime diverse. Aprile-giugno e settembre-ottobre per balneare senza folla. Luglio-agosto pieni e vivi. Autunno e inverno per terme, vino, silenzio.',
            idealePer: ['Coppie', 'Famiglie', 'Wellness & terme', 'Soggiorni lunghi', 'Barca'],
        },
        location: {
            dove: 'Golfo di Napoli, a circa 30 km dal capoluogo.',
            area: 'Campania, provincia di Napoli.',
            comeArrivare:
                'Aliscafo da Napoli Beverello (~50 min), traghetto da Calata di Massa al Porto di Napoli (~1 h 45 min), traghetto da Pozzuoli (~1 h). Aeroporto di riferimento: Napoli Capodichino.',
        },
        funFacts: [
            'I Giardini La Mortella furono creati dal compositore inglese William Walton e dalla moglie Susanna negli anni ’50.',
            'La Coppa di Nestore, ritrovata a Lacco Ameno, è una delle più antiche iscrizioni in alfabeto greco mai trovate in Occidente (VIII sec. a.C.).',
            'Sorgeto è una baia dove acqua termale e mare si mescolano: si fa il bagno caldo anche d’inverno.',
            'L’Epomeo è un blocco di tufo verde sollevato dal magma, non un cratere classico.',
            'Il vino di Ischia (Biancolella, Forastera) si coltiva su pergole storiche affacciate sul Tirreno.',
        ],
        itineraries: [
            {
                title: 'Mezza giornata',
                duration: '4 ore',
                steps: [
                    'Castello Aragonese al mattino, prima del sole forte.',
                    'Pranzo leggero a Ischia Ponte.',
                    'Bagno e aperitivo a Cartaromana.',
                ],
            },
            {
                title: 'Un giorno',
                duration: '1 giorno',
                steps: [
                    'Mattina al Castello Aragonese.',
                    'Pranzo a Forio o Sant’Angelo.',
                    'Pomeriggio termale ai Giardini Poseidon o alle Fumarole di Sorgeto.',
                    'Tramonto a Punta Caruso.',
                ],
            },
            {
                title: 'Due o tre giorni',
                duration: '2–3 giorni',
                steps: [
                    'Giorno 1: Ischia Ponte, Castello, cena vista golfo.',
                    'Giorno 2: giro in barca dell’isola, sosta bagno alla Baia di San Montano.',
                    'Giorno 3: Epomeo all’alba, Giardini La Mortella e Sant’Angelo nel pomeriggio.',
                ],
            },
            {
                title: 'Via mare',
                duration: 'Giornata in barca',
                steps: [
                    'Partenza da Casamicciola o Forio.',
                    'Sosta a Sorgeto e Sant’Angelo per nuotata.',
                    'Pranzo a bordo, ritorno costeggiando Punta Imperatore.',
                ],
            },
        ],
        mustSee: [
            { title: 'Castello Aragonese', note: 'Meglio al mattino presto, luce piena e poca gente.' },
            { title: 'Villa Arbusto', note: 'Museo archeologico di Lacco Ameno: qui c’è la Coppa di Nestore.' },
            { title: 'Giardini La Mortella', note: 'Botanica rara, concerti d’estate.' },
            { title: 'Sant’Angelo', note: 'Borgo pedonale, ideale per il tramonto.' },
            { title: 'Sorgeto', note: 'Baia termale naturale, costume e ciabatte da scoglio.' },
            { title: 'Monte Epomeo', note: 'Salita facile, vista a 360° sull’arcipelago.' },
        ],
        tips: {
            periodo: 'Da aprile a ottobre.',
            durata: '3-5 notti per fare le cose con calma.',
            note: 'Macchina utile ma non obbligatoria: bus EAV e taxi-microbus coprono tutta l’isola. Le terme aprono in genere da aprile a ottobre.',
        },
    },
    capri: {
        eyebrow: 'Golfo di Napoli. Campania',
        heroSubtitle:
            'Roccia bianca, mare cobalto, una piazzetta che è teatro a cielo aperto.',
        intro: [
            'Capri non si visita: la si attraversa. È piccola, verticale, e ogni angolo è già stato fotografato un milione di volte, eppure dal vivo funziona ancora.',
            'Il segreto è rallentare. Alzarsi presto, sparire dai sentieri principali, tornare in piazzetta solo al calar della sera.',
        ],
        characteristics: {
            paesaggio: 'Falesie a strapiombo, macchia mediterranea, pini marittimi e ville bianche.',
            mare: 'Acque profonde, blu intenso, grotte, faraglioni e calette accessibili solo in barca.',
            borghi: 'Capri (la “città bassa” a 138 m) e Anacapri, più alta, più silenziosa, più genuina.',
            vibe: 'Eleganza naturale, dolce vita, ritmo lento d’estate.',
            stagionalita: 'Da aprile a ottobre. Aprile-giugno e settembre per evitare la folla.',
            idealePer: ['Coppie', 'Weekend', 'Barca', 'Cena vista mare'],
        },
        location: {
            dove: 'Sud del Golfo di Napoli, di fronte alla Penisola Sorrentina.',
            area: 'Campania, provincia di Napoli.',
            comeArrivare:
                'Aliscafo da Napoli (~50 min), da Sorrento (~25 min) o da Ischia (~25 min). In estate collegamenti diretti anche da Positano e Amalfi.',
        },
        funFacts: [
            'L’Imperatore Tiberio passò gli ultimi anni di vita a Villa Jovis, sull’estremità est dell’isola.',
            'La Grotta Azzurra deve il suo colore a un’apertura subacquea che filtra la luce dal basso.',
            'Anacapri ha il proprio dialetto e per secoli si è considerata una comunità separata da Capri.',
            'I sandali capresi sono ancora cuciti a mano in pochi laboratori storici.',
        ],
        itineraries: [
            {
                title: 'Un giorno',
                duration: '1 giorno',
                steps: [
                    'Giro in barca dei Faraglioni e Grotta Azzurra al mattino.',
                    'Pranzo a Marina Piccola.',
                    'Anacapri nel pomeriggio: Villa San Michele, seggiovia per Monte Solaro.',
                    'Tramonto a Punta Carena.',
                ],
            },
            {
                title: 'Due giorni',
                duration: '2 giorni',
                steps: [
                    'Giorno 1: Capri, Piazzetta, Giardini di Augusto, sentiero del Pizzolungo.',
                    'Giorno 2: Anacapri, Villa San Michele, Monte Solaro, Faro di Punta Carena, visita a Villa Lysis.',
                ],
            },
            {
                title: 'Via mare',
                duration: 'Giornata in barca',
                steps: [
                    'Periplo dell’isola con skipper.',
                    'Soste a Grotta Verde, Faraglioni e Grotta Bianca.',
                    'Pranzo a bordo o a Marina Piccola.',
                ],
            },
        ],
        mustSee: [
            { title: 'Faraglioni', note: 'Da terra (Punta Tragara) o da barca, all’ora dorata.' },
            { title: 'Villa San Michele', note: 'Casa-museo di Axel Munthe ad Anacapri.' },
            { title: 'Villa Lysis', note: 'La villa del barone Fersen, a picco sul mare. Storia + vista a strapiombo.' },
            { title: 'Monte Solaro', note: 'Seggiovia panoramica, vista sull’intero golfo.' },
            { title: 'Via Krupp', note: 'Tornanti scenografici scolpiti nella roccia.' },
            { title: 'Faro di Punta Carena', note: 'Lato ovest, perfetto per il tramonto.' },
        ],
        tips: {
            periodo: 'Da aprile a ottobre. Aprile e settembre con clima ottimo e meno gente.',
            durata: '1-2 notti per vivere anche le serate, quando l’isola si svuota.',
            note: 'Niente auto a noleggio sull’isola. Funicolare, taxi scoperti e a piedi: scarpe comode obbligatorie.',
        },
    },
    procida: {
        eyebrow: 'Golfo di Napoli. Campania',
        heroSubtitle:
            'Le case color confetto, il porto dei pescatori, la lentezza di un’isola che non ha fretta.',
        intro: [
            'Procida è la più piccola delle isole del Golfo di Napoli, e forse la più sincera. Niente catene di lusso, niente folla travolgente: solo una manciata di case rosa, gialle, blu polvere arrampicate sul porto.',
            'È stata Capitale Italiana della Cultura nel 2022, e da quel momento ha trovato un equilibrio nuovo: più curata, ancora autentica.',
        ],
        characteristics: {
            paesaggio: 'Coste basse, vigneti, limoneti, viste sul Vesuvio e su Ischia.',
            mare: 'Spiagge tranquille (Chiaiolella, Ciraccio), fondali bassi adatti anche ai bambini.',
            borghi: 'Marina Grande, Corricella e Terra Murata sono i tre nuclei storici.',
            vibe: 'Slow, marittima, vera. Profumo di limoni e barche al sole.',
            stagionalita: 'Da aprile a ottobre. Bellissima anche in primavera fuori stagione.',
            idealePer: ['Coppie', 'Weekend lenti', 'Fotografi', 'Lettori', 'Famiglie'],
        },
        location: {
            dove: 'Tra Capo Miseno e Ischia, nel Golfo di Napoli.',
            area: 'Campania, provincia di Napoli.',
            comeArrivare:
                'Aliscafo da Napoli Beverello (~40 min) o da Pozzuoli (~25 min). Si gira a piedi, in microtaxi o in scooter.',
        },
        funFacts: [
            'La Corricella è il borgo marinaro raccontato nel film “Il Postino” con Massimo Troisi.',
            'Le facciate colorate nascono da un’usanza pratica: i pescatori riconoscevano la propria casa dal mare.',
            'Procida ha meno di 10.000 abitanti ma più di 14 chiese.',
            'Il limone procidano, il “pane”, ha la buccia spessa e si mangia in insalata.',
        ],
        itineraries: [
            {
                title: 'Mezza giornata',
                duration: '3–4 ore',
                steps: [
                    'Marina Grande a piedi.',
                    'Salita a Terra Murata e Casale Vascello.',
                    'Discesa alla Corricella per pranzo o caffè.',
                ],
            },
            {
                title: 'Un giorno',
                duration: '1 giorno',
                steps: [
                    'Mattina alla Corricella e Terra Murata.',
                    'Pranzo di pesce sul porticciolo.',
                    'Pomeriggio in spiaggia alla Chiaiolella.',
                    'Aperitivo al tramonto su Marina Grande.',
                ],
            },
            {
                title: 'Due giorni',
                duration: '2 giorni',
                steps: [
                    'Giorno 1: borghi storici e Corricella.',
                    'Giorno 2: giro dell’isola in barca o gozzo, bagno a Pozzo Vecchio.',
                ],
            },
        ],
        mustSee: [
            { title: 'Marina Corricella', note: 'Il porticciolo dei pescatori, magico al tramonto.' },
            { title: 'Terra Murata', note: 'Borgo medievale fortificato, vista enorme sul golfo.' },
            { title: 'Lingua di Procida', note: 'Vista panoramica all’estremità nord-est: di sera è uno dei posti più belli dell’isola.' },
            { title: 'Chiaiolella', note: 'Spiaggia lunga sul lato sud, ideale al pomeriggio.' },
            { title: 'Pozzo Vecchio', note: 'Spiaggia del “Postino”, intima e cinematografica.' },
            { title: 'Casale Vascello', note: 'Dedalo di cortili e archi, cuore dell’isola contadina.' },
        ],
        tips: {
            periodo: 'Maggio, giugno, settembre.',
            durata: '1 notte basta, 2 sono perfette per il ritmo dell’isola.',
            note: 'L’isola è piccolissima: niente auto. Microtaxi e scooter sono i mezzi locali.',
        },
    },
    napoli: {
        eyebrow: 'Campania',
        heroSubtitle:
            'Una città che non ti chiede permesso: ti entra dentro e te la ricordi per sempre.',
        intro: [
            'Napoli è densa, contraddittoria, viva. Si muove a un ritmo proprio e non chiede di essere capita: chiede solo di essere attraversata.',
            'Tra Spaccanapoli, i quartieri spagnoli e il lungomare di Mergellina, la città cambia faccia ogni cinque minuti, e ogni volta funziona.',
        ],
        characteristics: {
            paesaggio: 'Golfo, Vesuvio sullo sfondo, colline urbane (Vomero, Posillipo).',
            mare: 'Lungomare Caracciolo, Castel dell’Ovo, Posillipo: il mare come scenografia.',
            borghi: 'Centro storico UNESCO, Quartieri Spagnoli, Sanità, Chiaia, Posillipo.',
            vibe: 'Energica, teatrale, generosa. Una capitale mediterranea autentica.',
            stagionalita: 'Tutto l’anno, ma aprile, maggio, ottobre sono i mesi migliori.',
            idealePer: ['City break', 'Cultura', 'Cibo', 'Storia', 'Coppie e amici'],
        },
        location: {
            dove: 'Costa tirrenica della Campania, sul Golfo omonimo.',
            area: 'Campania, capoluogo di regione.',
            comeArrivare:
                'Aeroporto Napoli Capodichino. Treno alta velocità da Roma in 1h10, da Milano in ~4h30. Stazione Centrale di Garibaldi. Bus di linea da Roma, Milano, Torino, Firenze, Bari e altre grandi città.',
        },
        funFacts: [
            'La pizza Margherita nasce nel 1889 in onore della Regina Margherita di Savoia.',
            'Sotto il centro storico si estende Napoli Sotterranea: cisterne greche, gallerie borboniche, rifugi della Seconda Guerra Mondiale.',
            'Il Cristo Velato, nella Cappella Sansevero, è scolpito in un unico blocco di marmo.',
            'Spaccanapoli è il decumano inferiore della città greco-romana: lo segui ed è ancora lì, dritto.',
        ],
        itineraries: [
            {
                title: 'Mezza giornata',
                duration: '4 ore',
                steps: [
                    'Spaccanapoli da Piazza del Gesù a San Gregorio Armeno.',
                    'Cappella Sansevero (prenotare).',
                    'Pizza fritta o a portafoglio per strada.',
                ],
            },
            {
                title: 'Un giorno',
                duration: '1 giorno',
                steps: [
                    'Mattina nel centro storico (Duomo, San Domenico, Cappella Sansevero).',
                    'Pranzo veloce: pizza a Forcella o cuoppo al porto.',
                    'Pomeriggio al MANN (Museo Archeologico).',
                    'Tramonto sul lungomare di Mergellina.',
                ],
            },
            {
                title: 'Due o tre giorni',
                duration: '2–3 giorni',
                steps: [
                    'Giorno 1: centro storico e Sanità.',
                    'Giorno 2: Pompei come escursione, ritorno per cena a Chiaia.',
                    'Giorno 3: Vomero (Certosa di San Martino, Castel Sant’Elmo) e Posillipo.',
                ],
            },
        ],
        mustSee: [
            { title: 'Cappella Sansevero', note: 'Il Cristo Velato dal vivo è un’altra cosa.' },
            { title: 'MANN', note: 'Il museo archeologico più importante per Pompei ed Ercolano.' },
            { title: 'Certosa di San Martino', note: 'Vista totale sul golfo dal Vomero.' },
            { title: 'Rione Sanità', note: 'Catacombe di San Gennaro e nuova scena culturale.' },
            { title: 'Lungomare Caracciolo', note: 'Tramonto da Castel dell’Ovo verso Mergellina.' },
        ],
        tips: {
            periodo: 'Aprile-maggio, settembre-ottobre.',
            durata: '2-3 notti minime per non correre.',
            note: 'In centro spostati a piedi e in metro (Linea 1, fermate-museo curate come opere d’arte).',
        },
    },
    sorrento: {
        eyebrow: 'Penisola Sorrentina. Campania',
        heroSubtitle:
            'Affacciata sul golfo da una rupe di tufo, tra limoneti e tramonti che durano un’ora.',
        intro: [
            'Sorrento è la base perfetta per la Costiera, Capri, Pompei e il Vesuvio, ma è anche una destinazione a sé. Un centro storico vivo, terrazze panoramiche, agrumeti che entrano in città.',
            'È raffinata senza essere fredda, turistica senza perdersi: trovi il ristorante storico e l’osteria di quartiere a 50 metri di distanza.',
        ],
        characteristics: {
            paesaggio: 'Costa di tufo, limoneti e oliveti, valloni profondi.',
            mare: 'Marina Grande e Marina Piccola, baie raggiungibili in barca lungo la costa.',
            borghi: 'Centro storico di Sorrento, Sant’Agnello, Massa Lubrense, Sant’Agata sui Due Golfi.',
            vibe: 'Elegante, balneare, ben tenuta. Buon equilibrio tra relax e vita serale.',
            stagionalita: 'Da aprile a ottobre. Maggio e settembre sono ideali.',
            idealePer: ['Coppie', 'Famiglie', 'Base tour Costiera', 'Soggiorni di 4–5 notti'],
        },
        location: {
            dove: 'Penisola Sorrentina, sud del Golfo di Napoli.',
            area: 'Campania, provincia di Napoli.',
            comeArrivare:
                'Treno Circumvesuviana da Napoli (~1 h). Aliscafo da Napoli o Capri. Auto via A3.',
        },
        funFacts: [
            'Il limone di Sorrento IGP ha buccia spessa, profumata, ricca di oli essenziali, la base del vero limoncello.',
            'Il Vallone dei Mulini è un canyon urbano nato 35.000 anni fa da un’eruzione dei Campi Flegrei.',
            'Sorrento ha dato i natali al poeta Torquato Tasso (XVI secolo).',
            'Il Chiostro di San Francesco è uno dei luoghi più fotografati per matrimoni in Italia.',
        ],
        itineraries: [
            {
                title: 'Mezza giornata',
                duration: '3–4 ore',
                steps: [
                    'Centro storico, Piazza Tasso, Via San Cesareo.',
                    'Vallone dei Mulini.',
                    'Aperitivo in terrazza con vista golfo.',
                ],
            },
            {
                title: 'Un giorno',
                duration: '1 giorno',
                steps: [
                    'Mattina nel centro e Marina Grande.',
                    'Pranzo di pesce.',
                    'Pomeriggio a Massa Lubrense o Punta Campanella.',
                    'Tramonto a Sant’Agata sui Due Golfi.',
                ],
            },
            {
                title: 'Tre giorni',
                duration: '3 giorni',
                steps: [
                    'Giorno 1: Sorrento e Marina Grande.',
                    'Giorno 2: Capri in giornata.',
                    'Giorno 3: Costiera Amalfitana (Positano, Amalfi, Ravello).',
                ],
            },
        ],
        mustSee: [
            { title: 'Vallone dei Mulini', note: 'Visibile dall’alto, scenografico ed ex industriale.' },
            { title: 'Chiostro di San Francesco', note: 'Archi a tutto sesto del XIV secolo.' },
            { title: 'Marina Grande', note: 'Borgo dei pescatori, ottima cena di pesce.' },
            { title: 'Bagni della Regina Giovanna', note: 'Piscina naturale tra rovine romane.' },
            { title: 'Sant’Agata sui Due Golfi', note: 'Tramonto sui due golfi, Napoli e Salerno.' },
        ],
        tips: {
            periodo: 'Maggio, giugno, settembre.',
            durata: '3–5 notti se la usi come base.',
            note: 'In estate il traffico in Costiera è pesante: meglio barca, treno o conducente privato.',
        },
    },
    amalfi: {
        eyebrow: 'Costiera Amalfitana. Campania',
        heroSubtitle:
            'L’antica Repubblica Marinara, sospesa tra mare profondo e monti verticali.',
        intro: [
            'Amalfi è il cuore della Costiera che porta il suo nome. Una piazza, un Duomo che ti ferma, un porticciolo, e poi vicoli che salgono verso valli inaspettatamente verdi.',
            'È più dimessa di Positano, più elegante di altre tappe vicine: ha la quiete di chi è già stata grande e non deve dimostrare nulla.',
        ],
        characteristics: {
            paesaggio: 'Falesie verticali, agrumeti terrazzati, valli con torrenti.',
            mare: 'Spiaggia centrale, calette accessibili in barca, fondali rocciosi.',
            borghi: 'Amalfi, Atrani (la più piccola d’Italia), Pogerola, Scala, Ravello.',
            vibe: 'Storica, raffinata, marittima. Meno mondana, più contemplativa.',
            stagionalita: 'Da aprile a ottobre.',
            idealePer: ['Coppie', 'Cultura', 'Slow travel', 'Coppie in luna di miele'],
        },
        location: {
            dove: 'Costiera Amalfitana, costa sud della Penisola Sorrentina.',
            area: 'Campania, provincia di Salerno.',
            comeArrivare:
                'In auto via SS163 (panoramica ma stretta). In barca da Sorrento, Positano, Salerno. SITA bus dalla stazione di Salerno.',
        },
        funFacts: [
            'Amalfi fu una delle quattro Repubbliche Marinare insieme a Genova, Pisa e Venezia.',
            'Le “Tavole Amalfitane” sono uno dei più antichi codici marittimi del Mediterraneo.',
            'Il Duomo mescola romanico, arabo-normanno, gotico e barocco, tutto insieme.',
            'La Valle delle Ferriere ospita la felce gigante Woodwardia radicans, sopravvissuta dall’era glaciale.',
        ],
        itineraries: [
            {
                title: 'Mezza giornata',
                duration: '3–4 ore',
                steps: [
                    'Duomo di Sant’Andrea e Chiostro del Paradiso.',
                    'Passeggiata fino ad Atrani (10 minuti a piedi).',
                    'Pranzo o gelato di limone.',
                ],
            },
            {
                title: 'Un giorno',
                duration: '1 giorno',
                steps: [
                    'Mattina ad Amalfi (Duomo, Museo della Carta).',
                    'Pranzo ad Atrani.',
                    'Pomeriggio a Ravello (Villa Rufolo, Villa Cimbrone).',
                    'Tramonto vista mare da Ravello.',
                ],
            },
            {
                title: 'Due o tre giorni',
                duration: '2–3 giorni',
                steps: [
                    'Giorno 1: Amalfi e Atrani.',
                    'Giorno 2: Valle delle Ferriere a piedi.',
                    'Giorno 3: Ravello e Scala.',
                ],
            },
            {
                title: 'Via mare',
                duration: 'Mezza giornata in barca',
                steps: [
                    'Costa da Amalfi a Conca dei Marini.',
                    'Sosta alla Grotta dello Smeraldo.',
                    'Bagno alle Praiana o Furore.',
                ],
            },
        ],
        mustSee: [
            { title: 'Duomo di Sant’Andrea', note: 'Scalinata frontale + chiostro arabo-normanno.' },
            { title: 'Valle delle Ferriere', note: 'Trekking facile tra cascate e felci preistoriche.' },
            { title: 'Atrani', note: 'A 10 minuti a piedi, molto più tranquilla.' },
            { title: 'Museo della Carta', note: 'Sull’antica produzione artigianale di carta a mano.' },
            { title: 'Ravello', note: 'Villa Cimbrone, Terrazza dell’Infinito.' },
        ],
        tips: {
            periodo: 'Maggio, giugno, settembre.',
            durata: '2–3 notti per Amalfi e dintorni.',
            note: 'La SS163 è bellissima ma lenta: in alta stagione meglio muoversi in barca o con conducente.',
        },
    },
    pompei: {
        eyebrow: 'Campania',
        heroSubtitle:
            'Una città romana fermata in un istante. Cammini sulle stesse pietre del 79 d.C.',
        intro: [
            'Pompei non è un museo: è una città vera, sospesa nel momento in cui il Vesuvio l’ha sepolta. Cammini su strade scolpite dalle ruote dei carri, entri nelle case con i pavimenti a mosaico ancora al loro posto.',
            'Si visita meglio con calma e con una guida: i dettagli (le insegne dipinte, i graffiti, i forni) raccontano più di qualsiasi targhetta.',
        ],
        characteristics: {
            paesaggio: 'Pianura del Sarno, Vesuvio incombente, oltre 60 ettari di scavi.',
            mare: 'Mare a 2 km in linea d’aria, ma il sito è interno.',
            borghi: 'Pompei moderna è una città di 25.000 abitanti accanto agli scavi.',
            vibe: 'Archeologico, denso, evocativo.',
            stagionalita: 'Primavera e autunno. Estate calda e affollata.',
            idealePer: ['Cultura', 'Storia', 'Famiglie con ragazzi', 'Escursioni da Napoli o Sorrento'],
        },
        location: {
            dove: 'Tra Napoli e Sorrento, ai piedi del Vesuvio.',
            area: 'Campania, provincia di Napoli.',
            comeArrivare:
                'Treno Circumvesuviana da Napoli o Sorrento (fermata Pompei Scavi - Villa dei Misteri). Auto via A3.',
        },
        funFacts: [
            'Pompei aveva un sistema idrico avanzato, con fontane pubbliche ogni isolato.',
            'I calchi delle vittime sono stati ottenuti colando gesso nei vuoti lasciati nei detriti.',
            'L’eruzione del 79 d.C. è raccontata da Plinio il Giovane in due lettere a Tacito.',
            'Il Lupanare conserva ancora gli affreschi originali con il “menù” dei servizi.',
        ],
        itineraries: [
            {
                title: 'Mezza giornata',
                duration: '3 ore',
                steps: [
                    'Foro, Tempio di Apollo, Basilica.',
                    'Casa del Fauno e Casa dei Vettii.',
                    'Anfiteatro per chiudere.',
                ],
            },
            {
                title: 'Un giorno',
                duration: '1 giorno',
                steps: [
                    'Mattina al sito: Foro, Terme Stabiane, Lupanare, Casa dei Vettii.',
                    'Pranzo fuori dagli scavi (porta acqua e cappello).',
                    'Pomeriggio: Villa dei Misteri, Anfiteatro, Orto dei Fuggiaschi.',
                ],
            },
            {
                title: 'Due giorni con Ercolano',
                duration: '2 giorni',
                steps: [
                    'Giorno 1: Pompei.',
                    'Giorno 2: Ercolano (più piccola, meglio conservata) + MANN a Napoli.',
                ],
            },
        ],
        mustSee: [
            { title: 'Villa dei Misteri', note: 'Affreschi del “ciclo dionisiaco”, fuori dal centro.' },
            { title: 'Casa dei Vettii', note: 'Riaperta nel 2023, splendida dopo i restauri.' },
            { title: 'Foro', note: 'Cuore civile e religioso della città antica.' },
            { title: 'Anfiteatro', note: 'Il più antico anfiteatro romano in muratura conservato.' },
            { title: 'Terme Stabiane', note: 'Stucchi e mosaici notevoli.' },
        ],
        tips: {
            periodo: 'Marzo–maggio o ottobre. Mattina presto.',
            durata: 'Mezza giornata minima, una giornata intera per non correre.',
            note: 'Scarpe robuste (pavé e basolato), acqua, cappello. Biglietti online raccomandati.',
        },
    },
    sicilia: {
        eyebrow: 'Sicilia',
        heroSubtitle:
            'Un’isola che è già un viaggio: tre mari, un vulcano, mille storie sovrapposte.',
        intro: [
            'La Sicilia non si fa in pochi giorni. Greci, arabi, normanni, spagnoli, borbonici: ogni occupazione ha lasciato un piano nuovo, e la cucina è la versione commestibile di questa stratificazione.',
            'Si può scegliere il sud-est barocco, la costa nord di Palermo e Cefalù, l’Etna e Taormina, o le isole minori. Ognuna è un viaggio diverso.',
        ],
        characteristics: {
            paesaggio: 'Etna (3.300 m), valli barocche, costa varia, isole minori (Egadi, Eolie).',
            mare: 'Calette di sabbia bianca (San Vito Lo Capo), faraglioni, mare profondo a Taormina.',
            borghi: 'Palermo, Catania, Siracusa, Noto, Modica, Ragusa, Cefalù, Taormina.',
            vibe: 'Calda, generosa, contraddittoria. Mai banale.',
            stagionalita: 'Aprile–giugno e settembre–ottobre. Estate caldissima nell’interno.',
            idealePer: ['Cultura', 'Cibo e vino', 'Tour itineranti', 'Famiglie', 'Coppie'],
        },
        location: {
            dove: 'Mediterraneo centrale, separata dalla Calabria dallo Stretto di Messina.',
            area: 'Regione autonoma a statuto speciale.',
            comeArrivare:
                'Voli su Catania, Palermo, Trapani, Comiso. Treno+traghetto sullo Stretto. Traghetti da Napoli, Genova, Civitavecchia.',
        },
        funFacts: [
            'L’Etna è il vulcano attivo più alto d’Europa e patrimonio UNESCO.',
            'A Palermo si parlano ancora oggi termini di origine araba: “zibibbo”, “ammazzaru”, “tabbutu”.',
            'La Valle dei Templi di Agrigento ha più templi dorici di Atene.',
            'La granita siciliana al mattino con la brioche col tuppo è colazione, non dessert.',
        ],
        itineraries: [
            {
                title: 'Weekend lungo Sud-Est',
                duration: '3 giorni',
                steps: [
                    'Giorno 1: Catania e Etna.',
                    'Giorno 2: Siracusa e Ortigia.',
                    'Giorno 3: Noto e Modica.',
                ],
            },
            {
                title: 'Una settimana classica',
                duration: '7 giorni',
                steps: [
                    'Palermo (2 notti).',
                    'Cefalù.',
                    'Agrigento (Valle dei Templi).',
                    'Ragusa o Modica (2 notti).',
                    'Siracusa e Taormina.',
                ],
            },
            {
                title: 'Isole Eolie',
                duration: '4–5 giorni',
                steps: [
                    'Lipari come base.',
                    'Vulcano per il fango termale.',
                    'Stromboli al tramonto.',
                    'Panarea per una giornata.',
                ],
            },
        ],
        mustSee: [
            { title: 'Valle dei Templi', note: 'Agrigento, soprattutto al tramonto.' },
            { title: 'Cattedrale di Monreale', note: 'Mosaici arabo-normanni, vicino Palermo.' },
            { title: 'Ortigia', note: 'L’isola-centro storico di Siracusa.' },
            { title: 'Etna', note: 'Escursione ai crateri sommitali, da fare con guida.' },
            { title: 'Taormina', note: 'Teatro greco con vista Etna e mare.' },
        ],
        tips: {
            periodo: 'Maggio, giugno, settembre.',
            durata: 'Minimo 5 notti per una zona. 8–10 per un tour completo.',
            note: 'Auto necessaria per i tour. Le distanze su mappa ingannano: strade lente, soprattutto nell’interno.',
        },
    },
    sardegna: {
        eyebrow: 'Sardegna',
        heroSubtitle:
            'Acque turchesi, granito rosa, un entroterra ostinato e bellissimo.',
        intro: [
            'La Sardegna è un’isola con due anime. Quella che tutti hanno visto in foto. Costa Smeralda, La Maddalena, le calette di sabbia bianca, e quella interna, di nuraghi, pastori e silenzio.',
            'La verità è che vale entrambe: il mare è davvero così, ma il cuore vero dell’isola si trova un po’ più in là.',
        ],
        characteristics: {
            paesaggio: 'Coste di granito e calcare, dune, foreste di sughera, montagne (Gennargentu).',
            mare: 'Tra i più belli del Mediterraneo: Maddalena, Costa Smeralda, Cala Goloritzé, Chia.',
            borghi: 'Cagliari, Alghero, Bosa, Castelsardo, Orgosolo.',
            vibe: 'Selvaggia, fiera, slow. Diversa da qualsiasi altra regione italiana.',
            stagionalita: 'Da maggio a ottobre per il mare. Ottobre splendido per l’interno.',
            idealePer: ['Mare', 'Famiglie', 'Coppie', 'Barca', 'Trekking'],
        },
        location: {
            dove: 'Mar Tirreno, a ovest della penisola italiana.',
            area: 'Regione autonoma a statuto speciale.',
            comeArrivare:
                'Voli su Cagliari, Olbia, Alghero. Traghetti da Civitavecchia, Genova, Livorno, Napoli.',
        },
        funFacts: [
            'I nuraghi sono oltre 7.000 e nessun’altra civiltà al mondo ne ha costruiti di simili.',
            'Il sardo è una lingua a sé, non un dialetto: è la più conservativa rispetto al latino.',
            'Cala Luna e Cala Goloritzé sono raggiungibili solo a piedi o in barca.',
            'In Barbagia ci sono uno dei tassi più alti di centenari al mondo.',
        ],
        itineraries: [
            {
                title: 'Costa nord',
                duration: '4–5 giorni',
                steps: [
                    'Olbia o Porto Cervo come base.',
                    'Arcipelago della Maddalena in barca.',
                    'Spiagge della Costa Smeralda.',
                    'Tempio Pausania per l’entroterra gallurese.',
                ],
            },
            {
                title: 'Costa est',
                duration: '5 giorni',
                steps: [
                    'Cala Gonone come base.',
                    'Cala Luna e Cala Mariolu in gommone.',
                    'Cala Goloritzé a piedi.',
                    'Supramonte e Tiscali.',
                ],
            },
            {
                title: 'Sud',
                duration: '4–5 giorni',
                steps: [
                    'Cagliari (2 notti).',
                    'Chia, Tuerredda, Cala Cipolla.',
                    'Sant’Antioco e San Pietro.',
                ],
            },
        ],
        mustSee: [
            { title: 'Arcipelago della Maddalena', note: 'Caprera, Budelli (Spiaggia Rosa).' },
            { title: 'Cala Goloritzé', note: 'Piccola, perfetta, accessibile a piedi.' },
            { title: 'Su Nuraxi di Barumini', note: 'Nuraghe più importante, patrimonio UNESCO.' },
            { title: 'Alghero', note: 'Catalano nelle insegne, mura sul mare al tramonto.' },
            { title: 'Bosa', note: 'Case colorate sul fiume Temo, una delle più fotogeniche.' },
        ],
        tips: {
            periodo: 'Giugno e settembre per il mare senza folla.',
            durata: '7 notti per una zona, 10–14 per nord+est.',
            note: 'Auto indispensabile. Le spiagge migliori richiedono camminate o gommone.',
        },
    },
    roma: {
        eyebrow: 'Lazio',
        heroSubtitle:
            'Duemilasettecento anni di stratificazione, vissuti in una città che continua a essere quotidiana.',
        intro: [
            'Roma è una capitale che non si comporta da capitale: è informale, lenta, viva. Tre civiltà sovrapposte, antica, papale, contemporanea, e un’abitudine a passarci sopra senza pensarci.',
            'Si visita meglio passeggiando senza programma serrato. Le cose importanti capitano fra una via e l’altra.',
        ],
        characteristics: {
            paesaggio: 'Sette colli, Tevere, pinete del Gianicolo e di Villa Borghese.',
            mare: 'Ostia e Fregene a 30 km, comodi in treno.',
            borghi: 'Trastevere, Monti, Pigneto, Testaccio, Centro Storico.',
            vibe: 'Disinvolta, imperiale, popolare. Ti ci abitui in due giorni.',
            stagionalita: 'Tutto l’anno. Ottimi aprile, maggio, ottobre.',
            idealePer: ['City break', 'Cultura', 'Cibo', 'Coppie', 'Famiglie'],
        },
        location: {
            dove: 'Lazio centrale, sul Tevere.',
            area: 'Capitale d’Italia.',
            comeArrivare:
                'Aeroporti Fiumicino e Ciampino. Stazione Termini collega tutto il paese in alta velocità.',
        },
        funFacts: [
            'Il Pantheon ha la più grande cupola in calcestruzzo non armato del mondo, costruita nel 126 d.C.',
            'I Musei Vaticani conservano oltre 70.000 opere, ne sono esposte circa 20.000.',
            'La Bocca della Verità è in realtà un antico tombino romano.',
            'La carbonara come la conosciamo oggi appare nei ricettari solo dopo il 1944.',
        ],
        itineraries: [
            {
                title: 'Un giorno',
                duration: '1 giorno',
                steps: [
                    'Mattina: Colosseo, Foro Romano, Palatino.',
                    'Pranzo a Monti.',
                    'Pomeriggio: Pantheon, Piazza Navona, Fontana di Trevi.',
                    'Cena a Trastevere.',
                ],
            },
            {
                title: 'Due giorni',
                duration: '2 giorni',
                steps: [
                    'Giorno 1: Roma antica (Colosseo, Foro, Palatino, Bocca della Verità).',
                    'Giorno 2: Vaticano (San Pietro, Musei Vaticani), Castel Sant’Angelo.',
                ],
            },
            {
                title: 'Tre giorni',
                duration: '3 giorni',
                steps: [
                    'Giorni 1–2 come sopra.',
                    'Giorno 3: Galleria Borghese, Villa Borghese, Trastevere e Gianicolo al tramonto.',
                ],
            },
        ],
        mustSee: [
            { title: 'Colosseo + Foro', note: 'Biglietto unico, prima mattina.' },
            { title: 'Pantheon', note: 'L’edificio antico meglio conservato al mondo.' },
            { title: 'Musei Vaticani + Cappella Sistina', note: 'Prenotazione obbligatoria.' },
            { title: 'Galleria Borghese', note: 'Bernini e Caravaggio in sequenza, ingresso a slot.' },
            { title: 'Trastevere al tramonto', note: 'Piazza Santa Maria, vicoli, cena lunga.' },
        ],
        tips: {
            periodo: 'Aprile, maggio, ottobre. Inverno è bellissima e meno cara.',
            durata: '3 notti minime, 4–5 ideali.',
            note: 'Scarpe comode (sampietrini ovunque). Metro e tram funzionano ma il centro è da fare a piedi.',
        },
    },
    toscana: {
        eyebrow: 'Toscana',
        heroSubtitle:
            'Colline ondulate, cipressi in fila, vini che spiegano la terra meglio di un libro.',
        intro: [
            'La Toscana funziona come una regione composta da molte Toscane diverse: il Chianti, la Val d’Orcia, la Maremma, le Apuane, le città d’arte, il Casentino.',
            'Si gira meglio in auto, fermandosi nei borghi minori. Il vero lusso qui è il tempo: una pieve isolata, una cantina di famiglia, un tramonto su un cipresso solo.',
        ],
        characteristics: {
            paesaggio: 'Colline coltivate, vigneti, oliveti, foreste, costa tirrenica.',
            mare: 'Maremma (Castiglione, Argentario), Versilia, Isola d’Elba.',
            borghi: 'Firenze, Siena, Lucca, Pisa, San Gimignano, Pienza, Montepulciano, Volterra.',
            vibe: 'Raffinata e contadina insieme. Lusso discreto.',
            stagionalita: 'Aprile–giugno e settembre–ottobre. Le vendemmie a settembre sono speciali.',
            idealePer: ['Coppie', 'Slow travel', 'Vino', 'Cultura', 'Famiglie'],
        },
        location: {
            dove: 'Italia centrale, costa tirrenica e Appennino.',
            area: 'Capoluogo Firenze.',
            comeArrivare:
                'Aeroporti Firenze, Pisa, Bologna. Treno alta velocità Firenze SMN.',
        },
        funFacts: [
            'Il Brunello di Montalcino fu inventato nel 1888 da Ferruccio Biondi Santi.',
            'A Pienza, Pio II progettò la prima “città ideale” del Rinascimento.',
            'San Gimignano aveva 72 torri medievali, ne restano 14.',
            'La Val d’Orcia è patrimonio UNESCO come paesaggio culturale.',
        ],
        itineraries: [
            {
                title: 'Firenze in 2 giorni',
                duration: '2 giorni',
                steps: [
                    'Giorno 1: Duomo, Battistero, Uffizi.',
                    'Giorno 2: Palazzo Pitti, Boboli, Oltrarno, Piazzale Michelangelo al tramonto.',
                ],
            },
            {
                title: 'Chianti & Val d’Orcia',
                duration: '4 giorni',
                steps: [
                    'Base in agriturismo nel Chianti.',
                    'Castello di Brolio, Greve, Radda, Castellina.',
                    'Pienza, Montalcino, Montepulciano.',
                    'Cipressi di San Quirico e Bagno Vignoni.',
                ],
            },
            {
                title: 'Toscana classica',
                duration: '7 giorni',
                steps: [
                    'Firenze (2).',
                    'Siena e San Gimignano (1).',
                    'Val d’Orcia (2).',
                    'Lucca e Pisa (1).',
                    'Costa: Argentario o Maremma (1).',
                ],
            },
        ],
        mustSee: [
            { title: 'Uffizi', note: 'Botticelli, Leonardo, Caravaggio. Prenotare.' },
            { title: 'Piazza del Campo', note: 'Siena. Una delle piazze più belle del mondo.' },
            { title: 'Val d’Orcia', note: 'Strade panoramiche tra Pienza, Montalcino, San Quirico.' },
            { title: 'Bagno Vignoni', note: 'Vasca termale al posto della piazza centrale.' },
            { title: 'Lucca', note: 'Mura cinquecentesche pedonalizzate, perfette in bici.' },
        ],
        tips: {
            periodo: 'Maggio, giugno, settembre.',
            durata: '5–7 notti per una buona miscela.',
            note: 'Auto necessaria fuori Firenze. ZTL nei centri storici: parcheggia fuori e cammina.',
        },
    },
    positano: {
        eyebrow: 'Costiera Amalfitana. Campania',
        heroSubtitle:
            'Case rosa e ocra cascano dalla scogliera fino al mare. Una scenografia che funziona ancora.',
        intro: [
            'Positano è verticale. Sale e scende continuamente, vicoli stretti, scalinate che diventano strade. Tra una boutique e l’altra, scorci di mare che ti fanno fermare.',
            'È turistica, sì, ma è anche autentica nella sua identità: Positano è esattamente quello che sembra, e funziona.',
        ],
        characteristics: {
            paesaggio: 'Scogliera verticale, anfiteatro naturale aperto sul mare.',
            mare: 'Spiaggia Grande, Fornillo (più tranquilla), calette in barca.',
            borghi: 'Positano e la frazione alta di Montepertuso e Nocelle.',
            vibe: 'Romantica, fashion, dolce vita. Più chic che folkloristica.',
            stagionalita: 'Da aprile a ottobre.',
            idealePer: ['Coppie', 'Lune di miele', 'Weekend romantici', 'Barca'],
        },
        location: {
            dove: 'Costiera Amalfitana, tra Sorrento e Amalfi.',
            area: 'Campania, provincia di Salerno.',
            comeArrivare:
                'Auto via SS163 (lenta in alta stagione). Aliscafo da Napoli, Sorrento, Capri, Amalfi (consigliato d’estate).',
        },
        funFacts: [
            'John Steinbeck scrisse nel 1953 un celebre articolo per Harper’s Bazaar che fece scoprire Positano agli americani.',
            'La “moda Positano” degli anni ’60, lino bianco, sandali fatti a mano, abiti leggeri. è un genere a sé.',
            'Il Sentiero degli Dei, sopra Positano, era l’antica via di collegamento prima della SS163.',
            'L’icona di Positano (cupola maiolicata gialla e verde) è la Chiesa di Santa Maria Assunta.',
        ],
        itineraries: [
            {
                title: 'Mezza giornata',
                duration: '3–4 ore',
                steps: [
                    'Discesa a Spiaggia Grande dai vicoli.',
                    'Chiesa di Santa Maria Assunta.',
                    'Aperitivo vista mare prima di risalire.',
                ],
            },
            {
                title: 'Un giorno',
                duration: '1 giorno',
                steps: [
                    'Mattina sentiero Fornillo (più tranquillo).',
                    'Pranzo sulla spiaggia.',
                    'Pomeriggio in barca: Li Galli o Grotta Smeraldo.',
                    'Cena in terrazza al tramonto.',
                ],
            },
            {
                title: 'Due o tre giorni',
                duration: '2–3 giorni',
                steps: [
                    'Giorno 1: Positano e Fornillo.',
                    'Giorno 2: Sentiero degli Dei (Bomerano → Nocelle).',
                    'Giorno 3: Capri o Amalfi in barca.',
                ],
            },
            {
                title: 'Via mare',
                duration: 'Mezza giornata in barca',
                steps: [
                    'Costeggio fino a Praiano e Furore.',
                    'Sosta a Marina di Praia per il bagno.',
                    'Rientro alla Spiaggia di Arienzo.',
                ],
            },
        ],
        mustSee: [
            { title: 'Spiaggia Grande', note: 'Il “fronte palco” di Positano.' },
            { title: 'Fornillo', note: 'Più piccola, raggiungibile a piedi dal porto.' },
            { title: 'Santa Maria Assunta', note: 'La chiesa con la cupola maiolicata simbolo.' },
            { title: 'Sentiero degli Dei', note: 'Una delle camminate più belle del Mediterraneo.' },
            { title: 'Li Galli', note: 'Arcipelago di fronte a Positano, raggiungibile in barca.' },
        ],
        tips: {
            periodo: 'Maggio, giugno, settembre.',
            durata: '2-3 notti. Più giorni = ritmo più lento, perfetto.',
            note: 'Tantissime scale: scarpe comode obbligatorie. Auto inutile, anzi: meglio non averla.',
        },
    },
    puglia: {
        eyebrow: 'Sud Italia',
        heroSubtitle:
            'Trulli, masserie, città bianche e un mare che cambia colore ogni cento metri.',
        intro: [
            'La Puglia è lunga: si va dal Gargano al tacco, e nessun tratto somiglia all’altro. Il nord è masserie e pianura, il centro è trulli e città bianche, il Salento è un’altra cosa ancora.',
            'Si gira meglio in auto. Le distanze ingannano sulla mappa: ci si ferma in continuazione, e va bene così.',
        ],
        characteristics: {
            paesaggio: 'Ulivi secolari, muretti a secco, scogliere calcaree, spiagge lunghe.',
            mare: 'Adriatico a est, Ionio a sud. Acqua trasparente, fondali bassi, calette nascoste.',
            borghi: 'Polignano a Mare, Alberobello, Ostuni, Locorotondo, Lecce, Otranto, Gallipoli.',
            vibe: 'Solare, accogliente, gastronomica. Niente posa: tutto vero.',
            stagionalita: 'Aprile-giugno e settembre-ottobre per girare senza folla. Luglio-agosto per il mare ma con prezzi alti.',
            idealePer: ['Coppie', 'Famiglie', 'Tour itineranti', 'Cibo e vino', 'Weekend lunghi'],
        },
        location: {
            dove: 'Sud-est Italia, tra Adriatico e Ionio.',
            area: 'Capoluogo Bari. Province: Bari, BAT, Brindisi, Foggia, Lecce, Taranto.',
            comeArrivare:
                'Voli su Bari e Brindisi. Treni alta velocità da Roma, Milano, Bologna. Bus diretti dalle grandi città.',
        },
        funFacts: [
            'Ad Alberobello ci sono oltre 1.500 trulli, patrimonio UNESCO.',
            'Il Salento ha la più grande comunità grika d’Italia: nei paesi della Grecìa Salentina si parla ancora un dialetto griko.',
            'L’olio extravergine pugliese rappresenta circa il 40% della produzione nazionale.',
            'La Cattedrale di Otranto ha un mosaico pavimentale del XII secolo lungo 16 metri.',
        ],
        itineraries: [
            {
                title: 'Weekend Valle d’Itria',
                duration: '3 giorni',
                steps: [
                    'Giorno 1: Alberobello e Locorotondo.',
                    'Giorno 2: Ostuni e Cisternino.',
                    'Giorno 3: Polignano a Mare e Monopoli.',
                ],
            },
            {
                title: 'Una settimana classica',
                duration: '7 giorni',
                steps: [
                    'Bari (1 notte).',
                    'Valle d’Itria (2 notti in masseria).',
                    'Salento: Lecce (1 notte).',
                    'Otranto e Santa Maria di Leuca (1 notte).',
                    'Gallipoli e ritorno (2 notti).',
                ],
            },
            {
                title: 'Via mare',
                duration: 'Giornata in barca',
                steps: [
                    'Partenza da Polignano o Monopoli.',
                    'Costeggio delle grotte e calette.',
                    'Sosta bagno a Lama Monachile.',
                ],
            },
        ],
        mustSee: [
            { title: 'Alberobello', note: 'Trulli del rione Monti e Aia Piccola.' },
            { title: 'Polignano a Mare', note: 'Lama Monachile dall’alto, e poi giù a fare il bagno.' },
            { title: 'Ostuni', note: 'La Città Bianca, da girare a piedi al tramonto.' },
            { title: 'Lecce', note: 'Barocco leccese, capitale del Salento.' },
            { title: 'Otranto', note: 'Cattedrale, castello aragonese, mare turchese.' },
            { title: 'Gallipoli', note: 'Centro storico su isolotto, vista Ionio.' },
        ],
        tips: {
            periodo: 'Maggio, giugno, settembre, ottobre.',
            durata: '5-7 notti per una zona, 10+ per attraversarla tutta.',
            note: 'Auto necessaria. Strade interne lente ma molto scenografiche.',
        },
    },
    calabria: {
        eyebrow: 'Sud Italia',
        heroSubtitle:
            'Tropea, Scilla, scogliere a picco. Il mare più trasparente del Mediterraneo, senza la folla.',
        intro: [
            'La Calabria è ancora una sorpresa per molti, e questo è il suo bello. Costa Tirrenica con borghi a strapiombo, Ionica con spiagge infinite, in mezzo montagne che non ti aspetti (Sila, Aspromonte, Pollino).',
            'È terra di Magna Grecia: passeggi a Locri o Reggio e ti ritrovi tra rovine doriche.',
        ],
        characteristics: {
            paesaggio: 'Costa frastagliata, scogliere bianche, montagne interne, ulivi e bergamotto.',
            mare: 'Tra i più trasparenti del Mediterraneo. Tropea, Capo Vaticano, Scilla, Soverato.',
            borghi: 'Tropea, Scilla, Pizzo, Stilo, Gerace, Reggio Calabria.',
            vibe: 'Genuina, mediterranea, gastronomica. Lontana dal turismo di massa.',
            stagionalita: 'Giugno-settembre per il mare. Maggio e ottobre splendidi per girare l’entroterra.',
            idealePer: ['Mare', 'Famiglie', 'Coppie', 'Tour in auto', 'Pesce e cucina povera'],
        },
        location: {
            dove: 'Punta dello stivale, tra Tirreno e Ionio.',
            area: 'Capoluogo Catanzaro. Province: Catanzaro, Cosenza, Crotone, Reggio Calabria, Vibo Valentia.',
            comeArrivare:
                'Voli su Lamezia Terme e Reggio Calabria. Treno alta velocità fino a Salerno, poi InterCity. In auto via A2.',
        },
        funFacts: [
            'I Bronzi di Riace, esposti al Museo di Reggio Calabria, sono due statue greche del V sec. a.C. trovate in mare nel 1972.',
            'Il bergamotto cresce praticamente solo qui: 90% della produzione mondiale è nella fascia Reggio-Locri.',
            '‘Nduja, soppressata e capocollo: la salumeria calabrese è una religione.',
            'Scilla deve il nome al mostro marino dell’Odissea, contrapposto a Cariddi nello stretto di Messina.',
        ],
        itineraries: [
            {
                title: 'Costa degli Dei',
                duration: '4-5 giorni',
                steps: [
                    'Tropea (2 notti).',
                    'Capo Vaticano: spiagge di Grotticelle e Praia i Focu.',
                    'Pizzo per il tartufo (gelato, non il fungo).',
                ],
            },
            {
                title: 'Tirreno + Ionio',
                duration: '7 giorni',
                steps: [
                    'Tropea e Capo Vaticano (2).',
                    'Scilla e Costa Viola (1).',
                    'Reggio Calabria + Bronzi (1).',
                    'Locri e Gerace (1).',
                    'Soverato, Costa degli Aranci (2).',
                ],
            },
            {
                title: 'Via mare',
                duration: 'Giornata in barca',
                steps: [
                    'Partenza da Tropea o Vibo Marina.',
                    'Costeggio Capo Vaticano, soste in cala.',
                    'Rientro al tramonto vista isola dei Coniglietti.',
                ],
            },
        ],
        mustSee: [
            { title: 'Tropea', note: 'Santuario di Santa Maria dell’Isola al tramonto.' },
            { title: 'Scilla', note: 'Chianalea, il quartiere dei pescatori sull’acqua.' },
            { title: 'Capo Vaticano', note: 'Belvedere e spiagge di Grotticelle e Tonicello.' },
            { title: 'Bronzi di Riace', note: 'Reggio Calabria, due statue greche del V sec. a.C.' },
            { title: 'Gerace', note: 'Borgo medievale entroterra, una delle perle calabresi.' },
        ],
        tips: {
            periodo: 'Giugno e settembre. Luglio-agosto belli ma più pieni.',
            durata: '5-7 notti per Costa degli Dei, 10 per coprire tirrenica + ionica.',
            note: 'Auto indispensabile. Strada panoramica SS18 lungo la Costa Viola: bellissima ma lenta.',
        },
    },
};
