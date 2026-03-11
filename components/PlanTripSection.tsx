import FadeIn from './FadeIn';

export default function PlanTripSection({
    title,
    body,
}: {
    title: string;
    body: string;
}) {
    return (
        <section
            style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
            className="bg-white"
        >
            <div className="container mx-auto px-4 text-center max-w-3xl">
                <FadeIn>
                    <h2 className="text-h2 font-serif text-black mb-6 leading-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-black/65 leading-relaxed">
                        {body}
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
