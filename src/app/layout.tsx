import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Performance Centro de Treinamento',
  description: 'A academia moderna para quem busca resultados reais. Equipamentos de ponta, ambiente motivador e treinamento profissional.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased bg-zinc-950 text-zinc-50">
        
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>

        {/* Script cirúrgico: Remove a tag original do Accessify antes dela renderizar */}
        <Script id="block-accessify-mobile" strategy="beforeInteractive">
          {`
            (function() {
              if (window.innerWidth <= 768) {
                // Remove qualquer tag script do Accessify que tente entrar na página
                const observer = new MutationObserver((mutations) => {
                  mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                      if (node.tagName === 'SCRIPT' && (node.src.includes('accessify') || node.id.includes('accessify'))) {
                        node.remove();
                      }
                      if (node.tagName === 'IFRAME' && node.src.includes('accessify')) {
                        node.remove();
                      }
                    });
                  });
                });

                observer.observe(document.documentElement, { childList: true, subtree: true });
              }
            })();
          `}
        </Script>
      </body>
    </html>
  )
}