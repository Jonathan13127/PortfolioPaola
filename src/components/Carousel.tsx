import { useEffect, useState, useRef, useMemo } from 'react';
import { motion, type PanInfo, useMotionValue, useTransform } from 'framer-motion';
import React, { type JSX } from 'react';
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
}

export interface CarouselProps {
  items?: CarouselItem[];
  widthPercent?: number;
  heightPercent?: number;
  autoplay?: boolean;
  backgroundColor?: string;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
    icon: <FiFileText className="h-4 w-4 text-white" />
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: <FiCircle className="h-4 w-4 text-white" />
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: <FiLayers className="h-4 w-4 text-white" />
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4,
    icon: <FiLayout className="h-4 w-4 text-white" />
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
    icon: <FiCode className="h-4 w-4 text-white" />
  }
];

const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  widthPercent = 100,
  heightPercent = 100,
  backgroundColor = "black",
  autoplay = false,
  autoplayDelay = 2000,
  pauseOnHover = false,
  loop = false,
  round = false
}: CarouselProps): JSX.Element {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const carouselItems = useMemo(() => (loop ? [...items, items[0]] : items), [items, loop]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  // Mesurer les dimensions du conteneur
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const parent = containerRef.current.parentElement;
        if (parent) {
          const parentRect = parent.getBoundingClientRect();
          setDimensions({ 
            width: (parentRect.width * widthPercent) / 100, 
            height: (parentRect.height * heightPercent) / 100 
          });
        }
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    // Observer pour détecter les changements de taille du parent
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current?.parentElement) {
      resizeObserver.observe(containerRef.current.parentElement);
    }
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
      resizeObserver.disconnect();
    };
  }, [widthPercent, heightPercent]);

  // Calculs responsives basés sur les dimensions réelles
  const containerPadding = round ? dimensions.width * 0.05 : dimensions.width * 0.04;
  const itemWidth = dimensions.width - containerPadding * 2;
  const dotHeight = dimensions.width * 0.015 * 1.3 * 2; // hauteur des dots avec scale et gap
  const itemHeight = dimensions.height - containerPadding * 2 - dotHeight -  containerPadding;
  const GAP = dimensions.width * 0.04;
  const trackItemOffset = itemWidth + GAP;
  

  // Handle hover events
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  // Autoplay logic
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered) && !isResetting) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover, isResetting]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      requestAnimationFrame(() => {
        setTimeout(() => setIsResetting(false), 50);
      });
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        x.set(-(items.length - 1) * trackItemOffset);
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0
        }
      };

  // Calculs responsifs pour le texte
  const titleFontSize = Math.max(dimensions.width * 0.045, 14);
  const descFontSize = Math.max(dimensions.width * 0.032, 12);
  const dotSize = Math.max(dimensions.width * 0.015, 6);

  return (
    <div
      ref={containerRef}
      className={'relative overflow-hidden rounded-3xl border border-neutral-800'}
      style={{
        background: backgroundColor,
        width: `${widthPercent}%`,
        height: `${heightPercent}%`,
        padding: `${containerPadding}px`
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        dragElastic={0.1}
        {...dragProps}
        style={{
          width: itemWidth,
          height: itemHeight,
          gap: `${GAP}px`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}>
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset, 
            -index * trackItemOffset, 
            -(index - 1) * trackItemOffset
          ];
          const outputRange = [45, 0, -45];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          
          return (
            <motion.div
              key={`${item.id}-${index}`}
              className={`relative shrink-0 flex flex-col ${'items-start justify-between bg-neutral-800 border border-neutral-700 rounded-2xl'} 
              overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth ,
                height: itemHeight,
                rotateY: rotateY,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                padding: `${containerPadding}px`
              }}
              transition={effectiveTransition}
            >
              <div className="w-full">
                <div 
                  className={`mb-1 font-black text-white }`}
                  style={{ fontSize: `${titleFontSize}px` }}
                >
                  {item.title}
                </div>
                <p 
                  className={`text-white/70 ${round ? 'text-center' : ''}`}
                  style={{ fontSize: `${descFontSize}px` }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Dots navigation */}
      <div 
        className={`flex w-full justify-center ${
          round ? 'absolute z-20 left-1/2 -translate-x-1/2' : ''
        }`}
        style={{
          bottom: round ? `${containerPadding * 2}px` : 'auto',
          marginTop: round ? 0 : `${containerPadding}px`
        }}
      >
        <div className="flex" style={{ gap: `${dotSize}px` }}>
          {items.map((_, index) => (
            <motion.button
              key={index}
              className={`rounded-full cursor-pointer transition-colors duration-200 ${
                currentIndex % items.length === index
                  ? 'bg-black' : 'bg-black/20'
              }`}
              style={{
                width: `${dotSize}px`,
                height: `${dotSize}px`
              }}
              animate={{
                scale: currentIndex % items.length === index ? 1.3 : 1
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.2 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}