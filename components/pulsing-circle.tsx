"use client"

import { motion } from "framer-motion"

export default function PulsingCircle() {
  return (
    <div className="absolute bottom-8 right-8 z-30">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Animated gradient border circle */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #BEECFF, #E77EDC, #FF4C3E, #00FF88, #FFD700, #FF6B35, #8A2BE2, #BEECFF)",
            padding: "2px",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="w-full h-full rounded-full bg-black" />
        </motion.div>

        {/* Pulsing glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-violet-500/30 blur-md"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Rotating Text Around the Circle */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ transform: "scale(1.6)" }}
        >
          <defs>
            <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text className="text-sm fill-white/80 instrument">
            <textPath href="#circle" startOffset="0%">
              life is amazing • life is amazing • enjoy • enjoy •
            </textPath>
          </text>
        </motion.svg>
      </div>
    </div>
  )
}
