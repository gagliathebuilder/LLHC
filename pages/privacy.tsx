import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Little Legends Hold Co.</title>
        <meta name="description" content="Privacy Policy for Little Legends Hold Co. - Learn how we protect your information." />
      </Head>

      <div className="min-h-screen bg-[#FDF8F5]">
        <Navbar />

        <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-ll-purple mb-8 font-fredoka">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none" style={{ color: '#222', fontWeight: 400 }}>
              <p className="mb-8" style={{ color: '#222', fontWeight: 500 }}>
                Effective Date: May 22, 2025<br />
                Last Updated: May 22, 2025
              </p>

              <p className="mb-8" style={{ color: '#222' }}>
                At Little Legends, we're committed to protecting your privacy and ensuring your personal information is handled with care. 
                This privacy policy explains how we collect, use, and safeguard your information on our pre-launch website.
              </p>

              <hr className="my-8 border-gray-200" />

              <h2 className="text-2xl font-bold text-ll-purple mb-4">1. Information We Collect</h2>
              <p>We only collect the personal information you choose to provide, such as:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>Your email address when you sign up for early access or updates</li>
              </ul>
              <p>We do not collect or store sensitive personal information or payment data at this time.</p>

              <hr className="my-8 border-gray-200" />

              <h2 className="text-2xl font-bold text-ll-purple mb-4">2. How We Use Your Information</h2>
              <p>We use your email to:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>Send updates about our product launch</li>
                <li>Notify you of special offers, sneak peeks, or giveaways</li>
                <li>Communicate important information related to your sign-up</li>
              </ul>
              <p>We do not sell, rent, or share your data with third parties.</p>

              <hr className="my-8 border-gray-200" />

              <h2 className="text-2xl font-bold text-ll-purple mb-4">3. Kids' Privacy (COPPA Compliance)</h2>
              <p className="mb-8">
                Our products are made for children, but our website is built for parents. We do not knowingly collect personal information 
                from children under the age of 13. If you believe your child has provided information, please contact us and we'll promptly delete it.
              </p>

              <hr className="my-8 border-gray-200" />

              <h2 className="text-2xl font-bold text-ll-purple mb-4">4. Data Protection</h2>
              <p className="mb-8">
                We take reasonable measures to protect your information using industry-standard security practices.
              </p>

              <hr className="my-8 border-gray-200" />

              <h2 className="text-2xl font-bold text-ll-purple mb-4">5. Contact Us</h2>
              <p className="mb-4">If you have any questions about this policy or want your information removed, reach out:</p>
              <a 
                href="mailto:hello@littlelegendshair.com" 
                className="text-ll-purple hover:text-ll-purple-dark transition"
              >
                📧 hello@littlelegendshair.com
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Privacy; 