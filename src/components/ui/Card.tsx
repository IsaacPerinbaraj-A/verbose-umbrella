import type { HTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export const Card = ({ children, hover = true, className = '', ...props }: CardProps) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 transition-all duration-200';
  const hoverClasses = hover ? 'hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-600' : '';
  const classes = `${baseClasses} ${hoverClasses} ${className}`;

  const content = (
    <div className={classes} {...props}>
      {children}
    </div>
  );

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

