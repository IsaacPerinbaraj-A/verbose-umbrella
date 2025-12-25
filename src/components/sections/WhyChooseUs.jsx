import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiTrendingUp, FiShield, FiZap, FiHeadphones } from 'react-icons/fi';

const features = [
  {
    icon: FiCode,
    title: 'Expert Team',
    description: 'Our developers are experts in cutting-edge technologies and best practices.'
  },
  {
    icon: FiUsers,
    title: 'Client-Focused',
    description: 'We prioritize your success and work closely with you throughout the project.'
  },
  {
    icon: FiTrendingUp,
    title: 'Proven Results',
    description: 'Track record of delivering projects on time and exceeding expectations.'
  },
  {
    icon: FiShield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime guarantee for all solutions.'
  },
  {
    icon: FiZap,
    title: 'Fast Delivery',
    description: 'Agile methodology ensures rapid iterations and faster time-to-market.'
  },
  {
    icon: FiHeadphones,
    title: '24/7 Support',
    description: 'Round-the-clock support to keep your applications running smoothly.'
  }
];

export const WhyChooseUs = () => {
  return (
    <Section 
      title="Why Choose Us"
      subtitle="We combine technical expertise with business acumen to deliver exceptional results"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <div className="text-4xl mb-4 text-primary-600 dark:text-primary-400">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

