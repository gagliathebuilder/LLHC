import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Video, Image as ImageIcon } from 'lucide-react';

interface NavbarProps {
  showVideoHero?: boolean;
  onToggleVideo?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ showVideoHero = false, onToggleVideo }) => {
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
            <Link href="#products" className="text-gray-700 hover:text-ll-purple transition font-medium">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-ll-purple transition font-medium">
              About
            </Link>
          </div>
        </nav>
        
        <div className="flex items-center gap-3">
          {onToggleVideo && (
            <button
              onClick={onToggleVideo}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              title={showVideoHero ? "Switch to Image Hero" : "Switch to Video Hero"}
            >
              {showVideoHero ? (
                <ImageIcon className="w-5 h-5 text-gray-600" />
              ) : (
                <Video className="w-5 h-5 text-gray-600" />
              )}
            </button>
          )}
          <button className="bg-ll-purple text-white px-4 py-2 rounded-full hover:bg-ll-purple-dark transition text-sm font-medium">
            Join Waitlist
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 