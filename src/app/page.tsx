import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Sobre from '@/components/sections/Sobre'
import Planos from '@/components/sections/Planos'
import Contato from '@/components/sections/Contato'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Planos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
