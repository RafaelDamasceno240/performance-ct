const BG_DESKTOP = 'https://www.image2url.com/r2/default/images/1780428365200-53f3a26e-21ea-4924-9bec-1801eeadd66e.png'
const BG_MOBILE = 'https://www.image2url.com/r2/default/images/1782195376071-dc109251-d833-46f7-919d-4a0330880dfa.png'

interface SectionBgProps {
  animate?: boolean
}

export default function SectionBg({ animate = false }: SectionBgProps) {
  return (
    <>
      {/* 1. IMAGEM PARA CELULAR (Mobile)
          - Ajustado para 'absolute' em vez de fixed para não quebrar o empilhamento (z-index) do Next.js no mobile.
          - Para ficar estática e simular o efeito perfeitamente no celular, o segredo é usar a propriedade inline backgroundAttachment.
      */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url('${BG_MOBILE}')`,
          backgroundAttachment: 'fixed' // Força a imagem a ficar travada no fundo do celular
        }}
      />

      {/* 2. IMAGEM PARA COMPUTADOR (Desktop) */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat z-0"
        style={{ backgroundImage: `url('${BG_DESKTOP}')` }}
      />

      {/* 3. CAMADA ESCURA (Overlay)
          - Reduzida a opacidade de bg-black/75 para bg-black/50 para que a foto da academia apareça nitidamente atrás do texto.
      */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />
    </>
  )
}