'use client';

import { useRef, useState, useEffect } from 'react';
import FadeIn from './FadeIn';

const CLIPS = [
    '/video/ischia.mp4',
    '/video/amalfi.mp4',
    '/video/capri.mp4',
    '/video/tuscany.mp4',
];

export default function VideoTextSection({
    title,
    body,
}: {
    title: string;
    body: string;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [index, setIndex] = useState(0);
    const [videoError, setVideoError] = useState(false);

    // On clip end → advance to next; wrap to 0.
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        v.load();
        v.play().catch(() => {});
    }, [index]);

    const onEnded = () => setIndex((i) => (i + 1) % CLIPS.length);

    return (
        <section
            style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
            className="bg-white"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center max-w-7xl mx-auto">
                    {/* Video placeholder (left). expanded 1.3× (65%) with sharp corners */}
                    <FadeIn className="lg:w-[65%] w-full">
                        <div className="relative aspect-video overflow-hidden bg-cream">
                            {!videoError ? (
                                <video
                                    ref={videoRef}
                                    key={CLIPS[index]}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    playsInline
                                    preload="auto"
                                    poster="/images/destinations/ischia/Ischia.jpg"
                                    aria-hidden="true"
                                    onEnded={onEnded}
                                    onError={() => setVideoError(true)}
                                >
                                    <source src={CLIPS[index]} type="video/mp4" />
                                </video>
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-cream text-midnight/30">
                                    <div className="text-center">
                                        <svg className="w-16 h-16 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-sm font-medium">Video placeholder</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </FadeIn>

                    {/* Text (right) */}
                    <FadeIn delay={200} className="lg:w-[35%] w-full">
                        <h2 className="text-h2 font-serif text-black mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-black/65 leading-relaxed text-justify hyphens-auto">
                            {body}
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
