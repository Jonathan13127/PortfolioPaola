import type { CSSProperties } from 'react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

interface FadeInSectionProps {
  children: React.ReactNode;
  /**
   * Délai avant le début de l'animation (en ms)
   * @default 0
   */
  delay?: number;
  /**
   * Durée de l'animation (en ms)
   * @default 600
   */
  duration?: number;
  /**
   * Classes CSS additionnelles
   */
  className?: string;
  /**
   * Le pourcentage de visibilité pour déclencher l'animation
   * @default 0.2
   */
  threshold?: number;
}

export function FadeInSection({
  children,
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.2,
}: FadeInSectionProps) {
  const [ elementRef, isVisible ] = useFadeInOnScroll({ 
    once: true, 
    threshold 
  });

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ${className}`}
      style={style}>
      {children}
    </div>
  );
}