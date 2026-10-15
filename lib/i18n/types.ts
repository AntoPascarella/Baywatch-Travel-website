import type it from '@/dictionaries/it.json';

// The Italian dictionary is the source of truth; every other locale must match its shape.
export type Dictionary = typeof it;
