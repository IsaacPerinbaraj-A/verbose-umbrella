import { Hero } from '../components/sections/Hero';
import { TrustedClients } from '../components/sections/TrustedClients';
import { ServicesOverview } from '../components/sections/ServicesOverview';
import { FeaturedProducts } from '../components/sections/FeaturedProducts';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Testimonials } from '../components/sections/Testimonials';
import { CTABanner } from '../components/sections/CTABanner';

export const Home = () => {
  return (
    <>
      <Hero />
      <TrustedClients />
      <ServicesOverview />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
};

