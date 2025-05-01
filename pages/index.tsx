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
            <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mx-auto mb-6 sm:mb-8 relative w-[280px] h-[280px] xs:w-[400px] xs:h-[400px] sm:w-[600px] sm:h-[600px]"
              >
                <Image 
                  src="/images/logo.png"
                  alt="Little Legends Hold Co. Logo" 
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  className="p-2 sm:p-4"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ll-purple mb-3 sm:mb-4 font-fredoka leading-tight">
                  Legendary Grooming Is Coming Soon
                </h1>
                <p className="text-xl sm:text-2xl text-ll-purple-dark mb-6 sm:mb-8 font-semibold">
                  Clean. Fun. Thoughtfully made—for the boys.
                </p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="max-w-3xl mx-auto"
                >
                  <p className="text-lg sm:text-xl md:text-2xl mb-3 text-gray-700">
                    For the boys who dream big, play hard, and rock great hair.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600">
                    Tear-free. Parent-approved. 100% kid-cool.
                  </p>
                </motion.div>
              </motion.div>

              {/* Email Signup Form */}
              <div className="w-full max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                  <div className="flex flex-col sm:flex-row w-full items-center gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full sm:flex-1 px-4 py-3 rounded-full border border-ll-purple/30 focus:ring-2 focus:ring-ll-purple/40 focus:outline-none min-h-[48px]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === 'loading' || status === 'success'}
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading' || status === 'success'}
                      className="w-full sm:w-auto bg-ll-purple text-white px-8 py-3 rounded-full font-semibold min-h-[48px] 
                               hover:transform hover:scale-105 transition-all duration-200 disabled:opacity-50
                               hover:bg-ll-purple-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ll-purple"
                    >
                      {status === 'loading' ? 'Joining...' : 'Join the Club'}
                    </button>
                  </div>
                  
                  {message && (
                    <div className={`text-center ${status === 'error' ? 'text-red-500' : 'text-green-600'}`}>
                      {message}
                    </div>
                  )}

                  <p className="text-sm text-gray-500">
                    No spam. Just epic updates and launch-day surprises.
                  </p>
                </form>
              </div>
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
                  Big Style for Little Sidekicks.
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mt-4 text-center">
                  Coming soon — and totally worth the wait.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
                {products.map((product, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-center 
                             transform transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-4 sm:mb-6 h-[80px] sm:h-[100px] flex items-center justify-center">
                      <div className="relative w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]">
                        <Image
                          src={product.image}
                          alt={product.alt}
                          fill
                          style={{ objectFit: 'contain' }}
                          priority={index < 2}
                        />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#1a1a1a] mb-2 font-fredoka tracking-tight">
                      {product.title}
                    </h3>
                    <p className="text-[0.9rem] sm:text-[0.95rem] text-[#555] leading-relaxed">
                      {product.description}
                    </p>
                  </div>
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

            <div className="mt-12 sm:mt-16 bg-ll-purple/5 p-6 sm:p-8 rounded-xl max-w-3xl mx-auto text-center" id="about">
              <h3 className="text-xl font-bold text-ll-purple mb-2">Dad Built. Kid Tested.</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                At Little Legends, we get it. Getting kids out the door with great hair shouldn't be a struggle.
                We're dads who've been there—and kids who know what works. Our mission: epic style, safe ingredients,
                and hair products boys actually want to use.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home; 