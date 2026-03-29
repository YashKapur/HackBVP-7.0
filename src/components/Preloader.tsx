'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface PreloaderProps {
  onVideoEnd: () => void;
}

export default function Preloader({ onVideoEnd }: PreloaderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Autoplay prevented:', error);
          const handleFirstInteraction = () => {
            video.play().catch(console.error);
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('touchstart', handleFirstInteraction);
          };
          document.addEventListener('click', handleFirstInteraction, { once: true });
          document.addEventListener('touchstart', handleFirstInteraction, { once: true });
        });
      }
    }
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
      >
        <motion.video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          disablePictureInPicture
          preload="auto"
          onEnded={onVideoEnd}
          className="h-[40vh] w-auto object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
        >
          {/*
            TODO: Add your own intro video to /public/ and update the src below.
            Recommended: keep it under 5 seconds, 1080p max, MP4 format.
            If you don't want a preloader video at all, remove <PreloaderWrapper>
            from src/app/layout.tsx and delete this component.
          */}
          <source src="/your-preloader.mp4" type="video/mp4" />
        </motion.video>
      </motion.div>
    </AnimatePresence>
  );
}
