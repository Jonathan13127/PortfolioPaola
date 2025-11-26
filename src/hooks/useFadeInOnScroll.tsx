import { useEffect, useRef, useState } from 'react';

interface UseFadeInOnScrollOptions {
  /**
   * Le pourcentage de visibilité nécessaire pour déclencher l'animation (0 à 1)
   * @default 0.1
   */
  threshold?: number;
  
  /**
   * Marge autour de la zone de visibilité (format CSS)
   * @default '0px'
   * @example '50px 0px' // 50px en haut et bas
   */
  rootMargin?: string;
  
  /**
   * Si true, l'animation ne se déclenche qu'une seule fois
   * @default true
   */
  once?: boolean;
}

type UseFadeInOnScrollReturn = [
  /**
   * Ref à attacher à l'élément DOM à observer
   */
  React.RefObject<HTMLDivElement | null>,
  
  /**
   * État indiquant si l'élément est visible dans le viewport
   */
  boolean
];

/**
 * Hook personnalisé pour détecter quand un élément entre dans le viewport
 * et déclencher une animation fade-in au scroll
 * 
 * @param options - Options de configuration pour l'Intersection Observer
 * @returns Un tuple [ref, isVisible] où ref est à attacher à l'élément et isVisible indique la visibilité
 * 
 * @example
 * ```tsx
 * const [ref, isVisible] = useFadeInOnScroll({ threshold: 0.2, once: true });
 * 
 * return (
 *   <div 
 *     ref={ref}
 *     className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
 *   >
 *     Contenu
 *   </div>
 * );
 * ```
 */
export function useFadeInOnScroll(
  options: UseFadeInOnScrollOptions = {}
): UseFadeInOnScrollReturn {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Arrêter d'observer une fois visible si l'option 'once' est activée
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!once) {
          // Réinitialiser la visibilité si l'option 'once' est désactivée
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElement = elementRef.current;
    
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup : arrêter d'observer lors du démontage
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, once]);

  return [elementRef, isVisible];
}