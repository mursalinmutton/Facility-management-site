import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftRight, Pause, Play } from 'lucide-react';
import { PortfolioCard } from './PortfolioCard';
import type { PortfolioItem } from '../types/portfolio';

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Modern Web Application",
    description: "A full-stack application built with React and Node.js",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["React", "Node.js", "TypeScript"],
    link: "#"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Feature-rich online shopping experience",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tags: ["Next.js", "Stripe", "Tailwind"],
    link: "#"
  },
  {
    id: 3,
    title: "Mobile App Design",
    description: "UI/UX design for a fitness tracking app",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tags: ["UI/UX", "Figma", "Mobile"],
    link: "#"
  },
  {
    id: 4,
    title: "Brand Identity",
    description: "Complete branding package for a startup",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
    tags: ["Branding", "Design", "Logo"],
    link: "#"
  },
  {
    id: 5,
    title: "AI Dashboard",
    description: "Analytics dashboard with AI insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["AI", "Dashboard", "Analytics"],
    link: "#"
  },
  {
    id: 6,
    title: "Social Media Platform",
    description: "Next-gen social networking experience",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["Social", "React", "Firebase"],
    link: "#"
  },
  {
    id: 7,
    title: "3D Game Development",
    description: "Immersive gaming experience with WebGL",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
    tags: ["Three.js", "WebGL", "Gaming"],
    link: "#"
  },
  {
    id: 8,
    title: "Healthcare Dashboard",
    description: "Patient management system interface",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Healthcare", "Dashboard", "UX"],
    link: "#"
  },
  {
    id: 9,
    title: "Crypto Trading Platform",
    description: "Real-time cryptocurrency trading interface",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80",
    tags: ["Crypto", "Finance", "Real-time"],
    link: "#"
  },
  {
    id: 10,
    title: "Smart Home App",
    description: "IoT device management dashboard",
    image: "https://images.unsplash.com/photo-1558002038-bb4237b54c7f?w=800&q=80",
    tags: ["IoT", "Smart Home", "Mobile"],
    link: "#"
  }
];

// Create an infinite array by repeating the items multiple times
const infiniteItems = [...portfolioItems, ...portfolioItems, ...portfolioItems, ...portfolioItems];

export const PortfolioSlider = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [items, setItems] = useState(infiniteItems);
  const [isPlaying, setIsPlaying] = useState(true);

  const moveItems = useCallback(() => {
    setItems((currentItems) => {
      const newItems = [...currentItems];
      if (direction === 'left') {
        const first = newItems.shift();
        if (first) newItems.push(first);
      } else {
        const last = newItems.pop();
        if (last) newItems.unshift(last);
      }
      return newItems;
    });
  }, [direction]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && !hoveredId) {
      interval = setInterval(moveItems, 5000); // Slower animation (5 seconds)
    }

    return () => clearInterval(interval);
  }, [moveItems, isPlaying, hoveredId]);

  const toggleDirection = () => {
    setDirection(prev => prev === 'left' ? 'right' : 'left');
  };

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const handleHover = (id: number | null) => {
    setHoveredId(id);
  };

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden perspective-1000">
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button
          onClick={togglePlayPause}
          className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="text-white" /> : <Play className="text-white" />}
        </button>
        <button
          onClick={toggleDirection}
          className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          title="Toggle direction"
        >
          <ArrowLeftRight className="text-white" />
        </button>
      </div>

      <div className="relative w-full h-full flex items-center">
        <AnimatePresence>
          {items.map((item, index) => {
            const offset = index * 80; // Reduced offset for tighter stacking
            return (
              <motion.div
                key={`${item.id}-${index}`}
                initial={{ x: direction === 'left' ? window.innerWidth : -window.innerWidth }}
                animate={{
                  x: offset - (window.innerWidth / 2) + 200,
                  rotateY: hoveredId === item.id ? 0 : 15,
                  scale: hoveredId === item.id ? 1.1 : 1,
                  transition: { 
                    duration: 1.2,
                    ease: "easeInOut"
                  }
                }}
                exit={{
                  x: direction === 'left' ? -window.innerWidth : window.innerWidth,
                  transition: { duration: 1.2 }
                }}
                style={{ 
                  position: 'absolute',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <PortfolioCard
                  item={item}
                  index={index}
                  isHovered={hoveredId === item.id}
                  onHover={handleHover}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};