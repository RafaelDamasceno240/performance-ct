const BG_IMAGE = 'https://www.image2url.com/r2/default/images/1780428365200-53f3a26e-21ea-4924-9bec-1801eeadd66e.png'

interface SectionBgProps {
  animate?: boolean
}

export default function SectionBg({ animate = false }: SectionBgProps) {
  return (
    <>
      {/* 
        Mudança chave: Usamos `fixed` no mobile para forçar a imagem a cobrir o viewport,
        e no desktop mantemos o comportamento absolute controlado.
      */}
      <div
        className="fixed md:absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url('${BG_IMAGE}')`,
          /* Garante suporte nativo a navegadores mobile antigos que ignoram o bg-cover do Tailwind */
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      {/* O overlay escuro acompanha o mesmo comportamento */}
      <div className="fixed md:absolute inset-0 bg-black/72 z-[1]" />
    </>
  )
}