import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-[50px] h-[50px]">
            <Image
              src="/images/face.png"
              alt="Little Legends Hold Co."
              width={50}
              height={50}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <span className="ml-2 font-bold text-ll-purple text-xl">Little Legends Hold Co.</span>
        </Link>
        
        <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-ll-purple transition font-medium">
              Home
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-ll-purple transition font-medium">
              Products
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-ll-purple transition font-medium">
              About
            </Link>
          </div>
        </nav>
        
        <button className="bg-ll-purple text-white px-4 py-2 rounded-full hover:bg-ll-purple-dark transition text-sm font-medium">
          Join Waitlist
        </button>
      </div>
    </header>
  );
};

export default Navbar; 