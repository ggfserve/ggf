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

export const metadata: Metadata = getPageMeta('/services/parkade-lot-cleaning');

export default async function Page() {
  const Items = [
    {
      title: 'Underground Parkade Cleaning',
      content: {
        title: 'Underground Parkade Cleaning',
        description:
          'We provide deep cleaning for enclosed parking structures, removing buildup of oil, dust, and vehicle residue. Our low-noise equipment is ideal for residential and commercial parkades where cleanliness and minimal disruption are key.',
        img: '/images/services/parkade-lot-cleaning/1.jpg'
      }
    },
    {
      title: 'Outdoor Lot Sweeping & Washing',
      content: {
        title: 'Outdoor Lot Sweeping & Washing',
        description:
          'Our crews sweep and pressure wash outdoor lots to remove gravel, mud, litter, and oil stains. This not only improves appearance but also reduces liability risks from slippery surfaces and poor drainage.',
        img: '/images/services/parkade-lot-cleaning/2.jpg'
      }
    },
  ];


  return (
    <>
      <MainSection
        title="Parkade & Lot Cleaning Services"
        subTitle="Maintain Clean, Safe, and Professional Parking Areas"
        text="GoGreen offers specialized cleaning services for underground parkades, outdoor parking lots, and multi-level garages. Our team removes dirt, oil stains, litter, and hazardous debris using industrial-grade sweepers, scrubbers, and pressure washing systems. With a focus on safety, efficiency, and environmental care, we help you make a strong first impression while extending the life of your parking infrastructure."
        imgSrc="/images/services/parkade-lot-cleaning/main.jpg" // ảnh tạm thời
      />
      <TabsSection items={Items} />
      <ServicesSection
        items={_services}
        subtitle="All-in-One Facility Care"
        title="Explore Our Services"
      />
      <section>
        <div className="container">
          <TextBlock
            subtitle="Built for Heavy Use Areas"
            title="Detailed Lot Maintenance"
            paragraph="With GoGreen, your lots and parkades are more than clean—they’re maintained to last. We help property managers stay ahead of grime, salt, and wear."
          />
        </div>
      </section>
      <TimelineModern />
      <IndustriesSection
        items={_industries}
        title="Industries We Serve"
        subTitle="Property Managers, Businesses & More"
      />
      <FAQ />
      <ContactUsSection />
    </>
  );
}
