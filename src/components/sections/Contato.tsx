'use client'

import SectionBg from '@/components/SectionBg'
import { InstagramIcon, WhatsAppIcon } from '@/components/icons'
import { useReveal } from '@/components/useReveal'

export default function Contato() {
  const ref = useReveal()

  return (
    <section id="contato" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <SectionBg />

      <div ref={ref} className="reveal relative z-[2] max-w-[1100px] w-full px-8 section-padding">
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-center tracking-[2px] mb-12 leading-[1.1]">
          Entre em<br />
          <span className="text-[#ff0000]">Contato</span>
        </h2>

        <div className="grid grid-cols-2 gap-12 items-start max-[900px]:grid-cols-1">
          {/* Social + info */}
          <div className="flex flex-col gap-6">
            <a
              href="https://api.whatsapp.com/send/?phone=553598632437&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-5 bg-black/25 border border-white/10
                rounded-2xl px-7 py-5 no-underline text-white
                backdrop-blur-sm transition-all duration-300
                hover:border-[#ff0000]/60 hover:bg-[#ff0000]/8 hover:scale-[1.02]
                hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]
              "
            >
              <WhatsAppIcon className="w-10 h-10 text-[#ff0000] flex-shrink-0" />
              <div>
                <div className="text-sm text-white/55 uppercase tracking-wider mb-0.5">WhatsApp</div>
                <div className="text-lg font-bold">(35) 9863-2437</div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/aperformancect/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-5 bg-black/25 border border-white/10
                rounded-2xl px-7 py-5 no-underline text-white
                backdrop-blur-sm transition-all duration-300
                hover:border-[#ff0000]/60 hover:bg-[#ff0000]/8 hover:scale-[1.02]
                hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]
              "
            >
              <InstagramIcon className="w-10 h-10 text-[#ff0000] flex-shrink-0" />
              <div>
                <div className="text-sm text-white/55 uppercase tracking-wider mb-0.5">Instagram</div>
                <div className="text-lg font-bold">@aperformancect</div>
              </div>
            </a>

            <div className="bg-black/25 border border-white/10 rounded-2xl px-7 py-5 backdrop-blur-sm">
              <div className="text-sm text-white/55 uppercase tracking-wider mb-1">Endereço</div>
              <div className="font-semibold leading-relaxed text-white/90">
                R. Matias Borges, 139 - Centro, Coqueiral - MG, 37235-000
              </div>
            </div>

            <div className="bg-black/25 border border-white/10 rounded-2xl px-7 py-5 backdrop-blur-sm">
              <div className="text-sm text-white/55 uppercase tracking-wider mb-2">Horários</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-white/85">
                <span className="text-white/50">Seg – Sex</span><span className="font-semibold">04:45 – 22:00</span>
                <span className="text-white/50">Sábado</span><span className="font-semibold">08:00 – 12:00</span>
                <span className="text-white/50">Domingo</span><span className="font-semibold">Fechado</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,0,0,0.2),0_0_0_2px_rgba(255,0,0,0.2)] h-[440px] max-[900px]:h-[280px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1490.643355474704!2d-45.48056159518177!3d-21.18958744111307!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!4h16!3m3!1m2!1s0x94b46571556817b1%3A0xe726487e411b90c1!2sR.%20Matias%20Borges%2C%20139%20-%20Centro%2C%20Coqueiral%20-%20MG%2C%2037235-000!5e0!3m2!1spt-BR!2sbr!4v1709664478200!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Performance CT"
              className="map-filter"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
