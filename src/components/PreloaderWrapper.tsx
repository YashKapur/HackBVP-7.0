'use client';

import { useState, ReactNode } from 'react';
import Preloader from './Preloader';

export default function PreloaderWrapper({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && <Preloader onVideoEnd={() => setIsLoading(false)} />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
}
