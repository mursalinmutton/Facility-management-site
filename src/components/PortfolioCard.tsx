import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { PortfolioItem } from '../types/portfolio';

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
  isHovered: boolean;
  onHover: (id: number | null) => void;
}

export const PortfolioCard = ({ item, index, isHovered, onHover }: PortfolioCardProps) => {
  return (
    <motion.div
      className="absolute w-[400px] h-[500px] rounded-xl cursor-pointer"
      style={{
        zIndex: isHovered ? 999 : index,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        scale: isHovered ? 1.2 : 1,
        y: isHovered ? -50 : 0,
        rotateY: isHovered ? 0 : 15,
        translateZ: isHovered ? 200 : 0,
        transition: { 
          duration: 0.5,
          ease: "easeOut"
        },
      }}
      whileHover={{
        scale: 1.2,
        y: -50,
        rotateY: 0,
        translateZ: 200,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => onHover(item.id)}
      onHoverEnd={() => onHover(null)}
    >
      <div className="relative w-full h-full overflow-hidden rounded-xl group">
        <div className={`w-full h-full transform transition-all duration-500 ${isHovered ? 'shadow-[0_0_50px_rgba(0,0,0,0.5)]' : ''}`}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm mb-3 text-gray-200">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-white/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};