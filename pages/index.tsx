import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Head from 'next/head';

// Correctly ordered products with proper images and descriptions
const products = [
  {
    title: "Hero Hold",
    image: "/images/b69b8648-6f32-4d4a-8503-769acc801de8.png",
    description: "Styling Cream – Strong hold, easy rinse. For superheroes on the go."
  },
  {
    title: "Shark Bait",
    image: "/images/f49f29ab-615e-4ac5-a97a-c6204f90fb46.png",
    description: "Shampoo & Conditioner – Gentle, tear-free, bath-time win."
  },
  {
    title: "Dino Glue",
    image: "/images/6ebdf7e8-558d-4a60-b9d5-de753e0e2420.png",
    description: "Hair Gel – Kid-friendly strong hold. T-Rex approved."
  },
  {
    title: "Galaxy Gel",
    image: "/images/c7a9288c-3690-4c4a-baca-dfb5c475b7c5.png",
    description: "Medium Hold – For out-of-this-world style and flexible fun."
  },
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

          {/* Product Teaser section */}
          <div className="w-full py-16 bg-[#7B68EE]" id="products">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-fredoka text-center">
                Legendary Products Coming Soon
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {products.map((product, index) => (
                  <div key={index} className="bg-[#8A7CFC] rounded-xl p-5 backdrop-blur-lg">
                    <div className="bg-white/10 rounded-xl p-4 mb-6 h-[190px] flex items-center justify-center">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <h3 className="text-2xl font-bold text-white mb-2 font-fredoka text-center">Coming Soon</h3>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-ll-yellow mb-2 font-fredoka text-center">{product.title}</h3>
                    <p className="text-sm text-white text-center px-1">{product.description}</p>
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
