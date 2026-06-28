import React, { useState, useEffect, useRef } from 'react';
import { Loader2 } from 'lucide-react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  id?: string;
  width?: string | number;
  height?: string | number;
  fetchPriority?: 'high' | 'low' | 'auto';
  loading?: 'lazy' | 'eager';
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  onClick,
  referrerPolicy = 'no-referrer',
  id,
  width,
  height,
  fetchPriority,
  loading = 'lazy'
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If the browser doesn't support IntersectionObserver, load immediately
    if (!window.IntersectionObserver) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '200px', // Start loading 200px before it enters the viewport
        threshold: 0.01,
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef && observer) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      id={id}
      className={`relative w-full h-full bg-slate-900/5 overflow-hidden select-none ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {/* Preloading / Loading skeleton screen with a rotating spinner */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center animate-pulse transition-opacity duration-300 z-10">
          <Loader2 className="h-6 w-6 text-slate-300 animate-spin" />
        </div>
      )}

      {/* Actual Image, rendered after entering viewport */}
      {isIntersecting && (
        <img
          src={src}
          alt={alt}
          referrerPolicy={referrerPolicy}
          loading={loading}
          {...{ fetchpriority: fetchPriority }}
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          className={`${className} transition-opacity duration-700 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
};

export default LazyImage;
