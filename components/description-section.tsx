'use client'

import { motion } from 'framer-motion'
import { Coins, Ghost, Trophy, Zap, Timer } from 'lucide-react'

const features = [
  {
    icon: Coins,
    title: 'Recolecta monedas',
    description: 'Atrapa todas las monedas brillantes en cada nivel'
  },
  {
    icon: Ghost,
    title: 'Evita enemigos',
    description: 'Esquiva medusas flotantes y caracoles persistentes'
  },
  {
    icon: Trophy,
    title: 'Supera niveles',
    description: 'Avanza a través de 5 niveles de dificultad creciente'
  },
  {
    icon: Zap,
    title: 'Usa power-ups',
    description: 'Congela el tiempo para escapar de situaciones difíciles'
  },
  {
    icon: Timer,
    title: 'Sobrevive al tiempo',
    description: 'Completa cada nivel antes de que se acabe el tiempo'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

export function DescriptionSection() {
  return (
    <section className="py-20 md:py-32 bg-arcade-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl text-coin-gold mb-6">
            Un reto arcade lleno de monedas y enemigos
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explora escenarios abiertos, recolecta monedas brillantes y evita criaturas que se vuelven más peligrosas en cada nivel. Coin Catcher combina velocidad, reflejos y estrategia en una experiencia retro moderna.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="glow-card rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-coin-gold to-coin-orange rounded-lg flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-arcade-night" />
              </div>
              <h3 className="text-sm text-coin-gold mb-2">{feature.title}</h3>
              <p className="text-xs text-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
