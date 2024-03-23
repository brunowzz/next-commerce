import { fullProduct } from '@/interface/fullProduct'
import { client } from '../../../../../sanity/lib/client'
import ImageGallery from './components/grid-gallery'
import { Button } from '@/components/ui/button'
import { Star, Truck } from 'lucide-react'
import AddToBag from '@/components/add-to-bag'
import CheckoutNow from '@/components/checkout-now'

async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
            name,
            "categoryName": category->name,
            images,
            description,
            "slug": slug.current,
            price,
            price_id
        }`

    const data = await client.fetch(query)

    return data
}

export default async function ProductPage({
    params,
}: {
    params: { slug: string }
}) {
    const data: fullProduct = await getData(params.slug)

    return (
        <main>
            <section className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery images={data.images} />

                    <div className="md:py-8">
                        <div className="mb-2 md:mb-3">
                            <p className="mb-0.5 inline-block lowercase text-gray-500">
                                {data.categoryName}
                            </p>

                            <h2 className="text-2xl font-bold text-gray-800 lg:text-xl">
                                {data.name}
                            </h2>
                        </div>

                        <div className="mb-6 flex items-center gap-3 md:mb-10">
                            <Button className="gap-x-2 rounded-full">
                                <span className="text-sm">4.2</span>
                                <Star className="h-5 w-5" />
                            </Button>

                            <p className="text-sm text-gray-500 transition duration-100">
                                56 Ratings
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-end gap-2">
                                <p className="text-xl font-bold text-gray-800 md:text-2xl">
                                    ${data.price}
                                </p>

                                <p className="mb-0.5 text-red-500 line-through">
                                    ${data.price + 30}
                                </p>
                            </div>

                            <p className="text-sm text-gray-500">
                                Incl. Vat plus shipping
                            </p>
                        </div>

                        <div className="mb-5 flex items-center gap-2 text-gray-500">
                            <Truck className="h-6 w-6" />
                            <p className="text-sm">1-7 Days Delivery</p>
                        </div>

                        <div className="5 flex gap-2">
                            <AddToBag currency="USD" data={data} />
                            <CheckoutNow currency="USD" data={data} />
                        </div>

                        <p className="my-12 text-base tracking-wide text-gray-500">
                            {data.description}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
