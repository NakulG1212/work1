import React from 'react';
import { motion } from 'framer-motion';
import { Code, Twitter, Facebook, Youtube,Instagram, ArrowUp } from 'lucide-react';
import { scrollToTop } from '../utils/smoothScroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Sitemap', href: '#' },
  ];
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram'} 
  ];

  // facebook : https://www.facebook.com/share/1BqDuU7xzG/
  // insta : https://www.instagram.com/techclassofeducation/
  // youtube : https://www.youtube.com/@techclassofeducationtce7598

  return (
    <footer className="bg-dark-surface/50 backdrop-blur-sm border-t border-dark-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-4"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Code size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-dark-text">Sournaksh Buildsoft</h3>
                <p className="text-xs text-dark-muted -mt-1">Pvt. Ltd.</p>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-dark-muted leading-relaxed mb-6 max-w-md"
            >
              Building thoughtful digital experiences since 2018. We specialize in web development, 
              software solutions, and professional training programs in Nagpur.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-dark-bg/50 hover:bg-primary-500/20 border border-dark-muted/20 hover:border-primary-500/30 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon 
                    size={16} 
                    className="text-dark-muted group-hover:text-primary-500 transition-colors" 
                  />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-semibold text-dark-text mb-4"
            >
              Quick Links
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-dark-muted hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-semibold text-dark-text mb-4"
            >
              Contact Info
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3 text-sm text-dark-muted"
            >
              <p>Plot 123, Nilkanth Nagar<br />Nagpur, Maharashtra 440024</p>
              <p>
                <a href="tel:+919595506516" className="hover:text-primary-500 transition-colors">
                  +91 9595506516
                </a>
              </p>
              <p>
                <a href="mailto:jainsourabh1357@gmail.com" className="hover:text-primary-500 transition-colors">
                  jainsourabh1357@gmail.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-dark-muted/20 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <p className="text-dark-muted text-sm text-center sm:text-left">
            © {currentYear} Sournaksh Buildsoft Pvt. Ltd. All Rights Reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-primary-500/20 hover:bg-primary-500/30 border border-primary-500/30 rounded-lg flex items-center justify-center transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp 
              size={16} 
              className="text-primary-500 group-hover:text-primary-400 transition-colors" 
            />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;