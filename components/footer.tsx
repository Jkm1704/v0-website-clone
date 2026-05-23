'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Mail } from 'lucide-react'
import { FloatingCoin } from './game-elements'

export function Footer() {
  return (
    <footer className="py-12 bg-arcade-night border-t border-coin-gold/20 relative overflow-hidden">
      <FloatingCoin delay={0} size={20} className="top-[20%] left-[5%] opacity-30" />
      <FloatingCoin delay={1} size={15} className="bottom-[30%] right-[8%] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-8 h-8">
              <FloatingCoin size={32} className="relative" />
            </div>
            <span className="text-coin-gold text-sm">ATRAPA MONEDAS</span>
          </motion.div>
          
          {/* Links */}
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="#" className="text-white/50 hover:text-coin-gold transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/50 hover:text-coin-gold transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/50 hover:text-coin-gold transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
          
          {/* Copyright */}
          <motion.p 
            className="text-white/40 text-xs text-center md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            © 2026 Coin Catcher. UNAD. Todos los derechos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
