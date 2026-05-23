'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FloatingCoin, PixelHero, PixelJellyfish, PixelSnail, ArcadeStars } from './game-elements'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-arcade-night via-arcade-blue to-arcade-night">
      <ArcadeStars />

      {/* Floating coins decoration */}
      <FloatingCoin delay={0} size={50} className="top-[15%] left-[10%]" />
      <FloatingCoin delay={0.5} size={35} className="top-[25%] right-[15%]" />
      <FloatingCoin delay={1} size={45} className="bottom-[30%] left-[20%]" />
      <FloatingCoin delay={1.5} size={30} className="top-[40%] right-[25%]" />
      <FloatingCoin delay={2} size={40} className="bottom-[20%] right-[10%]" />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo Image */}
            <motion.div
              className="mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/logo.png"
                alt="Coin Catcher Logo"
                width={400}
                height={200}
                className="mx-auto lg:mx-0 drop-shadow-[0_0_30px_rgba(255,215,0,0.5)] animate-float"
                priority
              />
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Atrapa monedas, esquiva criaturas y supera cada nivel
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a href="#demo" className="arcade-btn px-8 py-4 text-arcade-night text-sm md:text-base rounded-lg">
                JUGAR DEMO
              </a>
              <a href="#gameplay" className="px-8 py-4 bg-retro-purple border-2 border-coin-gold text-coin-gold text-sm md:text-base rounded-lg hover:bg-retro-purple/80 transition-colors">
                VER GAMEPLAY
              </a>
            </motion.div>
          </motion.div>

          {/* Key Art */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-radial from-coin-gold/20 via-transparent to-transparent rounded-full" />

              {/* Hero character */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <PixelHero />
              </motion.div>

              {/* Jellyfish */}
              <motion.div
                className="absolute top-[10%] right-[10%]"
                animate={{
                  x: [0, 20, 0],
                  y: [0, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <PixelJellyfish />
              </motion.div>

              {/* Snail */}
              <motion.div
                className="absolute bottom-[15%] left-[5%]"
                animate={{ x: [0, 30, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <PixelSnail />
              </motion.div>

              {/* Floating coins around characters */}
              <FloatingCoin delay={0} size={30} className="top-[20%] left-[15%]" />
              <FloatingCoin delay={0.7} size={25} className="bottom-[25%] right-[20%]" />
              <FloatingCoin delay={1.4} size={28} className="top-[45%] right-[5%]" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-coin-gold rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-coin-gold rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
