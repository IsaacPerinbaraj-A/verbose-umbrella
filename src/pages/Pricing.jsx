import { Section } from '../components/ui/Section';
import { PricingCard } from '../components/shared/PricingCard';
import { pricingPlans, pricingFeatures } from '../data/pricing';
import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

export const Pricing = () => {
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
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Choose the plan that's right for your business. All plans include our core features.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    Starter
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white bg-primary-50 dark:bg-primary-900/20">
                    Professional
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {pricingFeatures.map((feature, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.starter === 'boolean' ? (
                        feature.starter ? (
                          <FiCheck className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <FiX className="w-5 h-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature.starter}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center bg-primary-50 dark:bg-primary-900/20">
                      {typeof feature.professional === 'boolean' ? (
                        feature.professional ? (
                          <FiCheck className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <FiX className="w-5 h-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature.professional}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.enterprise === 'boolean' ? (
                        feature.enterprise ? (
                          <FiCheck className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <FiX className="w-5 h-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>
    </>
  );
};

