'use client'

import { motion } from 'framer-motion'
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react'

export function DemoSection() {
  return (
    <section id="demo" className="py-20 md:py-32 bg-arcade-night relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-coin-gold to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl text-coin-gold mb-4">PRUEBA LA DEMO</h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
            Juega directamente desde el navegador. Usa las flechas o WASD para moverte, recoge las monedas y evita a los enemigos.
          </p>
        </motion.div>
        
        {/* Controls guide */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-arcade-blue border-2 border-coin-gold rounded flex items-center justify-center">
                <ArrowUp className="w-5 h-5 text-coin-gold" />
              </div>
              <div className="flex gap-1">
                <div className="w-10 h-10 bg-arcade-blue border-2 border-coin-gold rounded flex items-center justify-center">
                  <ArrowLeft className="w-5 h-5 text-coin-gold" />
                </div>
                <div className="w-10 h-10 bg-arcade-blue border-2 border-coin-gold rounded flex items-center justify-center">
                  <ArrowDown className="w-5 h-5 text-coin-gold" />
                </div>
                <div className="w-10 h-10 bg-arcade-blue border-2 border-coin-gold rounded flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-coin-gold" />
                </div>
              </div>
            </div>
            <span className="text-white/60 text-xs">o</span>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-arcade-blue border-2 border-coin-gold rounded flex items-center justify-center text-coin-gold text-sm">
                W
              </div>
              <div className="flex gap-1">
                <div className="w-10 h-10 bg-arcade-blue border-2 border-coin-gold rounded flex items-center justify-center text-coin-gold text-sm">
                  A
                </div>
                <div className="w-10 h-10 bg-arcade-blue border-2 border-coin-gold rounded flex items-center justify-center text-coin-gold text-sm">
                  S
                </div>
                <div className="w-10 h-10 bg-arcade-blue border-2 border-coin-gold rounded flex items-center justify-center text-coin-gold text-sm">
                  D
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Demo container with embedded game */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glow-card rounded-2xl p-2 md:p-4">
            {/* Game iframe container */}
            <div className="relative aspect-[4/3] bg-arcade-night rounded-xl overflow-hidden border-4 border-retro-purple">
              <iframe 
                src="/game.html" 
                className="absolute inset-0 w-full h-full border-0"
                title="Coin Catcher Demo"
                allow="autoplay"
              />
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-white/50 text-xs">
              Haz clic en el juego para activar los controles. Usa las flechas o WASD para moverte.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
