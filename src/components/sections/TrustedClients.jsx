import { motion } from 'framer-motion';
import { Section } from '../ui/Section';

const clients = [
  'TechRetail Inc.',
  'HealthCare Solutions',
  'FinanceFlow',
  'DataSync Corp',
  'ServicePro',
  'WorkFlow Systems'
];

export const TrustedClients = () => {
  return (
    <Section className="bg-gray-50 dark:bg-gray-800/50">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-2">
          Trusted By Industry Leaders
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {clients.map((client, index) => (
          <motion.div
            key={client}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <span className="text-xl font-bold text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              {client}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

