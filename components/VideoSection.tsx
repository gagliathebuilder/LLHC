import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoSectionProps {
  videoUrl: string;
  title: string;
  description: string;
  posterImage?: string;
  className?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoUrl,
  title,
  description,
  posterImage,
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handlePlayPause = () => {
    const video = document.getElementById(`video-${title}`) as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  };

  const handleMuteToggle = () => {
    const video = document.getElementById(`video-${title}`) as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black">
        {/* Video Player */}
        <div className="relative aspect-video">
          {!videoError ? (
            <video
              id={`video-${title}`}
              src={videoUrl}
              poster={posterImage}
              muted={isMuted}
              loop
              playsInline
              className="w-full h-full object-cover"
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onError={() => setVideoError(true)}
            />
          ) : (
            <div 
              className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
              style={{
                backgroundImage: posterImage ? `url(${posterImage})` : 'none',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="text-white text-center">
                <div className="text-4xl mb-2">🎬</div>
                <p className="text-sm">Video preview</p>
              </div>
            </div>
          )}
          
          {/* Overlay Controls */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/20 flex items-center justify-center"
              >
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePlayPause}
                    className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-gray-800" />
                    ) : (
                      <Play className="w-6 h-6 text-gray-800 ml-1" />
                    )}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleMuteToggle}
                    className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg"
                  >
                    {isMuted ? (
                      <VolumeX className="w-6 h-6 text-gray-800" />
                    ) : (
                      <Volume2 className="w-6 h-6 text-gray-800" />
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-xl font-bold font-fredoka mb-2"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 text-sm"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoSection; 