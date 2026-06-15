import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Performance Centro de Treinamento',
  description: 'A academia moderna para quem busca resultados reais. Equipamentos de ponta, ambiente motivador e treinamento profissional.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
