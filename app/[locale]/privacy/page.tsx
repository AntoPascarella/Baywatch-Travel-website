import Link from 'next/link';
import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/i18n-config';
import LegalPage, { CONTROLLER } from '@/components/LegalPage';

const META: Record<Locale, { title: string; heading: string; description: string }> = {
    it: {
        title: 'Informativa sulla privacy | Baywatch Travel',
        heading: 'Informativa sulla privacy',
        description:
            'Come Baywatch Travel tratta i dati che ci invii con il modulo di contatto, per quanto tempo li conserva e come puoi esercitare i tuoi diritti.',
    },
    en: {
        title: 'Privacy policy | Baywatch Travel',
        heading: 'Privacy policy',
        description:
            'How Baywatch Travel handles the data you send us through the contact form, how long we keep it and how you can exercise your rights.',
    },
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
    const { locale } = await params;
    return { title: META[locale].title, description: META[locale].description };
}

export default async function PrivacyPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <LegalPage dict={dict} lang={locale} eyebrow="Privacy" title={META[locale].heading}>
            {locale === 'en' ? <PrivacyEn locale={locale} /> : <PrivacyIt locale={locale} />}
        </LegalPage>
    );
}

function PrivacyIt({ locale }: { locale: Locale }) {
    return (
        <>
            <p>
                Questa pagina spiega quali dati raccogliamo attraverso questo sito, perché li usiamo e
                quali diritti hai. È redatta ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679
                (GDPR) e del D.Lgs. 196/2003 (Codice privacy).
            </p>

            <h2>Chi tratta i tuoi dati</h2>
            <p>
                Il titolare del trattamento è <strong>{CONTROLLER.name}</strong>, {CONTROLLER.address.it}.
            </p>
            <p>
                Per qualsiasi domanda sui tuoi dati puoi scrivere a{' '}
                <a href={`mailto:${CONTROLLER.email}`}>{CONTROLLER.email}</a> o chiamare il{' '}
                <a href={`tel:${CONTROLLER.phone.replace(/\s/g, '')}`}>{CONTROLLER.phone}</a>.
            </p>

            <h2>Quali dati raccogliamo</h2>
            <p>
                <strong>Dati che ci invii tu.</strong> Quando usi il modulo di contatto ci comunichi nome,
                indirizzo email e messaggio. Telefono e destinazione sono facoltativi. Se ci scrivi via
                email, telefono o WhatsApp, trattiamo i dati che decidi di condividere in quel contatto.
            </p>
            <p>
                <strong>Dati di navigazione.</strong> Come qualsiasi sito, i server che lo ospitano
                registrano alcune informazioni tecniche: indirizzo IP, tipo di browser, pagine richieste,
                data e ora. Servono a far funzionare il sito e a proteggerlo da abusi; non li usiamo per
                identificarti.
            </p>

            <h2>Perché li usiamo</h2>
            <ul>
                <li>
                    <strong>Rispondere alla tua richiesta e prepararti una proposta di viaggio.</strong>{' '}
                    Base giuridica: misure precontrattuali adottate su tua richiesta (art. 6.1.b GDPR).
                </li>
                <li>
                    <strong>Gestire la prenotazione, se decidi di procedere</strong>, e adempiere agli
                    obblighi contabili e fiscali collegati. Base giuridica: esecuzione del contratto e
                    obbligo di legge (art. 6.1.b e 6.1.c GDPR).
                </li>
                <li>
                    <strong>Garantire la sicurezza del sito.</strong> Base giuridica: nostro legittimo
                    interesse (art. 6.1.f GDPR).
                </li>
            </ul>
            <p>
                Non usiamo i tuoi dati per inviarti newsletter o comunicazioni promozionali e non li
                vendiamo a nessuno.
            </p>

            <h2>Cosa succede se non ce li fornisci</h2>
            <p>
                Nome, email e messaggio ci servono per risponderti: senza, il modulo non può essere
                inviato. Telefono e destinazione sono facoltativi e ci aiutano solo a preparare una
                risposta più precisa.
            </p>

            <h2>Chi può vederli</h2>
            <ul>
                <li>Il personale di Baywatch Travel che si occupa della tua richiesta.</li>
                <li>
                    I fornitori tecnici che gestiscono per nostro conto l&apos;hosting del sito e la posta
                    elettronica, nominati responsabili del trattamento (art. 28 GDPR).
                </li>
                <li>
                    Se prenoti, i partner necessari a erogare i servizi richiesti (ad esempio strutture
                    ricettive, società di trasferimento, guide), limitatamente ai dati che servono a loro.
                </li>
                <li>Autorità pubbliche, solo quando la legge lo richiede.</li>
            </ul>

            <h2>Trasferimenti fuori dall&apos;Unione europea</h2>
            <p>
                Se un fornitore tratta dati al di fuori dello Spazio economico europeo, il trasferimento
                avviene solo con le garanzie previste dagli articoli 44–49 del GDPR, come una decisione di
                adeguatezza della Commissione europea o le clausole contrattuali standard.
            </p>

            <h2>Per quanto tempo li conserviamo</h2>
            <ul>
                <li>
                    <strong>Richieste a cui non segue una prenotazione:</strong> fino a 24 mesi
                    dall&apos;ultimo contatto, così da poter ritrovare la conversazione se ci riscrivi.
                </li>
                <li>
                    <strong>Dati legati a una prenotazione:</strong> per 10 anni, come previsto dalle norme
                    civilistiche e fiscali sulla conservazione dei documenti contabili.
                </li>
                <li>
                    <strong>Dati di navigazione:</strong> per il tempo strettamente necessario alla sicurezza
                    del sito, salvo che servano ad accertare responsabilità in caso di abusi.
                </li>
            </ul>

            <h2>I tuoi diritti</h2>
            <p>In qualsiasi momento puoi chiederci di:</p>
            <ul>
                <li>sapere quali dati abbiamo su di te e riceverne una copia (art. 15);</li>
                <li>correggerli o completarli (art. 16);</li>
                <li>cancellarli, quando non siamo tenuti a conservarli (art. 17);</li>
                <li>limitarne il trattamento (art. 18);</li>
                <li>riceverli in un formato leggibile da un computer (art. 20);</li>
                <li>opporti al trattamento basato sul nostro legittimo interesse (art. 21).</li>
            </ul>
            <p>
                Basta scrivere a <a href={`mailto:${CONTROLLER.email}`}>{CONTROLLER.email}</a>. Se ritieni
                che il trattamento non rispetti la normativa, puoi presentare reclamo al Garante per la
                protezione dei dati personali (
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
                    www.garanteprivacy.it
                </a>
                ).
            </p>

            <h2>WhatsApp</h2>
            <p>
                Il pulsante WhatsApp apre una conversazione con noi sull&apos;app o sul sito di WhatsApp,
                che tratta i dati secondo la propria informativa. I messaggi che ci invii li gestiamo come
                descritto in questa pagina.
            </p>

            <h2>Cookie</h2>
            <p>
                Per sapere come il sito usa cookie e strumenti simili, leggi l&apos;
                <Link href={`/${locale}/cookie`}>informativa sui cookie</Link>.
            </p>

            <h2>Modifiche</h2>
            <p>
                Se cambiamo il modo in cui trattiamo i dati aggiorneremo questa pagina e la data indicata
                in alto.
            </p>
        </>
    );
}

function PrivacyEn({ locale }: { locale: Locale }) {
    return (
        <>
            <p>
                This page explains what data we collect through this website, why we use it and what
                rights you have. It is provided under Articles 13 and 14 of Regulation (EU) 2016/679
                (GDPR) and Italian Legislative Decree 196/2003 (the Italian Personal Data Protection Code).
            </p>

            <h2>Who handles your data</h2>
            <p>
                The data controller is <strong>{CONTROLLER.name}</strong>, {CONTROLLER.address.en}.
            </p>
            <p>
                For any question about your data you can write to{' '}
                <a href={`mailto:${CONTROLLER.email}`}>{CONTROLLER.email}</a> or call{' '}
                <a href={`tel:${CONTROLLER.phone.replace(/\s/g, '')}`}>{CONTROLLER.phone}</a>.
            </p>

            <h2>What data we collect</h2>
            <p>
                <strong>Data you send us.</strong> When you use the contact form you give us your name,
                email address and message. Phone number and destination are optional. If you contact us
                by email, phone or WhatsApp, we process the data you choose to share in that conversation.
            </p>
            <p>
                <strong>Browsing data.</strong> As with any website, the servers that host it record some
                technical information: IP address, browser type, pages requested, date and time. This is
                needed to run the site and protect it from abuse; we do not use it to identify you.
            </p>

            <h2>Why we use it</h2>
            <ul>
                <li>
                    <strong>To reply to your enquiry and prepare a travel proposal for you.</strong>{' '}
                    Legal basis: pre-contractual measures taken at your request (Art. 6(1)(b) GDPR).
                </li>
                <li>
                    <strong>To manage your booking, if you decide to go ahead</strong>, and to meet the
                    related accounting and tax obligations. Legal basis: performance of a contract and
                    legal obligation (Art. 6(1)(b) and 6(1)(c) GDPR).
                </li>
                <li>
                    <strong>To keep the site secure.</strong> Legal basis: our legitimate interest
                    (Art. 6(1)(f) GDPR).
                </li>
            </ul>
            <p>
                We do not use your data to send you newsletters or promotional messages, and we do not
                sell it to anyone.
            </p>

            <h2>What happens if you don&apos;t provide it</h2>
            <p>
                We need your name, email and message to reply to you: without them, the form cannot be
                sent. Phone number and destination are optional and only help us prepare a more precise
                reply.
            </p>

            <h2>Who can see it</h2>
            <ul>
                <li>Baywatch Travel staff handling your enquiry.</li>
                <li>
                    The technical providers that manage website hosting and email on our behalf,
                    appointed as data processors (Art. 28 GDPR).
                </li>
                <li>
                    If you book, the partners needed to provide the services you requested (for example
                    accommodation, transfer companies, guides), limited to the data they need.
                </li>
                <li>Public authorities, only when required by law.</li>
            </ul>

            <h2>Transfers outside the European Union</h2>
            <p>
                If a provider processes data outside the European Economic Area, the transfer only takes
                place with the safeguards set out in Articles 44–49 of the GDPR, such as a European
                Commission adequacy decision or standard contractual clauses.
            </p>

            <h2>How long we keep it</h2>
            <ul>
                <li>
                    <strong>Enquiries that do not lead to a booking:</strong> up to 24 months from our last
                    contact, so we can find the conversation again if you write to us again.
                </li>
                <li>
                    <strong>Data linked to a booking:</strong> 10 years, as required by Italian civil and
                    tax law on keeping accounting records.
                </li>
                <li>
                    <strong>Browsing data:</strong> only as long as strictly necessary for site security,
                    unless it is needed to establish liability in the event of abuse.
                </li>
            </ul>

            <h2>Your rights</h2>
            <p>At any time you can ask us to:</p>
            <ul>
                <li>tell you what data we hold about you and give you a copy (Art. 15);</li>
                <li>correct or complete it (Art. 16);</li>
                <li>delete it, where we are not required to keep it (Art. 17);</li>
                <li>restrict its processing (Art. 18);</li>
                <li>give it to you in a machine-readable format (Art. 20);</li>
                <li>stop processing based on our legitimate interest, if you object to it (Art. 21).</li>
            </ul>
            <p>
                Just write to <a href={`mailto:${CONTROLLER.email}`}>{CONTROLLER.email}</a>. If you believe
                the processing does not comply with the law, you can lodge a complaint with the Italian
                Data Protection Authority, the Garante per la protezione dei dati personali (
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
                    www.garanteprivacy.it
                </a>
                ).
            </p>

            <h2>WhatsApp</h2>
            <p>
                The WhatsApp button opens a conversation with us in the WhatsApp app or website, which
                processes data under its own privacy policy. We handle the messages you send us as
                described on this page.
            </p>

            <h2>Cookies</h2>
            <p>
                To find out how the site uses cookies and similar tools, read the{' '}
                <Link href={`/${locale}/cookie`}>cookie policy</Link>.
            </p>

            <h2>Changes</h2>
            <p>
                If we change the way we process data, we will update this page and the date shown at the
                top.
            </p>
        </>
    );
}
