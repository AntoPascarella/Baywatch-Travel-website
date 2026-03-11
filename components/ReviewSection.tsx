'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from './FadeIn';

export default function ReviewSection({
    quote,
    author,
    buttonLabel,
    buttonHref,
}: {
    quote: string;
    author: string;
    buttonLabel: string;
    buttonHref: string;
}) {
    return (
        <section className="relative">
            {/* Full-width background image */}
            <div className="relative h-[50vh] min-h-[360px] overflow-hidden bg-cream">
                <Image
                    src="/images/reviews/review-bg-placeholder.jpg"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="100vw"
                    onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                    }}
                />
                <div className="absolute inset-0 bg-midnight/30" />
            </div>

            {/* Quote block below image */}
            <div className="bg-white" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <FadeIn>
                        <blockquote className="text-h3 font-serif italic text-midnight leading-relaxed mb-6">
                            &ldquo;{quote}&rdquo;
                        </blockquote>
                        <p className="text-sm text-midnight/50 uppercase tracking-widest font-medium mb-10">
                            {author}
                        </p>
                        <Link href={buttonHref} className="btn btn-dark">
                            {buttonLabel}
                        </Link>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
