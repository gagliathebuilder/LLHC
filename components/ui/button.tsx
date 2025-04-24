import React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-full font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ll-purple focus:ring-offset-2';
    
    const variantClasses = {
      primary: 'bg-ll-yellow text-ll-purple-dark hover:bg-ll-yellow-dark',
      secondary: 'bg-ll-purple text-white hover:bg-ll-purple-dark',
      outline: 'border-2 border-white text-white hover:bg-white/10',
    };
    
    const sizeClasses = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-12 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
    };

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button }; 