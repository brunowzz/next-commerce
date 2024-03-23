'use client'

import { useShoppingCart } from 'use-shopping-cart'
import { Button } from '../ui/button'
import { urlFor } from '../../../sanity/lib/image'
import { Sheet, SheetTrigger } from '../ui/sheet'
import ShoppingCartModal from '../shopping-cart-modal'

interface AddToBagProps {
    currency: string
    data: any
}

export default function AddToBag({ data, currency }: AddToBagProps) {
    const { addItem } = useShoppingCart()

    const product = {
        name: data.name,
        description: data.description,
        price: data.price,
        currency,
        image: urlFor(data.images[0]).url(),
        price_id: data.price_id,
    }

    return (
        <Sheet>
            <SheetTrigger>
                <Button onClick={() => addItem(product)}>Add To Bag</Button>
            </SheetTrigger>

            <ShoppingCartModal />
        </Sheet>
    )
}
