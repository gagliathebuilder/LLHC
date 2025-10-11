import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye } from 'lucide-react';

interface NavbarProps {
  onSneakPeekClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSneakPeekClick }) => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-[75px] h-[75px] -ml-3">
            <Image
              src="/images/face.png"
              alt="Little Legends Hold Co."
              width={75}
              height={75}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <span className="ml-2 font-bold text-ll-purple text-xl">Little Legends</span>
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
            className="bg-ll-purple text-white px-4 py-2 rounded-full hover:bg-ll-purple-dark transition text-sm font-medium"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 
