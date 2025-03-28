import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';
import { ContactUsSection } from '@/components/ContactUsSection';
import { ImageTextSection } from '@/components/UI/ImageTextSection';
import { TextBlock } from '@/components/UI/TextBlock';
import { IndustriesSection } from '@/components/BigSliderSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TextAndImagesSection } from '@/components/UI/TextAndImagesSection';
import { TabsSection } from '@/components/TabsSection';
import TimelineModern from '@/components/Timeline/modern';
import { FAQ } from '@/components/FAQ';
import { _industries, _services } from '@/utils/constants';

export const metadata: Metadata = getPageMeta('/services/residential-cleaning');

export default async function Page() {
  // const Items = [
  //   {
  //     title: 'Recurring Home Cleaning',
  //     content: {
  //       title: 'Recurring Home Cleaning',
  //       description:
  //         'We offer flexible recurring cleaning plans—weekly, bi-weekly, or monthly—tailored to your lifestyle and preferences. From kitchens and bathrooms to bedrooms and living areas, we keep your home consistently fresh and welcoming.',
  //       img: '/images/services/residential-cleaning/1.png'
  //     }
  //   }
  // ];


  return (
    <>
      <MainSection
        title="Residential Cleaning Services"
        subTitle="Eco-Friendly Cleaning for a Healthier, Happier Home"
        text="Enjoy a spotless, stress-free living space with GoGreen’s professional residential cleaning services. Whether it’s regular upkeep or a deep seasonal refresh, our trained cleaners use safe, non-toxic products to clean your home from top to bottom—ensuring comfort, hygiene, and peace of mind for you and your family."
        imgSrc="/images/services/residential-cleaning/main.png" // ảnh tạm thời
      />

      {/* <TabsSection items={Items} /> */}
      <ServicesSection
        items={_services}
        subtitle="Explore Our Full Range of Services"
        title="Services"
      />
      <section>
        <div className="container">
          <TextBlock
            subtitle="Sustainable Solutions for Everyday Living"
            title="Your Trusted Home Cleaning Partner"
            paragraph="With GoGreen, residential cleaning is more than a service—it’s a commitment to your comfort and well-being. Our team brings care, consistency, and eco-conscious practices into every home we clean."
          />
        </div>
      </section>
      <TimelineModern />
      <IndustriesSection
        items={_industries}
        title="Industries"
        subTitle="Trusted by Families and Communities"
      />
      <FAQ />
      <ContactUsSection />
    </>
  );
}
