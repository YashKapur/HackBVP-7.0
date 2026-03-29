'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode[];
  className?: string;
  id: string;
}

import { Children } from 'react';

export default function ScrollAnimation({ 
  children,
  className = '',
  id 
}: ScrollAnimationProps) {
  const slides = Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle wheel event for navigation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;
      isScrolling = true;
      
      if (e.deltaY > 10) {  // Add threshold to prevent double triggers
        setCurrentIndex(prev => {
          const next = Math.min(prev + 1, slides.length - 1);
          return next !== prev ? next : prev;
        });
      } else if (e.deltaY < -10) {
        setCurrentIndex(prev => {
          const next = Math.max(prev - 1, 0);
          return next !== prev ? next : prev;
        });
      }

      // Add a cooldown to prevent rapid firing
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 800); // 800ms cooldown between scrolls
    };

    // Add touch events for mobile
    let touchStartX = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          // Swipe left - go to next
          setCurrentIndex(prev => Math.min(prev + 1, slides.length - 1));
        } else {
          // Swipe right - go to previous
          setCurrentIndex(prev => Math.max(prev - 1, 0));
        }
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });
    
    return () => {
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend', onTouchEnd);
      clearTimeout(scrollTimeout);
    };
  }, [slides.length]);

  // Animate when currentIndex changes
  useEffect(() => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smoother motion
      }
    });
  }, [currentIndex, controls]);

  // Handle keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentIndex(prev => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [slides.length]);

  return (
    <div 
      ref={containerRef}
      className={`h-screen w-screen overflow-hidden select-none ${className}`}
      id={id}
      style={{ touchAction: 'pan-y' }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 flex items-center justify-center w-full h-full"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          {slides[currentIndex]}
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation Dots */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
