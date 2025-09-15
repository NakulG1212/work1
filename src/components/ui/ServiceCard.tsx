import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
  onLearnMore?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  delay = 0,
  onLearnMore,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-dark-surface/50 backdrop-blur-sm border border-dark-muted/20 rounded-2xl p-6 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500/30 transition-colors duration-300">
          <Icon size={24} className="text-primary-500" />
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-dark-text">{title}</h3>
        <p className="text-dark-muted mb-4 leading-relaxed">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-dark-muted">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        {onLearnMore && (
          <button
            onClick={onLearnMore}
            className="text-primary-500 hover:text-primary-400 font-medium text-sm transition-colors duration-200"
            aria-label={`Learn more about ${title}`}
          >
            Learn more →
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;