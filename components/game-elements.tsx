'use client'

import { motion } from 'framer-motion'

export function FloatingCoin({ delay = 0, size = 40, className = '' }: { delay?: number, size?: number, className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ y: 0 }}
      animate={{ 
        y: [-10, 10, -10],
        rotateY: [0, 360]
      }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay
        },
        rotateY: {
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay
        }
      }}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" className="drop-shadow-[0_0_10px_#FFD700]">
        <circle cx="20" cy="20" r="18" fill="url(#coinGradient)" stroke="#B8860B" strokeWidth="2"/>
        <text x="20" y="26" textAnchor="middle" fill="#B8860B" fontSize="16" fontWeight="bold">$</text>
        <defs>
          <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700"/>
            <stop offset="50%" stopColor="#FFAA00"/>
            <stop offset="100%" stopColor="#FFD700"/>
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}

export function PixelHero() {
  return (
    <svg width="120" height="120" viewBox="0 0 32 32" className="drop-shadow-[0_0_20px_#4ade80]">
      {/* Body */}
      <rect x="12" y="16" width="8" height="10" fill="#4ade80"/>
      {/* Head */}
      <rect x="10" y="8" width="12" height="8" fill="#fbbf24"/>
      {/* Eyes */}
      <rect x="12" y="10" width="2" height="2" fill="#1B263B"/>
      <rect x="18" y="10" width="2" height="2" fill="#1B263B"/>
      {/* Smile */}
      <rect x="14" y="14" width="4" height="1" fill="#1B263B"/>
      {/* Arms */}
      <rect x="8" y="18" width="4" height="2" fill="#4ade80"/>
      <rect x="20" y="18" width="4" height="2" fill="#4ade80"/>
      {/* Legs */}
      <rect x="12" y="26" width="3" height="4" fill="#60a5fa"/>
      <rect x="17" y="26" width="3" height="4" fill="#60a5fa"/>
    </svg>
  )
}

export function PixelJellyfish() {
  return (
    <svg width="80" height="80" viewBox="0 0 32 32" className="drop-shadow-[0_0_15px_#c084fc]">
      {/* Dome */}
      <rect x="8" y="4" width="16" height="8" fill="#c084fc"/>
      <rect x="6" y="8" width="20" height="4" fill="#c084fc"/>
      {/* Eyes */}
      <rect x="10" y="8" width="2" height="2" fill="#1B263B"/>
      <rect x="20" y="8" width="2" height="2" fill="#1B263B"/>
      {/* Tentacles */}
      <rect x="8" y="12" width="2" height="8" fill="#a855f7"/>
      <rect x="12" y="12" width="2" height="10" fill="#a855f7"/>
      <rect x="18" y="12" width="2" height="10" fill="#a855f7"/>
      <rect x="22" y="12" width="2" height="8" fill="#a855f7"/>
      {/* Glow effect */}
      <rect x="10" y="6" width="4" height="1" fill="#e9d5ff" opacity="0.6"/>
    </svg>
  )
}

export function PixelSnail() {
  return (
    <svg width="80" height="80" viewBox="0 0 32 32" className="drop-shadow-[0_0_15px_#f97316]">
      {/* Shell */}
      <rect x="16" y="8" width="10" height="10" fill="#f97316" rx="2"/>
      <rect x="18" y="10" width="6" height="6" fill="#ea580c"/>
      <rect x="20" y="12" width="2" height="2" fill="#c2410c"/>
      {/* Body */}
      <rect x="6" y="18" width="18" height="6" fill="#fbbf24"/>
      <rect x="4" y="20" width="4" height="4" fill="#fbbf24"/>
      {/* Eye stalks */}
      <rect x="6" y="14" width="2" height="4" fill="#fbbf24"/>
      <rect x="10" y="14" width="2" height="4" fill="#fbbf24"/>
      {/* Eyes */}
      <rect x="6" y="12" width="2" height="2" fill="#1B263B"/>
      <rect x="10" y="12" width="2" height="2" fill="#1B263B"/>
    </svg>
  )
}

export function PixelSpike() {
  return (
    <svg width="40" height="40" viewBox="0 0 32 32">
      <polygon points="16,4 24,28 8,28" fill="#FF4444"/>
      <polygon points="16,8 22,26 10,26" fill="#cc3333"/>
    </svg>
  )
}

export function ArcadeStars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
