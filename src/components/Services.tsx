import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Settings, GraduationCap } from 'lucide-react';
import ServiceCard from './ui/ServiceCard';
import Modal from './ui/Modal';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Complete web solutions from design to deployment, creating responsive and user-friendly websites.',
      features: [
        'Custom Website Design & Development',
        'Responsive Mobile-First Design',
        'E-commerce Solutions & CMS Integration',
        'Website Maintenance & Support',
        'SEO Optimization & Performance Tuning'
      ],
      details: {
        overview: 'Our web development services focus on creating modern, responsive websites that engage users and drive business results. We use the latest technologies and best practices to ensure your website performs excellently across all devices.',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
        deliverables: [
          'Fully responsive website',
          'Admin dashboard (if applicable)',
          'Source code and documentation',
          '3 months of free support',
          'SEO-optimized content structure'
        ]
      }
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs with comprehensive testing and support.',
      features: [
        'Custom Software Development',
        'Application Testing & Quality Assurance',
        'Software Outsourcing Services',
        'Legacy System Modernization',
        'API Development & Integration'
      ],
      details: {
        overview: 'We develop robust, scalable software solutions that streamline your business operations and improve productivity. Our team follows agile methodologies to ensure timely delivery and quality results.',
        technologies: ['Java', 'Python', 'React', 'Angular', '.NET', 'MySQL', 'PostgreSQL'],
        deliverables: [
          'Custom software application',
          'Comprehensive testing reports',
          'User training and documentation',
          'Ongoing maintenance support',
          'Regular updates and patches'
        ]
      }
    },
    {
      icon: Settings,
      title: 'Software Solutions',
      description: 'Comprehensive enterprise solutions including ERP, CMS, and UI/UX consulting services.',
      features: [
        'Enterprise Resource Planning (ERP)',
        'Content Management Systems (CMS)',
        'UI/UX Design & Consulting',
        'Business Process Automation',
        'System Integration Services'
      ],
      details: {
        overview: 'Our software solutions are designed to optimize your business processes and improve operational efficiency. We provide end-to-end consulting and implementation services.',
        technologies: ['SAP', 'Oracle', 'Salesforce', 'WordPress', 'Drupal', 'Figma', 'Adobe XD'],
        deliverables: [
          'Complete system implementation',
          'User training and support',
          'Process optimization guidelines',
          'Integration with existing systems',
          '6 months of technical support'
        ]
      }
    },
    {
      icon: GraduationCap,
      title: 'Training & Internship',
      description: 'Professional training programs and internships to build real-world development skills.',
      features: [
        'Corporate Training Programs',
        '6-Month Comprehensive Internships',
        'Short-Term Skill Development Courses',
        'Hands-On Project Experience',
        'Industry-Ready Certification'
      ],
      details: {
        overview: 'Our training programs combine theoretical knowledge with practical experience, preparing students and professionals for successful careers in software development.',
        programs: [
          'Full Stack Web Development (6 months)',
          'React.js Specialization (3 months)',
          'Mobile App Development (4 months)',
          'Corporate Training (Customized)',
          'Weekend Workshops (1-2 days)'
        ],
        outcomes: [
          'Industry-ready skills',
          'Portfolio of real projects',
          'Professional certification',
          'Job placement assistance',
          'Continued mentorship support'
        ]
      }
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-dark-muted max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform your business and accelerate growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index * 0.1}
              onLearnMore={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ''}
      >
        {selectedService && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                <selectedService.icon size={20} className="text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-dark-text">{selectedService.title}</h3>
            </div>
            
            <div>
              <h4 className="font-semibold text-dark-text mb-2">Overview</h4>
              <p className="text-dark-muted text-sm leading-relaxed">
                {selectedService.details.overview}
              </p>
            </div>

            {selectedService.details.technologies && (
              <div>
                <h4 className="font-semibold text-dark-text mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.details.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedService.details.programs && (
              <div>
                <h4 className="font-semibold text-dark-text mb-2">Training Programs</h4>
                <ul className="space-y-2">
                  {selectedService.details.programs.map((program: string, index: number) => (
                    <li key={index} className="flex items-start text-sm text-dark-muted">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {program}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="font-semibold text-dark-text mb-2">
                {selectedService.details.deliverables ? 'What You Get' : 'Learning Outcomes'}
              </h4>
              <ul className="space-y-2">
                {(selectedService.details.deliverables || selectedService.details.outcomes).map((item: string, index: number) => (
                  <li key={index} className="flex items-start text-sm text-dark-muted">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                setSelectedService(null);
                // Add smooth scroll to contact
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Services;