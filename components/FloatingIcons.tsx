'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FloatingIconProps {
  icon: string
  delay: number
  position: { x: number; y: number }
  size: number
  color: string
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ icon, delay, position, size, color }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size}px`,
        height: `${size}px`
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0.8, 1],
        scale: [0, 1.2, 0.9, 1],
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      whileHover={{ 
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div 
        className="w-full h-full flex items-center justify-center text-4xl"
        style={{ color }}
      >
        {icon}
      </div>
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl"
        style={{ backgroundColor: color }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.5 : 0.8
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default function FloatingIcons() {
  const icons = [
    { icon: "🦖", delay: 0, position: { x: 10, y: 20 }, size: 60, color: "#10B981" }, // Dino
    { icon: "🦸", delay: 0.5, position: { x: 85, y: 15 }, size: 70, color: "#EF4444" }, // Hero
    { icon: "🦈", delay: 1, position: { x: 15, y: 80 }, size: 65, color: "#3B82F6" }, // Shark
    { icon: "🚀", delay: 1.5, position: { x: 80, y: 75 }, size: 55, color: "#8B5CF6" }, // Rocket
    { icon: "⭐", delay: 2, position: { x: 50, y: 10 }, size: 40, color: "#F59E0B" }, // Star
    { icon: "⚡", delay: 2.5, position: { x: 90, y: 50 }, size: 50, color: "#F59E0B" }, // Lightning
    { icon: "🛡️", delay: 3, position: { x: 5, y: 50 }, size: 45, color: "#10B981" }, // Shield
    { icon: "🌊", delay: 3.5, position: { x: 75, y: 85 }, size: 60, color: "#06B6D4" }, // Wave
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map((iconData, index) => (
        <FloatingIcon
          key={index}
          icon={iconData.icon}
          delay={iconData.delay}
          position={iconData.position}
          size={iconData.size}
          color={iconData.color}
        />
      ))}
    </div>
  )
} 