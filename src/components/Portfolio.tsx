import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ui/ProjectCard';
import Modal from './ui/Modal';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: 'Composite Regional Center for PwDs',
      description: 'Comprehensive web portal for persons with disabilities, providing resources, services, and accessibility features.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'Accessibility', 'CMS'],
      details: {
        overview: 'A specialized web portal designed to serve persons with disabilities, featuring accessibility-first design principles and comprehensive resource management.',
        features: [
          'Fully accessible design (WCAG 2.1 compliant)',
          'Multi-language support',
          'Resource library management',
          'Online service applications',
          'Community forum integration'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS3'],
        impact: 'Improved accessibility to government services for over 10,000+ users'
      }
    },
    {
      title: 'Bhagwans Purohit Vidya Mandir',
      description: 'Educational institution website with student management system, online admissions, and interactive learning modules.',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      details: {
        overview: 'Complete digital transformation of educational processes including admissions, student management, and parent-teacher communication.',
        features: [
          'Online admission system',
          'Student information management',
          'Grade tracking and reporting',
          'Parent-teacher communication portal',
          'Event management system'
        ],
        technologies: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'HTML5'],
        impact: 'Streamlined operations for 500+ students and reduced administrative workload by 60%'
      }
    },
    {
      title: 'Soft Spy - Monitoring Solution',
      description: 'Advanced monitoring and analytics platform for software performance tracking and user behavior analysis.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Django', 'PostgreSQL', 'Chart.js'],
      details: {
        overview: 'Comprehensive monitoring solution providing real-time insights into software performance and user interactions.',
        features: [
          'Real-time performance monitoring',
          'User behavior analytics',
          'Custom dashboard creation',
          'Alert system integration',
          'Data visualization tools'
        ],
        technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Chart.js'],
        impact: 'Helped 50+ businesses improve their software performance by 40%'
      }
    },
    {
      title: 'Event Mera - Event Management',
      description: 'Complete event management platform with booking system, vendor management, and real-time coordination tools.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Firebase', 'Stripe', 'Material-UI'],
      details: {
        overview: 'End-to-end event management solution connecting event organizers with venues, vendors, and attendees.',
        features: [
          'Event creation and management',
          'Venue and vendor booking',
          'Payment processing integration',
          'Real-time communication tools',
          'Attendee management system'
        ],
        technologies: ['React', 'Firebase', 'Stripe API', 'Material-UI', 'Node.js'],
        impact: 'Facilitated over 200+ successful events with 95% customer satisfaction'
      }
    },
    {
      title: 'TechClass - Learning Platform',
      description: 'Interactive online learning platform with video courses, assessments, and progress tracking for technical skills.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      details: {
        overview: 'Modern e-learning platform designed for technical education with interactive features and comprehensive tracking.',
        features: [
          'Interactive video courses',
          'Real-time coding exercises',
          'Progress tracking and certificates',
          'Live session integration',
          'Community discussion forums'
        ],
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC', 'Socket.io'],
        impact: 'Trained 1000+ students with 85% completion rate and positive feedback'
      }
    },
    {
      title: 'Enterprise ERP Solution',
      description: 'Comprehensive ERP system for manufacturing companies with inventory, HR, finance, and production modules.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Java', 'Spring Boot', 'Oracle', 'Angular'],
      details: {
        overview: 'Full-featured ERP solution designed for mid to large-scale manufacturing businesses to streamline operations.',
        features: [
          'Inventory management system',
          'Human resource management',
          'Financial accounting module',
          'Production planning tools',
          'Supply chain management'
        ],
        technologies: ['Java', 'Spring Boot', 'Oracle DB', 'Angular', 'Docker'],
        impact: 'Improved operational efficiency by 45% for client manufacturing units'
      }
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark-surface/20">
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
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-dark-muted max-w-3xl mx-auto leading-relaxed">
            Showcasing successful projects that have transformed businesses and created lasting impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              delay={index * 0.1}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-6">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            
            <div>
              <h4 className="font-semibold text-dark-text mb-2">Project Overview</h4>
              <p className="text-dark-muted text-sm leading-relaxed">
                {selectedProject.details.overview}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-dark-text mb-2">Key Features</h4>
              <ul className="space-y-2">
                {selectedProject.details.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start text-sm text-dark-muted">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-dark-text mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.details.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
              <h4 className="font-semibold text-primary-500 mb-2">Impact & Results</h4>
              <p className="text-dark-muted text-sm">
                {selectedProject.details.impact}
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedProject(null);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              Discuss Your Project
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;