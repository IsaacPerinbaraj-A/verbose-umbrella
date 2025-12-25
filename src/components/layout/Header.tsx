import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '../ui/Button';
import { services } from '../../data/services';
import { products } from '../../data/products';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: services.map(s => ({ name: s.title, path: `/services#${s.id}` }))
    },
    { 
      name: 'Products', 
      path: '/products',
      dropdown: products.map(p => ({ name: p.name, path: `/products#${p.id}` }))
    },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">Altrustity</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              item.dropdown ? (
                <Menu key={item.name} as="div" className="relative">
                  <Menu.Button className={`
                    flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors
                    ${isActive(item.path) 
                      ? 'text-primary-600 dark:text-primary-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }
                  `}>
                    <span>{item.name}</span>
                    <FiChevronDown className="w-4 h-4" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-2">
                      {item.dropdown.map((subItem) => (
                        <Menu.Item key={subItem.name}>
                          {({ active }) => (
                            <Link
                              to={subItem.path}
                              className={`
                                block px-4 py-2 text-sm
                                ${active 
                                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                                  : 'text-gray-700 dark:text-gray-300'
                                }
                              `}
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    px-3 py-2 text-sm font-medium rounded-lg transition-colors
                    ${isActive(item.path) 
                      ? 'text-primary-600 dark:text-primary-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }
                  `}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button href="/contact" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      block px-4 py-2 text-base font-medium rounded-lg
                      ${isActive(item.path) 
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button href="/contact" size="md" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

