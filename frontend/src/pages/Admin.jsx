import { useState, useEffect } from 'react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiCalendar, FiTrash2, FiRefreshCw, FiSearch } from 'react-icons/fi';
import { apiRequest } from '../utils/api';

export const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterService, setFilterService] = useState('all');

  // Fetch contacts from API
  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiRequest('/contact');
      setContacts(response.data || []);
    } catch (err) {
      setError(err.message || 'Failed to load contacts');
      console.error('Error fetching contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  // Delete a contact
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) {
      return;
    }

    try {
      await apiRequest(`/contact/${id}`, {
        method: 'DELETE',
      });
      // Remove from local state
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (err) {
      alert('Failed to delete contact: ' + err.message);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Filter contacts
  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = 
      contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesService = filterService === 'all' || contact.service === filterService;
    
    return matchesSearch && matchesService;
  });

  useEffect(() => {
    fetchContacts();
  }, []);

  // Get unique services for filter
  const services = [...new Set(contacts.map(c => c.service))].filter(Boolean);

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
              Contact <span className="gradient-text">Submissions</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              View and manage all contact form submissions
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        {/* Controls */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full md:w-auto">
            {/* Search */}
            <div className="relative flex-1 sm:flex-initial sm:w-64">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Service Filter */}
            <select
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Services</option>
              {services.map(service => (
                <option key={service} value={service}>
                  {service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </option>
              ))}
            </select>
          </div>

          <Button onClick={fetchContacts} variant="outline" size="md">
            <FiRefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {contacts.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Submissions</div>
          </Card>
          <Card>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {filteredContacts.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Filtered Results</div>
          </Card>
          <Card>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {services.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Services</div>
          </Card>
        </div>

        {/* Error State */}
        {error && (
          <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
            <p className="text-red-600 dark:text-red-400">{error}</p>
            <Button onClick={fetchContacts} variant="outline" size="sm" className="mt-4">
              Try Again
            </Button>
          </Card>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading contacts...</p>
          </div>
        )}

        {/* Contacts List */}
        {!loading && !error && (
          <>
            {filteredContacts.length === 0 ? (
              <Card className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">
                  {contacts.length === 0 
                    ? 'No contact submissions yet.' 
                    : 'No contacts match your search criteria.'}
                </p>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredContacts.map((contact, index) => (
                  <motion.div
                    key={contact.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {contact.name}
                              </h3>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center gap-2">
                                  <FiMail className="w-4 h-4" />
                                  <a 
                                    href={`mailto:${contact.email}`}
                                    className="hover:text-primary-600 dark:hover:text-primary-400"
                                  >
                                    {contact.email}
                                  </a>
                                </div>
                                <div className="flex items-center gap-2">
                                  <FiPhone className="w-4 h-4" />
                                  <a 
                                    href={`tel:${contact.phone}`}
                                    className="hover:text-primary-600 dark:hover:text-primary-400"
                                  >
                                    {contact.phone}
                                  </a>
                                </div>
                                <div className="flex items-center gap-2">
                                  <FiCalendar className="w-4 h-4" />
                                  {formatDate(contact.createdAt)}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                              {contact.service?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'N/A'}
                            </span>
                          </div>

                          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                              {contact.message}
                            </p>
                          </div>
                        </div>

                        <div className="flex md:flex-col gap-2">
                          <Button
                            onClick={() => handleDelete(contact.id)}
                            variant="outline"
                            size="sm"
                            className="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <FiTrash2 className="w-4 h-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}
      </Section>
    </>
  );
};

