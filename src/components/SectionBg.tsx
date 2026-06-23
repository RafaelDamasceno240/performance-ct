const BG_DESKTOP = 'https://www.image2url.com/r2/default/images/1780428365200-53f3a26e-21ea-4924-9bec-1801eeadd66e.png'
const BG_MOBILE = 'https://www.image2url.com/r2/default/images/1782195376071-dc109251-d833-46f7-919d-4a0330880dfa.png'

interface SectionBgProps {
  animate?: boolean
}

export default function SectionBg({ animate = false }: SectionBgProps) {
  return (
    <>
      {/* 1. IMAGEM PARA CELULAR (Mobile - Especial para iPhone)
          - Usamos 'fixed' na classe para travar a div inteira na tela do celular.
          - Tiramos o backgroundAttachment inline que buga o iOS.
          - 'pointer-events-none': Garante que o usuário consiga clicar nos botões e scrollar a página normalmente através do fundo.
      */}
      <div
        className="block md:hidden fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: `url('${BG_MOBILE}')` }}
      />

      {/* 2. IMAGEM PARA COMPUTADOR (Desktop) */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat z-0"
        style={{ backgroundImage: `url('${BG_DESKTOP}')` }}
      />

      {/* 3. CAMADA ESCURA (Overlay)
          - No mobile ela também fica 'fixed' acompanhando a imagem estática perfeita.
      */}
      <div className="fixed md:absolute inset-0 bg-black/50 pointer-events-none z-[1]" />
    </>
  )
}