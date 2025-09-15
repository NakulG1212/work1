import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Zap, Users, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Trust',
      description: 'Building lasting relationships through transparency and reliability'
    },
    {
      icon: Zap,
      title: 'Hard Work',
      description: 'Committed to excellence in every project we undertake'
    },
    {
      icon: Target,
      title: 'Dedication',
      description: 'Focused on delivering solutions that exceed expectations'
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Professional Excellence',
      description: '6+ years of delivering quality solutions'
    },
    {
      icon: Users,
      title: 'Training & Internships',
      description: 'Hands-on learning with real-world projects'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'On-time project completion with quality assurance'
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-surface/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Sournaksh Buildsoft
            </span>
          </h2>
          <p className="text-xl text-dark-muted max-w-3xl mx-auto leading-relaxed">
            Founded in 2018 and based in Nagpur, we are a professional web and software 
            development company committed to building thoughtful digital experiences that 
            drive business growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-dark-text">Our Mission</h3>
            <p className="text-dark-muted leading-relaxed">
              To empower businesses with cutting-edge web and software solutions while nurturing 
              the next generation of developers through comprehensive training and internship programs. 
              We believe in creating value through innovation, quality, and continuous learning.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                <p className="text-dark-muted">
                  <strong className="text-primary-500">Web Development:</strong> Creating responsive, 
                  user-friendly websites that convert visitors into customers
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                <p className="text-dark-muted">
                  <strong className="text-primary-500">Software Solutions:</strong> Building robust 
                  applications that streamline business operations
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                <p className="text-dark-muted">
                  <strong className="text-primary-500">Training Programs:</strong> Providing hands-on 
                  experience in real-world development environments
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-surface/50 backdrop-blur-sm border border-dark-muted/20 rounded-xl p-6 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <feature.icon size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-dark-text">{feature.title}</h4>
                    <p className="text-dark-muted">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Core Values</h3>
          <p className="text-dark-muted max-w-2xl mx-auto">
            The principles that guide everything we do and shape our company culture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon size={28} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-dark-text">{value.title}</h4>
              <p className="text-dark-muted leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;