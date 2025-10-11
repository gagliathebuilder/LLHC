'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, Menu, X } from 'lucide-react';

interface NavbarProps {
  onSneakPeekClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSneakPeekClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-10 h-10 sm:w-[60px] sm:h-[60px] -ml-1 sm:-ml-3">
            <Image
              src="/images/face.png"
              alt="Little Legends Hold Co."
              width={60}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <span className="ml-2 font-bold text-ll-purple text-lg sm:text-xl">Little Legends</span>
        </Link>
        
        <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-ll-purple transition font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-ll-purple transition font-medium">
              About
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-ll-purple transition font-medium">
              Products
            </Link>
            {onSneakPeekClick && (
              <button
                onClick={onSneakPeekClick}
                className="text-gray-700 hover:text-ll-purple transition font-medium flex items-center gap-1"
              >
                <Eye className="w-4 h-4" />
                Sneak Peek
              </button>
            )}
            <Link href="#preorder" className="text-gray-700 hover:text-ll-purple transition font-medium">
              Pre-Order
            </Link>
          </div>
        </nav>
        
        <div className="flex items-center gap-3">
          <a 
            href="#email-signup" 
            className="hidden sm:inline-flex bg-ll-purple text-white px-4 py-2 rounded-full hover:bg-ll-purple-dark transition text-sm font-medium"
          >
            Join Waitlist
          </a>
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <>
          {/* backdrop to allow closing and ensure clickability */}
          <button aria-label="Close menu" onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/20 md:hidden z-[55]" />
          <div className="md:hidden fixed inset-x-0 top-16 bg-white border-t border-gray-200 shadow-md z-[60]">
            <div className="flex flex-col gap-1 p-3">
              <Link href="/" className="px-1 py-3 text-gray-700 hover:text-ll-purple transition" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="px-1 py-3 text-gray-700 hover:text-ll-purple transition" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="#products" className="px-1 py-3 text-gray-700 hover:text-ll-purple transition" onClick={() => setIsOpen(false)}>Products</Link>
              {onSneakPeekClick && (
                <button className="px-1 py-3 text-left text-gray-700 hover:text-ll-purple transition" onClick={() => { setIsOpen(false); onSneakPeekClick(); }}>
                  Sneak Peek
                </button>
              )}
              <Link href="#preorder" className="px-1 py-3 text-gray-700 hover:text-ll-purple transition" onClick={() => setIsOpen(false)}>Pre-Order</Link>
              <Link href="#email-signup" className="px-1 py-2">
                <span className="inline-flex w-full items-center justify-center bg-ll-purple text-white px-4 py-2 rounded-full text-sm font-medium">Join Waitlist</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar; 
