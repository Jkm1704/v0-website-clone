'use client'

import { motion } from 'framer-motion'
import { Lock, Unlock, Snowflake, AlertTriangle, Skull } from 'lucide-react'

const levels = [
  {
    number: 1,
    name: 'Entrenamiento',
    description: 'Aprende los controles básicos y recoge tus primeras monedas.',
    difficulty: 1,
    icon: Unlock,
    color: 'bg-level-green',
    unlocked: true
  },
  {
    number: 2,
    name: 'Más enemigos',
    description: 'La medusa y el caracol aparecen en el escenario.',
    difficulty: 2,
    icon: Unlock,
    color: 'bg-emerald-500',
    unlocked: true
  },
  {
    number: 3,
    name: 'Power-Up',
    description: 'Descubre el poder de congelar el tiempo.',
    difficulty: 3,
    icon: Snowflake,
    color: 'bg-cyan-500',
    unlocked: true
  },
  {
    number: 4,
    name: 'Pinchos',
    description: 'Nuevos obstáculos mortales aparecen en el mapa.',
    difficulty: 4,
    icon: AlertTriangle,
    color: 'bg-coin-orange',
    unlocked: true
  },
  {
    number: 5,
    name: 'Nivel Final',
    description: 'Máxima dificultad. Solo los mejores sobreviven.',
    difficulty: 5,
    icon: Skull,
    color: 'bg-danger-red',
    unlocked: true
  }
]

export function WorldSection() {
  return (
    <section id="niveles" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-arcade-blue via-retro-purple/30 to-arcade-blue relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-retro-purple/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-coin-gold mb-2 sm:mb-4">MUNDO Y NIVELES</h2>
          <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2">
            El mundo de Coin Catcher es una arena arcade fantastica con fondos oscuros, monedas doradas, obstaculos de piedra, pinchos y efectos luminosos.
          </p>
        </motion.div>
        
        {/* Level progression */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-level-green via-coin-orange to-danger-red md:-translate-x-1/2" />
            
            {levels.map((level, index) => (
              <motion.div
                key={level.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Level node */}
                <div className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${level.color} rounded-full flex items-center justify-center border-2 sm:border-4 border-coin-gold shadow-lg shadow-coin-gold/30 shrink-0`}>
                  <level.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                
                {/* Level card */}
                <div className={`flex-1 glow-card rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 ${index % 2 === 0 ? 'md:mr-auto md:max-w-[45%]' : 'md:ml-auto md:max-w-[45%]'}`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <span className="text-coin-orange text-[10px] sm:text-xs">NIVEL {level.number}</span>
                    <div className="flex gap-0.5 sm:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${i < level.difficulty ? 'bg-danger-red' : 'bg-white/20'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg text-coin-gold mb-1 sm:mb-2">{level.name}</h3>
                  <p className="text-white/70 text-[10px] sm:text-xs leading-relaxed">{level.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
