export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  // Accepts various phone formats: (123) 456-7890, 123-456-7890, 1234567890, +1 123 456 7890
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

export const getErrorMessage = (field: string, _value: string, type: string): string => {
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

