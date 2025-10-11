'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false)

  return (
    <section className="relative w-full min-h-[80vh] sm:h-screen overflow-hidden flex items-center justify-center text-white">
      {/* Background Video or Image */}
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src="/videos/Dino Intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div 
          className="absolute inset-0 w-full h-full object-cover bg-gradient-to-br from-ll-purple to-purple-600"
          style={{
            backgroundImage: 'url(/images/cleanlogo.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.1
          }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-4 sm:px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide mb-3 sm:mb-4 font-fredoka"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          LITTLE LEGENDS
        </motion.h1>
        <motion.p 
          className="text-base sm:text-xl md:text-2xl mb-5 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Built for play. Powered by confidence.
        </motion.p>
        <motion.a
          href="#email-signup"
          className="inline-block px-5 py-3 sm:px-6 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 transition-all hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join the Waitlist
        </motion.a>
      </motion.div>
    </section>
  )
} 