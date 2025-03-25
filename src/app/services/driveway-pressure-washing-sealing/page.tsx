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
      title: 'Deep Driveway Cleaning',
      content: {
        title: 'Deep Driveway Cleaning',
        description:
          'We use high-powered pressure washing to remove years of dirt, tire marks, algae, and oil buildup from concrete, asphalt, and stone driveways. Our process restores original color and texture without damaging the surface.',
        img: '/images/services/cleaning/1.png'
      }
    },
    {
      title: 'Eco-Safe Degreasers & Stain Removal',
      content: {
        title: 'Eco-Safe Degreasers & Stain Removal',
        description:
          'Our biodegradable cleaning solutions safely lift oil, rust, and automotive fluid stains without harming your landscaping or driveway surface. We prioritize eco-friendly results without sacrificing power.',
        img: '/images/services/cleaning/2.jpg'
      }
    },
    {
      title: 'High-Performance Sealing',
      content: {
        title: 'High-Performance Sealing',
        description:
          'Once cleaned, we apply a premium-grade sealer that enhances appearance and forms a protective barrier against water, UV rays, salt, and stains—prolonging the lifespan of your driveway.',
        img: '/images/services/cleaning/3.jpg'
      }
    },
    {
      title: 'Slip Resistance & Weather Protection',
      content: {
        title: 'Slip Resistance & Weather Protection',
        description:
          'Our sealing process not only boosts durability but also improves safety by increasing traction on wet surfaces. Protect your driveway year-round from Edmonton’s harsh climate and freeze-thaw cycles.',
        img: '/images/services/cleaning/4.jpg'
      }
    }
  ];


  return (
    <>
      <MainSection
        title="Driveway Pressure Washing & Sealing"
        subTitle="Revive and Protect Your Driveway with Professional Cleaning and Long-Lasting Sealing"
        text="Enhance your property’s curb appeal and extend the life of your driveway with GoGreen’s expert pressure washing and sealing services. We remove dirt, grime, oil stains, and mildew from concrete, asphalt, and paver surfaces, then apply high-quality sealants to protect against moisture, UV damage, and daily wear. Safe, effective, and eco-conscious—our service is ideal for both residential and commercial properties."
        imgSrc="/images/services/cleaning/main.png" // ảnh tạm thời
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
