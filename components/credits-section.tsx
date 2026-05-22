'use client'

import { motion } from 'framer-motion'
import { Code, GraduationCap, Heart } from 'lucide-react'
import { FloatingCoin } from './game-elements'

export function CreditsSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-arcade-blue to-arcade-night relative overflow-hidden">
      {/* Decorative coins */}
      <FloatingCoin delay={0} size={30} className="top-[20%] left-[5%]" />
      <FloatingCoin delay={1} size={25} className="top-[40%] right-[8%]" />
      <FloatingCoin delay={2} size={35} className="bottom-[30%] left-[10%]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl text-coin-gold mb-4">CRÉDITOS</h2>
          <p className="text-white/60 text-sm md:text-base">
            El equipo detrás de Coin Catcher
          </p>
        </motion.div>
        
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glow-card rounded-2xl p-8 md:p-12 text-center"
          >
            {/* Developer */}
            <motion.div 
              className="mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-coin-gold to-coin-orange rounded-full flex items-center justify-center">
                <Code className="w-10 h-10 text-arcade-night" />
              </div>
              <h3 className="text-xl text-coin-gold mb-2">Alejandro Gómez</h3>
              <p className="text-coin-orange text-xs mb-3">Desarrollo, Diseño y Programación</p>
              <p className="text-white/60 text-xs leading-relaxed">
                Creador del concepto, mecánicas, arte y código del juego.
              </p>
            </motion.div>
            
            {/* Divider */}
            <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-coin-gold to-transparent mb-10" />
            
            {/* Institution */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-level-green to-emerald-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl text-coin-gold mb-2">UNAD</h3>
              <p className="text-coin-orange text-xs mb-3">Universidad Nacional Abierta y a Distancia</p>
              <p className="text-white/60 text-xs leading-relaxed">
                Institución educativa que apoya el desarrollo de proyectos creativos.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Made with love */}
          <motion.p 
            className="text-center mt-8 text-white/40 text-xs flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Hecho con <Heart className="w-4 h-4 text-danger-red fill-danger-red" /> para los amantes del arcade
          </motion.p>
        </div>
      </div>
    </section>
  )
}
