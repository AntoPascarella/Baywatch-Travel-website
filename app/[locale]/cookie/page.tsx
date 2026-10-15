import Link from 'next/link';
import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/i18n-config';
import LegalPage, { CONTROLLER } from '@/components/LegalPage';
import { COOKIE_NOTICE_KEY } from '@/lib/cookie-notice';

const META: Record<Locale, { title: string; heading: string; description: string }> = {
    it: {
        title: 'Informativa sui cookie | Baywatch Travel',
        heading: 'Informativa sui cookie',
        description:
            'Il sito di Baywatch Travel non usa cookie di profilazione né di analisi. Qui trovi cosa memorizza il browser e come gestirlo.',
    },
    en: {
        title: 'Cookie policy | Baywatch Travel',
        heading: 'Cookie policy',
        description:
            'The Baywatch Travel website uses no profiling or analytics cookies. Here is what your browser stores and how to manage it.',
    },
    de: {
        title: 'Cookie-Richtlinie | Baywatch Travel',
        heading: 'Cookie-Richtlinie',
        description:
            'Die Website von Baywatch Travel verwendet weder Profiling- noch Analyse-Cookies. Hier erfahren Sie, was Ihr Browser speichert und wie Sie dies verwalten können.',
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

export default async function CookiePage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    // Quote the notice's real button label, so the policy and the notice never disagree.
    const dismissLabel = dict.cookie_notice.dismiss;

    return (
        <LegalPage dict={dict} lang={locale} eyebrow="Cookie" title={META[locale].heading}>
            {locale === 'en'
                ? <CookieEn locale={locale} dismissLabel={dismissLabel} />
                : locale === 'de'
                  ? <CookieDe locale={locale} dismissLabel={dismissLabel} />
                  : <CookieIt locale={locale} dismissLabel={dismissLabel} />}
        </LegalPage>
    );
}

function CookieIt({ locale, dismissLabel }: { locale: Locale; dismissLabel: string }) {
    return (
        <>
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
                Quando chiudi l&apos;avviso sui cookie con &laquo;{dismissLabel}&raquo;, il browser salva
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
        </>
    );
}

function CookieEn({ locale, dismissLabel }: { locale: Locale; dismissLabel: string }) {
    return (
        <>
            <p>
                Cookies are small text files that a website saves in the browser of the person visiting it.
                Some are needed for the site to work, others measure how it is used or show targeted
                advertising. This page explains what happens when you visit the {CONTROLLER.name} website.
            </p>

            <h2>In short</h2>
            <p>
                <strong>This site does not set any cookies</strong>: no profiling, analytics or technical
                cookies. We do not use statistics tools, advertising pixels or third-party content that
                tracks you. Fonts and images are served directly from our servers.
            </p>

            <h2>What your browser stores</h2>
            <p>
                When you close the cookie notice with &ldquo;{dismissLabel}&rdquo;, your browser saves this
                choice in its local storage (localStorage), under the name{' '}
                <code>{COOKIE_NOTICE_KEY}</code>, so the notice is not shown to you again. It is technical
                information: it contains no personal data, does not expire and is not sent to us or to
                anyone else. You can delete it at any time from your browser settings.
            </p>

            <h2>Links to other sites</h2>
            <p>
                The WhatsApp button and other external links take you to sites we do not manage, which may
                use their own cookies. In that case, those sites&apos; policies apply.
            </p>

            <h2>How to manage cookies in your browser</h2>
            <p>
                Every browser lets you view, block and delete cookies and site data. You will usually find
                these options in the settings, under Privacy or Security; your browser&apos;s help pages
                explain the exact steps.
            </p>

            <h2>If anything changes</h2>
            <p>
                If we add analytics tools or other non-technical cookies in the future, we will update this
                page and ask for your consent before enabling them.
            </p>

            <h2>Contact</h2>
            <p>
                For questions about this policy, write to{' '}
                <a href={`mailto:${CONTROLLER.email}`}>{CONTROLLER.email}</a>. To find out how we handle the
                data you send us, read the <Link href={`/${locale}/privacy`}>privacy policy</Link>.
            </p>
        </>
    );
}

function CookieDe({ locale, dismissLabel }: { locale: Locale; dismissLabel: string }) {
    return (
        <>
            <p>
                Cookies sind kleine Textdateien, die eine Website im Browser ihrer Besucher speichert.
                Einige sind für den Betrieb der Website erforderlich, andere messen ihre Nutzung oder
                dienen dazu, gezielte Werbung anzuzeigen. Diese Seite erläutert, was geschieht, wenn Sie
                die Website von {CONTROLLER.name} besuchen.
            </p>

            <h2>Kurz gesagt</h2>
            <p>
                <strong>Diese Website setzt keine Cookies</strong>: weder Profiling- noch Analyse- noch
                technische Cookies. Wir verwenden keine Statistik-Tools, Werbepixel oder Inhalte Dritter,
                die Sie tracken. Schriftarten und Bilder werden direkt von unseren Servern ausgeliefert.
            </p>

            <h2>Was Ihr Browser speichert</h2>
            <p>
                Wenn Sie den Cookie-Hinweis mit &bdquo;{dismissLabel}&ldquo; schließen, speichert der
                Browser diese Auswahl im lokalen Speicher (localStorage) unter dem Namen{' '}
                <code>{COOKIE_NOTICE_KEY}</code>, damit Ihnen der Hinweis nicht erneut angezeigt wird. Es
                handelt sich um eine technische Information: Sie enthält keine personenbezogenen Daten,
                läuft nicht ab und wird weder an uns noch an andere übermittelt. Sie können sie jederzeit
                über die Einstellungen Ihres Browsers löschen.
            </p>

            <h2>Links zu anderen Websites</h2>
            <p>
                Die WhatsApp-Schaltfläche und die anderen externen Links führen Sie zu Websites, die wir
                nicht betreiben und die eigene Cookies verwenden können. In diesem Fall gelten die
                Richtlinien dieser Websites.
            </p>

            <h2>So verwalten Sie Cookies in Ihrem Browser</h2>
            <p>
                Alle Browser ermöglichen es, Cookies und Website-Daten anzuzeigen, zu blockieren und zu
                löschen. Diese Optionen finden Sie in der Regel in den Einstellungen unter dem Punkt
                Datenschutz oder Sicherheit; die Hilfe Ihres Browsers erklärt die genauen Schritte.
            </p>

            <h2>Falls sich etwas ändert</h2>
            <p>
                Sollten wir künftig Analyse-Tools oder andere nicht technische Cookies einsetzen, werden
                wir diese Seite aktualisieren und Sie vor deren Aktivierung um Ihre Einwilligung bitten.
            </p>

            <h2>Kontakt</h2>
            <p>
                Bei Fragen zu dieser Richtlinie schreiben Sie an{' '}
                <a href={`mailto:${CONTROLLER.email}`}>{CONTROLLER.email}</a>. Wie wir die Daten
                verarbeiten, die Sie uns senden, erfahren Sie in der{' '}
                <Link href={`/${locale}/privacy`}>Datenschutzerklärung</Link>.
            </p>
        </>
    );
}
