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
              href="https://wa.me/5535998443866"
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
                <div className="text-lg font-bold">(35) 99844-3866</div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/performancect_coqueiral"
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
                <div className="text-lg font-bold">@performancect_coqueiral</div>
              </div>
            </a>

            <div className="bg-black/25 border border-white/10 rounded-2xl px-7 py-5 backdrop-blur-sm">
              <div className="text-sm text-white/55 uppercase tracking-wider mb-1">Endereço</div>
              <div className="font-semibold leading-relaxed text-white/90">
                R. Bela Vista, 174 – Coqueiral, MG, 37.530-000
              </div>
            </div>

            <div className="bg-black/25 border border-white/10 rounded-2xl px-7 py-5 backdrop-blur-sm">
              <div className="text-sm text-white/55 uppercase tracking-wider mb-2">Horários</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-white/85">
                <span className="text-white/50">Seg – Sex</span><span className="font-semibold">06h – 22h</span>
                <span className="text-white/50">Sábado</span><span className="font-semibold">08h – 14h</span>
                <span className="text-white/50">Domingo</span><span className="font-semibold">Fechado</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,0,0,0.2),0_0_0_2px_rgba(255,0,0,0.2)] h-[440px] max-[900px]:h-[280px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.4!2d-45.4333!3d-21.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.+Bela+Vista%2C+174+-+Coqueiral%2C+MG!5e0!3m2!1spt-BR!2sbr!4v1000000000000"
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
