import type { DestinationContent } from './destination-content';

// German version of destination-content.ts. Keys and structure must mirror the Italian file.
export const destinationContentDe: Record<string, DestinationContent> = {
    ischia: {
        eyebrow: 'Golf von Neapel. Kampanien',
        heroSubtitle:
            'Eine Vulkaninsel, Ruhestätte des Riesen Typhon, wo das Grün bis ins Meer hinabgleitet.',
        intro: [
            'Ischia ist die größte Insel im Golf von Neapel, ein noch aktiver Vulkankegel, der Buchten, Thermalquellen und über dem Meer schwebende Gärten geformt hat.',
            'Ischia ist keine Hochglanzinsel: rau an den richtigen Stellen, sanft dort, wo es darauf ankommt. Man ist gemächlich unterwegs, isst gut und bleibt länger als geplant.',
        ],
        characteristics: {
            paesaggio:
                'In der Mitte der Monte Epomeo, dazu terrassierte Weinberge, Pinienwälder und Lavaströme, die bis ans Meer reichen.',
            mare: 'Kleine Buchten mit dunklem Sand und Badebuchten wie Sant’Angelo, Cartaromana und Sorgeto, wo das Wasser von Natur aus brodelt.',
            borghi: 'Sechs eigenständige Gemeinden: Ischia Porto, Casamicciola, Lacco Ameno, Forio, Serrara Fontana und Barano. Jede hat ihren eigenen Charakter.',
            vibe: 'Langsam, heilsam, authentisch. Eher echtes Inselleben als Postkartenidylle.',
            idealePer: ['Paare', 'Familien', 'Wellness & Thermen', 'Längere Aufenthalte', 'Bootstouren'],
        },
        location: {
            dove: 'Golf von Neapel, etwa 30 km von Neapel entfernt.',
            area: 'Kampanien, Provinz Neapel.',
            comeArrivare:
                'Tragflächenboot ab Neapel Beverello (~50 Min.), Fähre ab Calata di Massa im Hafen von Neapel (~1 Std. 45 Min.), Fähre ab Pozzuoli (~1 Std.). Nächstgelegener Flughafen: Neapel-Capodichino.',
        },
        funFacts: [
            'Die Gärten La Mortella wurden in den 1950er-Jahren vom englischen Komponisten William Walton und seiner Frau Susanna angelegt.',
            'Der in Lacco Ameno gefundene Nestorbecher trägt eine der ältesten Inschriften im griechischen Alphabet, die je im Westen entdeckt wurden (8. Jh. v. Chr.).',
            'Sorgeto ist eine Bucht, in der sich Thermalwasser und Meer vermischen: Hier badet man sogar im Winter im warmen Wasser.',
            'Der Epomeo ist ein vom Magma angehobener Block aus grünem Tuff, kein klassischer Krater.',
            'Der Wein von Ischia (Biancolella, Forastera) wächst an historischen Pergolen mit Blick auf das Tyrrhenische Meer.',
        ],
        itineraries: [
            {
                title: 'Halber Tag',
                duration: '4 Stunden',
                steps: [
                    'Vormittags das Castello Aragonese, bevor die Sonne zu stark wird.',
                    'Leichtes Mittagessen in Ischia Ponte.',
                    'Baden und Aperitif in Cartaromana.',
                ],
            },
            {
                title: 'Ein Tag',
                duration: '1 Tag',
                steps: [
                    'Vormittags zum Castello Aragonese.',
                    'Mittagessen in Forio oder Sant’Angelo.',
                    'Thermalnachmittag in den Poseidon-Gärten oder an den Fumarolen von Sorgeto.',
                    'Sonnenuntergang an der Punta Caruso.',
                ],
            },
            {
                title: 'Zwei bis drei Tage',
                duration: '2–3 Tage',
                steps: [
                    'Tag 1: Ischia Ponte, Castello, Abendessen mit Blick auf den Golf.',
                    'Tag 2: Bootstour rund um die Insel, Badestopp in der Baia di San Montano.',
                    'Tag 3: Epomeo bei Sonnenaufgang, nachmittags die Gärten La Mortella und Sant’Angelo.',
                ],
            },
            {
                title: 'Auf dem Wasser',
                duration: 'Ein Tag auf dem Boot',
                steps: [
                    'Abfahrt in Casamicciola oder Forio.',
                    'Stopps in Sorgeto und Sant’Angelo zum Schwimmen.',
                    'Mittagessen an Bord, Rückfahrt entlang der Küste an der Punta Imperatore vorbei.',
                ],
            },
        ],
        mustSee: [
            { title: 'Castello Aragonese', note: 'Am besten frühmorgens: volles Licht und wenig Andrang.' },
            { title: 'Villa Arbusto', note: 'Archäologisches Museum von Lacco Ameno: Hier befindet sich der Nestorbecher.' },
            { title: 'Gärten La Mortella', note: 'Seltene Pflanzen, im Sommer Konzerte.' },
            { title: 'Sant’Angelo', note: 'Autofreies Dorf, ideal zum Sonnenuntergang.' },
            { title: 'Sorgeto', note: 'Natürliche Thermalbucht: Badesachen und Badeschuhe einpacken.' },
            { title: 'Monte Epomeo', note: 'Leichter Aufstieg, 360°-Blick über den Archipel.' },
        ],
        tips: {
            periodo: 'Von April bis Oktober.',
            durata: '3–5 Nächte, um alles in Ruhe zu erleben.',
            note: 'Ein Auto ist praktisch, aber nicht notwendig: EAV-Busse und Minibus-Taxis fahren auf der ganzen Insel. Die Thermen haben in der Regel von April bis Oktober geöffnet.',
        },
    },
    capri: {
        eyebrow: 'Golf von Neapel. Kampanien',
        heroSubtitle:
            'Weißer Fels, kobaltblaues Meer und eine Piazzetta, die ein Theater unter freiem Himmel ist.',
        intro: [
            'Capri besichtigt man nicht, man durchstreift es. Die Insel ist klein und steil, jeder Winkel wurde schon millionenfach fotografiert, und doch verfehlt sie vor Ort ihre Wirkung nicht.',
            'Das Geheimnis liegt darin, langsamer zu werden. Früh aufstehen, von den Hauptwegen verschwinden und erst am Abend auf die Piazzetta zurückkehren.',
        ],
        characteristics: {
            paesaggio: 'Steil abfallende Klippen, mediterrane Macchia, Seekiefern und weiße Villen.',
            mare: 'Tiefes, intensiv blaues Wasser, Grotten, Faraglioni und kleine Buchten, die nur mit dem Boot erreichbar sind.',
            borghi: 'Capri (die „Unterstadt“ auf 138 m) und Anacapri: höher gelegen, ruhiger, ursprünglicher.',
            vibe: 'Natürliche Eleganz, Dolce Vita, entspannte Sommer.',
            idealePer: ['Paare', 'Wochenendtrips', 'Bootstouren', 'Abendessen mit Meerblick'],
        },
        location: {
            dove: 'Im Süden des Golfs von Neapel, gegenüber der Sorrentinischen Halbinsel.',
            area: 'Kampanien, Provinz Neapel.',
            comeArrivare:
                'Tragflächenboot ab Neapel (~50 Min.), ab Sorrent (~25 Min.) oder ab Ischia (~50–60 Min.). Im Sommer gibt es auch Direktverbindungen ab Positano und Amalfi.',
        },
        funFacts: [
            'Kaiser Tiberius verbrachte seine letzten Lebensjahre in der Villa Jovis am Ostende der Insel.',
            'Die Blaue Grotte verdankt ihre Farbe einer Öffnung unter Wasser, durch die das Licht von unten einfällt.',
            'Anacapri hat einen eigenen Dialekt und verstand sich jahrhundertelang als von Capri getrennte Gemeinschaft.',
            'Capri-Sandalen werden noch immer in einigen wenigen traditionsreichen Werkstätten von Hand genäht.',
        ],
        itineraries: [
            {
                title: 'Ein Tag',
                duration: '1 Tag',
                steps: [
                    'Vormittags Bootstour zu den Faraglioni und zur Blauen Grotte.',
                    'Mittagessen in Marina Piccola.',
                    'Nachmittags Anacapri: Villa San Michele, mit dem Sessellift auf den Monte Solaro.',
                    'Sonnenuntergang an der Punta Carena.',
                ],
            },
            {
                title: 'Zwei Tage',
                duration: '2 Tage',
                steps: [
                    'Tag 1: Capri, Piazzetta, Gärten des Augustus, Wanderweg Pizzolungo.',
                    'Tag 2: Anacapri, Villa San Michele, Monte Solaro, Leuchtturm Punta Carena, Besuch der Villa Lysis.',
                ],
            },
            {
                title: 'Auf dem Wasser',
                duration: 'Ein Tag auf dem Boot',
                steps: [
                    'Inselumrundung mit Skipper.',
                    'Stopps an der Grünen Grotte, den Faraglioni und der Weißen Grotte.',
                    'Mittagessen an Bord oder in Marina Piccola.',
                ],
            },
        ],
        mustSee: [
            { title: 'Faraglioni', note: 'Von Land aus (Punta Tragara) oder vom Boot, zur goldenen Stunde.' },
            { title: 'Villa San Michele', note: 'Wohnhaus und Museum von Axel Munthe in Anacapri.' },
            { title: 'Villa Lysis', note: 'Die Villa des Barons Fersen, hoch über dem Meer. Geschichte und ein Blick steil in die Tiefe.' },
            { title: 'Monte Solaro', note: 'Panorama-Sessellift, Blick über den gesamten Golf.' },
            { title: 'Via Krupp', note: 'Spektakuläre, in den Fels gehauene Serpentinen.' },
            { title: 'Leuchtturm Punta Carena', note: 'Auf der Westseite, perfekt zum Sonnenuntergang.' },
            { title: 'Piazzetta di Capri', note: 'Das Lebensgefühl, um das uns die ganze Welt beneidet.' },
        ],
        tips: {
            periodo: 'Von April bis Oktober. Im April und September ist das Wetter hervorragend und es ist weniger los.',
            durata: '1–2 Nächte, um auch die Abende zu erleben, wenn sich die Insel leert.',
            note: 'Auf der Insel gibt es keine Mietwagen. Unterwegs ist man mit der Standseilbahn, in offenen Taxis oder zu Fuß, bequeme Schuhe sind also Pflicht.',
        },
    },
    procida: {
        eyebrow: 'Golf von Neapel. Kampanien',
        heroSubtitle:
            'Bonbonfarbene Häuser über dem kleinen Hafen und eine Insel, die keine Eile kennt.',
        intro: [
            'Procida ist die kleinste Insel im Golf von Neapel und vielleicht die ehrlichste. Keine Luxusketten, keine erdrückenden Menschenmassen, nur eine Handvoll rosa, gelber und puderblauer Häuser, die sich vom Hafen den Hang hinaufziehen.',
            'Im Jahr 2022 war Procida Italiens Kulturhauptstadt, und seitdem hat die Insel ein neues Gleichgewicht gefunden: gepflegter, aber immer noch authentisch.',
        ],
        characteristics: {
            paesaggio: 'Flache Küsten, Weinberge, Zitronenhaine, Blick auf den Vesuv und auf Ischia.',
            mare: 'Ruhige Strände (Chiaiolella, Ciraccio) mit flachem Wasser, auch für Kinder geeignet.',
            borghi: 'Marina Grande, Corricella und Terra Murata sind die drei historischen Ortskerne.',
            vibe: 'Maritim, ursprünglich, entspannt. Duft von Zitronen und Boote in der Sonne.',
            idealePer: ['Paare', 'Entspannte Wochenenden', 'Fotografen', 'Bücherfreunde', 'Familien'],
        },
        location: {
            dove: 'Zwischen Capo Miseno und Ischia, im Golf von Neapel.',
            area: 'Kampanien, Provinz Neapel.',
            comeArrivare:
                'Tragflächenboot ab Neapel Beverello (~40 Min.) oder ab Pozzuoli (~35 Min.). Auf der Insel ist man zu Fuß, mit Mikrotaxis oder mit dem Roller unterwegs.',
        },
        funFacts: [
            'Die Corricella ist das Fischerdorf aus dem Film „Il Postino“ („Der Postmann“) mit Massimo Troisi.',
            'Die bunten Fassaden haben einen praktischen Ursprung: Die Fischer erkannten ihr Haus schon vom Meer aus.',
            'Procida hat weniger als 10.000 Einwohner, aber mehr als 14 Kirchen.',
            'Die Zitrone von Procida, die sogenannte „pane“, hat eine dicke Schale und wird als Salat gegessen.',
        ],
        itineraries: [
            {
                title: 'Halber Tag',
                duration: '3–4 Stunden',
                steps: [
                    'Zu Fuß durch Marina Grande.',
                    'Aufstieg nach Terra Murata und zum Casale Vascello.',
                    'Abstieg zur Corricella für ein Mittagessen oder einen Kaffee.',
                ],
            },
            {
                title: 'Ein Tag',
                duration: '1 Tag',
                steps: [
                    'Vormittags Corricella und Terra Murata.',
                    'Fischessen am kleinen Hafen.',
                    'Nachmittags an den Strand von Chiaiolella.',
                    'Aperitif bei Sonnenuntergang in Marina Grande.',
                ],
            },
            {
                title: 'Zwei Tage',
                duration: '2 Tage',
                steps: [
                    'Tag 1: historische Ortskerne und Corricella.',
                    'Tag 2: Inselrundfahrt mit dem Boot oder einem traditionellen Gozzo, Baden in Pozzo Vecchio.',
                ],
            },
        ],
        mustSee: [
            { title: 'Marina Corricella', note: 'Der kleine Fischerhafen, magisch bei Sonnenuntergang.' },
            { title: 'Terra Murata', note: 'Befestigtes mittelalterliches Dorf mit weitem Blick über den Golf.' },
            { title: 'Lingua di Procida', note: 'Duftender Blätterteig, der ein Herz aus aromatischer Zitronencreme umschließt. Unbedingt probieren.' },
            { title: 'Chiaiolella', note: 'Langer Strand auf der Südseite, ideal am Nachmittag.' },
            { title: 'Pozzo Vecchio', note: 'Der Strand aus „Il Postino“, lauschig und filmreif.' },
            { title: 'Casale Vascello', note: 'Ein Labyrinth aus Höfen und Bögen, das Herz der bäuerlichen Insel.' },
        ],
        tips: {
            periodo: 'Mai, Juni, September.',
            durata: '1 Nacht reicht, 2 sind ideal für den Rhythmus der Insel.',
            note: 'Die Insel ist winzig, ein Auto brauchen Sie nicht. Taxis und Roller sind die idealen Verkehrsmittel.',
        },
    },
    napoli: {
        eyebrow: 'Kampanien',
        heroSubtitle:
            'Eine Stadt, die nicht um Erlaubnis fragt. Neapel geht unter die Haut und bleibt für immer in Erinnerung.',
        intro: [
            'Neapel ist dicht, widersprüchlich, lebendig. Die Stadt bewegt sich in ihrem eigenen Rhythmus und verlangt nicht, dass man in ihr lebt, nur, dass man sie durchstreift.',
            'Zwischen Spaccanapoli, den Quartieri Spagnoli und der Uferpromenade von Mergellina wechselt die Stadt alle fünf Minuten ihr Gesicht und überrascht Sie jedes Mal aufs Neue.',
        ],
        characteristics: {
            paesaggio: 'Golf von Neapel, der Vesuv im Hintergrund, Hügel mitten in der Stadt (Vomero, Posillipo).',
            mare: 'Lungomare Caracciolo, Castel dell’Ovo, Posillipo: das Meer als Kulisse.',
            borghi: 'Historisches Zentrum (UNESCO-Welterbe), Quartieri Spagnoli, Sanità, Chiaia, Posillipo.',
            vibe: 'Energiegeladen, theatralisch, großzügig. Eine echte Mittelmeermetropole.',
            idealePer: ['Städtereisen', 'Kultur', 'Kulinarik', 'Geschichte', 'Paare und Freunde'],
        },
        location: {
            dove: 'An der tyrrhenischen Küste Kampaniens, am gleichnamigen Golf.',
            area: 'Kampanien, Hauptstadt der Region.',
            comeArrivare:
                'Flughafen Neapel-Capodichino. Hochgeschwindigkeitszug ab Rom in 1 Std. 10 Min., ab Mailand in ~4 Std. 30 Min. Hauptbahnhof an der Piazza Garibaldi. Fernbusse ab Rom, Mailand, Turin, Florenz, Bari und anderen Großstädten.',
        },
        funFacts: [
            'Die Pizza Margherita entstand 1889 zu Ehren von Königin Margherita von Savoyen.',
            'Unter der Altstadt erstreckt sich Napoli Sotterranea, das unterirdische Neapel: griechische Zisternen, bourbonische Tunnel, Luftschutzräume aus dem Zweiten Weltkrieg.',
            'Der Verschleierte Christus in der Cappella Sansevero ist aus einem einzigen Marmorblock gehauen.',
            'Spaccanapoli ist der untere Decumanus der griechisch-römischen Stadt.',
        ],
        itineraries: [
            {
                title: 'Halber Tag',
                duration: '4 Stunden',
                steps: [
                    'Spaccanapoli von der Piazza del Gesù bis San Gregorio Armeno.',
                    'Cappella Sansevero (vorab reservieren).',
                    'Frittierte oder gefaltete Pizza („a portafoglio“) auf die Hand.',
                ],
            },
            {
                title: 'Ein Tag',
                duration: '1 Tag',
                steps: [
                    'Vormittags in der Altstadt (Dom, San Domenico, Cappella Sansevero).',
                    'Schnelles Mittagessen: Pizza a portafoglio oder ein Cuoppo (Tüte mit Frittiertem) am Hafen.',
                    'Nachmittags ins MANN (Archäologisches Museum).',
                    'Sonnenuntergang an der Uferpromenade von Mergellina.',
                ],
            },
            {
                title: 'Zwei bis drei Tage',
                duration: '2–3 Tage',
                steps: [
                    'Tag 1: Altstadt und Sanità.',
                    'Tag 2: Ausflug nach Pompeji, zum Abendessen zurück nach Chiaia.',
                    'Tag 3: Vomero (Certosa di San Martino, Castel Sant’Elmo) und Posillipo.',
                ],
            },
        ],
        mustSee: [
            { title: 'Cappella Sansevero', note: 'Den Verschleierten Christus mit eigenen Augen zu sehen, ist etwas ganz anderes.' },
            { title: 'MANN', note: 'Das wichtigste archäologische Museum für Pompeji und Herculaneum.' },
            { title: 'Certosa di San Martino', note: 'Vom Vomero aus der volle Blick über den Golf.' },
            { title: 'Rione Sanità', note: 'Katakomben von San Gennaro und eine neue Kulturszene.' },
            { title: 'Lungomare Caracciolo', note: 'Sonnenuntergang vom Castel dell’Ovo bis Mergellina.' },
        ],
        tips: {
            periodo: 'April bis Mai, September bis Oktober.',
            durata: 'Mindestens 2–3 Nächte, um nicht hetzen zu müssen.',
            note: 'In der Innenstadt sind Sie am besten zu Fuß und mit der Metro unterwegs (Linie 1, Linie 2, Linie 6 und verschiedene Buslinien). Die Stationen sind echte Kunstwerke.',
        },
    },
    sicilia: {
        eyebrow: 'Sizilien',
        heroSubtitle:
            'Eine Insel, die für sich schon eine Reise ist: drei Meere, ein Vulkan, tausend übereinandergeschichtete Geschichten.',
        intro: [
            'Sizilien erlebt man nicht in ein paar Tagen. Griechen, Araber, Normannen, Spanier, Bourbonen: Jede Herrschaft hat eine neue Schicht hinterlassen, und die Küche ist die essbare Version dieser Schichtung.',
            'Sie können den barocken Südosten wählen, die Nordküste mit Palermo und Cefalù, den Ätna und Taormina oder die kleineren Inseln. Jede Variante ist eine ganz eigene Reise.',
        ],
        characteristics: {
            paesaggio: 'Ätna (3.300 m), barocke Täler, abwechslungsreiche Küste, kleinere Inseln (Ägadische und Äolische Inseln).',
            mare: 'Kleine Buchten mit weißem Sand (San Vito Lo Capo), Faraglioni, tiefes Meer bei Taormina.',
            borghi: 'Palermo, Catania, Syrakus, Noto, Modica, Ragusa, Cefalù, Taormina.',
            vibe: 'Warm, großzügig, widersprüchlich. Nie banal.',
            idealePer: ['Kultur', 'Essen und Wein', 'Rundreisen', 'Familien', 'Paare'],
        },
        location: {
            dove: 'Zentrales Mittelmeer, durch die Straße von Messina von Kalabrien getrennt.',
            area: 'Autonome Region mit Sonderstatut.',
            comeArrivare:
                'Flüge nach Catania, Palermo, Trapani, Comiso. Zug plus Fähre über die Straße von Messina. Fähren ab Neapel, Genua, Civitavecchia.',
        },
        funFacts: [
            'Der Ätna ist der höchste aktive Vulkan Europas und UNESCO-Welterbe.',
            'In Palermo sind bis heute Wörter arabischen Ursprungs gebräuchlich: „zibibbo“, „ammazzaru“, „tabbutu“.',
            'Im Tal der Tempel von Agrigent stehen mehr dorische Tempel als in Athen.',
            'Sizilianische Granita mit Brioche col tuppo am Morgen ist ein Frühstück, kein Dessert.',
        ],
        itineraries: [
            {
                title: 'Langes Wochenende im Südosten',
                duration: '3 Tage',
                steps: [
                    'Tag 1: Catania und Ätna.',
                    'Tag 2: Syrakus und Ortigia.',
                    'Tag 3: Noto und Modica.',
                ],
            },
            {
                title: 'Eine klassische Woche',
                duration: '7 Tage',
                steps: [
                    'Palermo (2 Nächte).',
                    'Cefalù.',
                    'Agrigent (Tal der Tempel).',
                    'Ragusa oder Modica (2 Nächte).',
                    'Syrakus und Taormina.',
                ],
            },
            {
                title: 'Äolische Inseln',
                duration: '4–5 Tage',
                steps: [
                    'Lipari als Standort.',
                    'Vulcano für ein Bad im Thermalschlamm.',
                    'Stromboli bei Sonnenuntergang.',
                    'Panarea für einen Tag.',
                ],
            },
        ],
        mustSee: [
            { title: 'Tal der Tempel', note: 'Agrigent, am schönsten bei Sonnenuntergang.' },
            { title: 'Kathedrale von Monreale', note: 'Arabisch-normannische Mosaiken, nahe Palermo.' },
            { title: 'Ortigia', note: 'Die Insel, auf der die Altstadt von Syrakus liegt.' },
            { title: 'Ätna', note: 'Ausflug zu den Gipfelkratern, nur mit Bergführer.' },
            { title: 'Taormina', note: 'Griechisches Theater mit Blick auf den Ätna und das Meer.' },
        ],
        tips: {
            periodo: 'Mai, Juni, September.',
            durata: 'Mindestens 5 Nächte für eine Region, 8–10 für eine komplette Rundreise.',
            note: 'Für Rundreisen ist ein Auto unverzichtbar. Die Entfernungen auf der Karte täuschen: Die Straßen sind langsam, vor allem im Landesinneren.',
        },
    },
    sardegna: {
        eyebrow: 'Sardinien',
        heroSubtitle:
            'Türkisblaues Wasser, rosa Granit, ein eigensinniges und wunderschönes Hinterland.',
        intro: [
            'Sardinien ist eine Insel mit zwei Seelen. Die eine kennt jeder von Fotos: Costa Smeralda, La Maddalena, die Buchten mit weißem Sand. Die andere liegt im Landesinneren, eine Welt aus Nuraghen, Hirten und Stille.',
            'Die Wahrheit ist: Beide lohnen sich. Das Meer ist wirklich so, doch das eigentliche Herz der Insel liegt ein Stück weiter.',
        ],
        characteristics: {
            paesaggio: 'Granit- und Kalksteinküsten, Dünen, Korkeichenwälder, Berge (Gennargentu).',
            mare: 'Zählt zu den schönsten im Mittelmeer: Maddalena, Costa Smeralda, Cala Goloritzé, Chia.',
            borghi: 'Cagliari, Alghero, Bosa, Castelsardo, Orgosolo.',
            vibe: 'Wild, stolz, entspannt. Anders als jede andere Region Italiens.',
            idealePer: ['Meer', 'Familien', 'Paare', 'Bootstouren', 'Trekking'],
        },
        location: {
            dove: 'Tyrrhenisches Meer, westlich der italienischen Halbinsel.',
            area: 'Autonome Region mit Sonderstatut.',
            comeArrivare:
                'Flüge nach Cagliari, Olbia und Alghero. Fähren ab Civitavecchia, Genua, Livorno und Neapel.',
        },
        funFacts: [
            'Es gibt über 7.000 Nuraghen, und keine andere Kultur der Welt hat Vergleichbares gebaut.',
            'Sardisch ist eine eigenständige Sprache, kein Dialekt, und hat sich von allen romanischen Sprachen am wenigsten vom Lateinischen entfernt.',
            'Cala Luna und Cala Goloritzé sind nur zu Fuß oder mit dem Boot erreichbar.',
            'Die Barbagia hat einen der höchsten Anteile an Hundertjährigen weltweit.',
        ],
        itineraries: [
            {
                title: 'Nordküste',
                duration: '4–5 Tage',
                steps: [
                    'Olbia oder Porto Cervo als Standort.',
                    'Der Maddalena-Archipel mit dem Boot.',
                    'Die Strände der Costa Smeralda.',
                    'Tempio Pausania für das Hinterland der Gallura.',
                ],
            },
            {
                title: 'Ostküste',
                duration: '5 Tage',
                steps: [
                    'Cala Gonone als Standort.',
                    'Cala Luna und Cala Mariolu im Schlauchboot.',
                    'Cala Goloritzé zu Fuß.',
                    'Supramonte und Tiscali.',
                ],
            },
            {
                title: 'Süden',
                duration: '4–5 Tage',
                steps: [
                    'Cagliari (2 Nächte).',
                    'Chia, Tuerredda, Cala Cipolla.',
                    'Sant’Antioco und San Pietro.',
                ],
            },
        ],
        mustSee: [
            { title: 'Maddalena-Archipel', note: 'Caprera, Budelli (Spiaggia Rosa, der rosa Strand).' },
            { title: 'Cala Goloritzé', note: 'Klein, perfekt, zu Fuß erreichbar.' },
            { title: 'Su Nuraxi di Barumini', note: 'Die bedeutendste Nuraghe, UNESCO-Welterbe.' },
            { title: 'Alghero', note: 'Katalanisch auf den Schildern, Stadtmauern am Meer bei Sonnenuntergang.' },
            { title: 'Bosa', note: 'Bunte Häuser am Fluss Temo, einer der fotogensten Orte.' },
        ],
        tips: {
            periodo: 'Juni und September, wenn Sie das Meer ohne Gedränge genießen möchten.',
            durata: '7 Nächte für eine Gegend, 10–14 für Norden und Osten.',
            note: 'Ein Auto ist unverzichtbar. Die schönsten Strände erreichen Sie nur mit einem Fußmarsch oder per Schlauchboot.',
        },
    },
    roma: {
        eyebrow: 'Latium',
        heroSubtitle:
            'Die Ewige Stadt, chaotisch und faszinierend. Jede Gasse hat eine Geschichte zu erzählen.',
        intro: [
            'Rom ist eine chaotische, intensive und zutiefst faszinierende Stadt. Verkehr, Lärm und ein ungeordneter Rhythmus bestehen neben einer Geschichte, die an jeder Ecke sichtbar ist: Antike Ruinen, Kirchen, Palazzi und volkstümliche Viertel sind eng mit dem Alltag verwoben.',
            'Wer Rom besucht, muss sich auf das Unvorhersehbare einlassen. Zwischen einer vollen Piazza, einem kleinen Gässchen und einer Trattoria im Viertel überrascht Rom gerade deshalb, weil es nie einem geraden Weg folgt.',
        ],
        characteristics: {
            paesaggio: 'Sieben Hügel, der Tiber, die Pinienhaine des Gianicolo und der Villa Borghese.',
            mare: 'Ostia und Fregene, 30 km entfernt und bequem mit dem Zug erreichbar.',
            borghi: 'Trastevere, Monti, Pigneto, Testaccio, Altstadt (Centro Storico).',
            vibe: 'Lässig, imperial, volksnah. Nach zwei Tagen haben Sie sich eingewöhnt.',
            idealePer: ['Städtereisen', 'Kultur', 'Kulinarik', 'Paare', 'Familien'],
        },
        location: {
            dove: 'Im Zentrum Latiums, am Tiber.',
            area: 'Hauptstadt Italiens.',
            comeArrivare:
                'Flughäfen Fiumicino und Ciampino. Der Bahnhof Termini ist per Hochgeschwindigkeitszug mit dem ganzen Land verbunden.',
        },
        funFacts: [
            'Das Pantheon hat die größte Kuppel aus unbewehrtem Beton der Welt, erbaut 126 n. Chr.',
            'Die Vatikanischen Museen besitzen über 70.000 Werke, davon sind etwa 20.000 ausgestellt.',
            'Die Bocca della Verità (Mund der Wahrheit) ist in Wirklichkeit ein antiker römischer Kanaldeckel.',
            'Die Carbonara, wie wir sie heute kennen, taucht erst nach 1944 in Kochbüchern auf.',
        ],
        itineraries: [
            {
                title: 'Ein Tag',
                duration: '1 Tag',
                steps: [
                    'Vormittag: Kolosseum, Forum Romanum, Palatin.',
                    'Mittagessen in Monti.',
                    'Nachmittag: Pantheon, Piazza Navona, Trevi-Brunnen.',
                    'Abendessen in Trastevere.',
                ],
            },
            {
                title: 'Zwei Tage',
                duration: '2 Tage',
                steps: [
                    'Tag 1: das antike Rom (Kolosseum, Forum, Palatin, Bocca della Verità).',
                    'Tag 2: Vatikan (Petersdom, Vatikanische Museen), Engelsburg.',
                ],
            },
            {
                title: 'Drei Tage',
                duration: '3 Tage',
                steps: [
                    'Tag 1–2 wie oben.',
                    'Tag 3: Galleria Borghese, Villa Borghese, Trastevere und Gianicolo bei Sonnenuntergang.',
                ],
            },
        ],
        mustSee: [
            { title: 'Kolosseum und Forum', note: 'Ein gemeinsames Ticket.' },
            { title: 'Pantheon', note: 'Das besterhaltene antike Bauwerk der Welt.' },
            { title: 'Vatikanische Museen und Sixtinische Kapelle', note: 'Sehr weit im Voraus buchen.' },
            { title: 'Galleria Borghese', note: 'Bernini und Caravaggio Werk an Werk, Einlass nur zu festen Zeitfenstern.' },
            { title: 'Trastevere bei Sonnenuntergang', note: 'Der dreizehnte Rione (Stadtbezirk) Roms, berühmt für seine ikonischen Gassen.' },
        ],
        tips: {
            periodo: 'Frühling (April bis Juni) oder Herbst (Mitte September bis Oktober). In diesen Monaten ist das Klima mild und ideal, um draußen zu Fuß unterwegs zu sein, ohne die glühende Sommerhitze und den Winterregen.',
            durata: 'Mindestens 3 Nächte, ideal sind 4–5.',
            note: 'Bequeme Schuhe (überall Kopfsteinpflaster, die sogenannten Sampietrini). U-Bahn und Straßenbahn funktionieren, aber das Zentrum erkunden Sie am besten zu Fuß.',
        },
    },
    toscana: {
        eyebrow: 'Toskana',
        heroSubtitle:
            'Sanfte Hügel, Zypressen in Reih und Glied, Weine, die das Land besser erklären als jedes Buch.',
        intro: [
            'Die Toskana ist eine Region aus vielen verschiedenen Toskanas: das Chianti, das Val d’Orcia, die Maremma, die Apuanischen Alpen, die Kunststädte, das Casentino.',
            'Am besten erkunden Sie sie mit dem Auto und halten in den kleineren Ortschaften. Der wahre Luxus ist hier die Zeit: eine abgelegene Landkirche, ein Weingut in Familienhand, ein Sonnenuntergang über einer einzelnen Zypresse.',
        ],
        characteristics: {
            paesaggio: 'Bewirtschaftete Hügel, Weinberge, Olivenhaine, Wälder, tyrrhenische Küste.',
            mare: 'Maremma (Castiglione, Argentario), Versilia, Insel Elba.',
            borghi: 'Florenz, Siena, Lucca, Pisa, San Gimignano, Pienza, Montepulciano, Volterra.',
            vibe: 'Raffiniert und bäuerlich zugleich. Unaufdringlicher Luxus.',
            idealePer: ['Paare', 'Slow Travel', 'Wein', 'Kultur', 'Familien'],
        },
        location: {
            dove: 'Mittelitalien, tyrrhenische Küste und Apennin.',
            area: 'Regionalhauptstadt: Florenz.',
            comeArrivare:
                'Flughäfen Florenz, Pisa, Bologna. Hochgeschwindigkeitszug bis Firenze SMN.',
        },
        funFacts: [
            'Der Brunello di Montalcino wurde 1888 von Ferruccio Biondi Santi erfunden.',
            'In Pienza plante Papst Pius II. die erste „Idealstadt“ der Renaissance.',
            'San Gimignano hatte 72 mittelalterliche Türme, 14 davon stehen noch.',
            'Das Val d’Orcia ist als Kulturlandschaft UNESCO-Welterbe.',
        ],
        itineraries: [
            {
                title: 'Florenz in 2 Tagen',
                duration: '2 Tage',
                steps: [
                    'Tag 1: Dom, Baptisterium, Uffizien.',
                    'Tag 2: Palazzo Pitti, Boboli-Garten, Oltrarno, Piazzale Michelangelo bei Sonnenuntergang.',
                ],
            },
            {
                title: 'Chianti & Val d’Orcia',
                duration: '4 Tage',
                steps: [
                    'Standort in einem Agriturismo im Chianti.',
                    'Castello di Brolio, Greve, Radda, Castellina.',
                    'Pienza, Montalcino, Montepulciano.',
                    'Die Zypressen von San Quirico und Bagno Vignoni.',
                ],
            },
            {
                title: 'Klassische Toskana',
                duration: '7 Tage',
                steps: [
                    'Florenz (2).',
                    'Siena und San Gimignano (1).',
                    'Val d’Orcia (2).',
                    'Lucca und Pisa (1).',
                    'Küste: Argentario oder Maremma (1).',
                ],
            },
        ],
        mustSee: [
            { title: 'Uffizien', note: 'Botticelli, Leonardo, Caravaggio. Vorab buchen.' },
            { title: 'Piazza del Campo', note: 'Siena. Einer der schönsten Plätze der Welt.' },
            { title: 'Val d’Orcia', note: 'Panoramastraßen zwischen Pienza, Montalcino und San Quirico.' },
            { title: 'Bagno Vignoni', note: 'Ein Thermalbecken anstelle des Hauptplatzes.' },
            { title: 'Lucca', note: 'Autofreie Stadtmauern aus dem 16. Jh., ideal für eine Runde mit dem Fahrrad.' },
        ],
        tips: {
            periodo: 'Mai, Juni, September.',
            durata: '5–7 Nächte für eine gute Mischung.',
            note: 'Außerhalb von Florenz ist ein Auto nötig. ZTL (Zonen mit Zufahrtsbeschränkung) in den Altstädten: Parken Sie außerhalb und gehen Sie zu Fuß.',
        },
    },
    puglia: {
        eyebrow: 'Süditalien',
        heroSubtitle:
            'Trulli, Masserien, weiße Städte und ein Meer, das alle hundert Meter die Farbe wechselt.',
        intro: [
            'Apulien ist lang: Es reicht vom Gargano bis zum Absatz des Stiefels, und kein Abschnitt gleicht dem anderen. Im Norden prägen Masserien und Ebenen das Bild, in der Mitte Trulli und weiße Städte, und das Salento ist noch einmal etwas ganz anderes.',
            'Am besten bereisen Sie die Region mit dem Auto. Auf der Karte täuschen die Entfernungen: Man hält ständig an, und das ist gut so.',
        ],
        characteristics: {
            paesaggio: 'Jahrhundertealte Olivenbäume, Trockenmauern, Kalksteinklippen, lange Strände.',
            mare: 'Adria im Osten, Ionisches Meer im Süden. Klares Wasser, flacher Meeresgrund, versteckte Buchten.',
            borghi: 'Polignano a Mare, Alberobello, Ostuni, Locorotondo, Vieste, Lecce, Otranto, Gallipoli.',
            vibe: 'Sonnig, gastfreundlich, kulinarisch. Keine Pose: alles echt.',
            idealePer: ['Paare', 'Familien', 'Rundreisen', 'Essen und Wein', 'Lange Wochenenden'],
        },
        location: {
            dove: 'Südosten Italiens, zwischen Adria und Ionischem Meer.',
            area: 'Regionalhauptstadt: Bari. Provinzen: Bari, BAT, Brindisi, Foggia, Lecce, Taranto.',
            comeArrivare:
                'Flüge nach Bari und Brindisi. Hochgeschwindigkeitszüge aus Rom, Neapel, Mailand und Bologna. Direktbusse aus den großen Städten.',
        },
        funFacts: [
            'In Alberobello stehen über 1.500 Trulli, UNESCO-Welterbe.',
            'Im Salento lebt die größte griechischsprachige Gemeinschaft Italiens: In den Orten der Grecìa Salentina spricht man noch Griko, einen griechischen Dialekt.',
            'Apulisches Olivenöl extra vergine macht rund 40 % der italienischen Produktion aus.',
            'Die Kathedrale von Otranto besitzt ein 16 Meter langes Fußbodenmosaik aus dem 12. Jahrhundert.',
        ],
        itineraries: [
            {
                title: 'Wochenende im Valle d’Itria',
                duration: '3 Tage',
                steps: [
                    'Tag 1: Alberobello und Locorotondo.',
                    'Tag 2: Ostuni und Cisternino.',
                    'Tag 3: Polignano a Mare und Monopoli.',
                ],
            },
            {
                title: 'Eine klassische Woche',
                duration: '7 Tage',
                steps: [
                    'Bari (1 Nacht).',
                    'Valle d’Itria (2 Nächte in einer Masseria).',
                    'Salento: Lecce (1 Nacht).',
                    'Otranto und Santa Maria di Leuca (1 Nacht).',
                    'Gallipoli und Rückreise (2 Nächte).',
                ],
            },
            {
                title: 'Vom Meer aus',
                duration: 'Ein Tag auf dem Boot',
                steps: [
                    'Abfahrt in Polignano oder Monopoli.',
                    'Entlang der Grotten und Buchten.',
                    'Badestopp an der Lama Monachile.',
                ],
            },
        ],
        mustSee: [
            { title: 'Alberobello', note: 'Die Trulli der Viertel Rione Monti und Aia Piccola.' },
            { title: 'Polignano a Mare', note: 'Die Lama Monachile von oben, dann hinunter zum Baden.' },
            { title: 'Ostuni', note: 'Die „Weiße Stadt“, am schönsten zu Fuß bei Sonnenuntergang.' },
            { title: 'Lecce', note: 'Lecceser Barock, Hauptstadt des Salento.' },
            { title: 'Otranto', note: 'Kathedrale, aragonesisches Kastell, türkisfarbenes Meer.' },
            { title: 'Gallipoli', note: 'Altstadt auf einer kleinen Insel, Blick aufs Ionische Meer.' },
        ],
        tips: {
            periodo: 'Mai, Juni, September, Oktober.',
            durata: '5–7 Nächte für eine Gegend, mehr als 10, um die ganze Region zu durchqueren.',
            note: 'Ein Auto ist nötig. Die Straßen im Landesinneren sind langsam, aber landschaftlich sehr reizvoll.',
        },
    },
    calabria: {
        eyebrow: 'Süditalien',
        heroSubtitle:
            'Tropea, Scilla, steil abfallende Klippen. Das klarste Meer im Mittelmeerraum, ohne Gedränge.',
        intro: [
            'Kalabrien ist für viele noch eine Überraschung, und genau das macht seinen Reiz aus. Die tyrrhenische Küste mit Ortschaften hoch über dem Meer, die ionische mit endlosen Stränden, dazwischen Berge, mit denen Sie nicht rechnen (Sila, Aspromonte, Pollino).',
            'Es ist Land der Magna Graecia: Bei einem Spaziergang in Locri oder Reggio stehen Sie plötzlich zwischen dorischen Ruinen.',
        ],
        characteristics: {
            paesaggio: 'Zerklüftete Küste, weiße Klippen, Berge im Landesinneren, Olivenbäume und Bergamotte.',
            mare: 'Eines der klarsten im Mittelmeer. Tropea, Capo Vaticano, Scilla, Soverato.',
            borghi: 'Tropea, Scilla, Pizzo, Stilo, Gerace, Reggio Calabria.',
            vibe: 'Ursprünglich, mediterran, kulinarisch. Fernab vom Massentourismus.',
            idealePer: ['Meer', 'Familien', 'Paare', 'Rundreisen mit dem Auto', 'Fisch und einfache Landküche'],
        },
        location: {
            dove: 'Die Spitze des Stiefels, zwischen Tyrrhenischem und Ionischem Meer.',
            area: 'Regionalhauptstadt: Catanzaro. Provinzen: Catanzaro, Cosenza, Crotone, Reggio Calabria, Vibo Valentia.',
            comeArrivare:
                'Flüge nach Lamezia Terme und Reggio Calabria. Hochgeschwindigkeitszug bis Salerno, dann InterCity. Mit dem Auto über die A2.',
        },
        funFacts: [
            'Die Bronzen von Riace, ausgestellt im Museum von Reggio Calabria, sind zwei griechische Statuen aus dem 5. Jh. v. Chr., die 1972 im Meer gefunden wurden.',
            'Die Bergamotte wächst praktisch nur hier: 90 % der Weltproduktion stammen aus dem Küstenstreifen zwischen Reggio und Locri.',
            '’Nduja, Soppressata und Capocollo: Kalabrische Wurstwaren sind hier eine Religion.',
            'Scilla verdankt seinen Namen dem Meeresungeheuer Skylla aus der Odyssee, dem Gegenstück zu Charybdis in der Straße von Messina.',
        ],
        itineraries: [
            {
                title: 'Costa degli Dei',
                duration: '4–5 Tage',
                steps: [
                    'Tropea (2 Nächte).',
                    'Capo Vaticano: die Strände Grotticelle und Praia i Focu.',
                    'Pizzo für den Tartufo (gemeint ist das Eis, nicht der Trüffel).',
                ],
            },
            {
                title: 'Tyrrhenisches und Ionisches Meer',
                duration: '7 Tage',
                steps: [
                    'Tropea und Capo Vaticano (2).',
                    'Scilla und Costa Viola (1).',
                    'Reggio Calabria und die Bronzen (1).',
                    'Locri und Gerace (1).',
                    'Soverato, Costa degli Aranci (2).',
                ],
            },
            {
                title: 'Vom Meer aus',
                duration: 'Ein Tag auf dem Boot',
                steps: [
                    'Abfahrt in Tropea oder Vibo Marina.',
                    'Entlang der Küste von Capo Vaticano, Stopps in den Buchten.',
                    'Rückkehr bei Sonnenuntergang mit Blick auf die Isola dei Coniglietti.',
                ],
            },
        ],
        mustSee: [
            { title: 'Tropea', note: 'Santuario di Santa Maria dell’Isola bei Sonnenuntergang.' },
            { title: 'Scilla', note: 'Chianalea, das Fischerviertel direkt am Wasser.' },
            { title: 'Capo Vaticano', note: 'Aussichtspunkt und die Strände Grotticelle und Tonicello.' },
            { title: 'Bronzen von Riace', note: 'Reggio Calabria, zwei griechische Statuen aus dem 5. Jh. v. Chr.' },
            { title: 'Gerace', note: 'Mittelalterlicher Ort im Landesinneren, eine der Perlen Kalabriens.' },
        ],
        tips: {
            periodo: 'Juni und September. Juli und August sind schön, aber voller.',
            durata: '5–7 Nächte für die Costa degli Dei, 10, um tyrrhenische und ionische Küste abzudecken.',
            note: 'Ein Auto ist unverzichtbar. Panoramastraße SS18 entlang der Costa Viola.',
        },
    },
};
