export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  // Accepts various phone formats: (123) 456-7890, 123-456-7890, 1234567890, +1 123 456 7890
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateRequired = (value) => {
  return value.trim().length > 0;
};

export const validateMinLength = (value, minLength) => {
  return value.trim().length >= minLength;
};

export const getErrorMessage = (field, _value, type) => {
  switch (type) {
    case 'required':
      return `${field} is required`;
    case 'email':
      return 'Please enter a valid email address';
    case 'phone':
      return 'Please enter a valid phone number';
    case 'minLength':
      return `${field} must be at least ${type.split('-')[1]} characters`;
    default:
      return `${field} is invalid`;
  }
};

