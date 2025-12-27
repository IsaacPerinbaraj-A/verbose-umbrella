import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart, FiCode, FiShield } from 'react-icons/fi';

const coreValues = [
  {
    icon: FiHeart,
    title: 'Customer First',
    description: 'We put our clients at the center of everything we do, ensuring their success is our priority.'
  },
  {
    icon: FiCode,
    title: 'Technical Excellence',
    description: 'We stay at the forefront of technology, using the best tools and practices to deliver quality solutions.'
  },
  {
    icon: FiTarget,
    title: 'Results-Driven',
    description: 'We focus on outcomes that matter, measuring success by the value we create for our clients.'
  },
  {
    icon: FiShield,
    title: 'Integrity & Trust',
    description: 'We build long-term relationships based on transparency, honesty, and reliability.'
  }
];

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Kubernetes', icon: '⚓' },
  { name: 'GraphQL', icon: '🔷' },
  { name: 'React Native', icon: '📱' },
  { name: 'TensorFlow', icon: '🧠' }
];

export const About = () => {
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
              About <span className="gradient-text">Altrustity</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We're a team of passionate developers, designers, and innovators dedicated to 
              building software solutions that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Who We Are
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Altrustity was founded with a mission to bridge the gap between innovative technology 
              and business success. We've grown from a small startup to a trusted partner for 
              businesses of all sizes, from startups to Fortune 500 companies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our team combines deep technical expertise with a deep understanding of business needs. 
              We don't just write code—we solve problems, drive innovation, and help our clients 
              achieve their strategic goals through technology.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              With hundreds of successful projects delivered and thousands of satisfied clients, 
              we've established ourselves as a leader in software development services.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-gray-50 dark:bg-gray-800/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <FiTarget className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              To empower businesses with cutting-edge software solutions that drive growth, 
              efficiency, and competitive advantage. We're committed to delivering excellence 
              in every project and building lasting partnerships with our clients.
            </p>
          </Card>
          <Card>
            <FiEye className="w-12 h-12 text-secondary-600 dark:text-secondary-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              To be the most trusted software development partner globally, recognized for 
              innovation, quality, and client success. We envision a future where technology 
              seamlessly enables businesses to achieve their greatest potential.
            </p>
          </Card>
        </div>
      </Section>

      {/* Core Values */}
      <Section 
        title="Our Core Values"
        subtitle="The principles that guide everything we do"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <Icon className="w-10 h-10 text-primary-600 dark:text-primary-400 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Technologies */}
      <Section 
        title="Technologies We Use"
        subtitle="We work with the latest and most reliable technologies"
        className="bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card hover={false} className="text-center">
                <div className="text-4xl mb-2">{tech.icon}</div>
                <div className="font-semibold text-gray-900 dark:text-white">{tech.name}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

