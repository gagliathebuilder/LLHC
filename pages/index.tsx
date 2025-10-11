import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Script from 'next/script';
import AnimatedProductCard from '@/components/AnimatedProductCard';
import VideoSection from '@/components/VideoSection';
import SneakPeekModal from '@/components/SneakPeekModal';

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

const Home = () => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState<SubmissionStatus>('idle');
  const [waitlistMessage, setWaitlistMessage] = useState('');
  const [waitlistEmailError, setWaitlistEmailError] = useState('');
  const [preorderEmail, setPreorderEmail] = useState('');
  const [preorderStatus, setPreorderStatus] = useState<SubmissionStatus>('idle');
  const [preorderMessage, setPreorderMessage] = useState('');
  const [preorderEmailError, setPreorderEmailError] = useState('');
  const [isSneakPeekOpen, setIsSneakPeekOpen] = useState(false);

  const validateEmail = (email: string) => {
    // Simple email regex for validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const submitEmail = async (
    emailValue: string,
    setStatus: React.Dispatch<React.SetStateAction<SubmissionStatus>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    setEmailValue: React.Dispatch<React.SetStateAction<string>>,
    copy: { already?: string; success?: string } = {}
  ) => {
    setMessage('');
    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setStatus('success');
      setMessage(
        data.error === 'Email already subscribed'
          ? copy.already ?? "You're already part of the Legend Club!"
          : copy.success ?? "You're in. Welcome to the Legend Club!"
      );
      setEmailValue('');
    } catch (error: any) {
      console.error('Subscription error:', error);
      setStatus('error');
      setMessage(error.message || 'Oops! Something went wrong. Please try again.');
    }
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setWaitlistEmailError('');
    if (!validateEmail(waitlistEmail)) {
      setWaitlistEmailError('Please enter a valid email address.');
      return;
    }
    await submitEmail(waitlistEmail, setWaitlistStatus, setWaitlistMessage, setWaitlistEmail);
  };

  const handlePreorderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPreorderEmailError('');
    if (!validateEmail(preorderEmail)) {
      setPreorderEmailError('Please enter a valid email address.');
      return;
    }
    await submitEmail(preorderEmail, setPreorderStatus, setPreorderMessage, setPreorderEmail, {
      already: "You're already locked in for our launch!",
      success: "Pre-order unlocked! We'll email you with next steps.",
    });
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
        <title>Coming Soon | Little Legends</title>
        <meta name="description" content="For boys who dream big, play hard, and rock great hair. Tear-free. Parent-approved. 100% kid-cool." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Coming Soon | Little Legends" />
        <meta property="og:description" content="For boys who dream big, play hard, and rock great hair. Tear-free. Parent-approved. 100% kid-cool." />
        <meta property="og:image" content="/images/cleanlogo.png" />
        <meta property="og:image:alt" content="Little Legends Dino Logo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://littlelegendshair.com" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coming Soon | Little Legends" />
        <meta name="twitter:description" content="For boys who dream big, play hard, and rock great hair. Tear-free. Parent-approved. 100% kid-cool." />
        <meta name="twitter:image" content="/images/cleanlogo.png" />
        <meta name="twitter:image:alt" content="Little Legends Dino Logo" />
      </Head>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YZJLY1EXTG"
        strategy="afterInteractive"
      />
      <Script id="ga-gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YZJLY1EXTG');
        `}
      </Script>
      
      <div className="flex flex-col min-h-screen bg-[#FDF8F5] text-gray-900">
        <Navbar onSneakPeekClick={() => setIsSneakPeekOpen(true)} />

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
                  Clean. Fun. Thoughtfully crafted for the boys.
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
                id="email-signup"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full max-w-xl mx-auto mt-6"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-ll-purple-dark font-fredoka mb-2">
                  Join the movement. Get first dibs when we drop.
                </h3>
                <form onSubmit={handleWaitlistSubmit} className="flex flex-col items-center gap-3">
                  <div className="flex flex-col sm:flex-row w-full items-center gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className={`w-full sm:flex-1 px-5 py-3 rounded-full border border-ll-purple/30 focus:ring-2 focus:ring-ll-purple/40 focus:outline-none text-base ${waitlistEmailError ? 'border-red-400' : ''}`}
                      value={waitlistEmail}
                      onChange={(e) => {
                        setWaitlistEmail(e.target.value);
                        if (e.target.value === '' || validateEmail(e.target.value)) {
                          setWaitlistEmailError('');
                        } else {
                          setWaitlistEmailError('Please enter a valid email address.');
                        }
                      }}
                      required
                      disabled={waitlistStatus === 'loading' || waitlistStatus === 'success'}
                      aria-invalid={!!waitlistEmailError}
                      aria-describedby="waitlist-email-error"
                    />
                    <button
                      type="submit"
                      disabled={waitlistStatus === 'loading' || waitlistStatus === 'success' || !validateEmail(waitlistEmail)}
                      className="w-14 h-14 flex items-center justify-center bg-white border-2 border-purple-600 rounded-full shadow-md hover:bg-purple-50 transition-transform transform hover:scale-110 ml-0 sm:ml-2"
                      aria-label="Submit email"
                    >
                      <Image src="/images/submitbutton.png" alt="Submit" width={32} height={32} className="w-8 h-8 brightness-125 contrast-125 filter drop-shadow-md" />
                    </button>
                  </div>
                  
                  {waitlistMessage && (
                    <div className={`text-lg ${waitlistStatus === 'error' ? 'text-red-500' : 'text-green-600'}`}>
                      {waitlistMessage}
                    </div>
                  )}

                  {waitlistEmailError && (
                    <div id="waitlist-email-error" className="text-red-500 text-sm font-semibold mt-1">Please enter a valid email address.</div>
                  )}

                  <p className="text-sm text-gray-500 font-medium">
                    No spam. Just epic updates and launch-day surprises.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Pre-Order Section */}
          <motion.section
            id="preorder"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full py-12 sm:py-16 bg-gradient-to-br from-ll-purple/10 via-white to-ll-purple/5"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <div className="bg-white/90 backdrop-blur-sm shadow-[0_20px_45px_rgba(67,38,176,0.12)] rounded-3xl p-6 sm:p-10 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8">
                  <div className="md:w-1/2 space-y-4">
                    <p className="text-sm uppercase tracking-[0.25em] text-ll-purple/70 font-semibold">
                      Pre-Order Drop
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-fredoka font-bold text-ll-purple">
                      Reserve Your Legendary Launch Kit
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      Be first in line for clean ingredients, fearless hold, and limited-edition packaging made for your little legend&apos;s daily adventures.
                    </p>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                      <li>• Exclusive early-access bundles and bonuses</li>
                      <li>• Guaranteed ship dates before the public release</li>
                      <li>• Members-only updates from our founder Kellie</li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 bg-[#FDF8F5] border border-ll-purple/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-ll-purple-dark font-fredoka">
                        How Pre-Order Works
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-gray-600">
                        Join the waitlist, lock your spot, and we&apos;ll email you the moment pre-orders open. No commitment until you say go.
                      </p>
                    </div>
                    <form onSubmit={handlePreorderSubmit} className="flex flex-col items-stretch gap-3">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className={`w-full sm:flex-1 px-4 py-3 rounded-full border border-ll-purple/30 focus:ring-2 focus:ring-ll-purple/30 focus:outline-none text-base ${preorderEmailError ? 'border-red-400' : ''}`}
                          value={preorderEmail}
                          onChange={(e) => {
                            setPreorderEmail(e.target.value);
                            if (e.target.value === '' || validateEmail(e.target.value)) {
                              setPreorderEmailError('');
                            } else {
                              setPreorderEmailError('Please enter a valid email address.');
                            }
                          }}
                          required
                          disabled={preorderStatus === 'loading' || preorderStatus === 'success'}
                          aria-invalid={!!preorderEmailError}
                          aria-describedby="preorder-email-error"
                        />
                        <button
                          type="submit"
                          disabled={preorderStatus === 'loading' || preorderStatus === 'success' || !validateEmail(preorderEmail)}
                          className="px-6 py-3 bg-gradient-to-r from-ll-purple via-ll-purple to-[#32D083] text-white font-semibold rounded-full shadow-lg shadow-ll-purple/20 hover:from-[#5C3FE6] hover:to-[#39E099] transition-transform transform hover:translate-y-[-2px] disabled:opacity-100 disabled:cursor-not-allowed disabled:translate-y-0"
                        >
                          {preorderStatus === 'loading' ? 'Reserving...' : 'Reserve My Spot'}
                        </button>
                      </div>
                      {preorderMessage && (
                        <div className={`text-sm sm:text-base ${preorderStatus === 'error' ? 'text-red-500' : 'text-green-600'}`}>
                          {preorderMessage}
                        </div>
                      )}
                      {preorderEmailError && (
                        <div id="preorder-email-error" className="text-red-500 text-xs sm:text-sm font-semibold">
                          Please enter a valid email address.
                        </div>
                      )}
                    </form>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Already signed up? You&apos;re on the list—watch your inbox for launch-day perks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

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
                  Coming soon and totally worth the wait.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6">
                {products.map((product, index) => (
                  <AnimatedProductCard
                    key={index}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    alt={product.alt}
                    index={index}
                    onClick={() => {
                      // Add product interaction logic here
                      console.log(`Clicked on ${product.title}`);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Video Showcase Section */}
          <div className="w-full py-12 sm:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8 sm:mb-12 text-center"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D2D2D] font-fredoka">
                  Meet Our Legendary Lineup
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mt-4">
                  Get a sneak peek at the products that will transform your little legend's style
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <VideoSection
                  videoUrl="/videos/Dino Intro.mp4"
                  title="Dino Glue Teaser"
                  description="Coming soon: Roar-worthy hold for your little explorer"
                  posterImage="/images/Green Skull.png"
                  className="w-full"
                />
                <VideoSection
                  videoUrl="/videos/Shark Bait Intro.mp4"
                  title="Shark Bait Teaser"
                  description="Coming soon: Ocean adventures await with tear-free washing"
                  posterImage="/images/Blue Skull.png"
                  className="w-full"
                />
                <VideoSection
                  videoUrl="/videos/Galaxy Intro.mp4"
                  title="Galaxy Gel Teaser"
                  description="Coming soon: Out-of-this-world shine and stellar style"
                  posterImage="/images/Black Skull.png"
                  className="w-full"
                />
                <VideoSection
                  videoUrl="/videos/Hero Intro.mp4"
                  title="Hero Hold Teaser"
                  description="Coming soon: Supercharged confidence for your little champion"
                  posterImage="/images/Red Skull.png"
                  className="w-full"
                />
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
              
              <div className="bg-[#0CD5D8] p-8 sm:p-12 rounded-2xl max-w-4xl mx-auto text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]" id="about">
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
                      className="text-[#FF2EBE] font-extrabold text-xl sm:text-2xl tracking-tight"
                    >
                      Mom Built
                    </motion.div>
                    <span className="hidden sm:block text-[#4326B0] opacity-70">•</span>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-[#FF2EBE] font-extrabold text-xl sm:text-2xl tracking-tight"
                    >
                      Kid Tested
                    </motion.div>
                    <span className="hidden sm:block text-[#4326B0] opacity-70">•</span>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-[#FF2EBE] font-extrabold text-xl sm:text-2xl tracking-tight"
                    >
                      Dad Approved
                    </motion.div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-sm">
                    <p className="text-[#3B1E7C] text-base sm:text-lg leading-relaxed">
                      At Little Legends, we get it. Our founder Kellie set out to fix the bathroom routine with clean, effective products that keep up with real families.
                      Every formula is kid tested and mom approved, delivering epic style, safe ingredients, and hair products boys actually want to use.
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-[#FF2EBE]/40"
                    >
                      <span className="text-sm font-medium text-[#3B1E7C]">Safe & Natural</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-[#FF2EBE]/40"
                    >
                      <span className="text-sm font-medium text-[#3B1E7C]">Tear-Free Formula</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-[#FF2EBE]/40"
                    >
                      <span className="text-sm font-medium text-[#3B1E7C]">Easy Washout</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* Sneak Peek Modal */}
      <SneakPeekModal 
        isOpen={isSneakPeekOpen}
        onClose={() => setIsSneakPeekOpen(false)}
      />
    </>
  );
};

export default Home; 
