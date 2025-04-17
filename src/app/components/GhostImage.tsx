'use client';

import Image from 'next/image';

interface GhostImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function GhostImage({ src, alt, className = '', priority = false }: GhostImageProps) {
  return (
    <div className="relative w-full h-[400px] mb-8">
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={(e) => {
          console.error('Image failed to load:', {
            src,
            error: e
          });
        }}
        priority={priority}
      />
    </div>
  );
} 