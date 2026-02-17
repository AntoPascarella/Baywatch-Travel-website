'use client';

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';

/* ────────────────────────────────────────────
   Hook: subscribe to the prefers-reduced-motion
   media query without ever calling setState
   inside an effect body.
   ──────────────────────────────────────────── */
const MQ = '(prefers-reduced-motion: reduce)';

function subscribeToReducedMotion(callback: () => void) {
    const mq = window.matchMedia(MQ);
    mq.addEventListener('change', callback);
    return () => mq.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
    return window.matchMedia(MQ).matches;
}

function getReducedMotionServerSnapshot() {
    return false; // default on server: animate
}

/* ────────────────────────────────────────────
   FadeIn Component
   ──────────────────────────────────────────── */
export default function FadeIn({
    children,
    className = '',
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const prefersReducedMotion = useSyncExternalStore(
        subscribeToReducedMotion,
        getReducedMotionSnapshot,
        getReducedMotionServerSnapshot,
    );

    const [isVisible, setIsVisible] = useState(prefersReducedMotion);
    const ref = useRef<HTMLDivElement>(null);

    const handleIntersect = useCallback<IntersectionObserverCallback>(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        },
        [],
    );

    useEffect(() => {
        if (prefersReducedMotion || isVisible) return;

        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(handleIntersect, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        });

        observer.observe(node);

        return () => {
            observer.unobserve(node);
        };
    }, [prefersReducedMotion, isVisible, handleIntersect]);

    // If reduced motion, render immediately without animation styles
    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
