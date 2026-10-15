import Link from 'next/link';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/i18n-config';
import LegalPage, { CONTROLLER } from '@/components/LegalPage';

export const metadata = {
    title: 'Informativa sulla privacy | Baywatch Travel',
    description:
        'Come Baywatch Travel tratta i dati che ci invii con il modulo di contatto, per quanto tempo li conserva e come puoi esercitare i tuoi diritti.',
};

export default async function PrivacyPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <LegalPage dict={dict} lang={locale} eyebrow="Privacy" title="Informativa sulla privacy">
            <p>
                Questa pagina spiega quali dati raccogliamo attraverso questo sito, perché li usiamo e
                quali diritti hai. È redatta ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679
                (GDPR) e del D.Lgs. 196/2003 (Codice privacy).
            </p>

            <h2>Chi tratta i tuoi dati</h2>
            <p>
                Il titolare del trattamento è <strong>{CONTROLLER.name}</strong>, {CONTROLLER.address}.
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
        </LegalPage>
    );
}
