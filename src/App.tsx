import { FAQSection } from './components/faqsection';
import { Hero } from './components/hero';
import { Testimonials } from './components/testimonials';
import { GallerySection } from './components/gallerysection';
import { HowItWorks } from './components/howitworks';
import { PricingSection } from './components/prcingsection';
import { Navbar } from './components/navbar';
import { Differentials } from './components/differentials';
import { AboutSection } from './components/aboutsection';
import { StatsSection } from './components/statssection';
import { ServicesSection } from './components/servicessection';
import { LocationSection } from './components/locationsection';
import { Footer } from './components/footer';
import { FloatingWhatsApp } from './components/floatingwhatsApp';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#008080', fontFamily: 'Tahoma, Arial, sans-serif' }}>
      <Navbar />
      <main style={{ paddingTop: '140px' }}>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <Differentials />
        <StatsSection />
        <HowItWorks />
        <Testimonials />
        <GallerySection />
        <PricingSection />
        <FAQSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
