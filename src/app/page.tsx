"use client"

import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Sobre from '@/components/sections/Sobre'
import Planos from '@/components/sections/Planos'
import Contato from '@/components/sections/Contato'
import Footer from '@/components/Footer'
import { AccessifyWidget } from '@glitchlab/accessify/react';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <AccessifyWidget position="bottom-right" />
        <Hero />
        <Sobre />
        <Planos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
