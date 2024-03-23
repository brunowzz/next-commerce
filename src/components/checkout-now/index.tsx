'use client'

import { useShoppingCart } from 'use-shopping-cart'
import { Button } from '../ui/button'
import { urlFor } from '../../../sanity/lib/image'

interface AddToBagProps {
    currency: string
    data: any
}

export default function CheckoutNow({ data, currency }: AddToBagProps) {
    const { checkoutSingleItem } = useShoppingCart()

    const product = {
        id: data._id,
        name: data.name,
        description: data.description,
        price: data.price,
        currency,
        image: urlFor(data.images[0]).url(),
        price_id: data.price_id,
    }

    function buyNow(priceId: string) {
        checkoutSingleItem(priceId)
    }

    return (
        <Button variant={'secondary'} onClick={() => buyNow(product.price_id)}>
            Checkout Now
        </Button>
    )
}
