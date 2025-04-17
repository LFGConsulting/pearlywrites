'use client';

import Image from 'next/image';

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

  return (
    <div className={config.wrapperClass}>
      <Image
        src={src}
        alt={alt}
        fill
        className={config.imageClass}
        sizes={config.sizes}
        priority={priority}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU6PjIyRkU/QUJHSkdGUjpFRkL/2wBDAR8XFx4aHR4pISE+MSsuMT4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        style={{ 
          objectFit: 'cover',
          // Add fallback background color
          backgroundColor: 'rgb(243 244 246)'
        }}
      />
    </div>
  );
} 