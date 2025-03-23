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
      title: 'Deep Cleaning',
      content: {
        title: 'Deep Cleaning',
        description:
          'We penetrate deep into carpet fibers to remove dirt, allergens, and tough stains using powerful steam technology.',
        img: '/images/services/cleaning/1.png'
      }
    },
    {
      title: 'Stain Removal',
      content: {
        title: 'Stain Removal',
        description:
          'Our targeted stain treatment restores your carpet’s appearance by lifting persistent marks caused by pets, spills, and foot traffic.',
        img: '/images/services/cleaning/2.jpg'
      }
    },
    {
      title: 'Eco-Friendly Products',
      content: {
        title: 'Eco-Friendly Products',
        description:
          'We only use environmentally friendly products that are safe for kids and pets while still delivering powerful cleaning results.',
        img: '/images/services/cleaning/3.jpg'
      }
    },
    {
      title: 'Fast Drying',
      content: {
        title: 'Fast Drying',
        description:
          'Our low-moisture process ensures your carpets dry quickly, minimizing downtime and disruption to your space.',
        img: '/images/services/cleaning/4.jpg'
      }
    }
  ];


  return (
    <>
      <MainSection
        title="Carpet Steam Cleaning"
        subTitle="Deep, Eco-Friendly Carpet Cleaning Services"
        text="Refresh your indoor space with Go Green’s carpet steam cleaning. We eliminate dirt, allergens, and stains using green-certified technology."
        imgSrc="/images/services/cleaning/main.png"
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
