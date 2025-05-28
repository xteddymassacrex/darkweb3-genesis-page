
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import GameCategories from '@/components/GameCategories';
import ServiceAdvantages from '@/components/ServiceAdvantages';
import CustomerReviews from '@/components/CustomerReviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navigation />
      <Hero />
      <GameCategories />
      <ServiceAdvantages />
      <CustomerReviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
