import Link from 'next/link';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/i18n-config';
import LegalPage, { CONTROLLER } from '@/components/LegalPage';
import { COOKIE_NOTICE_KEY } from '@/lib/cookie-notice';

export const metadata = {
    title: 'Informativa sui cookie | Baywatch Travel',
    description:
        'Il sito di Baywatch Travel non usa cookie di profilazione né di analisi. Qui trovi cosa memorizza il browser e come gestirlo.',
};

export default async function CookiePage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <LegalPage dict={dict} lang={locale} eyebrow="Cookie" title="Informativa sui cookie">
            <p>
                I cookie sono piccoli file di testo che un sito salva nel browser di chi lo visita. Alcuni
                servono a far funzionare il sito, altri a misurarne l&apos;uso o a mostrare pubblicità
                mirata. Questa pagina spiega cosa succede quando visiti il sito di {CONTROLLER.name}.
            </p>

            <h2>In breve</h2>
            <p>
                <strong>Questo sito non installa cookie</strong>: né di profilazione, né di analisi, né
                tecnici. Non usiamo strumenti di statistica, pixel pubblicitari o contenuti di terze parti
                che ti tracciano. Caratteri e immagini vengono serviti direttamente dai nostri server.
            </p>

            <h2>Cosa memorizza il browser</h2>
            <p>
                Quando chiudi l&apos;avviso sui cookie con &laquo;Ho capito&raquo;, il browser salva
                questa scelta nella memoria locale (localStorage), con il nome{' '}
                <code>{COOKIE_NOTICE_KEY}</code>, per non mostrarti di nuovo l&apos;avviso. È
                un&apos;informazione tecnica: non contiene dati personali, non ha scadenza e non viene
                inviata a noi né ad altri. Puoi cancellarla in qualsiasi momento dalle impostazioni del
                browser.
            </p>

            <h2>Link verso altri siti</h2>
            <p>
                Il pulsante WhatsApp e gli altri link esterni ti portano su siti che non gestiamo e che
                possono usare i propri cookie. In quel caso valgono le informative di quei siti.
            </p>

            <h2>Come gestire i cookie nel browser</h2>
            <p>
                Tutti i browser permettono di vedere, bloccare e cancellare cookie e dati dei siti. Di
                solito trovi queste opzioni nelle impostazioni, alla voce Privacy o Sicurezza; la guida
                del tuo browser spiega i passaggi esatti.
            </p>

            <h2>Se cambia qualcosa</h2>
            <p>
                Se in futuro aggiungeremo strumenti di analisi o altri cookie non tecnici, aggiorneremo
                questa pagina e ti chiederemo il consenso prima di attivarli.
            </p>

            <h2>Contatti</h2>
            <p>
                Per domande su questa informativa scrivi a{' '}
                <a href={`mailto:${CONTROLLER.email}`}>{CONTROLLER.email}</a>. Per sapere come trattiamo i
                dati che ci invii, leggi l&apos;<Link href={`/${locale}/privacy`}>informativa sulla privacy</Link>.
            </p>
        </LegalPage>
    );
}
