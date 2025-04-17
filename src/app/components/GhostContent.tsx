import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface GhostContentProps {
  html: string;
  className?: string;
}

export default function GhostContent({ html, className = '' }: GhostContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Find all img tags in the content
    const images = contentRef.current.getElementsByTagName('img');
    
    // Convert NodeList to Array for iteration
    Array.from(images).forEach((img) => {
      const src = img.getAttribute('src');
      if (!src) return;

      // Create a wrapper div for the image
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.width = '100%';
      wrapper.style.height = 'auto';
      wrapper.style.aspectRatio = '16/9';
      wrapper.className = 'my-4';

      // Replace the img with a next/image
      const nextImage = document.createElement('img');
      nextImage.setAttribute('src', src);
      nextImage.setAttribute('alt', img.getAttribute('alt') || '');
      nextImage.style.objectFit = 'cover';
      nextImage.style.width = '100%';
      nextImage.style.height = '100%';

      // Add loading="lazy" for better performance
      nextImage.setAttribute('loading', 'lazy');
      
      // Replace the original img with our wrapped version
      wrapper.appendChild(nextImage);
      img.parentNode?.replaceChild(wrapper, img);
    });
  }, [html]);

  return (
    <div 
      ref={contentRef}
      className={`prose prose-lg dark:prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
} 