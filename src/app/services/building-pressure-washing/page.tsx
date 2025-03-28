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
      title: 'Comprehensive Exterior Surface Cleaning',
      content: {
        title: 'Comprehensive Exterior Surface Cleaning',
        description:
          'Restore the original beauty of your building’s exterior with our deep-cleaning pressure washing. We remove years of accumulated dirt, mold, mildew, algae, and environmental pollutants without damaging your surfaces. Ideal for commercial façades, brick walls, concrete, and other exterior materials.',
        img: '/images/services/building-pressure-washing/1.jpg'
      }
    },
    // {
    //   title: 'Eco-Friendly & Safe Cleaning Practices',
    //   content: {
    //     title: 'Eco-Friendly & Safe Cleaning Practices',
    //     description:
    //       'Our process uses biodegradable, non-toxic detergents and water-efficient pressure washing techniques that are safe for surrounding landscaping, drainage systems, and the environment. We ensure every job meets our sustainability commitment without sacrificing cleaning performance.',
    //     img: '/images/services/building-pressure-washing/2.png'
    //   }
    // },
    // {
    //   title: 'High & Low Pressure Customization',
    //   content: {
    //     title: 'High & Low Pressure Customization',
    //     description:
    //       'We tailor our pressure settings to suit the surface being cleaned. From robust concrete to delicate stucco or painted siding, our technicians use the optimal pressure to ensure thorough cleaning without damage.',
    //     img: '/images/services/building-pressure-washing/3.png'
    //   }
    // },
    // {
    //   title: 'Graffiti, Oil & Rust Stain Removal',
    //   content: {
    //     title: 'Graffiti, Oil & Rust Stain Removal',
    //     description:
    //       'We eliminate unsightly surface blemishes including graffiti, rust, grease, and oil stains using specialized solutions and targeted high-pressure techniques—restoring your property’s clean and professional appearance.',
    //     img: '/images/services/building-pressure-washing/4.png'
    //   }
    // }
  ];


  return (
    <>
      <MainSection
        title="Professional Building Pressure Washing Services"
        subTitle="Revitalize Your Property’s Exterior with Safe, Effective Power Washing"
        text="At GoGreen, we specialize in restoring the appearance and integrity of building exteriors. Our pressure washing service removes years of built-up dirt, grime, mold, and pollutants using eco-safe, non-damaging techniques. Whether it's concrete, stucco, or siding, we ensure your building makes a strong, lasting first impression."
        imgSrc="/images/services/building-pressure-washing/main.png" // ảnh tạm thời
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
