import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
      <Head>
        <title>Our Story | Little Legends Hold Co.</title>
        <meta name="description" content="Discover the story behind Little Legends - where we're raising a generation of confident, kind, and legendary boys." />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#FDF8F5]">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <div className="w-full py-20 sm:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-12">
                  <Image
                    src="/images/logo.png"
                    alt="Little Legends Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ll-purple mb-6 font-fredoka tracking-tight">
                  Our Story
                </h1>
              </motion.div>
            </div>
          </div>

          {/* Why We Built This Section */}
          <div className="w-full py-20 sm:py-32 bg-[#FDF8F5]">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-8 font-fredoka">
                  Why We Built This
                </h2>
                <div className="prose prose-lg md:prose-xl text-gray-700 max-w-none">
                  <p className="mb-8 text-lg sm:text-xl leading-relaxed">
                    As parents, we want the best for all our kids.
                    But when it came to grooming products for boys, there wasn't much out there—at least not anything that felt real, clean, or fun.
                  </p>
                  <p className="font-semibold text-ll-purple text-xl sm:text-2xl">
                    So we built something different.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Founder's Message Section */}
          <div className="w-full py-20 sm:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-8 font-fredoka">
                  Founder's Message
                </h2>
                <div className="prose prose-lg md:prose-xl text-gray-700 max-w-none">
                  <p className="mb-8 text-lg sm:text-xl leading-relaxed">
                    As a dad to two amazing girls and one incredible son, I created Little Legends with balance in mind—
                    To help boys feel confident, comfortable, and proud of who they are, every single day.
                  </p>
                  <p className="mb-8 text-lg sm:text-xl leading-relaxed">
                    Little Legends isn't about being louder.
                    It's about being better.
                  </p>
                  <p className="mb-8 text-lg sm:text-xl leading-relaxed">
                    It's about giving boys the tools, the look, and the belief to stand tall—and to grow into the kind of humans the world needs more of.
                  </p>
                  <p className="mb-8 text-lg sm:text-xl leading-relaxed">
                    Our sons will grow up respecting all beings, lifting others up, and building the kind of things legends are made of.
                  </p>
                  <p className="font-semibold text-ll-purple text-xl sm:text-2xl">
                    That's what we're creating here—one tub, tube, and story at a time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="w-full py-20 sm:py-32 bg-[#FDF8F5]">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-6 font-fredoka">
                  Join Us on the Journey
                </h2>
                <p className="text-xl sm:text-2xl text-gray-700 mb-10">
                  Let's raise a generation of Little Legends—together.
                </p>
                <a
                  href="#"
                  className="inline-block bg-ll-purple text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-ll-purple-dark transition-colors hover:transform hover:scale-105 transition-all duration-200"
                >
                  Join the Club
                </a>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About; 