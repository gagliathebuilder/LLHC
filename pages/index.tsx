import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Head from 'next/head';

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

const Home = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      alert('Thanks for joining! We\'ll notify you when we launch.');
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Sorry, there was an error. Please try again later.');
    }
  };

  return (
    <>
      <Head>
        <title>Coming Soon | Little Legends Hold Co.</title>
        <meta name="description" content="For boys who dream big, play hard, and rock great hair. Tear-free. Parent-approved. 100% kid-cool." />
      </Head>
      
      <div className="flex flex-col min-h-screen bg-[#FDF8F5] text-gray-900">
        <Navbar />

        <main className="flex-grow flex flex-col items-center justify-center text-center">
          <div className="w-full px-6 py-16 bg-[#FDF8F5]">
            <div className="max-w-4xl mx-auto mb-16">
              <div className="mx-auto mb-8 relative w-[400px] h-[400px] sm:w-[600px] sm:h-[600px]">
                <Image 
                  src="/images/logo.png"
                  alt="Little Legends Hold Co. Logo" 
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  className="p-4"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-ll-purple mb-4 font-fredoka">
                Legendary Grooming is Coming Soon
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                For boys who dream big, play hard, and rock great hair. Tear-free. Parent-approved. 100% kid-cool.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 w-full sm:w-auto flex-1 border border-ll-purple/30 rounded-full focus:ring-2 focus:ring-ll-purple/40"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-ll-purple text-white px-6 py-3 rounded-full hover:bg-ll-purple-dark transition font-semibold"
                >
                  Join the Club
                </button>
              </form>

              <p className="text-sm mt-4 text-gray-500">
                Get early access, styling tips, and special launch-day deals.
              </p>
            </div>
          </div>

          {/* Legendary Products Section */}
          <div className="w-full py-16 bg-white" id="products">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#2D2D2D] font-fredoka text-center">
                Legendary Products Coming Soon
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {products.map((product, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-center 
                             transform transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-6 h-[100px] flex items-center justify-center">
                      <div className="relative w-[100px] h-[100px]">
                        <Image
                          src={product.image}
                          alt={product.alt}
                          fill
                          style={{ objectFit: 'contain' }}
                          priority={index < 2}
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#1a1a1a] mb-2 font-fredoka tracking-tight">
                      {product.title}
                    </h3>
                    <p className="text-[0.95rem] text-[#555] leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features section */}
          <div className="w-full px-6 py-16 bg-[#FDF8F5]">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-yellow-400 text-3xl mb-2">🛡️</div>
                <h3 className="font-bold text-lg text-ll-purple">Safe Ingredients</h3>
                <p className="text-sm text-gray-600 mt-2">Formulated for sensitive skin and eyes.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-400 text-3xl mb-2">⚡</div>
                <h3 className="font-bold text-lg text-ll-purple">Strong Hold</h3>
                <p className="text-sm text-gray-600 mt-2">Lasts through recess, sports, and superhero missions.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-blue-400 text-3xl mb-2">🧪</div>
                <h3 className="font-bold text-lg text-ll-purple">Easy Washout</h3>
                <p className="text-sm text-gray-600 mt-2">No more bath-time battles.</p>
              </div>
            </section>

            <div className="mt-16 bg-ll-purple/5 p-8 rounded-xl max-w-3xl mx-auto text-center" id="about">
              <h3 className="text-xl font-bold text-ll-purple mb-2">Dad Built. Kid Tested.</h3>
              <p className="text-gray-700">
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
