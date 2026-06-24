'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import type { NavLink } from '@/types'

const NAV_LINKS: NavLink[] = [
  { href: '#home',    label: 'Home' },
  { href: '#sobre',   label: 'Sobre' },
  { href: '#planos',  label: 'Planos' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeLink,  setActiveLink]  = useState('home')

  // Navbar scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section highlight
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const smoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (!target) return
    
    const navH = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '80'
    )
    const top = target.getBoundingClientRect().top + window.scrollY - navH
    
    // Executa a rolagem suave
    window.scrollTo({ top, behavior: 'smooth' })
    setMenuOpen(false)

    // --- ANIMAÇÃO DE TROCA DE PÁGINA ---
    // Adiciona uma animação de pulso/fade na seção destino ao clicar
    target.classList.remove('section-fade-in')
    // Força o reflow do elemento para reiniciar a animação
    void target.offsetWidth 
    target.classList.add('section-fade-in')
  }, [])

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-[1000] h-[var(--nav-h)] transition-all duration-300
        backdrop-blur-md border-b border-red-500/15
        ${scrolled
          ? 'bg-black/95 shadow-[0_2px_30px_rgba(255,0,0,0.2)]'
          : 'bg-black/70'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 h-full flex items-center justify-between">

        {/* Brand */}
        <a href="#home" onClick={(e) => smoothScroll(e, '#home')} className="flex items-center gap-3 no-underline">
          <div className="w-[62px] h-[62px] flex-shrink-0 max-sm:w-[46px] max-sm:h-[46px]">
            <Image
              src="https://www.image2url.com/r2/default/images/1780428183963-3f1b7c05-9b3e-4635-8761-89e7a566afb6.png"
              alt="Performance CT Logo"
              width={62}
              height={62}
              className="rounded-full object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[2rem] tracking-[2px] text-white max-sm:text-2xl">
              PERFORMANCE
            </span>
            <span className="text-[0.6rem] tracking-[3px] text-[#ff0000] font-semibold uppercase max-sm:text-[0.5rem]">
              CENTRO DE TREINAMENTO
            </span>
          </div>
        </a>

        {/* Hamburger */}
        <button
          className="sm:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {(['bar-1', 'bar-2', 'bar-3'] as const).map((bar) => (
            <span
              key={bar}
              className={`block w-7 h-[2.5px] bg-white rounded-sm transition-all duration-300 ${bar}
                ${menuOpen ? `hamburger-open` : ''}`}
            />
          ))}
        </button>

        {/* Nav Links */}
        <ul
          className={`
            max-sm:fixed max-sm:top-[var(--nav-h)] max-sm:left-0 max-sm:right-0
            max-sm:bg-black max-sm:z-50 max-sm:flex-col max-sm:gap-0
            max-sm:overflow-hidden max-sm:transition-[max-height] max-sm:duration-400
            max-sm:border-none
            ${menuOpen ? 'max-sm:max-h-[300px]' : 'max-sm:max-h-0'}
            sm:flex sm:gap-10 sm:items-center list-none
          `}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href} className="max-sm:border-none">
              <a
                href={href}
                onClick={(e) => smoothScroll(e, href)}
                className={`
                  relative text-white no-underline text-base font-bold tracking-wide uppercase
                  transition-colors duration-300 hover:text-[#ff0000]
                  sm:after:content-[''] sm:after:absolute sm:after:left-0 sm:after:bottom-[-4px]
                  sm:after:h-[2px] sm:after:bg-[#ff0000] sm:after:transition-[width] sm:after:duration-300
                  max-sm:block max-sm:px-8 max-sm:py-4 max-sm:text-lg
                  ${activeLink === href.slice(1)
                    ? 'text-[#ff0000] sm:after:w-full'
                    : 'sm:after:w-0'
                  }
                `}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}