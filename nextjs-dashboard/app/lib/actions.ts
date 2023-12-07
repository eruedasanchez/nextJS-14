'use server'; 
// Marca que todas las funciones que se exportan en este archivo son de servidor 
// y por lo tanto, no se ejecutan ni se envian al cliente

import { z } from 'zod';
import { Invoice } from './definitions';

const createInvoiceSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string()
})

const createInvoiceFormSchema = createInvoiceSchema.omit({
    id: true,
    date: true
})

export async function createInvoice(formData:FormData) {
    const {customerId, amount, status} = createInvoiceFormSchema.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    }) 

    // console.log(rawFormData);
}
