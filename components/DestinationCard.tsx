import Link from 'next/link';
import Image from 'next/image';
import { type Destination } from '@/data/destinations';
import { Locale } from '@/i18n-config';

export default function DestinationCard({
    destination,
    lang,
    discoverLabel,
}: {
    destination: Destination;
    lang: Locale;
    discoverLabel?: string;
}) {
    const altText = destination.alt[lang] || destination.name;
    const ctaText = discoverLabel || 'Discover';

    return (
        <Link href={`/${lang}/destinazioni#${destination.slug}`} className="group block h-full">
            <div className="card h-full flex flex-col">
                {/* Image area with gradient overlay */}
                <div className="relative h-64 overflow-hidden">
                    <Image
                        src={destination.image}
                        alt={altText}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-midnight/10 to-transparent transition-opacity duration-500 group-hover:from-midnight/70" />

                    {/* Region badge */}
                    <div className="absolute top-4 left-4 z-10">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-sea-blue-dark">
                            {destination.region}
                        </span>
                    </div>

                    {/* Name overlay on image */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                        <h3 className="text-h4 font-serif font-bold text-white drop-shadow-lg leading-tight">
                            {destination.name}
                        </h3>
                        <p className="text-small text-white/80 font-medium mt-0.5">
                            {destination.subTitle}
                        </p>
                    </div>
                </div>

                {/* Content area */}
                <div className="p-5 flex-1 flex flex-col">
                    {/* Tags */}
                    <div className="flex gap-1.5 mb-3 flex-wrap">
                        {destination.types.slice(0, 3).map(type => (
                            <span
                                key={type}
                                className="text-[10px] uppercase tracking-wider bg-cream-dark/60 px-2.5 py-0.5 rounded-full text-midnight/70 font-semibold"
                            >
                                {type}
                            </span>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-body text-gray-600 line-clamp-2 mb-4 flex-1">
                        {destination.shortDescription}
                    </p>

                    {/* Footer */}
                    <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-small text-gray-400">{destination.bestSeason}</span>
                        <span className="text-small text-soft-coral font-semibold group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                            {ctaText}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
