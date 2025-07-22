'use client';

import { useEffect, useRef } from 'react';

interface GhostContentProps {
  html: string;
  className?: string;
}

export default function GhostContent({ html, className = '' }: GhostContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Handle external links - open in new tab
    const domain = window.location.hostname;
    const anchors = contentRef.current.querySelectorAll('a[href]'); // Only select links with href attribute
 
    anchors.forEach(anchor => {
      try {
        const anchorElement = anchor as HTMLAnchorElement;
        const { origin } = new URL(anchorElement.href); // Get link origin
 
        if (origin.indexOf(domain) === -1) { // Check if external link
          anchorElement.setAttribute('target', '_blank');
          anchorElement.setAttribute('rel', 'noopener noreferrer'); // This is a good practice to avoid tabnabbing
        }
      } catch {
        // Handle relative URLs or invalid URLs gracefully
        const anchorElement = anchor as HTMLAnchorElement;
        console.warn('Invalid URL in Ghost content:', anchorElement.href);
      }
    });

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
      wrapper.className = 'my-8';

      // Create the ResponsiveImage container
      const imageContainer = document.createElement('div');
      imageContainer.className = 'relative aspect-[16/9]';
      
      // Create a placeholder for the ResponsiveImage
      const imageDiv = document.createElement('div');
      imageDiv.setAttribute('data-image-src', absoluteSrc);
      imageDiv.setAttribute('data-image-alt', alt);
      imageDiv.className = 'ghost-image-placeholder';
      
      // Add caption if exists
      const caption = img.getAttribute('title') || img.getAttribute('data-caption');
      if (caption) {
        const figcaption = document.createElement('figcaption');
        figcaption.className = 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400';
        figcaption.textContent = caption;
        wrapper.appendChild(figcaption);
      }

      // Assemble the structure
      imageContainer.appendChild(imageDiv);
      wrapper.appendChild(imageContainer);
      img.parentNode?.replaceChild(wrapper, img);
    });

    // Replace placeholders with ResponsiveImage components
    const placeholders = contentRef.current.getElementsByClassName('ghost-image-placeholder');
    Array.from(placeholders).forEach((placeholder) => {
      const div = document.createElement('div');
      div.style.position = 'relative';
      div.style.width = '100%';
      div.style.height = '100%';
      
      const img = document.createElement('img');
      img.src = placeholder.getAttribute('data-image-src') || '';
      img.alt = placeholder.getAttribute('data-image-alt') || '';
      img.className = 'object-cover rounded-lg';
      img.style.width = '100%';
      img.style.height = '100%';
      
      div.appendChild(img);
      placeholder.parentNode?.replaceChild(div, placeholder);
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