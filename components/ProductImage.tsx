import React from 'react';

interface ProductImageProps {
  title: string;
  color: string; // Main color for the product
  accentColor: string; // Accent color for details
}

const ProductImage: React.FC<ProductImageProps> = ({ title, color, accentColor }) => {
  // Create consistent initials for the product
  const initials = title
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <div 
      className="w-[160px] h-[160px] rounded-lg flex items-center justify-center mx-auto" 
      style={{ backgroundColor: color }}
    >
      <div 
        className="w-[120px] h-[120px] rounded-md flex items-center justify-center"
        style={{ backgroundColor: accentColor }}
      >
        <span className="text-white text-4xl font-bold">{initials}</span>
      </div>
    </div>
  );
};

export default ProductImage; 