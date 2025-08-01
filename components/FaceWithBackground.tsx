import React from 'react';

interface FaceWithBackgroundProps {
  className?: string;
}

const FaceWithBackground: React.FC<FaceWithBackgroundProps> = ({ className = '' }) => {
  return (
    <div 
      className={`w-full h-full bg-green-600 flex items-center justify-center ${className}`}
      style={{
        background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)'
      }}
    >
      <img
        src="/images/face.png"
        alt="Little Legends Face"
        className="w-3/4 h-3/4 object-contain"
      />
    </div>
  );
};

export default FaceWithBackground; 