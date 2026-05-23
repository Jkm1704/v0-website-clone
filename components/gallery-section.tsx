'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Image as ImageIcon, X } from 'lucide-react'

type GalleryItem = {
  id: number
  type: 'image' | 'video' | 'gif'
  title: string
  category: string
  placeholder?: boolean
  image?: string
  video?: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'video',
    title: 'Menú Principal',
    category: 'UI',
    video: '/menuUi.mp4',
  },
  {
    id: 2,
    type: 'video',
    title: 'Gameplay Nivel 1',
    category: 'Gameplay',
    video: '/nivel1.mp4',
  },
  {
    id: 3,
    type: 'image',
    title: 'Arte del Héroe',
    category: 'Arte',
    placeholder: true,
  },
  {
    id: 4,
    type: 'image',
    title: 'Enemigos',
    category: 'Arte',
    placeholder: true,
  },
  {
    id: 5,
    type: 'gif',
    title: 'Monedas Girando',
    category: 'Animación',
    placeholder: true,
  },
  {
    id: 6,
    type: 'video',
    title: 'Video Gameplay',
    category: 'Video',
    placeholder: true,
  },
]

const categories = ['Todos', 'UI', 'Gameplay', 'Arte', 'Animación', 'Video']

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filteredItems =
    activeCategory === 'Todos'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gameplay" className="py-20 md:py-32 bg-arcade-blue relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl text-coin-gold mb-4">GALERÍA MULTIMEDIA</h2>
          <p className="text-white/60 text-sm md:text-base">
            Capturas, arte conceptual y videos del juego
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-xs transition-all ${
                activeCategory === category
                  ? 'bg-coin-gold text-arcade-night'
                  : 'bg-arcade-night border border-coin-gold/50 text-coin-gold hover:border-coin-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
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
                className="glow-card rounded-xl overflow-hidden cursor-pointer group"
              >
                <div className="aspect-video relative bg-arcade-night overflow-hidden">
                  {item.video ? (
                    <video
                      src={item.video}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                  ) : item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      {item.type === 'video' ? (
                        <Play className="w-12 h-12 text-coin-gold/50" />
                      ) : (
                        <ImageIcon className="w-12 h-12 text-coin-gold/50" />
                      )}
                      <span className="text-white/30 text-xs mt-2">
                        {item.type.toUpperCase()}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-coin-gold/0 group-hover:bg-coin-gold/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-coin-gold rounded-full flex items-center justify-center">
                        {item.type === 'video' ? (
                          <Play className="w-6 h-6 text-arcade-night ml-1" />
                        ) : (
                          <ImageIcon className="w-6 h-6 text-arcade-night" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <span className="text-coin-orange text-xs">{item.category}</span>
                  <h3 className="text-white text-sm mt-1">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

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
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 text-white hover:text-coin-gold"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="glow-card rounded-xl overflow-hidden">
                <div className="aspect-video bg-arcade-night flex items-center justify-center overflow-hidden">
                  {selectedItem.video ? (
                    <video
                      src={selectedItem.video}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                    />
                  ) : selectedItem.image ? (
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  ) : selectedItem.type === 'video' ? (
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