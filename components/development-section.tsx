'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Code, Layers, Hammer, Sparkles } from 'lucide-react'

const timeline = [
  {
    phase: 'Idea Inicial',
    description: 'Concepto de juego de recolección de monedas estilo arcade clásico.',
    icon: Lightbulb,
    color: 'bg-coin-gold'
  },
  {
    phase: 'Prototipo',
    description: 'Implementación del movimiento del personaje, sistema de monedas y enemigos básicos.',
    icon: Code,
    color: 'bg-level-green'
  },
  {
    phase: 'Niveles',
    description: 'Diseño de 5 niveles con aumento progresivo de dificultad y nuevos desafíos.',
    icon: Layers,
    color: 'bg-cyan-500'
  },
  {
    phase: 'Obstáculos',
    description: 'Adición de muros, pinchos, zonas seguras y power-ups de congelación.',
    icon: Hammer,
    color: 'bg-coin-orange'
  },
  {
    phase: 'Pulido Visual',
    description: 'Efectos visuales, sonidos, animaciones fluidas y pantallas de victoria/derrota.',
    icon: Sparkles,
    color: 'bg-retro-purple'
  }
]

export function DevelopmentSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-arcade-night relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-coin-gold to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-coin-gold mb-2 sm:mb-4">PROCESO DE DESARROLLO</h2>
          <p className="text-white/60 text-xs sm:text-sm md:text-base">
            De la idea al juego final
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-3 sm:left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-coin-gold via-level-green to-retro-purple md:-translate-x-1/2" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-start gap-3 sm:gap-4 md:gap-12 mb-8 sm:mb-10 md:mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div 
                  className={`relative z-10 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 ${item.color} rounded-full flex items-center justify-center border-2 sm:border-4 border-arcade-night shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2`}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  <item.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-arcade-night" />
                </motion.div>
                
                {/* Content */}
                <div className={`flex-1 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="glow-card rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                    <span className="text-coin-orange text-[10px] sm:text-xs">FASE {index + 1}</span>
                    <h3 className="text-sm sm:text-base md:text-lg text-coin-gold mt-1 sm:mt-2 mb-1 sm:mb-2 md:mb-3">{item.phase}</h3>
                    <p className="text-white/70 text-[10px] sm:text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
