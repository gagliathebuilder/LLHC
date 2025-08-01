import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface HeroVideoSectionProps {
  videoUrl: string;
  title: string;
  subtitle: string;
  description: string;
  posterImage?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({
  videoUrl,
  title,
  subtitle,
  description,
  posterImage,
  ctaText = "Watch the Adventure",
  onCtaClick
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Auto-hide overlay after 3 seconds
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    setShowOverlay(false);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <ReactPlayer
          url={videoUrl}
          playing={isPlaying}
          muted={isMuted}
          loop
          width="100%"
          height="100%"
          style={{ objectFit: 'cover' }}
          light={posterImage}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-fredoka mb-4"
          >
            {title}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold font-fredoka mb-6 text-white/90"
          >
            {subtitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlayPause}
              className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full 
                       text-white font-semibold flex items-center gap-2 hover:bg-white/30 transition-colors"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-5 h-5" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  Play
                </>
              )}
            </motion.button>

            {onCtaClick && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCtaClick}
                className="bg-ll-purple hover:bg-purple-700 px-6 py-3 rounded-full 
                         text-white font-semibold flex items-center gap-2 transition-colors"
              >
                {ctaText}
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>

      {/* Control Bar */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 
                     bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleMuteToggle}
              className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleFullscreen}
              className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <Maximize2 className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroVideoSection; 