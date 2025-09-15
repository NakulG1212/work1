import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  delay?: number;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  delay = 0,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer bg-dark-surface/50 backdrop-blur-sm border border-dark-muted/20 rounded-2xl overflow-hidden hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            <button className="p-2 bg-dark-surface/80 backdrop-blur-sm rounded-lg hover:bg-primary-500/20 transition-colors">
              <ExternalLink size={16} className="text-dark-text" />
            </button>
            <button className="p-2 bg-dark-surface/80 backdrop-blur-sm rounded-lg hover:bg-primary-500/20 transition-colors">
              <Code size={16} className="text-dark-text" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-dark-text group-hover:text-primary-500 transition-colors">
          {title}
        </h3>
        <p className="text-dark-muted text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;