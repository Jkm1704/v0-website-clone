'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { FloatingCoin } from './game-elements'

const navItems = [
  { label: 'Inicio', href: '#' },
  { label: 'Personajes', href: '#personajes' },
  { label: 'Niveles', href: '#niveles' },
  { label: 'Demo', href: '#demo' },
  { label: 'Galería', href: '#gameplay' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-arcade-night/95 backdrop-blur-md border-b border-coin-gold/20' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <FloatingCoin size={32} className="relative" />
            </div>
            <span className="text-coin-gold text-sm md:text-base hidden sm:inline">ATRAPA MONEDAS</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/70 hover:text-coin-gold text-xs transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="#demo" className="arcade-btn px-4 py-2 text-arcade-night text-xs rounded-lg">
              JUGAR
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-coin-gold p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-arcade-night border-t border-coin-gold/20"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-white/70 hover:text-coin-gold text-sm transition-colors border-b border-white/10"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#demo"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="block mt-4 arcade-btn px-4 py-3 text-arcade-night text-sm rounded-lg text-center"
              >
                JUGAR DEMO
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
