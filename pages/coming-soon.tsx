import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Head from 'next/head';

// Correctly ordered products with proper images and descriptions
const products = [
  {
    title: "Hero Hold",
    image: "/images/hero-hold.png", // Hero Hold image
    description: "Styling Cream – Strong hold, easy rinse. For superheroes on the go."
  },
  {
    title: "Shark Bait",
    image: "/images/shark-bait.png", // Shark Bait image
    description: "Shampoo & Conditioner – Gentle, tear-free, bath-time win."
  },
  {
    title: "Dino Glue",
    image: "/images/dino-glue.png", // Dino Glue image
    description: "Hair Gel – Kid-friendly strong hold. T-Rex approved."
  },
  {
    title: "Galaxy Gel",
    image: "/images/galaxy-gel.png", // Galaxy Gel image
    description: "Medium Hold – For out-of-this-world style and flexible fun."
  },
];

const ComingSoon = () => {
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
            <div className="max-w-2xl mx-auto mb-16">
              <div className="mx-auto mb-8 relative w-[540px] h-[540px]">
                <Image 
                  src="/images/logo.png" 
                  alt="Little Legends Hold Co. Logo" 
                  width={540}
                  height={540}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-ll-purple mb-4 font-fredoka">
                Legendary Grooming is Coming Soon
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                For boys who dream big, play hard, and rock great hair. Tear-free. Parent-approved. 100% kid-cool.
              </p>

              <form className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 w-full sm:w-auto flex-1 border border-ll-purple/30 rounded-full focus:ring-2 focus:ring-ll-purple/40"
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

          {/* Product section with improved layout */}
          <div className="w-full py-16 bg-[#7B68EE]" id="products">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white font-fredoka text-center">
                Legendary Products Coming Soon
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {products.map((product, index) => (
                  <div key={index} className="bg-[#8A7CFC] rounded-xl p-5">
                    <div className="bg-white rounded-xl p-4 mb-6 h-[190px] flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          style={{ objectFit: 'contain', padding: '10px' }}
                          priority={index < 2}
                        />
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

export default ComingSoon; 