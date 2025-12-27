// API Base URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Make an API request
 * @param {string} endpoint - API endpoint (e.g., '/contact')
 * @param {object} options - Fetch options
 * @returns {Promise} - Response data
 */
export const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || data.message || 'An error occurred');
    }

    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

/**
 * Submit contact form
 * @param {object} formData - Contact form data
 * @returns {Promise} - Response data
 */
export const submitContactForm = async (formData) => {
  return apiRequest('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};

/**
 * Health check
 * @returns {Promise} - Health status
 */
export const checkHealth = async () => {
  return apiRequest('/health');
};

/**
 * Get all contacts
 * @returns {Promise} - All contacts
 */
export const getAllContacts = async () => {
  return apiRequest('/contact');
};

/**
 * Get a contact by ID
 * @param {string} id - Contact ID
 * @returns {Promise} - Contact data
 */
export const getContactById = async (id) => {
  return apiRequest(`/contact/${id}`);
};

/**
 * Delete a contact
 * @param {string} id - Contact ID
 * @returns {Promise} - Delete response
 */
export const deleteContact = async (id) => {
  return apiRequest(`/contact/${id}`, {
    method: 'DELETE',
  });
};

