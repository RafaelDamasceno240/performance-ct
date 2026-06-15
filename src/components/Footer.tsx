export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 bg-black border-t border-white/8 py-8 text-center">
      <p className="text-white/35 text-sm tracking-wide">
        © {year} Performance Centro de Treinamento. Todos os direitos reservados.
      </p>
    </footer>
  )
}
