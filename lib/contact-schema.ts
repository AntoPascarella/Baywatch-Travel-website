import * as z from 'zod';

// Shared by ContactForm (client) and /api/contact (server).
// Messages are dictionary keys under `form`, resolved by the form.
export const contactSchema = z.object({
    name: z.string().trim().min(2, { message: 'error_name' }).max(100, { message: 'error_name' }),
    email: z.string().trim().email({ message: 'error_email' }).max(200, { message: 'error_email' }),
    phone: z.string().trim().max(40).optional(),
    destination: z.string().max(60).optional(),
    message: z.string().trim().min(10, { message: 'error_message' }).max(5000, { message: 'error_message' }),
    privacy: z.boolean().refine((v) => v, { message: 'error_privacy' }),
    // Honeypot: hidden from people, filled in by bots.
    website: z.string().optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;
