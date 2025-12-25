import { Card } from '../ui/Card';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import type { CaseStudy } from '../../data/portfolio';

interface PortfolioCardProps {
  caseStudy: CaseStudy;
}

export const PortfolioCard = ({ caseStudy }: PortfolioCardProps) => {
  return (
    <Card>
      <img 
        src={caseStudy.image} 
        alt={caseStudy.title}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <div className="mb-2">
        <span className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
          {caseStudy.category}
        </span>
        <span className="text-gray-400 mx-2">•</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {caseStudy.client}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {caseStudy.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {caseStudy.problem}
      </p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {caseStudy.results.slice(0, 2).map((result, index) => (
          <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {result.value}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              {result.metric}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {caseStudy.technologies.slice(0, 4).map((tech, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link to={`/portfolio#${caseStudy.id}`}>
        <Button variant="outline" size="sm" className="w-full">
          View Case Study
        </Button>
      </Link>
    </Card>
  );
};

