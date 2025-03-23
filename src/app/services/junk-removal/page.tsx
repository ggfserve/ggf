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

export const metadata: Metadata = getPageMeta('/services/junk-removal');

export default async function Page() {
  const Items = [
    {
      title: 'Residential Junk Removal',
      content: {
        title: 'Residential Junk Removal',
        description:
          'Clear out your basement, garage, or yard with our efficient and eco-responsible junk removal service.',
        img: '/images/services/cleaning/1.png'
      }
    },
    {
      title: 'Commercial Waste Pickup',
      content: {
        title: 'Commercial Waste Pickup',
        description:
          'Offices, warehouses, and retail stores trust GoGreen to remove old furniture, electronics, and debris safely.',
        img: '/images/services/cleaning/2.jpg'
      }
    },
    {
      title: 'Construction Debris Cleanup',
      content: {
        title: 'Construction Debris Cleanup',
        description:
          'We quickly clear leftover construction materials and job site mess, keeping your projects clean and safe.',
        img: '/images/services/cleaning/3.jpg'
      }
    },
    {
      title: 'Recycling & Disposal',
      content: {
        title: 'Recycling & Disposal',
        description:
          'We sort, recycle, and dispose of waste responsibly, following local regulations and reducing landfill use.',
        img: '/images/services/cleaning/4.jpg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Junk Removal"
        subTitle="Fast, Responsible & Stress-Free"
        text="Clear out your space the eco-friendly way. GoGreen provides full-service junk removal for homes, businesses, and construction sites across Edmonton."
        imgSrc="/images/services/cleaning/main.png"
      />
      <TabsSection items={Items} />
      <ServicesSection
        items={_services}
        subtitle="More Green Solutions"
        title="Explore Our Services"
      />
      <section>
        <div className="container">
          <TextBlock
            subtitle="Declutter with Purpose"
            title="What We Take & How We Do It"
            paragraph="GoGreen removes junk with minimal disruption and maximum care for the environment. Whether it’s a spring clean or post-renovation job, we’ve got you covered."
          />
        </div>
      </section>
      <TimelineModern />
      <IndustriesSection
        items={_industries}
        title="Industries We Help"
        subTitle="Supporting Homes & Businesses Alike"
      />
      <FAQ />
      <ContactUsSection />
    </>
  );
}
