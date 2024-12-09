import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { CTASection } from '../components/CTASection';

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <CTASection />
    </div>
  );
};