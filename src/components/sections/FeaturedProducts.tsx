import { Section } from '../ui/Section';
import { ProductCard } from '../shared/ProductCard';
import { products } from '../../data/products';

export const FeaturedProducts = () => {
  return (
    <Section 
      title="Featured Products"
      subtitle="Ready-to-use software solutions designed to accelerate your business growth"
      className="bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
};

