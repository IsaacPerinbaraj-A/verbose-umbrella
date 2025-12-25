export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  techStack: string[];
  useCases: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: 'crm',
    name: 'Enterprise CRM',
    description: 'A comprehensive customer relationship management platform that helps businesses manage sales, marketing, and customer service operations in one unified system.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
    features: [
      'Contact & Lead Management',
      'Sales Pipeline Tracking',
      'Email Marketing Integration',
      'Analytics & Reporting Dashboard',
      'Customizable Workflows',
      'Mobile App Access',
      'Third-party Integrations',
      'Role-based Access Control'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS S3', 'SendGrid', 'Stripe API'],
    useCases: [
      'Sales teams managing customer relationships',
      'Marketing departments tracking campaigns',
      'Customer service teams handling support tickets',
      'Management monitoring business performance'
    ],
    category: 'Business Management'
  },
  {
    id: 'erp',
    name: 'Enterprise ERP System',
    description: 'An all-in-one enterprise resource planning solution that integrates finance, HR, inventory, manufacturing, and supply chain management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    features: [
      'Financial Management & Accounting',
      'Inventory & Supply Chain',
      'Human Resources Management',
      'Manufacturing Planning',
      'Business Intelligence',
      'Multi-currency Support',
      'Automated Reporting',
      'Custom Module Development'
    ],
    techStack: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Celery', 'Docker', 'Kubernetes'],
    useCases: [
      'Manufacturing companies managing operations',
      'Retail businesses tracking inventory',
      'Service companies handling projects',
      'Enterprises requiring integrated systems'
    ],
    category: 'Enterprise Solutions'
  },
  {
    id: 'saas-dashboard',
    name: 'SaaS Analytics Dashboard',
    description: 'A powerful analytics and monitoring dashboard designed for SaaS businesses to track key metrics, user behavior, and business performance in real-time.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    features: [
      'Real-time Analytics',
      'User Behavior Tracking',
      'Revenue Metrics & Forecasting',
      'Custom Report Builder',
      'Data Visualization',
      'API Integrations',
      'Export & Sharing',
      'Automated Alerts'
    ],
    techStack: ['React', 'TypeScript', 'D3.js', 'Chart.js', 'Node.js', 'TimescaleDB', 'WebSockets'],
    useCases: [
      'SaaS startups tracking growth metrics',
      'Product teams analyzing user engagement',
      'Finance teams monitoring revenue',
      'Executives making data-driven decisions'
    ],
    category: 'Analytics & Reporting'
  }
];

