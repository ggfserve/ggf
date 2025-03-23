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

export const metadata: Metadata = getPageMeta('/services/driveway-pressure-washing-sealing');

export default async function Page() {
  const Items = [
    {
      title: 'Deep Pressure Cleaning',
      content: {
        title: 'Deep Pressure Cleaning',
        description:
          'We remove years of dirt, oil stains, moss, and grime using powerful, yet safe, pressure washing to restore your driveway’s clean appearance.',
        img: '/images/services/cleaning/1.png'
      }
    },
    {
      title: 'Sealing & Protection',
      content: {
        title: 'Sealing & Protection',
        description:
          'After cleaning, we apply a high-grade sealant to protect your driveway from water, weather, and oil damage—keeping it looking fresh longer.',
        img: '/images/services/cleaning/2.jpg'
      }
    },
    {
      title: 'Concrete & Asphalt',
      content: {
        title: 'Concrete & Asphalt',
        description:
          'Whether your driveway is concrete, asphalt, or interlock, we tailor our process to preserve its durability while enhancing appearance.',
        img: '/images/services/cleaning/3.jpg'
      }
    },
    {
      title: 'Curb Appeal Boost',
      content: {
        title: 'Curb Appeal Boost',
        description:
          'A clean, well-maintained driveway instantly boosts the visual appeal of your property. Make a great first impression with GoGreen.',
        img: '/images/services/cleaning/4.jpg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Driveway Pressure Washing & Sealing"
        subTitle="Protect and Refresh Your Driveway"
        text="GoGreen provides expert driveway pressure washing and sealing services, removing tough stains and applying lasting protection for a cleaner, safer, and longer-lasting surface."
        imgSrc="/images/services/cleaning/main.png"
      />
      <TabsSection items={Items} />
      <ServicesSection
        items={_services}
        subtitle="Explore Our Full Range of Services"
        title="Other Services"
      />
      <section>
        <div className="container">
          <TextBlock
            subtitle="Eco-Friendly Driveway Solutions"
            title="How We Restore and Protect Your Driveway"
            paragraph="Our two-step process includes high-pressure washing to eliminate surface damage and buildup, followed by sealing to protect against future wear. At GoGreen, we ensure your driveway is both beautiful and built to last."
          />
        </div>
      </section>
      <TimelineModern />
      <IndustriesSection
        items={_industries}
        title="Industries"
        subTitle="Solutions for Residential & Commercial Properties"
      />
      <FAQ />
      <ContactUsSection />
    </>
  );
}
