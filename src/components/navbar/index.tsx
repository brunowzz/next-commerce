'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { ShoppingBag } from 'lucide-react'

const links = [
    { name: 'Home', href: '/' },
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { name: 'Teens', href: '/teens' },
]

export default function NavBar() {
    const pathname = usePathname()

    return (
        <header className="mb-8 border-b">
            <div className="mx-auto flex max-w-2xl items-center justify-between px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <h1 className="text-2xl font-bold md:text-4xl">
                        Next
                        <strong className="text-primary">Commerce</strong>
                    </h1>
                </Link>

                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {pathname === link.href ? (
                                <Link
                                    className="text-lg font-semibold text-primary"
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="flex divide-x">
                    <Button
                        variant={'outline'}
                        className="flex h-12 w-12 flex-col gap-y-1.5 rounded-none border-none sm:h-20 sm:w-20 md:h-24"
                    >
                        <ShoppingBag />

                        <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                            Cart
                        </span>
                    </Button>
                </div>
            </div>
        </header>
    )
}