import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';
import { TextBlock } from '@/components/UI/TextBlock';
import { IndustriesSection } from '@/components/BigSliderSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TabsSection } from '@/components/TabsSection';
import TimelineModern from '@/components/Timeline/modern';
import { FAQ } from '@/components/FAQ';
import { _industries, _services } from '@/utils/constants';

export const metadata: Metadata = getPageMeta('/services/carpet-steam-cleaning');

export default async function Page() {
  const Items = [
    {
      title: 'Comprehensive Deep Carpet Cleaning',
      content: {
        title: 'Comprehensive Deep Carpet Cleaning',
        description:
          'Our advanced steam cleaning process goes far beyond surface-level dirt. We deeply penetrate carpet fibers to eliminate embedded dust, allergens, bacteria, and stubborn debris, restoring freshness and extending the life of your carpet. Ideal for high-traffic areas and commercial spaces in need of a thorough refresh.',
        img: '/images/services/cleaning/1.jpg'
      }
    },
    {
      title: 'Professional Stain and Spot Removal',
      content: {
        title: 'Professional Stain and Spot Removal',
        description:
          'We specialize in removing tough stains caused by pets, food, beverages, and everyday accidents. Using targeted treatment methods and eco-friendly agents, we lift even the most persistent marks without damaging carpet fibers, leaving your carpet looking revitalized and clean.',
        img: '/images/services/carpet-steam-cleaning/1.jpg'
      }
    },
    {
      title: 'Safe, Eco-Friendly Cleaning Solutions',
      content: {
        title: 'Safe, Eco-Friendly Cleaning Solutions',
        description:
          'We are committed to sustainability and your family’s health. That’s why we use only green-certified, non-toxic cleaning products that are safe for children, pets, and allergy-sensitive individuals. Our eco-conscious approach delivers powerful results without compromising safety or the environment.',
        img: '/images/services/cleaning/3.jpg'
      }
    },
    {
      title: 'Quick-Dry Technology for Minimal Downtime',
      content: {
        title: 'Quick-Dry Technology for Minimal Downtime',
        description:
          'Our low-moisture steam cleaning system ensures fast drying times, reducing the risk of mold and mildew while allowing you to get back to enjoying your space quickly. Perfect for businesses and homes that can’t afford lengthy drying periods or downtime.',
        img: '/images/services/cleaning/4.jpg'
      }
    }
  ];



  return (
    <>
      <MainSection
        title="Premium Carpet Steam Cleaning Services"
        subTitle="Deep-Clean, Eco-Friendly Solutions for a Healthier Home or Workspace"
        text="Experience the power of professional carpet steam cleaning with Go Green. Our advanced technology eliminates deeply embedded dirt, allergens, and bacteria while using eco-friendly, non-toxic products that are safe for your family, pets, and the environment. Restore your carpet’s beauty, improve indoor air quality, and extend its lifespan — all with minimal disruption to your daily life."
        imgSrc="/images/services/carpet-steam-cleaning/main.jpg"
      />
      <TabsSection items={Items} />
      <ServicesSection
        items={_services}
        subtitle="Discover the Difference with GoGreen"
        title="Services"
      />
      <section>
        <div className="container">
          <TextBlock
            subtitle="Your Partner for Eco-Friendly Cleaning"
            title="Business Process"
            paragraph="At Go Green, we’re not just a cleaning company. We’re your partners in creating a cleaner, healthier, and more sustainable environment for your business in Edmonton."
          />
        </div>
      </section>
      <TimelineModern />
      <IndustriesSection
        items={_industries}
        title="Industries"
        subTitle="Your Partner for Eco-Friendly Cleaning"
      />
      <FAQ />
      <ContactUsSection />
    </>
  );
}
