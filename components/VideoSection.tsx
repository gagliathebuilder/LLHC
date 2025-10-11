import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, X } from 'lucide-react';
import FaceWithBackground from './FaceWithBackground';

interface VideoSectionProps {
  videoUrl: string;
  title: string;
  description: string;
  posterImage?: string;
  className?: string;
  posterBackground?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoUrl,
  title,
  description,
  posterImage,
  className = '',
  posterBackground
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect if device supports touch
  React.useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handlePlayPause = () => {
    const video = document.getElementById(`video-${title}`) as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
        // Enter fullscreen mode when video starts playing
        setIsFullscreen(true);
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

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setIsFullscreen(true);
  };
  
  const handleVideoPause = () => setIsPlaying(false);

  const handleCloseFullscreen = () => {
    const video = document.getElementById(`video-${title}`) as HTMLVideoElement;
    if (video) {
      video.pause();
    }
    setIsPlaying(false);
    setIsFullscreen(false);
  };

  // Fullscreen overlay
  if (isFullscreen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      >
        <div className="relative w-full h-full max-w-6xl max-h-[80vh] flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Video */}
          {!videoError ? (
            <video
              id={`video-${title}-fullscreen`}
              src={videoUrl}
              poster={posterImage}
              muted={isMuted}
              loop
              playsInline
              className="w-full h-full object-contain"
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onError={() => setVideoError(true)}
              autoPlay
            />
          ) : (
            <div className="text-white text-center">
              <div className="text-4xl mb-2">🎬</div>
              <p className="text-sm">Video preview</p>
            </div>
          )}
          
          {/* Fullscreen controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlayPause}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full shadow-lg"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white ml-1" />
              )}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleMuteToggle}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full shadow-lg"
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-white" />
              ) : (
                <Volume2 className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative group ${className}`}
      onMouseEnter={() => !isTouchDevice && setShowControls(true)}
      onMouseLeave={() => !isTouchDevice && setShowControls(false)}
      onClick={() => isTouchDevice && setShowControls(!showControls)}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black">
        {/* Video Player */}
        <div 
          className="relative aspect-video cursor-pointer"
          onClick={() => isTouchDevice && handlePlayPause()}
        >
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
              className="w-full h-full flex items-center justify-center"
              style={{
                backgroundColor: posterBackground || 'transparent'
              }}
            >
              {posterImage && posterImage.includes('face.png') ? (
                <FaceWithBackground />
              ) : posterImage ? (
                <img
                  src={posterImage}
                  alt={title}
                  className="w-full h-full object-contain"
                  style={{
                    backgroundColor: posterBackground || 'transparent'
                  }}
                />
              ) : (
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🎬</div>
                  <p className="text-sm">Video preview</p>
                </div>
              )}
            </div>
          )}
          
          {/* Mobile Play Button Overlay - Always visible on mobile when not playing */}
          {isTouchDevice && !isPlaying && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayPause}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-full shadow-2xl border-4 border-white"
              >
                <Play className="w-8 h-8 text-gray-800 ml-1" />
              </motion.button>
            </div>
          )}
          
          {/* Overlay Controls */}
          <AnimatePresence>
            {(showControls || isTouchDevice) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/30 flex items-center justify-center"
              >
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePlayPause}
                    className="bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-xl border-2 border-white"
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
                    className="bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-xl border-2 border-white"
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
        
        {/* Enhanced Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-2xl font-bold font-fredoka mb-2 drop-shadow-lg"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/95 text-base font-medium drop-shadow-lg"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoSection; 