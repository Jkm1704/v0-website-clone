'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Image as ImageIcon, X } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    type: 'image',
    title: 'Menú Principal',
    category: 'UI',
    placeholder: true
  },
  {
    id: 2,
    type: 'image',
    title: 'Gameplay Nivel 1',
    category: 'Gameplay',
    placeholder: true
  },
  {
    id: 3,
    type: 'image',
    title: 'Arte del Héroe',
    category: 'Arte',
    placeholder: true
  },
  {
    id: 4,
    type: 'image',
    title: 'Enemigos',
    category: 'Arte',
    placeholder: true
  },
  {
    id: 5,
    type: 'gif',
    title: 'Monedas Girando',
    category: 'Animación',
    placeholder: true
  },
  {
    id: 6,
    type: 'video',
    title: 'Video Gameplay',
    category: 'Video',
    placeholder: true
  }
]

const categories = ['Todos', 'UI', 'Gameplay', 'Arte', 'Animación', 'Video']

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)
  
  const filteredItems = activeCategory === 'Todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)
  
  return (
    <section id="gameplay" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-arcade-blue relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-coin-gold mb-2 sm:mb-4">GALERIA MULTIMEDIA</h2>
          <p className="text-white/60 text-xs sm:text-sm md:text-base">
            Capturas, arte conceptual y videos del juego
          </p>
        </motion.div>
        
        {/* Category filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-[10px] sm:text-xs transition-all ${
                activeCategory === category
                  ? 'bg-coin-gold text-arcade-night'
                  : 'bg-arcade-night border border-coin-gold/50 text-coin-gold hover:border-coin-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Gallery grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedItem(item)}
                className="glow-card rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group"
              >
                <div className="aspect-video relative bg-arcade-night">
                  {/* Placeholder */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {item.type === 'video' ? (
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-coin-gold/50" />
                    ) : (
                      <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-coin-gold/50" />
                    )}
                    <span className="text-white/30 text-[10px] sm:text-xs mt-1 sm:mt-2">{item.type.toUpperCase()}</span>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-coin-gold/0 group-hover:bg-coin-gold/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-coin-gold rounded-full flex items-center justify-center">
                        {item.type === 'video' ? (
                          <Play className="w-4 h-4 sm:w-6 sm:h-6 text-arcade-night ml-1" />
                        ) : (
                          <ImageIcon className="w-4 h-4 sm:w-6 sm:h-6 text-arcade-night" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-2 sm:p-3 md:p-4">
                  <span className="text-coin-orange text-[10px] sm:text-xs">{item.category}</span>
                  <h3 className="text-white text-xs sm:text-sm mt-0.5 sm:mt-1">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 text-white hover:text-coin-gold"
              >
                <X className="w-8 h-8" />
              </button>
              
              <div className="glow-card rounded-xl overflow-hidden">
                <div className="aspect-video bg-arcade-night flex items-center justify-center">
                  {selectedItem.type === 'video' ? (
                    <Play className="w-24 h-24 text-coin-gold/50" />
                  ) : (
                    <ImageIcon className="w-24 h-24 text-coin-gold/50" />
                  )}
                </div>
                <div className="p-6">
                  <span className="text-coin-orange text-xs">{selectedItem.category}</span>
                  <h3 className="text-coin-gold text-lg mt-2">{selectedItem.title}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
