import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export const CTABanner = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss how our software solutions can help you achieve your goals. 
            Get started today with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Book a Free Consultation
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                View Our Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

