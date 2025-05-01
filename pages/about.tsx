import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Head>
        <title>Our Story | Little Legends Hold Co.</title>
        <meta name="description" content="Discover the story behind Little Legends - where we're raising a generation of confident, kind, and legendary boys." />
      </Head>

      <div className="min-h-screen bg-[#FDF8F5]">
        <Navbar />

        <main className="overflow-x-hidden">
          {/* Hero Section */}
          <section className="min-h-[90vh] flex items-center justify-center relative bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="max-w-4xl mx-auto text-center"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto mb-12"
                >
                  <Image
                    src="/images/logo.png"
                    alt="Little Legends Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-6xl sm:text-7xl md:text-8xl font-bold text-ll-purple/10 mb-6 font-fredoka"
                >
                  Our Story
                </motion.h1>

                {/* Scroll Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: [0.3, 1, 0.3], y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-ll-purple/40">
                    <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7L12 12L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Why We Built This Section */}
          <section id="why" className="py-32 sm:py-40 bg-[#FDF8F5]">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="max-w-3xl mx-auto"
              >
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl font-bold text-[#2D2D2D] mb-12 font-fredoka"
                >
                  Why We Built This
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="prose prose-lg md:prose-xl text-gray-700 max-w-none"
                >
                  <p className="text-xl sm:text-2xl leading-relaxed mb-8">
                    As parents, we want the best for all our kids.
                    But when it came to grooming products for boys, there wasn't much out there—at least not anything that felt real, clean, or fun.
                  </p>
                  <p className="font-semibold text-ll-purple text-2xl sm:text-3xl">
                    So we built something different.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Founder's Message Section */}
          <section id="founder" className="py-32 sm:py-40 bg-white mb-20">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="max-w-3xl mx-auto"
              >
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl font-bold text-[#2D2D2D] mb-12 font-fredoka"
                >
                  Founder's Message
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-8"
                >
                  <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed">
                    As a dad to two amazing girls and one incredible son, I created Little Legends with balance in mind—
                    To help boys feel confident, comfortable, and proud of who they are, every single day.
                  </p>
                  <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed">
                    Little Legends isn't about being louder.
                    It's about being better.
                  </p>
                  <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed">
                    It's about giving boys the tools, the look, and the belief to stand tall—and to grow into the kind of humans the world needs more of.
                  </p>
                  <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed">
                    Our sons will grow up respecting all beings, lifting others up, and building the kind of things legends are made of.
                  </p>
                  <p className="font-bold text-[#4A1D96] text-2xl sm:text-3xl mt-12 tracking-wide">
                    That's what we're creating here—one tub, tube, and story at a time.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Navigation Dots */}
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50">
            {['hero', 'why', 'founder'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="w-2 h-2 rounded-full bg-ll-purple/20 hover:bg-ll-purple transition-colors"
                aria-label={`Navigate to ${section} section`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-0.5 bg-ll-purple/30 origin-left z-50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About; 