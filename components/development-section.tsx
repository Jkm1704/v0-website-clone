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
    <section className="py-20 md:py-32 bg-arcade-night relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-coin-gold to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl text-coin-gold mb-4">PROCESO DE DESARROLLO</h2>
          <p className="text-white/60 text-sm md:text-base">
            De la idea al juego final
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-coin-gold via-level-green to-retro-purple md:-translate-x-1/2" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-start gap-6 md:gap-12 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div 
                  className={`relative z-10 w-8 h-8 md:w-12 md:h-12 ${item.color} rounded-full flex items-center justify-center border-4 border-arcade-night shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2`}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  <item.icon className="w-4 h-4 md:w-6 md:h-6 text-arcade-night" />
                </motion.div>
                
                {/* Content */}
                <div className={`flex-1 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="glow-card rounded-xl p-6">
                    <span className="text-coin-orange text-xs">FASE {index + 1}</span>
                    <h3 className="text-lg text-coin-gold mt-2 mb-3">{item.phase}</h3>
                    <p className="text-white/70 text-xs leading-relaxed">{item.description}</p>
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
