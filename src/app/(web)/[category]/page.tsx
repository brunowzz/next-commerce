import { simplifiedProduct } from '@/interface/simplifiedProduct'
import { client } from '../../../../sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'

async function getData(category: string) {
    const query = `*[_type == "product" && category->name == "${category}"] {
        _id,
            "imageUrl": images[0].asset->url,
            price,
            name,
            "slug": slug.current,
            "categoryName": category->name,
            price_id
        }`

    const data = await client.fetch(query)

    return data
}

async function getAllProduct() {
    const query = `*[_type == "product"] {
        _id,
            "imageUrl": images[0].asset->url,
            price,
            name,
            "slug": slug.current,
            "categoryName": category->name
            price_id
        }`

    const data = await client.fetch(query)

    return data
}

export default async function Category({
    params,
}: {
    params: { category: string }
}) {
    let data: simplifiedProduct[] | null = null

    if (params.category === 'all') {
        data = await getAllProduct()
    } else {
        const category: simplifiedProduct[] = await getData(params.category)
        if (category.length > 0) {
            data = category
        }
    }

    if (!data) {
        return (
            <h2 className="text-center text-xl font-bold">
                We do not have products for this category
            </h2>
        )
    }

    return (
        <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <section className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Our Products for {params.category}
                </h2>
            </section>

            <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {data!.map((product: any) => (
                    <div key={product._id}>
                        <Link href={`/product/${product.slug}`}>
                            <figure className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 hover:opacity-75 hover:shadow lg:h-80">
                                <Image
                                    src={product.imageUrl}
                                    alt="Product Image"
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    width={300}
                                    height={300}
                                />
                            </figure>

                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <h3 className="text-sm text-gray-700">
                                        {product.name}
                                    </h3>

                                    <p className="text-sm font-medium text-gray-950">
                                        ${product.price}
                                    </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                    {product.categoryName}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </main>
    )
}
