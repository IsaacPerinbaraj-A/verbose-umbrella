import { Section } from '../ui/Section';
import { ServiceCard } from '../shared/ServiceCard';
import { services } from '../../data/services';

export const ServicesOverview = () => {
  return (
    <Section 
      title="Our Services"
      subtitle="Comprehensive software development solutions tailored to your business needs"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
};

