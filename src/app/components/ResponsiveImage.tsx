'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  variant?: 'feature' | 'author' | 'card';
  priority?: boolean;
}

export default function ResponsiveImage({ 
  src, 
  alt, 
  className = '', 
  variant = 'feature',
  priority = false 
}: ResponsiveImageProps) {
  console.log(`[ResponsiveImage] Rendering ${variant} image:`, { src, alt });

  const getImageConfig = () => {
    switch (variant) {
      case 'author':
        return {
          wrapperClass: 'relative h-10 w-10',
          imageClass: `rounded-full bg-gray-100 ${className}`,
          sizes: '40px',
          fallback: '/images/placeholder-author.jpg'
        };
      case 'card':
        return {
          wrapperClass: 'relative w-full aspect-[16/9]',
          imageClass: `object-cover rounded-lg ${className}`,
          sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
          fallback: '/images/placeholder-card.jpg'
        };
      case 'feature':
      default:
        return {
          wrapperClass: 'relative w-full aspect-[2/1] md:aspect-[21/9]',
          imageClass: `object-cover rounded-lg ${className}`,
          sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw',
          fallback: '/images/placeholder-feature.jpg'
        };
    }
  };

  const config = getImageConfig();
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <div className={config.wrapperClass}>
      <Image
        src={isError ? config.fallback : imgSrc}
        alt={alt}
        fill
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${config.imageClass}`}
        sizes={config.sizes}
        priority={priority}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setIsError(true);
          setIsLoading(false);
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse" />
      )}
    </div>
  );
} 