'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import VideoSection from './VideoSection'

interface Product {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  color: string
  features: string[]
  videoUrl?: string
}

const products: Product[] = [
  {
    id: 'shark-bait',
    name: 'Shark Bait',
    tagline: 'Ocean Adventures Await',
    description: 'Tear-free wash. Beach-ready smiles. Built for little legends who conquer the tides.',
    image: '/images/shark-bait.png',
    color: '#3B82F6',
    features: ['Tear-free formula', 'Ocean-inspired scent', 'Gentle cleansing'],
    videoUrl: '/videos/Shark Bait Intro.mp4'
  },
  {
    id: 'dino-glue',
    name: 'Dino Glue',
    tagline: 'Jurassic Styling Power',
    description: 'Roar-worthy hold. Wild-day tested. Adventure-ready hair for your little explorer.',
    image: '/images/dino-glue.png',
    color: '#10B981',
    features: ['Strong hold', 'Easy washout', 'Adventure-proof'],
    videoUrl: '/videos/Dino Intro.mp4'
  },
  {
    id: 'galaxy-gel',
    name: 'Galaxy Gel',
    tagline: 'Out-of-This-World Shine',
    description: 'Galactic hold. Stellar style. Launch your hairstyle into orbit.',
    image: '/images/galaxy-gel.png',
    color: '#8B5CF6',
    features: ['Galactic shine', 'Long-lasting', 'Space-age formula'],
    videoUrl: '/videos/Galaxy Intro.mp4'
  },
  {
    id: 'hero-hold',
    name: 'Hero Hold',
    tagline: 'Supercharged Confidence',
    description: 'Transform into a confident champion with our cape-inspired style that makes every day feel like a superhero adventure.',
    image: '/images/hero-hold.png',
    color: '#EF4444',
    features: ['Superhero strength', 'Cape-worthy style', 'Confidence boost'],
    videoUrl: '/videos/Hero Intro.mp4'
  }
]

const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
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
        y: -10,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Product Image */}
      <div className="relative h-48 mb-4 flex items-center justify-center">
        <div className="relative w-32 h-32">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
        
        {/* Color accent */}
        <div 
          className="absolute top-0 right-0 w-16 h-16 rounded-full opacity-20"
          style={{ backgroundColor: product.color }}
        />
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-fredoka">
          {product.name}
        </h3>
        <p className="text-lg font-semibold text-gray-600 mb-3 font-fredoka">
          {product.tagline}
        </p>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <div className="space-y-2">
          {product.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + idx * 0.1 }}
              className="flex items-center justify-center text-sm text-gray-500"
            >
              <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: product.color }} />
              {feature}
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          className="mt-6"
        >
          <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
            Coming Soon
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ProductGrid() {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka">
              Big Style for our Little Sidekicks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Coming soon and totally worth the wait. Each product is crafted with care for the little legends in your life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka">
              See the Magic in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch how our products transform everyday hair into legendary styles
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.slice(0, 4).map((product, index) => (
              <VideoSection
                key={product.id}
                videoUrl={product.videoUrl || ''}
                title={`${product.name} in Action`}
                description={product.description}
                posterImage={product.image}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 