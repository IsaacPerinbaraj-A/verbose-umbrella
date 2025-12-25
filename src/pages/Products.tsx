import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { products } from '../data/products';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

export const Products = () => {
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
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Ready-to-use software solutions designed to accelerate your business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products List */}
      <Section>
        <div className="space-y-24">
          {products.map((product, index) => (
            <div key={product.id} id={product.id} className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                  <div className="mb-4">
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                      {product.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {product.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {product.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <FiCheck className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Use Cases
                    </h3>
                    <ul className="space-y-2">
                      {product.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-start text-gray-600 dark:text-gray-400">
                          <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button href="/contact" variant="primary" size="lg">
                    Request a Demo
                  </Button>
                </div>
                <div className={index % 2 === 0 ? 'lg:order-2' : ''}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full rounded-xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

