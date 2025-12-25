import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import type { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <div className="mb-2">
        <span className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
          {product.category}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {product.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {product.description}
      </p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {product.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
              <span className="text-primary-600 dark:text-primary-400 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {product.techStack.slice(0, 4).map((tech, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link to={`/products#${product.id}`}>
        <Button variant="outline" size="sm" className="w-full">
          View Details
        </Button>
      </Link>
    </Card>
  );
};

