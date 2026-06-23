const BG_DESKTOP = 'https://www.image2url.com/r2/default/images/1780428365200-53f3a26e-21ea-4924-9bec-1801eeadd66e.png'
const BG_MOBILE = 'https://www.image2url.com/r2/default/images/1782195376071-dc109251-d833-46f7-919d-4a0330880dfa.png'

interface SectionBgProps {
  animate?: boolean
}

export default function SectionBg({ animate = false }: SectionBgProps) {
  return (
    <>
      {/* 1. IMAGEM PARA TELEMÓVEL (Mobile)
          - block md:hidden -> Aparece APENAS no telemóvel.
          - bg-cover bg-center bg-scroll -> O fundo adapta-se ao telemóvel e acompanha o teu dedo no scroll sem cortar.
      */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center bg-scroll bg-no-repeat z-0"
        style={{ backgroundImage: `url('${BG_MOBILE}')` }}
      />

      {/* 2. IMAGEM PARA COMPUTADOR (Desktop)
          - hidden md:block -> Aparece APENAS a partir de ecrãs médios (PC/Portátil).
          - bg-cover bg-center bg-fixed -> Mantém o efeito fixo (parallax) que já funcionava bem no PC.
      */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat z-0"
        style={{ backgroundImage: `url('${BG_DESKTOP}')` }}
      />

      {/* 3. CAMADA ESCURA (Overlay)
          - absolute inset-0 -> Garante que o fundo escuro cobre as imagens por igual para dar leitura ao teu texto.
      */}
      <div className="absolute inset-0 bg-black/75 z-[1]" />
    </>
  )
}