'use client'

import Image from 'next/image'
import { urlFor } from '../../../../../../../sanity/lib/image'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'

export default function ImageGallery({ images }: any) {
    const [bigImage, setBigImage] = useState(images[0])

    function handleSmallImage(image: any) {
        setBigImage(image)
    }

    return (
        <section className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {images.map((image: any, idx: any) => (
                    <figure
                        key={idx}
                        className="overflow-hidden rounded-lg bg-gray-100"
                    >
                        <Image
                            src={urlFor(image).url()}
                            width={200}
                            height={200}
                            alt="photo"
                            className="h-full w-full cursor-pointer object-cover object-center"
                            onClick={() => handleSmallImage(image)}
                        />
                    </figure>
                ))}
            </div>

            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image
                    src={urlFor(bigImage).url()}
                    alt="Big Image"
                    width={500}
                    height={400}
                    className="h-full w-full cursor-pointer object-cover object-center"
                />

                <Badge className="absolute right-0 top-0 rounded-sm">
                    Sale
                </Badge>
            </div>
        </section>
    )
}
