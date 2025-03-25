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
          'We help homeowners remove old furniture, appliances, electronics, yard debris, and general clutter quickly and efficiently. Our team handles everything from loading to eco-friendly disposal or donation.',
        img: '/images/services/junk-removal/1.jpg'
      }
    },
    {
      title: 'Commercial Cleanouts',
      content: {
        title: 'Commercial Cleanouts',
        description:
          'From offices and retail spaces to warehouses and construction sites, we offer full-service junk removal for commercial properties. Ideal for relocations, renovations, or day-to-day waste management.',
        img: '/images/services/junk-removal/2.jpg'
      }
    }
  ];


  return (
    <>
      <MainSection
        title="Professional Junk Removal Services"
        subTitle="Fast, Responsible, and Eco-Friendly Waste Disposal"
        text="Clear out unwanted clutter quickly and responsibly with GoGreen’s professional junk removal services. Whether you're dealing with post-renovation debris, old furniture, office cleanouts, or general household waste, our team handles the heavy lifting and ensures proper disposal or recycling—helping you reclaim your space and protect the environment."
        imgSrc="/images/services/junk-removal/main.jpg" // ảnh tạm thời
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
