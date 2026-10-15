import type { DestinationContent } from './destination-content';

// English version of destination-content.ts. Keys and structure must mirror the Italian file.
export const destinationContentEn: Record<string, DestinationContent> = {
    ischia: {
        eyebrow: 'Gulf of Naples. Campania',
        heroSubtitle:
            'A volcanic island, the resting place of the giant Typhon, where the green slips down into the sea.',
        intro: [
            'Ischia is the largest of the islands in the Gulf of Naples, a still-active volcanic cone that has shaped coves, thermal springs and gardens suspended above the sea.',
            'It is not a glossy-magazine island: it is rough in the right places and gentle where it counts. You get around slowly, you eat well, you end up staying longer than planned.',
        ],
        characteristics: {
            paesaggio:
                'Mount Epomeo at the centre, terraced vineyards, pine woods and lava flows running down to the sea.',
            mare: 'Coves of dark sand and bays such as Sant’Angelo, Cartaromana and Sorgeto, where the water comes up naturally hot.',
            borghi: 'Six distinct municipalities: Ischia Porto, Casamicciola, Lacco Ameno, Forio, Serrara Fontana and Barano. Each with its own character.',
            vibe: 'Slow, restorative, authentic. More an island of real life than a postcard.',
            idealePer: ['Couples', 'Families', 'Wellness & spas', 'Long stays', 'Boating'],
        },
        location: {
            dove: 'Gulf of Naples, about 30 km from the city.',
            area: 'Campania, province of Naples.',
            comeArrivare:
                'Hydrofoil from Napoli Beverello (~50 min), ferry from Calata di Massa in the Port of Naples (~1 h 45 min), ferry from Pozzuoli (~1 h). Nearest airport: Naples Capodichino.',
        },
        funFacts: [
            'La Mortella Gardens were created by the English composer William Walton and his wife Susana in the 1950s.',
            'Nestor’s Cup, found in Lacco Ameno, bears one of the oldest inscriptions in the Greek alphabet ever found in the West (8th century BC).',
            'Sorgeto is a bay where thermal water and seawater mix: you can take a warm swim even in winter.',
            'Epomeo is a block of green tuff pushed up by magma, not a classic crater.',
            'Ischia’s wine (Biancolella, Forastera) is grown on historic pergolas overlooking the Tyrrhenian Sea.',
        ],
        itineraries: [
            {
                title: 'Half day',
                duration: '4 hours',
                steps: [
                    'The Aragonese Castle in the morning, before the sun gets strong.',
                    'Light lunch in Ischia Ponte.',
                    'Swim and aperitivo at Cartaromana.',
                ],
            },
            {
                title: 'One day',
                duration: '1 day',
                steps: [
                    'Morning at the Aragonese Castle.',
                    'Lunch in Forio or Sant’Angelo.',
                    'Afternoon at the thermal pools of Poseidon Gardens or the Sorgeto fumaroles.',
                    'Sunset at Punta Caruso.',
                ],
            },
            {
                title: 'Two or three days',
                duration: '2–3 days',
                steps: [
                    'Day 1: Ischia Ponte, the Castle, dinner overlooking the gulf.',
                    'Day 2: boat trip around the island, swimming stop at San Montano Bay.',
                    'Day 3: Epomeo at dawn, La Mortella Gardens and Sant’Angelo in the afternoon.',
                ],
            },
            {
                title: 'By sea',
                duration: 'Day on a boat',
                steps: [
                    'Departure from Casamicciola or Forio.',
                    'Stops at Sorgeto and Sant’Angelo for a swim.',
                    'Lunch on board, then back along the coast past Punta Imperatore.',
                ],
            },
        ],
        mustSee: [
            { title: 'Aragonese Castle', note: 'Best early in the morning, in full light and with few people around.' },
            { title: 'Villa Arbusto', note: 'The archaeological museum of Lacco Ameno: this is where Nestor’s Cup is kept.' },
            { title: 'La Mortella Gardens', note: 'Rare plants, concerts in summer.' },
            { title: 'Sant’Angelo', note: 'Pedestrian village, ideal at sunset.' },
            { title: 'Sorgeto', note: 'Natural thermal bay: bring a swimsuit and water shoes.' },
            { title: 'Mount Epomeo', note: 'An easy climb, with 360° views over the archipelago.' },
        ],
        tips: {
            periodo: 'From April to October.',
            durata: '3–5 nights to take things at an easy pace.',
            note: 'A car is useful but not essential: EAV buses and microbus taxis cover the whole island. The thermal spas generally open from April to October.',
        },
    },
    capri: {
        eyebrow: 'Gulf of Naples. Campania',
        heroSubtitle:
            'White rock, cobalt sea, and a piazzetta that works as an open-air theatre.',
        intro: [
            'You don’t visit Capri, you pass through it. It is small and vertical, and every corner has already been photographed a million times, yet in person it still works.',
            'The secret is to slow down. Get up early, slip away from the main routes, and come back to the Piazzetta only as evening falls.',
        ],
        characteristics: {
            paesaggio: 'Sheer cliffs, Mediterranean scrub, maritime pines and white villas.',
            mare: 'Deep, intensely blue water, grottoes, sea stacks and coves you can only reach by boat.',
            borghi: 'Capri (the “lower town”, at 138 m) and Anacapri, higher up, quieter and more down-to-earth.',
            vibe: 'Natural elegance, dolce vita, long relaxed summers.',
            idealePer: ['Couples', 'Weekends', 'Boating', 'Dinner with a sea view'],
        },
        location: {
            dove: 'Southern Gulf of Naples, facing the Sorrento Peninsula.',
            area: 'Campania, province of Naples.',
            comeArrivare:
                'Hydrofoil from Naples (~50 min), Sorrento (~25 min) or Ischia (~50–60 min). In summer there are also direct connections from Positano and Amalfi.',
        },
        funFacts: [
            'Emperor Tiberius spent the last years of his life at Villa Jovis, on the eastern tip of the island.',
            'The Blue Grotto owes its colour to an underwater opening that filters the light from below.',
            'Anacapri has its own dialect and for centuries considered itself a community separate from Capri.',
            'Capri sandals are still hand-stitched in a few historic workshops.',
        ],
        itineraries: [
            {
                title: 'One day',
                duration: '1 day',
                steps: [
                    'Boat trip to the Faraglioni and the Blue Grotto in the morning.',
                    'Lunch at Marina Piccola.',
                    'Anacapri in the afternoon: Villa San Michele, then the chairlift up Monte Solaro.',
                    'Sunset at Punta Carena.',
                ],
            },
            {
                title: 'Two days',
                duration: '2 days',
                steps: [
                    'Day 1: Capri, the Piazzetta, the Gardens of Augustus, the Pizzolungo trail.',
                    'Day 2: Anacapri, Villa San Michele, Monte Solaro, Punta Carena lighthouse, a visit to Villa Lysis.',
                ],
            },
            {
                title: 'By sea',
                duration: 'Day on a boat',
                steps: [
                    'Round-the-island trip with a skipper.',
                    'Stops at the Green Grotto, the Faraglioni and the White Grotto.',
                    'Lunch on board or at Marina Piccola.',
                ],
            },
        ],
        mustSee: [
            { title: 'Faraglioni', note: 'From land (Punta Tragara) or by boat, at golden hour.' },
            { title: 'Villa San Michele', note: 'Axel Munthe’s house-museum in Anacapri.' },
            { title: 'Villa Lysis', note: 'Baron Fersen’s villa, perched high above the sea. History and a sheer-drop view.' },
            { title: 'Monte Solaro', note: 'Panoramic chairlift, views over the whole gulf.' },
            { title: 'Via Krupp', note: 'Dramatic hairpin bends carved into the rock.' },
            { title: 'Punta Carena Lighthouse', note: 'On the west side, perfect for sunset.' },
            { title: 'Capri’s Piazzetta', note: 'The mood the whole world envies.' },
        ],
        tips: {
            periodo: 'From April to October. April and September bring excellent weather and fewer people.',
            durata: '1–2 nights, so you can enjoy the evenings too, when the island empties.',
            note: 'No rental cars on the island. Funicular, open-top taxis and walking: comfortable shoes are a must.',
        },
    },
    procida: {
        eyebrow: 'Gulf of Naples. Campania',
        heroSubtitle:
            'Pastel houses overlooking the little harbour, and an island in no hurry.',
        intro: [
            'Procida is the smallest of the islands in the Gulf of Naples, and perhaps the most honest. No luxury chains, no overwhelming crowds: just a handful of pink, yellow and powder-blue houses climbing up from the harbour.',
            'It was Italian Capital of Culture in 2022, and since then it has found a new balance: better cared for, but still authentic.',
        ],
        characteristics: {
            paesaggio: 'Low coastline, vineyards, lemon groves, views of Vesuvius and Ischia.',
            mare: 'Quiet beaches (Chiaiolella, Ciraccio), with shallow water that suits children too.',
            borghi: 'Marina Grande, Corricella and Terra Murata are the three historic centres.',
            vibe: 'Seafaring, genuine, relaxed. The scent of lemons and boats in the sun.',
            idealePer: ['Couples', 'Unhurried weekends', 'Photographers', 'Readers', 'Families'],
        },
        location: {
            dove: 'Between Capo Miseno and Ischia, in the Gulf of Naples.',
            area: 'Campania, province of Naples.',
            comeArrivare:
                'Hydrofoil from Napoli Beverello (~40 min) or Pozzuoli (~35 min). You get around on foot, by micro-taxi or by scooter.',
        },
        funFacts: [
            'Corricella is the fishing village featured in the film “Il Postino” with Massimo Troisi.',
            'The colourful façades come from a practical custom: fishermen could recognise their own house from the sea.',
            'Procida has fewer than 10,000 inhabitants but more than 14 churches.',
            'The Procida lemon, known as “pane” (bread), has a thick peel and is eaten in salads.',
        ],
        itineraries: [
            {
                title: 'Half day',
                duration: '3–4 hours',
                steps: [
                    'Marina Grande on foot.',
                    'Climb up to Terra Murata and Casale Vascello.',
                    'Walk down to Corricella for lunch or a coffee.',
                ],
            },
            {
                title: 'One day',
                duration: '1 day',
                steps: [
                    'Morning at Corricella and Terra Murata.',
                    'Seafood lunch by the little harbour.',
                    'Afternoon on the beach at Chiaiolella.',
                    'Sunset aperitivo at Marina Grande.',
                ],
            },
            {
                title: 'Two days',
                duration: '2 days',
                steps: [
                    'Day 1: the historic villages and Corricella.',
                    'Day 2: round-the-island trip by boat or traditional gozzo, swim at Pozzo Vecchio.',
                ],
            },
        ],
        mustSee: [
            { title: 'Marina Corricella', note: 'The fishermen’s harbour, magical at sunset.' },
            { title: 'Terra Murata', note: 'Fortified medieval village, with huge views over the gulf.' },
            { title: 'Lingua di Procida', note: 'Fragrant puff pastry wrapped around a heart of lemon-scented cream. Not to be missed.' },
            { title: 'Chiaiolella', note: 'Long beach on the south side, ideal in the afternoon.' },
            { title: 'Pozzo Vecchio', note: 'The “Il Postino” beach, intimate and cinematic.' },
            { title: 'Casale Vascello', note: 'A maze of courtyards and arches, the heart of the island’s farming past.' },
        ],
        tips: {
            periodo: 'May, June, September.',
            durata: '1 night is enough, 2 are perfect for the island’s rhythm.',
            note: 'The island is tiny: you don’t need a car. Taxis and scooters are the best way to get around.',
        },
    },
    napoli: {
        eyebrow: 'Campania',
        heroSubtitle:
            'A city that doesn’t ask permission: it gets under your skin and stays with you forever.',
        intro: [
            'Naples is dense, contradictory, alive. It moves at its own pace and doesn’t ask you to live it: it only asks you to walk through it.',
            'Between Spaccanapoli, the Quartieri Spagnoli and the Mergellina seafront, the city changes face every five minutes, and every time it amazes you.',
        ],
        characteristics: {
            paesaggio: 'The Gulf of Naples, Vesuvius in the background, the city’s hills (Vomero, Posillipo).',
            mare: 'Lungomare Caracciolo, Castel dell’Ovo, Posillipo: the sea as a backdrop.',
            borghi: 'The UNESCO historic centre, Quartieri Spagnoli, Sanità, Chiaia, Posillipo.',
            vibe: 'Energetic, theatrical, generous. A true Mediterranean capital.',
            idealePer: ['City breaks', 'Culture', 'Food', 'History', 'Couples and friends'],
        },
        location: {
            dove: 'On the Tyrrhenian coast of Campania, on the gulf that bears its name.',
            area: 'Campania, regional capital.',
            comeArrivare:
                'Naples Capodichino airport. High-speed train from Rome in 1h10, from Milan in ~4h30, arriving at Napoli Centrale in Piazza Garibaldi. Coach services from Rome, Milan, Turin, Florence, Bari and other major cities.',
        },
        funFacts: [
            'The Margherita pizza was created in 1889 in honour of Queen Margherita of Savoy.',
            'Beneath the historic centre lies Napoli Sotterranea: Greek cisterns, Bourbon tunnels, Second World War shelters.',
            'The Veiled Christ, in the Sansevero Chapel, is carved from a single block of marble.',
            'Spaccanapoli is the lower decumanus of the Greco-Roman city.',
        ],
        itineraries: [
            {
                title: 'Half day',
                duration: '4 hours',
                steps: [
                    'Spaccanapoli, from Piazza del Gesù to San Gregorio Armeno.',
                    'Sansevero Chapel (booking required).',
                    'Fried pizza or folded pizza “a portafoglio” on the street.',
                ],
            },
            {
                title: 'One day',
                duration: '1 day',
                steps: [
                    'Morning in the historic centre (Cathedral, San Domenico, Sansevero Chapel).',
                    'Quick lunch: folded pizza or a cuoppo by the port.',
                    'Afternoon at the MANN (National Archaeological Museum).',
                    'Sunset on the Mergellina seafront.',
                ],
            },
            {
                title: 'Two or three days',
                duration: '2–3 days',
                steps: [
                    'Day 1: the historic centre and Sanità.',
                    'Day 2: Pompeii as an excursion, back for dinner in Chiaia.',
                    'Day 3: Vomero (Certosa di San Martino, Castel Sant’Elmo) and Posillipo.',
                ],
            },
        ],
        mustSee: [
            { title: 'Sansevero Chapel', note: 'Seeing the Veiled Christ in person is something else.' },
            { title: 'MANN', note: 'The key archaeological museum for Pompeii and Herculaneum.' },
            { title: 'Certosa di San Martino', note: 'Sweeping views over the gulf from the Vomero.' },
            { title: 'Rione Sanità', note: 'The Catacombs of San Gennaro and a new cultural scene.' },
            { title: 'Lungomare Caracciolo', note: 'Sunset from Castel dell’Ovo towards Mergellina.' },
        ],
        tips: {
            periodo: 'April–May, September–October.',
            durata: 'At least 2–3 nights, so you don’t have to rush.',
            note: 'In the centre, get around on foot and by metro (Line 1, Line 2, Line 6 and various buses). The stations are genuine works of art.',
        },
    },
    sicilia: {
        eyebrow: 'Sicily',
        heroSubtitle:
            'An island that is a journey in itself: three seas, a volcano, a thousand layered stories.',
        intro: [
            'Sicily can’t be done in a few days. Greeks, Arabs, Normans, Spaniards, Bourbons: each occupation left a new layer, and the food is the edible version of all that layering.',
            'You can choose the Baroque south-east, the north coast with Palermo and Cefalù, Etna and Taormina, or the smaller islands. Each one is a different trip.',
        ],
        characteristics: {
            paesaggio: 'Etna (3,300 m), Baroque valleys, a varied coastline, smaller islands (the Egadi and Aeolian Islands).',
            mare: 'White-sand coves (San Vito Lo Capo), sea stacks, deep water at Taormina.',
            borghi: 'Palermo, Catania, Syracuse, Noto, Modica, Ragusa, Cefalù, Taormina.',
            vibe: 'Warm, generous, contradictory. Never ordinary.',
            idealePer: ['Culture', 'Food and wine', 'Touring holidays', 'Families', 'Couples'],
        },
        location: {
            dove: 'Central Mediterranean, separated from Calabria by the Strait of Messina.',
            area: 'Autonomous region with special statute.',
            comeArrivare:
                'Flights to Catania, Palermo, Trapani and Comiso. Train plus ferry across the Strait. Ferries from Naples, Genoa and Civitavecchia.',
        },
        funFacts: [
            'Etna is the highest active volcano in Europe and a UNESCO World Heritage Site.',
            'In Palermo, words of Arabic origin are still used today: “zibibbo”, “ammazzaru”, “tabbutu”.',
            'The Valley of the Temples in Agrigento has more Doric temples than Athens.',
            'Sicilian granita in the morning with a brioche col tuppo is breakfast, not dessert.',
        ],
        itineraries: [
            {
                title: 'Long weekend in the south-east',
                duration: '3 days',
                steps: [
                    'Day 1: Catania and Etna.',
                    'Day 2: Syracuse and Ortigia.',
                    'Day 3: Noto and Modica.',
                ],
            },
            {
                title: 'A classic week',
                duration: '7 days',
                steps: [
                    'Palermo (2 nights).',
                    'Cefalù.',
                    'Agrigento (Valley of the Temples).',
                    'Ragusa or Modica (2 nights).',
                    'Syracuse and Taormina.',
                ],
            },
            {
                title: 'Aeolian Islands',
                duration: '4–5 days',
                steps: [
                    'Lipari as a base.',
                    'Vulcano for the thermal mud.',
                    'Stromboli at sunset.',
                    'Panarea for a day.',
                ],
            },
        ],
        mustSee: [
            { title: 'Valley of the Temples', note: 'Agrigento, especially at sunset.' },
            { title: 'Monreale Cathedral', note: 'Arab-Norman mosaics, near Palermo.' },
            { title: 'Ortigia', note: 'The island that forms Syracuse’s historic centre.' },
            { title: 'Etna', note: 'Excursion to the summit craters, to be done with a guide.' },
            { title: 'Taormina', note: 'Greek theatre with views of Etna and the sea.' },
        ],
        tips: {
            periodo: 'May, June, September.',
            durata: 'At least 5 nights for one area. 8–10 for a full tour.',
            note: 'A car is essential for touring. Distances on the map are deceptive: roads are slow, especially inland.',
        },
    },
    sardegna: {
        eyebrow: 'Sardinia',
        heroSubtitle:
            'Turquoise water, pink granite, a stubborn and beautiful interior.',
        intro: [
            'Sardinia is an island with two souls. The one everyone has seen in photos: the Costa Smeralda, La Maddalena, the white-sand coves. And the inland one, of nuraghi, shepherds and silence.',
            'The truth is that both are worth it: the sea really is like that, but the true heart of the island lies a little further on.',
        ],
        characteristics: {
            paesaggio: 'Granite and limestone coasts, dunes, cork oak forests, mountains (Gennargentu).',
            mare: 'Among the most beautiful in the Mediterranean: La Maddalena, Costa Smeralda, Cala Goloritzé, Chia.',
            borghi: 'Cagliari, Alghero, Bosa, Castelsardo, Orgosolo.',
            vibe: 'Wild, proud, relaxed. Unlike any other Italian region.',
            idealePer: ['Beach', 'Families', 'Couples', 'Boating', 'Trekking'],
        },
        location: {
            dove: 'Tyrrhenian Sea, west of the Italian peninsula.',
            area: 'Autonomous region with special statute.',
            comeArrivare:
                'Flights to Cagliari, Olbia and Alghero. Ferries from Civitavecchia, Genoa, Livorno and Naples.',
        },
        funFacts: [
            'There are more than 7,000 nuraghi, and no other civilisation in the world built anything like them.',
            'Sardinian is a language in its own right, not a dialect: of all the Romance languages, it has stayed closest to Latin.',
            'Cala Luna and Cala Goloritzé can only be reached on foot or by boat.',
            'Barbagia has one of the highest rates of centenarians in the world.',
        ],
        itineraries: [
            {
                title: 'North coast',
                duration: '4–5 days',
                steps: [
                    'Olbia or Porto Cervo as a base.',
                    'The La Maddalena archipelago by boat.',
                    'The beaches of the Costa Smeralda.',
                    'Tempio Pausania for the Gallura hinterland.',
                ],
            },
            {
                title: 'East coast',
                duration: '5 days',
                steps: [
                    'Cala Gonone as a base.',
                    'Cala Luna and Cala Mariolu by dinghy.',
                    'Cala Goloritzé on foot.',
                    'Supramonte and Tiscali.',
                ],
            },
            {
                title: 'South',
                duration: '4–5 days',
                steps: [
                    'Cagliari (2 nights).',
                    'Chia, Tuerredda, Cala Cipolla.',
                    'Sant’Antioco and San Pietro.',
                ],
            },
        ],
        mustSee: [
            { title: 'La Maddalena Archipelago', note: 'Caprera, Budelli (the Pink Beach).' },
            { title: 'Cala Goloritzé', note: 'Small, perfect, reachable on foot.' },
            { title: 'Su Nuraxi di Barumini', note: 'The most important nuraghe, a UNESCO World Heritage Site.' },
            { title: 'Alghero', note: 'Catalan on the street signs, sea walls at sunset.' },
            { title: 'Bosa', note: 'Colourful houses along the Temo river, one of the most photogenic towns.' },
        ],
        tips: {
            periodo: 'June and September for the sea without the crowds.',
            durata: '7 nights for one area, 10–14 for the north and east.',
            note: 'A car is essential. The best beaches require a walk or a dinghy.',
        },
    },
    roma: {
        eyebrow: 'Lazio',
        heroSubtitle:
            'The Eternal City, chaotic and captivating. Every alley has a story to tell.',
        intro: [
            'Rome is a chaotic, intense and deeply fascinating city. The traffic, the noise and the disorderly pace live side by side with history you can see at every corner: ancient ruins, churches, palazzi and working-class neighbourhoods are woven into daily life.',
            'Visiting it means accepting its unpredictability. Between a crowded piazza, a narrow lane and a neighbourhood trattoria, Rome surprises you precisely because it never follows a straight line.',
        ],
        characteristics: {
            paesaggio: 'Seven hills, the Tiber, the pine groves of the Janiculum and Villa Borghese.',
            mare: 'Ostia and Fregene, 30 km away and easy to reach by train.',
            borghi: 'Trastevere, Monti, Pigneto, Testaccio, the historic centre.',
            vibe: 'Easy-going, imperial, down-to-earth. You get used to it in two days.',
            idealePer: ['City breaks', 'Culture', 'Food', 'Couples', 'Families'],
        },
        location: {
            dove: 'Central Lazio, on the Tiber.',
            area: 'Capital of Italy.',
            comeArrivare:
                'Fiumicino and Ciampino airports. Termini station connects to the whole country by high-speed train.',
        },
        funFacts: [
            'The Pantheon has the largest unreinforced concrete dome in the world, built in AD 126.',
            'The Vatican Museums hold more than 70,000 works, of which around 20,000 are on display.',
            'The Mouth of Truth is actually an ancient Roman drain cover.',
            'Carbonara as we know it today only appears in cookbooks after 1944.',
        ],
        itineraries: [
            {
                title: 'One day',
                duration: '1 day',
                steps: [
                    'Morning: the Colosseum, the Roman Forum, the Palatine Hill.',
                    'Lunch in Monti.',
                    'Afternoon: the Pantheon, Piazza Navona, the Trevi Fountain.',
                    'Dinner in Trastevere.',
                ],
            },
            {
                title: 'Two days',
                duration: '2 days',
                steps: [
                    'Day 1: ancient Rome (Colosseum, Forum, Palatine, Mouth of Truth).',
                    'Day 2: the Vatican (St Peter’s, the Vatican Museums), Castel Sant’Angelo.',
                ],
            },
            {
                title: 'Three days',
                duration: '3 days',
                steps: [
                    'Days 1–2 as above.',
                    'Day 3: Galleria Borghese, Villa Borghese, Trastevere and the Janiculum at sunset.',
                ],
            },
        ],
        mustSee: [
            { title: 'Colosseum and Forum', note: 'One combined ticket.' },
            { title: 'Pantheon', note: 'The best-preserved ancient building in the world.' },
            { title: 'Vatican Museums and Sistine Chapel', note: 'Book well in advance.' },
            { title: 'Galleria Borghese', note: 'Bernini and Caravaggio one after another, timed-entry tickets.' },
            { title: 'Trastevere at sunset', note: 'Rome’s thirteenth rione, famous for its iconic alleys.' },
        ],
        tips: {
            periodo: 'Spring (April to June) or autumn (mid-September to October). In these months the weather is mild and ideal for walking outdoors, avoiding the scorching summer heat and the winter rain.',
            durata: '3 nights minimum, 4–5 ideal.',
            note: 'Comfortable shoes (cobblestones everywhere). The metro and trams work, but the centre is best done on foot.',
        },
    },
    toscana: {
        eyebrow: 'Tuscany',
        heroSubtitle:
            'Rolling hills, rows of cypresses, wines that explain the land better than any book.',
        intro: [
            'Tuscany works like a region made up of many different Tuscanies: Chianti, the Val d’Orcia, the Maremma, the Apuan Alps, the art cities, the Casentino.',
            'It is best explored by car, stopping in the smaller villages. The real luxury here is time: an isolated parish church, a family winery, a sunset behind a lone cypress.',
        ],
        characteristics: {
            paesaggio: 'Cultivated hills, vineyards, olive groves, forests, the Tyrrhenian coast.',
            mare: 'The Maremma (Castiglione, Argentario), Versilia, the island of Elba.',
            borghi: 'Florence, Siena, Lucca, Pisa, San Gimignano, Pienza, Montepulciano, Volterra.',
            vibe: 'Refined and rustic at the same time. Understated luxury.',
            idealePer: ['Couples', 'Slow travel', 'Wine', 'Culture', 'Families'],
        },
        location: {
            dove: 'Central Italy, between the Tyrrhenian coast and the Apennines.',
            area: 'Regional capital: Florence.',
            comeArrivare:
                'Florence, Pisa and Bologna airports. High-speed trains to Firenze Santa Maria Novella.',
        },
        funFacts: [
            'Brunello di Montalcino was created in 1888 by Ferruccio Biondi Santi.',
            'In Pienza, Pope Pius II planned the first “ideal city” of the Renaissance.',
            'San Gimignano once had 72 medieval towers; 14 remain.',
            'The Val d’Orcia is a UNESCO World Heritage Site as a cultural landscape.',
        ],
        itineraries: [
            {
                title: 'Florence in 2 days',
                duration: '2 days',
                steps: [
                    'Day 1: the Cathedral, the Baptistery, the Uffizi.',
                    'Day 2: Palazzo Pitti, the Boboli Gardens, Oltrarno, Piazzale Michelangelo at sunset.',
                ],
            },
            {
                title: 'Chianti & Val d’Orcia',
                duration: '4 days',
                steps: [
                    'Base at an agriturismo in Chianti.',
                    'Castello di Brolio, Greve, Radda, Castellina.',
                    'Pienza, Montalcino, Montepulciano.',
                    'The cypresses of San Quirico and Bagno Vignoni.',
                ],
            },
            {
                title: 'Classic Tuscany',
                duration: '7 days',
                steps: [
                    'Florence (2).',
                    'Siena and San Gimignano (1).',
                    'Val d’Orcia (2).',
                    'Lucca and Pisa (1).',
                    'The coast: Argentario or the Maremma (1).',
                ],
            },
        ],
        mustSee: [
            { title: 'Uffizi', note: 'Botticelli, Leonardo, Caravaggio. Book ahead.' },
            { title: 'Piazza del Campo', note: 'Siena. One of the most beautiful squares in the world.' },
            { title: 'Val d’Orcia', note: 'Scenic roads between Pienza, Montalcino and San Quirico.' },
            { title: 'Bagno Vignoni', note: 'A thermal pool where the main square should be.' },
            { title: 'Lucca', note: '16th-century walls turned into a pedestrian path, perfect by bike.' },
        ],
        tips: {
            periodo: 'May, June, September.',
            durata: '5–7 nights for a good mix.',
            note: 'A car is necessary outside Florence. Historic centres are limited traffic zones (ZTL): park outside and walk.',
        },
    },
    puglia: {
        eyebrow: 'Southern Italy',
        heroSubtitle:
            'Trulli, masserie, white towns and a sea that changes colour every hundred metres.',
        intro: [
            'Puglia is long: it runs from the Gargano to the heel of the boot, and no stretch resembles another. The north is masserie (fortified farmhouses) and plains, the centre is trulli and white towns, and the Salento is something else again.',
            'It is best explored by car. Distances on the map are deceptive: you keep stopping, and that’s fine.',
        ],
        characteristics: {
            paesaggio: 'Centuries-old olive trees, dry-stone walls, limestone cliffs, long beaches.',
            mare: 'The Adriatic to the east, the Ionian to the south. Clear water, shallow seabeds, hidden coves.',
            borghi: 'Polignano a Mare, Alberobello, Ostuni, Locorotondo, Vieste, Lecce, Otranto, Gallipoli.',
            vibe: 'Sunny, welcoming, all about food. No posing: everything is real.',
            idealePer: ['Couples', 'Families', 'Touring holidays', 'Food and wine', 'Long weekends'],
        },
        location: {
            dove: 'South-eastern Italy, between the Adriatic and the Ionian Sea.',
            area: 'Regional capital: Bari. Provinces: Bari, BAT, Brindisi, Foggia, Lecce, Taranto.',
            comeArrivare:
                'Flights to Bari and Brindisi. High-speed trains from Rome, Naples, Milan and Bologna. Direct coaches from the major cities.',
        },
        funFacts: [
            'Alberobello has more than 1,500 trulli, a UNESCO World Heritage Site.',
            'The Salento has the largest Griko community in Italy: in the villages of the Grecìa Salentina a Griko dialect is still spoken.',
            'Puglia’s extra virgin olive oil accounts for around 40% of national production.',
            'Otranto Cathedral has a 12th-century floor mosaic 16 metres long.',
        ],
        itineraries: [
            {
                title: 'Valle d’Itria weekend',
                duration: '3 days',
                steps: [
                    'Day 1: Alberobello and Locorotondo.',
                    'Day 2: Ostuni and Cisternino.',
                    'Day 3: Polignano a Mare and Monopoli.',
                ],
            },
            {
                title: 'A classic week',
                duration: '7 days',
                steps: [
                    'Bari (1 night).',
                    'Valle d’Itria (2 nights in a masseria).',
                    'Salento: Lecce (1 night).',
                    'Otranto and Santa Maria di Leuca (1 night).',
                    'Gallipoli and return (2 nights).',
                ],
            },
            {
                title: 'By sea',
                duration: 'Day on a boat',
                steps: [
                    'Departure from Polignano or Monopoli.',
                    'Along the coast past caves and coves.',
                    'Swimming stop at Lama Monachile.',
                ],
            },
        ],
        mustSee: [
            { title: 'Alberobello', note: 'The trulli of the Rione Monti and Aia Piccola.' },
            { title: 'Polignano a Mare', note: 'Lama Monachile from above, then down for a swim.' },
            { title: 'Ostuni', note: 'The White City, best explored on foot at sunset.' },
            { title: 'Lecce', note: 'Lecce Baroque, capital of the Salento.' },
            { title: 'Otranto', note: 'Cathedral, Aragonese castle, turquoise sea.' },
            { title: 'Gallipoli', note: 'Old town on an islet, with views over the Ionian.' },
        ],
        tips: {
            periodo: 'May, June, September, October.',
            durata: '5–7 nights for one area, more than 10 to cross the whole region.',
            note: 'A car is necessary. Inland roads are slow but very scenic.',
        },
    },
    calabria: {
        eyebrow: 'Southern Italy',
        heroSubtitle:
            'Tropea, Scilla, sheer cliffs. The clearest sea in the Mediterranean, without the crowds.',
        intro: [
            'Calabria still comes as a surprise to many, and that is the beauty of it. The Tyrrhenian coast with its clifftop villages, the Ionian with its endless beaches, and in between, mountains you don’t expect (Sila, Aspromonte, Pollino).',
            'This is the land of Magna Graecia: take a walk in Locri or Reggio and you find yourself among Doric ruins.',
        ],
        characteristics: {
            paesaggio: 'Jagged coastline, white cliffs, inland mountains, olive trees and bergamot.',
            mare: 'Among the clearest in the Mediterranean. Tropea, Capo Vaticano, Scilla, Soverato.',
            borghi: 'Tropea, Scilla, Pizzo, Stilo, Gerace, Reggio Calabria.',
            vibe: 'Genuine, Mediterranean, all about food. Far from mass tourism.',
            idealePer: ['Beach', 'Families', 'Couples', 'Road trips', 'Seafood and simple home cooking'],
        },
        location: {
            dove: 'The toe of the boot, between the Tyrrhenian and Ionian seas.',
            area: 'Regional capital: Catanzaro. Provinces: Catanzaro, Cosenza, Crotone, Reggio Calabria, Vibo Valentia.',
            comeArrivare:
                'Flights to Lamezia Terme and Reggio Calabria. High-speed train to Salerno, then InterCity. By car on the A2.',
        },
        funFacts: [
            'The Riace Bronzes, on display at the museum in Reggio Calabria, are two Greek statues from the 5th century BC found in the sea in 1972.',
            'Bergamot grows almost only here: 90% of world production comes from the Reggio–Locri strip.',
            '’Nduja, soppressata and capocollo: Calabrian cured meats are a religion.',
            'Scilla takes its name from Scylla, the sea monster of the Odyssey, facing Charybdis across the Strait of Messina.',
        ],
        itineraries: [
            {
                title: 'Coast of the Gods',
                duration: '4–5 days',
                steps: [
                    'Tropea (2 nights).',
                    'Capo Vaticano: the beaches of Grotticelle and Praia i Focu.',
                    'Pizzo for the tartufo (the ice cream, not the truffle).',
                ],
            },
            {
                title: 'Tyrrhenian and Ionian',
                duration: '7 days',
                steps: [
                    'Tropea and Capo Vaticano (2).',
                    'Scilla and the Costa Viola (1).',
                    'Reggio Calabria and the Bronzes (1).',
                    'Locri and Gerace (1).',
                    'Soverato, Costa degli Aranci (2).',
                ],
            },
            {
                title: 'By sea',
                duration: 'Day on a boat',
                steps: [
                    'Departure from Tropea or Vibo Marina.',
                    'Along the coast of Capo Vaticano, with stops in the coves.',
                    'Back at sunset, with views of the Isola dei Coniglietti.',
                ],
            },
        ],
        mustSee: [
            { title: 'Tropea', note: 'The sanctuary of Santa Maria dell’Isola at sunset.' },
            { title: 'Scilla', note: 'Chianalea, the fishermen’s quarter on the water.' },
            { title: 'Capo Vaticano', note: 'The viewpoint and the beaches of Grotticelle and Tonicello.' },
            { title: 'Riace Bronzes', note: 'Reggio Calabria, two Greek statues from the 5th century BC.' },
            { title: 'Gerace', note: 'Medieval village inland, one of Calabria’s gems.' },
        ],
        tips: {
            periodo: 'June and September. July and August are lovely but busier.',
            durata: '5–7 nights for the Coast of the Gods, 10 to cover both the Tyrrhenian and Ionian coasts.',
            note: 'A car is essential. The SS18 is a scenic road along the Costa Viola.',
        },
    },
};
