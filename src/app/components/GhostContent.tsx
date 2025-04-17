'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import ResponsiveImage from './ResponsiveImage';

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
      const alt = img.getAttribute('alt') || '';
      if (!src) return;

      // Ensure image URL is absolute
      const absoluteSrc = src.startsWith('http') 
        ? src 
        : `https://seo-and-content-strategy.ghost.io${src}`;

      // Create a wrapper div for the image
      const wrapper = document.createElement('div');
      wrapper.className = 'my-8 relative';

      // Create a new div for ResponsiveImage
      const imageContainer = document.createElement('div');
      imageContainer.className = 'relative aspect-[16/9]';

      // Create the image element with next/image attributes
      const nextImage = document.createElement('img');
      nextImage.setAttribute('src', absoluteSrc);
      nextImage.setAttribute('alt', alt);
      nextImage.setAttribute('loading', 'lazy');
      nextImage.className = 'object-cover rounded-lg';
      nextImage.style.position = 'absolute';
      nextImage.style.inset = '0';
      nextImage.style.width = '100%';
      nextImage.style.height = '100%';

      // Add caption if exists
      const caption = img.getAttribute('title') || img.getAttribute('data-caption');
      if (caption) {
        const figcaption = document.createElement('figcaption');
        figcaption.className = 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400';
        figcaption.textContent = caption;
        wrapper.appendChild(figcaption);
      }

      // Assemble the structure
      imageContainer.appendChild(nextImage);
      wrapper.appendChild(imageContainer);
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