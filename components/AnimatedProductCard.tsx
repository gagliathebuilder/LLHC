import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface AnimatedProductCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  index: number;
  onClick?: () => void;
}

const AnimatedProductCard: React.FC<AnimatedProductCardProps> = ({
  title,
  description,
  image,
  alt,
  index,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-center 
                 transform transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]
                 border border-transparent hover:border-ll-purple/30 cursor-pointer
                 relative overflow-hidden group"
    >
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.05 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-ll-purple/10 to-transparent rounded-2xl"
      />

      {/* Image container with enhanced animations */}
      <motion.div 
        className="mb-4 sm:mb-6 h-[80px] sm:h-[100px] flex items-center justify-center relative"
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? 5 : 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
      >
        <div className="relative w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-contain transition-all duration-300"
          />
          
          {/* Glow effect on hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 0.3 : 0,
              scale: isHovered ? 1.2 : 0.8
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-ll-purple/20 rounded-full blur-xl"
          />
        </div>
      </motion.div>

      {/* Title with enhanced typography */}
      <motion.h3 
        className="text-lg sm:text-xl font-bold text-ll-purple mb-2 sm:mb-3 font-fredoka"
        animate={{ 
          color: isHovered ? "#7C3AED" : "#8B5CF6"
        }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>

      {/* Description with staggered animation */}
      <motion.p 
        className="text-sm sm:text-base text-gray-600 leading-relaxed"
        animate={{ 
          color: isHovered ? "#374151" : "#6B7280"
        }}
        transition={{ duration: 0.3 }}
      >
        {description}
      </motion.p>

      {/* Floating action indicator */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-4 right-4 w-8 h-8 bg-ll-purple/90 rounded-full flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom border animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ll-purple to-purple-600 rounded-b-2xl"
      />
    </motion.div>
  );
};

export default AnimatedProductCard; 