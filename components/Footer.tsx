import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      setStatus('error');
      setMessage('');
      return;
    }
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
        : "You're in!");
      setEmail('');
    } catch (error: any) {
      console.error('Subscription error:', error);
      setStatus('error');
      setMessage(error.message || 'Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <footer className="bg-white py-8 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-purple-700 mb-4">Little Legends</h3>
            <p className="text-sm text-gray-600">
              Kid-approved. Parent-endorsed. Tear-free formulas and epic hold—for boys who play hard and dream big.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-purple-700 mb-4">Products</h3>
            <p className="text-sm text-gray-600 mb-2">
              Epic styles incoming! Our legendary line of hair products is about to make its debut.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-500 italic">Maximum Hold Formula ✨</li>
              <li className="text-gray-500 italic">Ocean-Inspired Style 🌊</li>
              <li className="text-gray-500 italic">Prehistoric Power 🦖</li>
              <li className="text-gray-500 italic">Out-of-this-World Control 🚀</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-purple-700 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-purple-700">About Us</Link></li>
              <li><Link href="/about#founder" className="text-gray-600 hover:text-purple-700">Our Story</Link></li>
              <li><a href="mailto:hello@littlelegendshair.com" className="text-gray-600 hover:text-purple-700">Contact</a></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-purple-700">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-purple-700 mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-2">
              Join our mailing list for updates and offers.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex w-full items-center gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className={`w-full px-3 py-2 text-sm border border-ll-purple/30 rounded-full focus:ring-2 focus:ring-ll-purple/40 focus:outline-none ${emailError ? 'border-red-400' : ''}`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (e.target.value === '' || isValidEmail(e.target.value)) {
                      setEmailError('');
                    } else {
                      setEmailError('Please enter a valid email address.');
                    }
                  }}
                  required
                  disabled={status === 'loading' || status === 'success'}
                  aria-invalid={!!emailError}
                  aria-describedby="footer-email-error"
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success' || !isValidEmail(email)}
                  className="w-14 h-14 flex items-center justify-center bg-white border-2 border-purple-600 rounded-full shadow-md hover:bg-purple-50 transition-transform transform hover:scale-110 ml-2"
                  aria-label="Submit email"
                >
                  <Image src="/images/submitbutton.png" alt="Submit" width={32} height={32} className="w-8 h-8 brightness-125 contrast-125 filter drop-shadow-md" />
                </button>
              </div>
              {emailError && (
                <div id="footer-email-error" className="text-red-500 text-xs font-semibold mt-1">{emailError}</div>
              )}
              {message && !emailError && (
                <p className={`text-xs ${status === 'error' ? 'text-red-500' : 'text-green-600'}`}>{message}</p>
              )}
            </form>
            <div className="mt-4 flex gap-6">
              <a 
                href="https://instagram.com/littlelegendshair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-ll-purple transition"
                aria-label="Follow us on Instagram @littlelegendshair"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com/@littlelegendshair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-ll-purple transition"
                aria-label="Follow us on TikTok @littlelegendshair"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Little Legends Hold Co. All rights reserved.</p>
          <p className="mt-2 text-gray-500 text-xs">
            Created with ♥️ in Costa Mesa, CA <span className="opacity-75">🐻</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 