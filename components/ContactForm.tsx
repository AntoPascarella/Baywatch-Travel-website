'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { destinations } from '@/data/destinations';

const formSchema = z.object({
    name: z.string().min(2, { message: 'error_name' }),
    email: z.string().email({ message: 'error_email' }),
    phone: z.string().optional(),
    destination: z.string().optional(),
    message: z.string().min(10, { message: 'error_message' }),
});

type FormLabels = {
    name: string;
    email: string;
    phone: string;
    phone_helper: string;
    destination: string;
    destination_placeholder: string;
    message: string;
    message_helper: string;
    submit: string;
    sending: string;
    success_title: string;
    success: string;
    send_another: string;
    error_name: string;
    error_email: string;
    error_message: string;
};

export default function ContactForm({
    labels,
    variant = 'default',
}: {
    labels: FormLabels;
    variant?: 'default' | 'compact';
}) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const getErrorMessage = (errorKey?: string) => {
        if (!errorKey) return '';
        return labels[errorKey as keyof FormLabels] || errorKey;
    };

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Invio del messaggio fallito');
            }

            setIsSuccess(true);
            reset();
        } catch (error) {
            console.error(error);
            alert('Qualcosa è andato storto. Riprova più tardi.');
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <div className="bg-mint/30 border border-mint text-green-800 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    ✓
                </div>
                <h3 className="text-h4 font-serif font-normal mb-2">{labels.success_title}</h3>
                <p className="text-body text-green-700 mb-4">{labels.success}</p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="text-small text-green-600 underline underline-offset-2 hover:text-green-800 transition-colors"
                >
                    {labels.send_another}
                </button>
            </div>
        );
    }

    const isCompact = variant === 'compact';

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={isCompact ? 'space-y-4' : 'space-y-5'}>
            {/* Name */}
            <div>
                <label htmlFor="contact-name" className="form-label">
                    {labels.name}
                </label>
                <input
                    id="contact-name"
                    {...register('name')}
                    className={`form-field ${errors.name ? 'form-field-error' : ''}`}
                    placeholder="Mario Rossi"
                />
                {errors.name && (
                    <p className="form-error">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {getErrorMessage(errors.name.message)}
                    </p>
                )}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="contact-email" className="form-label">
                    {labels.email}
                </label>
                <input
                    id="contact-email"
                    type="email"
                    {...register('email')}
                    className={`form-field ${errors.email ? 'form-field-error' : ''}`}
                    placeholder="mario@example.com"
                />
                {errors.email && (
                    <p className="form-error">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {getErrorMessage(errors.email.message)}
                    </p>
                )}
            </div>

            {/* Phone (optional) */}
            {!isCompact && (
                <div>
                    <label htmlFor="contact-phone" className="form-label">
                        {labels.phone}
                    </label>
                    <input
                        id="contact-phone"
                        type="tel"
                        {...register('phone')}
                        className="form-field"
                        placeholder="+39 081 123 4567"
                    />
                    <p className="form-helper">{labels.phone_helper}</p>
                </div>
            )}

            {/* Destination (optional) */}
            {!isCompact && (
                <div>
                    <label htmlFor="contact-destination" className="form-label">
                        {labels.destination}
                    </label>
                    <select
                        id="contact-destination"
                        {...register('destination')}
                        className="form-field"
                        defaultValue=""
                    >
                        <option value="" disabled>{labels.destination_placeholder}</option>
                        {destinations.map(d => (
                            <option key={d.slug} value={d.slug}>{d.name}</option>
                        ))}
                    </select>
                </div>
            )}

            {/* Message */}
            <div>
                <label htmlFor="contact-message" className="form-label">
                    {labels.message}
                </label>
                <textarea
                    id="contact-message"
                    rows={isCompact ? 3 : 4}
                    {...register('message')}
                    className={`form-field resize-none ${errors.message ? 'form-field-error' : ''}`}
                    placeholder="..."
                />
                {errors.message ? (
                    <p className="form-error">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {getErrorMessage(errors.message.message)}
                    </p>
                ) : !isCompact ? (
                    <p className="form-helper">{labels.message_helper}</p>
                ) : null}
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
            >
                {isSubmitting ? (
                    <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        {labels.sending}
                    </>
                ) : labels.submit}
            </button>
        </form>
    );
}
