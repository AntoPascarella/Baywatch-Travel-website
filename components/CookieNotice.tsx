'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { COOKIE_NOTICE_KEY } from '@/lib/cookie-notice';

type Labels = { label: string; text: string; link: string; dismiss: string };

// Kept in memory too, so the notice still closes when storage is blocked.
let dismissedInMemory = false;
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
    listeners.add(cb);
    return () => { listeners.delete(cb); };
}
function getDismissed() {
    if (dismissedInMemory) return true;
    try {
        return window.localStorage.getItem(COOKIE_NOTICE_KEY) === '1';
    } catch {
        return false;
    }
}
// Hidden during SSR so it never flashes for visitors who already dismissed it.
function getDismissedServer() { return true; }

function dismiss() {
    dismissedInMemory = true;
    try {
        window.localStorage.setItem(COOKIE_NOTICE_KEY, '1');
    } catch {
        // Storage unavailable: the in-memory flag covers this visit.
    }
    listeners.forEach((l) => l());
}

/**
 * Informational notice: the site sets no cookies, so there is nothing to
 * accept or refuse. If analytics are ever added, this must become a real
 * consent banner that blocks them until the visitor agrees.
 */
export default function CookieNotice({ labels, policyHref }: { labels: Labels; policyHref: string }) {
    const dismissed = useSyncExternalStore(subscribe, getDismissed, getDismissedServer);
    if (dismissed) return null;

    return (
        <div
            role="region"
            aria-label={labels.label}
            className="fixed bottom-6 left-4 right-24 sm:left-6 sm:right-auto sm:max-w-sm z-40 bg-white text-midnight border border-black/10 rounded-lg shadow-lg px-5 py-4 text-small"
        >
            <p className="leading-relaxed text-midnight/75">
                {labels.text}{' '}
                <Link href={policyHref} className="underline underline-offset-2 hover:text-midnight">
                    {labels.link}
                </Link>
            </p>
            <button type="button" onClick={dismiss} className="btn btn-dark !py-2 !px-5 !text-xs mt-3">
                {labels.dismiss}
            </button>
        </div>
    );
}
