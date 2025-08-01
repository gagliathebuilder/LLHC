import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Volume2, VolumeX } from 'lucide-react';

interface SneakPeekModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SneakPeekModal: React.FC<SneakPeekModalProps> = ({ isOpen, onClose }) => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const sneakPeekContent = [
    {
      id: 'behind-scenes',
      title: 'Behind the Scenes',
      description: 'See how Little Legends products are crafted with care',
      videoUrl: '/videos/Dino Intro.mp4',
      thumbnail: '/images/Green Skull.png',
      category: 'Making Of'
    },
    {
      id: 'product-testing',
      title: 'Product Testing',
      description: 'Watch our little legends test the products in real scenarios',
      videoUrl: '/videos/Shark Bait Intro.mp4',
      thumbnail: '/images/Blue Skull.png',
      category: 'Testing'
    },
    {
      id: 'ingredients',
      title: 'Safe Ingredients',
      description: 'Learn about the gentle, tear-free formulas we use',
      videoUrl: '/videos/Galaxy Intro.mp4',
      thumbnail: '/images/Black Skull.png',
      category: 'Safety'
    },
    {
      id: 'packaging',
      title: 'Packaging Design',
      description: 'See the adventure-themed packaging that kids love',
      videoUrl: '/videos/Hero Intro.mp4',
      thumbnail: '/images/Red Skull.png',
      category: 'Design'
    }
  ];

  const handleVideoPlay = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setCurrentVideo(null);
    setIsPlaying(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-fredoka">Sneak Peek</h2>
                <p className="text-gray-600">Exclusive behind-the-scenes content</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {currentVideo ? (
                /* Video Player */
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  <video
                    src={currentVideo}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>
                  </div>
                  
                  {/* Close Video Button */}
                  <button
                    onClick={handleCloseVideo}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                /* Content Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sneakPeekContent.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gray-50 rounded-xl p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => handleVideoPlay(item.videoUrl)}
                    >
                      <div className="relative aspect-video mb-4 bg-black rounded-lg overflow-hidden">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-ll-purple bg-ll-purple/10 px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-900 font-fredoka">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SneakPeekModal; 