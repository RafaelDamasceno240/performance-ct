const BG_IMAGE = 'https://www.image2url.com/r2/default/images/1780428365200-53f3a26e-21ea-4924-9bec-1801eeadd66e.png'

interface SectionBgProps {
  animate?: boolean
}

export default function SectionBg({ animate = false }: SectionBgProps) {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat z-0"
        style={{ backgroundImage: `url('${BG_IMAGE}')` }}
      />
      <div className="absolute inset-0 bg-black/72 z-[1]" />
    </>
  )
}
