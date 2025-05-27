import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Home = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setStatus('success');
      setMessage(data.error === 'Email already subscribed' 
        ? "You're already part of the Legend Club!" 
        : "You're in. Welcome to the Legend Club!");
      setEmail('');
    } catch (error: any) {
      console.error('Subscription error:', error);
      setStatus('error');
      setMessage(error.message || 'Oops! Something went wrong. Please try again.');
    }
  };

  // Product data
  const products = [
    {
      title: "🦸 Supercharged Confidence",
      description: "Transform into a confident champion with our cape-inspired style that makes every day feel like a superhero adventure.",
      image: "/images/Red Cape with Starburst Background.png",
      alt: "Red cape with starburst background"
    },
    {
      title: "🚀 Out-of-This-World Shine",
      description: "Galactic hold. Stellar style. Launch your hairstyle into orbit.",
      image: "/images/Purple Rocket in Lavender Sky.png",
      alt: "Purple rocket in lavender sky"
    },
    {
      title: "🌊 Ocean Adventures Await",
      description: "Tear-free wash. Beach-ready smiles. Built for little legends who conquer the tides.",
      image: "/images/Minimalist Blue Wave and Stars.png",
      alt: "Minimalist blue wave with stars"
    },
    {
      title: "🦖 Jurassic Styling Power",
      description: "Roar-worthy hold. Wild-day tested. Adventure-ready hair for your little explorer.",
      image: "/images/Dinosaur Footprint with Green Leaves.png",
      alt: "Dinosaur footprint with green leaves"
    }
  ];

  return (
    <>
      <Head>
        <title>Coming Soon | Little Legends Hold Co.</title>
        <meta name="description" content="For boys who dream big, play hard, and rock great hair. Tear-free. Parent-approved. 100% kid-cool." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      
      <div className="flex flex-col min-h-screen bg-[#FDF8F5] text-gray-900">
        <Navbar />

        <main className="flex-grow flex flex-col items-center justify-center text-center">
          <div className="w-full px-4 sm:px-6 py-12 sm:py-16 bg-[#FDF8F5]">
            <div className="max-w-4xl mx-auto">
              {/* Logo */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mx-auto mb-8 relative w-[420px] h-[420px] xs:w-[600px] xs:h-[600px] sm:w-[750px] sm:h-[750px]"
              >
                <Image 
                  src="/images/cleanlogo.png"
                  alt="Little Legends Hold Co. Logo" 
                  fill
                  style={{ objectFit: 'contain', transform: 'translateX(-5%)' }}
                  priority
                  className="p-2 sm:p-4"
                />
              </motion.div>
              
              {/* Hero Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center space-y-3 mb-10"
              >
                {/* H1 Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ll-purple font-fredoka leading-tight">
                  Legendary Grooming Is Coming Soon
                </h1>

                {/* H2 Subheadline */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-ll-purple-dark font-fredoka">
                  Clean. Fun. Thoughtfully crafted—for the boys.
                </h2>

                {/* Body Copy and Supporting Text */}
                <div className="mt-3 space-y-1">
                  <p className="text-lg sm:text-xl text-gray-700">
                    Made for the dudes who dream big, play hard, and ROCK great hair.
                  </p>
                  <p className="text-sm sm:text-base text-gray-500">
                    Tear-free • Parent-approved • 100% kid-cool
                  </p>
                </div>
              </motion.div>

              {/* Email Signup Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full max-w-xl mx-auto mt-6"
              >
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
                  <div className="flex flex-col sm:flex-row w-full items-center gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full sm:flex-1 px-5 py-3 rounded-full border border-ll-purple/30 focus:ring-2 focus:ring-ll-purple/40 focus:outline-none text-base"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === 'loading' || status === 'success'}
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading' || status === 'success'}
                      className="w-full sm:w-auto bg-ll-purple text-white px-6 py-3 rounded-full font-semibold text-base
                               hover:transform hover:scale-105 transition-all duration-200 disabled:opacity-50
                               hover:bg-ll-purple-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ll-purple"
                    >
                      {status === 'loading' ? 'Joining...' : 'Join the Club'}
                    </button>
                  </div>
                  
                  {message && (
                    <div className={`text-lg ${status === 'error' ? 'text-red-500' : 'text-green-600'}`}>
                      {message}
                    </div>
                  )}

                  <p className="text-sm text-gray-500 font-medium">
                    No spam. Just epic updates and launch-day surprises.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Legendary Products Section */}
          <div className="w-full py-12 sm:py-16 bg-white" id="products">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8 sm:mb-12"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D2D2D] font-fredoka text-center">
                  Big Style for our Little Sidekicks.
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mt-4 text-center">
                  Coming soon — and totally worth the wait.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6">
                {products.map((product, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-center 
                             transform transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                             border border-transparent hover:border-ll-purple/20"
                  >
                    <div className="mb-4 sm:mb-6 h-[80px] sm:h-[100px] flex items-center justify-center">
                      <div className="relative w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]">
                        <Image
                          src={product.image}
                          alt={product.alt}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-ll-purple mb-2 sm:mb-3 font-fredoka">
                      {product.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Features section */}
          <div className="w-full px-4 sm:px-6 py-12 sm:py-16 bg-[#FDF8F5]">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm min-h-[160px] flex flex-col items-center justify-center">
                <div className="text-yellow-400 text-3xl mb-2">🛡️</div>
                <h3 className="font-bold text-lg text-ll-purple">Safe Ingredients</h3>
                <p className="text-sm text-gray-600 mt-2">Formulated for sensitive skin and eyes.</p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm min-h-[160px] flex flex-col items-center justify-center">
                <div className="text-red-400 text-3xl mb-2">⚡</div>
                <h3 className="font-bold text-lg text-ll-purple">Strong Hold</h3>
                <p className="text-sm text-gray-600 mt-2">Lasts through recess, sports, and superhero missions.</p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm min-h-[160px] flex flex-col items-center justify-center">
                <div className="text-blue-400 text-3xl mb-2">🧪</div>
                <h3 className="font-bold text-lg text-ll-purple">Easy Washout</h3>
                <p className="text-sm text-gray-600 mt-2">No more bath-time battles.</p>
              </div>
            </section>

            <div className="relative mt-12 sm:mt-16">
              {/* Subtle divider */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ll-purple/10 to-transparent"></div>
              
              <div className="bg-gradient-to-br from-ll-purple/5 to-ll-purple/10 p-8 sm:p-12 rounded-2xl max-w-4xl mx-auto text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)]" id="about">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-ll-purple font-extrabold text-xl sm:text-2xl tracking-tight"
                    >
                      Dad Built
                    </motion.div>
                    <span className="hidden sm:block text-ll-purple/30">•</span>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-ll-purple font-extrabold text-xl sm:text-2xl tracking-tight"
                    >
                      Kid Tested
                    </motion.div>
                    <span className="hidden sm:block text-ll-purple/30">•</span>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-ll-purple font-extrabold text-xl sm:text-2xl tracking-tight"
                    >
                      Mom Approved
                    </motion.div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-sm">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      At Little Legends, we get it. Getting kids out the door with great hair shouldn't be a struggle.
                      We're dads who've been there—and kids who know what works. Our mission: epic style, safe ingredients,
                      and hair products boys actually want to use.
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm"
                    >
                      <span className="text-sm font-medium text-gray-700">Safe & Natural</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm"
                    >
                      <span className="text-sm font-medium text-gray-700">Tear-Free Formula</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm"
                    >
                      <span className="text-sm font-medium text-gray-700">Easy Washout</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home; 