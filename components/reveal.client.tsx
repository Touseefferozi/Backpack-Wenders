'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function RevealClient() {
  const markerRef = useRef<HTMLSpanElement | null>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const marker = markerRef.current;
    const el = marker?.parentElement as HTMLElement | null;
    if (!el) return;

    if (shouldReduce) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    const onIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.45s cubic-bezier(0.16,1,0.3,1), transform 0.45s cubic-bezier(0.16,1,0.3,1)';
          el.style.opacity = '1';
          el.style.transform = 'none';
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.22 });
    observer.observe(el);

    return () => observer.disconnect();
  }, [shouldReduce]);

  return <span ref={markerRef} style={{ display: 'contents' }} />;
}
