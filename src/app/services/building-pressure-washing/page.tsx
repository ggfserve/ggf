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

export const metadata: Metadata = getPageMeta('/services/building-pressure-washing');

export default async function Page() {
  const Items = [
    {
      title: 'Exterior Surfaces',
      content: {
        title: 'Exterior Surfaces',
        description:
          'Remove years of dirt, grime, mold, and pollutants from building exteriors. Our pressure washing restores surfaces to their original appearance without damage.',
        img: '/images/services/cleaning/1.png' // ảnh tạm thời
      }
    },
    {
      title: 'Eco-Safe Process',
      content: {
        title: 'Eco-Safe Process',
        description:
          'We use environmentally friendly detergents and water-efficient methods to clean effectively without harming surrounding landscaping or water systems.',
        img: '/images/services/cleaning/2.jpg'
      }
    },
    {
      title: 'High & Low Pressure',
      content: {
        title: 'High & Low Pressure',
        description:
          'From heavy-duty concrete cleaning to more delicate surfaces like stucco or siding, we adjust pressure accordingly to ensure safe, effective results.',
        img: '/images/services/cleaning/3.jpg'
      }
    },
    {
      title: 'Graffiti & Stain Removal',
      content: {
        title: 'Graffiti & Stain Removal',
        description:
          'We specialize in removing graffiti, rust, oil stains, and other persistent surface blemishes—restoring a clean, professional look to your property.',
        img: '/images/services/cleaning/4.jpg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Building Pressure Washing"
        subTitle="Restore Your Building's Curb Appeal"
        text="GoGreen offers powerful pressure washing services to remove grime, mold, and buildup from your building’s exterior. Make a lasting impression with a clean, professional look."
        imgSrc="/images/services/cleaning/main.png" // ảnh tạm thời
      />
      <TabsSection items={Items} />
      <ServicesSection
        items={_services}
        subtitle="Comprehensive Cleaning Solutions"
        title="Explore Other Services"
      />
      <section>
        <div className="container">
          <TextBlock
            subtitle="Safe, Effective, Eco-Friendly"
            title="Our Pressure Washing Process"
            paragraph="We tailor each pressure washing job to the building’s materials and condition. Using eco-safe products and equipment, we restore beauty and cleanliness while protecting the environment."
          />
        </div>
      </section>
      <TimelineModern />
      <IndustriesSection
        items={_industries}
        title="Industries We Serve"
        subTitle="Serving All Property Types Across Edmonton"
      />
      <FAQ />
      <ContactUsSection />
    </>
  );
}
