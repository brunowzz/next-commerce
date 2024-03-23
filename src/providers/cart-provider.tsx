'use client'

import { ReactNode } from 'react'
import { CartProvider as BagProvider } from 'use-shopping-cart'

export default function CartProvider({ children }: { children: ReactNode }) {
    return (
        <BagProvider
            mode="payment"
            cartMode="client-only"
            stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
            successUrl="https://next-commerce-lac-seven.vercel.app/stripe/sucess"
            cancelUrl="https://next-commerce-lac-seven.vercel.app/stripe/error"
            currency="USD"
            billingAddressCollection={false}
            shouldPersist={true}
            language="en-US"
        >
            {children}
        </BagProvider>
    )
}
