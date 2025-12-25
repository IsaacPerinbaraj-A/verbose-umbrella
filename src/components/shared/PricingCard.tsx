import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import type { PricingPlan } from '../../data/pricing';
import { FiCheck } from 'react-icons/fi';

interface PricingCardProps {
  plan: PricingPlan;
}

export const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <Card className={`relative ${plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''}`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {plan.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {plan.description}
        </p>
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-gray-600 dark:text-gray-400 ml-2">
              {plan.period}
            </span>
          )}
        </div>
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FiCheck className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={plan.popular ? 'primary' : 'outline'} 
        size="md" 
        className="w-full"
        href={plan.ctaLink}
      >
        {plan.cta}
      </Button>
    </Card>
  );
};

