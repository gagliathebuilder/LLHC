import React from 'react';
import Link from 'next/link';

const Footer = () => {
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
              <li><Link href="#" className="text-gray-600 hover:text-purple-700">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-purple-700">Our Story</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-purple-700">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-purple-700 mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-2">
              Join our mailing list for updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 w-full text-sm border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-purple-700"
              />
              <button
                type="submit"
                className="bg-purple-700 text-white px-3 py-2 rounded-r-full text-sm"
              >
                Join
              </button>
            </form>
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