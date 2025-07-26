import { useState, useEffect } from 'react';

export const useScroll = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentPercent = window.scrollY / scrollableHeight;
      
      setIsScrolled(window.scrollY > threshold);
      setScrollPercent(currentPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { isScrolled, scrollPercent };
};
