// 1. Importe o componente de imagem do Next.js
import Image from 'next/image';

const BG_IMAGE = 'https://www.image2url.com/r2/default/images/1780428365200-53f3a26e-21ea-4924-9bec-1801eeadd66e.png'

interface SectionBgProps {
  animate?: boolean
}

export default function SectionBg({ animate = false }: SectionBgProps) {
  return (
    <>
      {/* Container Principal:
        Usamos inset-0 para cobrir tudo, overflow-hidden para não vazar a imagem,
        e z-0 para garantir que fique no fundo.
      */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Image
          src={BG_IMAGE}
          alt="Fundo da seção"
          fill // 2. Faz a imagem preencher o container pai (a div absolute inset-0)
          
          // 3. O SEGREDO DO AJUSTE:
          // 'object-cover': Garante que a imagem cobre tudo sem distorcer (igual bg-cover).
          // 'object-center': Mantém o foco no meio.
          className={`
            object-cover 
            object-center 
            transition-transform 
            duration-700 
            ${animate ? 'scale-110' : 'scale-100'}
          `}
          
          // 4. PERFORMANCE:
          priority={true} // Se essa for a primeira imagem que aparece no site, use priority
          quality={85} // Reduz um pouco a qualidade para otimizar tamanho, sem perder visual
          sizes="100vw" // Diz ao Next.js que a imagem vai ocupar toda a largura da tela
        />
      </div>

      {/* Overlay escuro acima da imagem */}
      <div className="absolute inset-0 bg-black/72 z-[1]" />
    </>
  )
}