import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FloatingIcons from '@/components/FloatingIcons';
import ProductGrid from '@/components/ProductGrid';
import EmailCaptureForm from '@/components/EmailCaptureForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Little Legends Hair | Legendary Grooming for Boys</title>
        <meta name="description" content="Clean, fun grooming products made just for boys ages 2–12. From Dino Glue to Shark Bait Shampoo, Little Legends brings style, confidence, and adventure to every head of hair. Parent-approved, kid-cool." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Little Legends Hair | Legendary Grooming for Boys" />
        <meta property="og:description" content="Clean, fun grooming products made just for boys ages 2–12. From Dino Glue to Shark Bait Shampoo, Little Legends brings style, confidence, and adventure to every head of hair." />
        <meta property="og:image" content="/images/cleanlogo.png" />
        <meta property="og:image:alt" content="Little Legends Dino Logo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://littlelegendshair.com" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Little Legends Hair | Legendary Grooming for Boys" />
        <meta name="twitter:description" content="Clean, fun grooming products made just for boys ages 2–12. From Dino Glue to Shark Bait Shampoo, Little Legends brings style, confidence, and adventure to every head of hair." />
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
        <Navbar />
        
        {/* Floating Icons Background */}
        <FloatingIcons />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Product Grid */}
        <ProductGrid />
        
        {/* Email Capture Form */}
        <EmailCaptureForm />
        
        <Footer />
      </div>
    </>
  );
} 