'use server'; 
// Marca que todas las funciones que se exportan en este archivo son de servidor 
// y por lo tanto, no se ejecutan ni se envian al cliente

export async function createInvoice(formData:FormData) {
    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    }

    console.log(rawFormData);
}
