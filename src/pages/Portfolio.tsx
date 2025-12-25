import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { PortfolioCard } from '../components/shared/PortfolioCard';
import { caseStudies } from '../data/portfolio';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const categories = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.category)))];

export const Portfolio = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const caseStudy = caseStudies.find(cs => cs.id === id);
      if (caseStudy) {
        setSelectedCaseStudy(id);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }, [location]);

  const filteredCaseStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);

  const caseStudy = selectedCaseStudy ? caseStudies.find(cs => cs.id === selectedCaseStudy) : null;

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
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore our successful projects and see how we've helped businesses achieve their goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <Section>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-2 rounded-full font-medium transition-colors
                ${selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredCaseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              id={caseStudy.id}
            >
              <PortfolioCard caseStudy={caseStudy} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Detailed Case Study Modal/View */}
      {caseStudy && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCaseStudy(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <Card>
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="mb-4">
                <span className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                  {caseStudy.category}
                </span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {caseStudy.client} • {caseStudy.duration}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {caseStudy.title}
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Problem
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Solution
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {caseStudy.solution}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Results
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                        {result.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => setSelectedCaseStudy(null)} variant="outline">
                  Close
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      )}
    </>
  );
};

