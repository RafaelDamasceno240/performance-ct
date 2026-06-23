

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Performance Centro de Treinamento',
  description: 'A academia moderna para quem busca resultados reais. Equipamentos de ponta, ambiente motivador e treinamento profissional.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased bg-zinc-950 text-zinc-50">
        {/* 
          Skip Link: Fica escondido por padrão (sr-only). 
          Ao pressionar TAB logo após carregar a página, ele aparece no topo (focus:not-sr-only).
        */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-600 text-white font-bold px-4 py-3 z-50 rounded-md outline-none ring-2 ring-orange-500 ring-offset-2 ring-offset-zinc-950 transition-all"
        >
          Pular para o conteúdo principal
        </a>

        {/* 
          A tag <main> com o ID correspondente ao link acima.
          O tabIndex={-1} garante que o leitor de tela mova o foco programático 
          para o início do conteúdo quando o link for clicado.
        */}
        
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>
      </body>
    </html>
  )
}