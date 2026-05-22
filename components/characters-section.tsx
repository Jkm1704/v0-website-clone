'use client'

import { motion } from 'framer-motion'
import { PixelHero, PixelJellyfish, PixelSnail } from './game-elements'

const characters = [
  {
    name: 'Héroe',
    role: 'El Aventurero',
    description: 'El aventurero encargado de recolectar todas las monedas antes de que se acabe el tiempo.',
    color: 'from-level-green to-emerald-600',
    borderColor: 'border-level-green',
    Component: PixelHero
  },
  {
    name: 'Medusa',
    role: 'Enemigo Flotante',
    description: 'Una criatura flotante que se mueve por el mapa y dificulta el camino del jugador.',
    color: 'from-purple-500 to-purple-700',
    borderColor: 'border-purple-500',
    Component: PixelJellyfish
  },
  {
    name: 'Caracol',
    role: 'Perseguidor',
    description: 'Un enemigo lento pero persistente que persigue al jugador en los niveles más difíciles.',
    color: 'from-orange-500 to-orange-700',
    borderColor: 'border-orange-500',
    Component: PixelSnail
  }
]

export function CharactersSection() {
  return (
    <section className="py-20 md:py-32 bg-arcade-night relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-coin-gold to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl text-coin-gold mb-4">PERSONAJES</h2>
          <p className="text-white/60 text-sm md:text-base">Conoce a los protagonistas de la aventura</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {characters.map((character, index) => (
            <motion.div
              key={character.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`glow-card rounded-2xl p-8 text-center ${character.borderColor}`}
            >
              <motion.div 
                className={`w-32 h-32 mx-auto mb-6 bg-gradient-to-br ${character.color} rounded-2xl flex items-center justify-center`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <character.Component />
              </motion.div>
              
              <h3 className="text-xl text-coin-gold mb-2">{character.name}</h3>
              <p className="text-coin-orange text-xs mb-4">{character.role}</p>
              <p className="text-white/70 text-xs leading-relaxed">{character.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
