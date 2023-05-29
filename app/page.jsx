import Commerce from '@/components/Commerce';
import Company from '@/components/Company';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Product } from '@/components/Product';
import ReadMore from '@/components/ReadMore';
import Service from '@/components/Service';
import Story from '@/components/Story';
import Testimonials from '@/components/Testimonials';
import Touch from '@/components/Touch';

export default function Home() {
  return (
    <main>
      <Hero />
      <Commerce />
      <Service/>
      <Company/>
      <Product/>
      <Testimonials/>
      <Touch/>
      <Story/>
      <ReadMore/>
      <Contact/>
      <Footer/>
    </main>
  );
}
