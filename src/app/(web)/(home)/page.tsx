import Hero from './components/hero'
import Newest from './components/newest'

export default function Home() {
    return (
        <main className="pb-6 sm:pb-8 lg:pb-12">
            <Hero />
            <Newest />
        </main>
    )
}
