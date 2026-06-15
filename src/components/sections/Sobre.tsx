'use client'

import Image from 'next/image'
import SectionBg from '@/components/SectionBg'
import { useReveal } from '@/components/useReveal'

export default function Sobre() {
  const ref = useReveal()

  return (
    <section id="sobre" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <SectionBg />

      <div ref={ref} className="reveal relative z-[2] max-w-[1200px] w-full px-8 section-padding">
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-center tracking-[2px] mb-12 leading-[1.1]">
          Sobre a<br />
          <span className="text-[#ff0000]">Academia</span>
        </h2>

        <div className="grid grid-cols-2 gap-12 items-center max-[900px]:grid-cols-1">
          <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,0,0,0.35),0_0_0_2px_rgba(255,0,0,0.25)]">
            <Image
              src="https://www.image2url.com/r2/default/images/1780428705040-0deb2332-ddec-4e3c-8d3a-b7458fedd556.png"
              alt="Interior da academia Performance CT"
              width={600}
              height={380}
              className="w-full h-[380px] object-cover block transition-transform duration-600 hover:scale-[1.03] max-sm:h-[220px]"
            />
          </div>

          <div>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.85] font-medium text-center text-white/92 max-sm:text-[0.95rem]">
              Academia localizada em Coqueiral-MG, com foco em musculação completa
              e atendimento personalizado.
              <br /><br />
              O grande diferencial da academia é o atendimento dos profissionais,
              reconhecidos na cidade como referência em qualidade, atenção e suporte
              aos alunos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
