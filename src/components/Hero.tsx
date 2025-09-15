import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { smoothScroll } from '../utils/smoothScroll';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-dark-surface" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-secondary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-primary-500/10 text-primary-500 px-4 py-2 rounded-full text-sm font-medium"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span>Founded in 2018 • Nagpur Based</span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                We build{' '}
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  thoughtful
                </span>{' '}
                digital experiences
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl text-dark-muted leading-relaxed max-w-lg"
              >
                Web, Software & Training — professional development with hands-on 
                training and internships to build your digital future.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => smoothScroll('contact')}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                <span>Get a Quote</span>
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => smoothScroll('portfolio')}
                className="bg-dark-surface/50 backdrop-blur-sm border border-dark-muted/20 text-dark-text px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-dark-surface/70 hover:border-primary-500/30 transition-all duration-300"
              >
                <Play size={20} />
                <span>View Portfolio</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center space-x-8 text-sm text-dark-muted"
            >
              <div>
                <div className="text-2xl font-bold text-primary-500">50+</div>
                <div>Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-500">100+</div>
                <div>Students Trained</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-500">6+</div>
                <div>Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-dark-surface/30 backdrop-blur-sm border border-dark-muted/20 rounded-3xl p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-primary-500/50 to-transparent rounded" />
                  <div className="h-4 bg-gradient-to-r from-secondary-500/50 to-transparent rounded w-3/4" />
                  <div className="h-4 bg-gradient-to-r from-primary-500/30 to-transparent rounded w-1/2" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-16 bg-dark-muted/10 rounded-lg" />
                  <div className="h-16 bg-dark-muted/10 rounded-lg" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-16 bg-gradient-to-b from-primary-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;