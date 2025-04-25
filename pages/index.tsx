import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Head from "next/head";
import Link from "next/link";

// Product data
const products = [
  {
    name: "Hero Hold",
    description: "Styling Cream – Strong hold, easy rinse. For superheroes on the go.",
    image: "/images/b69b8648-6f32-4d4a-8503-769acc801de8.png"
  },
  {
    name: "Dino Glue",
    description: "Hair Gel – Kid-friendly hold. T-Rex approved.",
    image: "/images/6ebdf7e8-558d-4a60-b9d5-de753e0e2420.png"
  },
  {
    name: "Shark Bait",
    description: "Shampoo + Conditioner – Gentle, tear-free, bath-time win.",
    image: "/images/f49f29ab-615e-4ac5-a97a-c6204f90fb46.png"
  },
  {
    name: "Galaxy Gel",
    description: "Medium Hold – For out-of-this-world style.",
    image: "/images/c7a9288c-3690-4c4a-baca-dfb5c475b7c5.png"
  }
];

export default function Home() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be connected to Mailchimp/Shopify in production
    console.log('Email submitted:', email);
    alert('Thanks for joining! We\'ll notify you when we launch.');
    setEmail('');
  };

  return (
    <>
      <Head>
        <title>Little Legends - Coming Soon</title>
        <meta name="description" content="Kid-approved. Parent-endorsed. Tear-free formulas and epic hold—for boys who play hard and dream big." />
      </Head>
      
      <div className="min-h-screen hero-gradient flex flex-col">
        {/* Hero Section */}
        <header className="container mx-auto pt-8 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="relative h-16 sm:h-20 w-48">
              <Image 
                src="/images/31c02903-214b-427a-b5e4-8de90ca8c0fb.png" 
                alt="Little Legends Hold Co. Logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <Link href="/coming-soon" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition">
              New Design
            </Link>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center py-10 md:py-16">
            {/* Left Column: Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-baloo font-bold text-white leading-tight mb-6">
                Legendary Grooming is <span className="text-ll-yellow">Coming Soon</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-fredoka text-white/90 mb-8 max-w-lg mx-auto lg:mx-0">
                Kid-approved. Parent-endorsed. Tear-free formulas and epic hold—for boys who play hard and dream big.
              </p>
              
              {/* Email signup form */}
              <div className="max-w-md mx-auto lg:mx-0 mb-6">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button 
                    type="submit" 
                    variant="primary"
                  >
                    Join the Club
                  </Button>
                </form>
                <p className="text-white/70 text-sm mt-2">
                  Get early access, styling tips, and special launch-day deals.
                </p>
              </div>
            </div>
            
            {/* Right Column: Product Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-full h-[400px] relative">
                  <Image 
                    src="/images/6ebdf7e8-558d-4a60-b9d5-de753e0e2420.png" 
                    alt="Little Legends Products Preview" 
                    fill
                    className="animate-float"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Preview Section */}
          <section className="py-12 md:py-16">
            <h2 className="text-3xl font-baloo font-bold text-white text-center mb-10">
              <span className="text-ll-yellow">Legendary</span> Products Coming Soon
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="h-40 w-full relative mb-4">
                    <Image 
                      src={product.image}
                      alt={product.name} 
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <h3 className="text-xl font-baloo font-bold text-ll-yellow">{product.name}</h3>
                  <p className="text-white/80">{product.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Brand Pillars Section */}
          <section className="py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="bg-ll-yellow/20 text-ll-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-baloo font-bold text-ll-yellow mb-2">Safe Ingredients</h3>
                <p className="text-white/80">Formulated for sensitive skin and eyes.</p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="bg-ll-yellow/20 text-ll-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-baloo font-bold text-ll-yellow mb-2">Strong Hold</h3>
                <p className="text-white/80">Lasts through recess, sports, and superhero missions.</p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="bg-ll-yellow/20 text-ll-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-baloo font-bold text-ll-yellow mb-2">Easy Washout</h3>
                <p className="text-white/80">No more bath-time battles.</p>
              </div>
            </div>
          </section>

          {/* Dad Built. Kid Tested. Section */}
          <section className="py-12 md:py-16 relative">
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full relative">
                <Image 
                  src="/images/31c02903-214b-427a-b5e4-8de90ca8c0fb.png" 
                  alt="Background skull logo" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-8 md:p-12 text-center backdrop-blur-sm relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl font-baloo font-bold text-ll-yellow mb-6">Dad Built. Kid Tested.</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                At Little Legends, we get it. Getting kids out the door with great hair shouldn't be a struggle. 
                We're dads who've been there—and kids who know what works. Our mission: epic style, safe ingredients, 
                and hair products boys actually want to use.
              </p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-12 md:py-16 text-center">
            <h2 className="text-3xl font-baloo font-bold text-white mb-8">
              Be first to know when we <span className="text-ll-yellow">launch!</span>
            </h2>
            
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  variant="primary"
                >
                  Join the Club
                </Button>
              </form>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 text-center text-white/60">
          <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Little Legends Hold Co. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="hover:text-ll-yellow">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-ll-yellow">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
