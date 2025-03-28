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
        img: '/images/services/cleaning/1.png'
      }
    },
  ];



  return (
    <>
      <MainSection
        title="Premium Carpet Steam Cleaning Services"
        subTitle="Deep-Clean, Eco-Friendly Solutions for a Healthier Home or Workspace"
        text="Experience the power of professional carpet steam cleaning with Go Green. Our advanced technology eliminates deeply embedded dirt, allergens, and bacteria while using eco-friendly, non-toxic products that are safe for your family, pets, and the environment. Restore your carpet’s beauty, improve indoor air quality, and extend its lifespan — all with minimal disruption to your daily life."
        imgSrc="/images/services/carpet-steam-cleaning/main.png"
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
