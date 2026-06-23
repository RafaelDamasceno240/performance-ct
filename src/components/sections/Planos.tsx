'use client'

import SectionBg from '@/components/SectionBg'
import PlanCard from '@/components/PlanCard'
import { useReveal } from '@/components/useReveal'
import type { Plan } from '@/types'

const CHECKOUT_URL = 'https://api.whatsapp.com/send/?phone=553598632437&text=Olá!%20Gostaria%20de%20saber%20sobre%20os%20planos!'

const PLANS: Plan[] = [
  { id: '6x-mensal',    name: 'Musculação 6x Mensal',    monthlyPrice: '100,00', totalPrice: '100,00',  checkoutUrl: CHECKOUT_URL },
  { id: 'promocional',  name: 'Musculação Promocional',  monthlyPrice: '105,00', totalPrice: '105,00',  checkoutUrl: CHECKOUT_URL },
  { id: 'semestral',    name: 'Musculação Semestral',    monthlyPrice: '99,99',  totalPrice: '599,94',  checkoutUrl: CHECKOUT_URL },
  { id: 'trimestral',   name: 'Musculação Trimestral',   monthlyPrice: '100,00', totalPrice: '300,00',  checkoutUrl: CHECKOUT_URL },
]

export default function Planos() {
  const ref = useReveal()

  return (
    <section id="planos" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <SectionBg />

      <div ref={ref} className="reveal relative z-[2] max-w-[1200px] w-full px-8 section-padding">
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-center tracking-[2px] mb-12 leading-[1.1]">
          Planos:
        </h2>

        <div className="grid grid-cols-4 gap-8 mt-4 max-[900px]:grid-cols-1 max-[900px]:max-w-[420px] max-[900px]:mx-auto">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
