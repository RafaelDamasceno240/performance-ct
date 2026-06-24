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

        {/* Script cirúrgico para remover o Accessify se for celular */}
        <Script id="remove-accessify-mobile" strategy="afterInteractive">
          {`
            (function() {
              if (window.innerWidth <= 768) {
                // Função que procura e deleta os elementos do Accessify
                const removeAccessify = () => {
                  const elements = document.querySelectorAll('[id*="accessify"], [class*="accessify"], iframe[src*="accessify"]');
                  elements.forEach(el => el.remove());
                };

                // Executa imediatamente
                removeAccessify();

                // Fica vigiando a página caso o script demore para carregar e o injete depois
                const observer = new MutationObserver(() => {
                  removeAccessify();
                });

                observer.observe(document.body, { childList: true, subtree: true });
              }
            })();
          `}
        </Script>
      </body>
    </html>
  )
}