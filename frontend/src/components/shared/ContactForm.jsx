import { useState } from 'react';
import { FormInput, FormTextarea, FormSelect } from '../ui/FormInput';
import { Button } from '../ui/Button';
import { validateEmail, validatePhone, validateRequired, validateMinLength } from '../../utils/validations';
import { services } from '../../data/services';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateRequired(formData.name)) {
      newErrors.name = 'Name is required';
    } else if (!validateMinLength(formData.name, 2)) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!validateRequired(formData.email)) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validateRequired(formData.phone)) {
      newErrors.phone = 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!validateRequired(formData.service)) {
      newErrors.service = 'Please select a service';
    }

    if (!validateRequired(formData.message)) {
      newErrors.message = 'Message is required';
    } else if (!validateMinLength(formData.message, 10)) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">
          Thank you for your message!
        </h3>
        <p className="text-green-700 dark:text-green-300">
          We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        label="Full Name"
        type="text"
        value={formData.name}
        onChange={(e) => handleChange('name', e.target.value)}
        error={errors.name}
        required
      />

      <FormInput
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
        error={errors.email}
        required
      />

      <FormInput
        label="Phone Number"
        type="tel"
        value={formData.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
        error={errors.phone}
        required
      />

      <FormSelect
        label="Service of Interest"
        value={formData.service}
        onChange={(e) => handleChange('service', e.target.value)}
        error={errors.service}
        required
      >
        <option value="">Select a service</option>
        {services.map((service) => (
          <option key={service.id} value={service.id}>
            {service.title}
          </option>
        ))}
      </FormSelect>

      <FormTextarea
        label="Message"
        value={formData.message}
        onChange={(e) => handleChange('message', e.target.value)}
        error={errors.message}
        required
        placeholder="Tell us about your project or requirements..."
      />

      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

