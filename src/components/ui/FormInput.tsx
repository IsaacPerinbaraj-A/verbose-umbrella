import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface BaseInputProps {
  label: string;
  error?: string;
  required?: boolean;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, BaseInputProps {
  type?: 'text' | 'email' | 'tel' | 'number';
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, BaseInputProps {}

export const FormInput = ({ 
  label, 
  error, 
  required = false,
  className = '',
  id,
  ...props 
}: InputProps) => {
  const inputId = id || `input-${label.toLowerCase().replace(/\s/g, '-')}`;
  
  return (
    <div className="mb-4">
      <label 
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={inputId}
        className={`
          w-full px-4 py-2 border rounded-lg 
          focus:ring-2 focus:ring-primary-500 focus:border-transparent
          bg-white dark:bg-gray-800
          text-gray-900 dark:text-gray-100
          border-gray-300 dark:border-gray-600
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export const FormTextarea = ({ 
  label, 
  error, 
  required = false,
  className = '',
  id,
  ...props 
}: TextareaProps) => {
  const textareaId = id || `textarea-${label.toLowerCase().replace(/\s/g, '-')}`;
  
  return (
    <div className="mb-4">
      <label 
        htmlFor={textareaId}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={textareaId}
        rows={4}
        className={`
          w-full px-4 py-2 border rounded-lg 
          focus:ring-2 focus:ring-primary-500 focus:border-transparent
          bg-white dark:bg-gray-800
          text-gray-900 dark:text-gray-100
          border-gray-300 dark:border-gray-600
          resize-vertical
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export const FormSelect = ({ 
  label, 
  error, 
  required = false,
  children,
  className = '',
  id,
  ...props 
}: BaseInputProps & { children: React.ReactNode } & React.SelectHTMLAttributes<HTMLSelectElement>) => {
  const selectId = id || `select-${label.toLowerCase().replace(/\s/g, '-')}`;
  
  return (
    <div className="mb-4">
      <label 
        htmlFor={selectId}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        id={selectId}
        className={`
          w-full px-4 py-2 border rounded-lg 
          focus:ring-2 focus:ring-primary-500 focus:border-transparent
          bg-white dark:bg-gray-800
          text-gray-900 dark:text-gray-100
          border-gray-300 dark:border-gray-600
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${selectId}-error` : undefined}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p id={`${selectId}-error`} className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

