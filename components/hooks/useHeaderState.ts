'use client';

import { useState, useEffect, useRef } from 'react';

export type HeaderState = 'top' | 'top-overscroll' | 'scrolled';

export function useHeaderState(scrolledThreshold = 60) {
    const [state, setState] = useState<HeaderState>('top');
    const [isCompact, setIsCompact] = useState(false);

    const stateRef = useRef<HeaderState>('top');
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        let ticking = false;

        const updateState = (newState: HeaderState) => {
            if (stateRef.current !== newState) {
                stateRef.current = newState;
                setState(newState);
            }
        };

        const triggerOverscroll = () => {
            if (window.scrollY > 0) return; // Safeguard: only at top
            updateState('top-overscroll');

            if (timeoutRef.current) clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(() => {
                if (window.scrollY <= 0) {
                    updateState('top');
                }
            }, 400); // Wait for the gesture to finish then revert
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    setIsCompact(scrollY > scrolledThreshold);

                    if (scrollY > 0) {
                        updateState('scrolled');
                    } else if (scrollY === 0 && stateRef.current !== 'top-overscroll') {
                        updateState('top');
                    } else if (scrollY < 0) {
                        // Some browsers (Safari) natively report < 0 during rubber-banding
                        triggerOverscroll();
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        const handleWheel = (e: WheelEvent) => {
            if (window.scrollY <= 0 && e.deltaY < 0) {
                triggerOverscroll();
            }
        };

        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            if (window.scrollY <= 0) {
                const touchY = e.touches[0].clientY;
                if (touchStartY - touchY < -5) { // Negative delta = pull down
                    triggerOverscroll();
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('wheel', handleWheel, { passive: true });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        handleScroll(); // Initial set

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [scrolledThreshold]);

    return { state, isCompact };
}
