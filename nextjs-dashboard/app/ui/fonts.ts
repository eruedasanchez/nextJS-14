import { Lusitana, Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
});

// Agregamos la fuente Lusitana

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700']
});

