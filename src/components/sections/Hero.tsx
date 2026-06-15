'use client'

import SectionBg from '@/components/SectionBg'
import { useReveal } from '@/components/useReveal'

export default function Hero() {
  const ref = useReveal()

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector('#contato')
    if (!target) return
    const navH = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '80'
    )
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[var(--nav-h)]"
    >
      <SectionBg animate />

      <div ref={ref} className="reveal relative z-[2] text-center px-6 max-w-[900px]">
        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none tracking-[3px] mb-6 max-sm:tracking-tight">
          <span className="text-white">TRANSFORME SEU</span>
          <br />
          <span className="text-[#ff0000] [text-shadow:0_0_20px_rgba(255,0,0,0.6)]">
            DESEMPENHO
          </span>
        </h1>

        <p className="text-[clamp(1rem,2vw,1.2rem)] font-medium max-w-[680px] mx-auto mb-10 leading-[1.7] text-white/88 max-sm:text-[0.95rem]">
          A academia moderna para quem busca resultados reais. Equipamentos de ponta,
          ambiente motivador e treinamento profissional.
        </p>

        <a
            href="https://api.whatsapp.com/send/?phone=553598632437&text=Olá!%20Gostaria%20de%20saber%20agendar%20uma%20aula%20gratuita!"
            target="_blank"
            rel="noopener noreferrer"
          className="
            inline-block bg-[#ff0000] text-white font-body text-[1.3rem] font-black
            tracking-[2px] no-underline px-14 py-[1.1rem] rounded-full border-none
            cursor-pointer transition-all duration-300
            shadow-[0_4px_30px_rgba(255,0,0,0.45)]
            hover:bg-[#e60000] hover:scale-[1.06] hover:-translate-y-0.5
            hover:shadow-[0_8px_50px_rgba(255,0,0,0.65)]
            max-sm:text-[1.1rem] max-sm:px-10 max-sm:py-4
          "
        >
          CLIQUE AQUI!
        </a>

        <p className="mt-4 text-[1.1rem] font-semibold text-white/80 tracking-[0.5px]">
          Agendar aula grátis!
        </p>
      </div>
    </section>
  )
}
