import type { Plan } from '@/types'

export default function PlanCard({ name, monthlyPrice, totalPrice, checkoutUrl }: Plan) {
  return (
    <div
      className="
        bg-black/25 border-2 border-[#ff0000] rounded-[30px] px-6 pt-10 pb-8
        flex flex-col items-center gap-8 backdrop-blur-md
        transition-all duration-300
        hover:scale-[1.04] hover:-translate-y-1.5
        hover:shadow-[0_0_40px_rgba(255,0,0,0.35),0_0_80px_rgba(255,0,0,0.15)]
      "
    >
      <div className="text-center">
        <div className="text-xl font-extrabold tracking-wide text-white capitalize mb-3 max-sm:text-base">
          {name}
        </div>
        <div className="text-[0.75rem] font-semibold tracking-wide text-white/60 uppercase mb-0.5">
          parcelas de
        </div>
        <div className="flex items-start justify-center gap-0.5 mb-2">
          <span className="font-body text-[1.4rem] font-black text-[#ff0000] mt-2.5 max-sm:text-[1.1rem]">
            R$
          </span>
          <span className="font-display text-[clamp(3.5rem,6vw,5.5rem)] tracking-[2px] text-white leading-none max-sm:text-[4rem]">
            {monthlyPrice}
          </span>
        </div>
        <div className="text-[0.75rem] font-semibold text-white/50 uppercase tracking-[0.5px]">
          Valor total R${totalPrice}
        </div>
      </div>

      <a
        href={checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block bg-[#ff0000] text-white no-underline font-bold
          text-[0.95rem] tracking-[0.5px] px-6 py-3.5 rounded-full text-center
          transition-all duration-300 shadow-[0_4px_20px_rgba(255,0,0,0.4)]
          hover:bg-[#e60000] hover:scale-[1.06] hover:shadow-[0_6px_30px_rgba(255,0,0,0.6)]
        "
      >
        clique aqui para assinar
      </a>
    </div>
  )
}
