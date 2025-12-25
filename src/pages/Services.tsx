import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { services } from '../data/services';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

export const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive software development solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <Section>
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {service.fullDescription}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Our Process
                    </h3>
                    <ul className="space-y-2">
                      {service.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <FiCheck className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button href="/contact" variant="primary" size="lg">
                    Get Started with {service.title}
                  </Button>
                </div>
                <div className={index % 2 === 0 ? 'lg:order-2' : ''}>
                  <Card className="h-full">
                    <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg flex items-center justify-center">
                      <span className="text-6xl">{service.icon}</span>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

