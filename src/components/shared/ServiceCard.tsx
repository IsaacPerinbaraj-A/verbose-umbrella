import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import type { Service } from '../../data/services';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card>
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {service.shortDescription}
      </p>
      <Link
        to={`/services#${service.id}`}
        className="text-primary-600 dark:text-primary-400 font-semibold hover:underline inline-flex items-center"
      >
        Learn more →
      </Link>
    </Card>
  );
};

