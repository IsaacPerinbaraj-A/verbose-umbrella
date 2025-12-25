import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: 'Web Development', path: '/services#web-development' },
    { name: 'Mobile Apps', path: '/services#mobile-development' },
    { name: 'UI/UX Design', path: '/services#ui-ux-design' },
    { name: 'Cloud & DevOps', path: '/services#cloud-devops' },
    { name: 'AI/ML Solutions', path: '/services#ai-ml' },
    { name: 'Support', path: '/services#maintenance-support' }
  ];

  const socialLinks = [
    { icon: FiGithub, href: '#', label: 'GitHub' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold gradient-text">Altrustity</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Leading software development company specializing in modern web applications, mobile solutions, and enterprise software.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@altrustity.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@altrustity.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FiPhone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Business St, Suite 100<br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Altrustity. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

