// pages/index.js
import Layout from './components/Layout';
import Hero from './components/Hero';
import ServicesShowcase from './components/ServicesShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';


export default function Home() {
  return (
    <Layout>
      <Hero />
      <ServicesShowcase />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </Layout>
  );
}