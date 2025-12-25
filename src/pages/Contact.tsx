import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { ContactForm } from '../components/shared/ContactForm';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { Button } from '../components/ui/Button';

export const Contact = () => {
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <FiMail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                    <a 
                      href="mailto:contact@altrustity.com" 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      contact@altrustity.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <FiPhone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <a 
                      href="tel:+1234567890" 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <FiMapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Business St, Suite 100<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <FiClock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 4:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Book a Free Consultation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Schedule a 30-minute call with our team to discuss your project requirements and 
                explore how we can help you achieve your goals.
              </p>
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Schedule Consultation
              </Button>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Our Location
              </h3>
              <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Map placeholder - Integrate Google Maps or Mapbox here
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

