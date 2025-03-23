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
  const Items = [
    {
      title: 'Whole Home Cleaning',
      content: {
        title: 'Whole Home Cleaning',
        description:
          'Our comprehensive cleaning covers every corner of your home — from bedrooms to kitchens and bathrooms — ensuring a spotless living environment.',
        img: '/images/services/cleaning/1.png' // ảnh tạm
      }
    },
    {
      title: 'Eco-Friendly Products',
      content: {
        title: 'Eco-Friendly Products',
        description:
          'We only use non-toxic, biodegradable cleaning products that are safe for children, pets, and the environment.',
        img: '/images/services/cleaning/2.jpg' // ảnh tạm
      }
    },
    {
      title: 'Scheduled Services',
      content: {
        title: 'Scheduled Services',
        description:
          'We offer flexible cleaning schedules — weekly, bi-weekly, or monthly — to fit your lifestyle and ensure consistent cleanliness.',
        img: '/images/services/cleaning/3.jpg' // ảnh tạm
      }
    },
    {
      title: 'Move In/Out Cleaning',
      content: {
        title: 'Move In/Out Cleaning',
        description:
          'Whether you’re moving in or out, our deep cleaning services will leave the space fresh, sanitized, and ready for its next chapter.',
        img: '/images/services/cleaning/4.jpg' // ảnh tạm
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Residential Cleaning"
        subTitle="Eco-Friendly Cleaning for a Healthier Home"
        text="GoGreen provides safe, effective, and tailored residential cleaning services to make your home shine while protecting your family and the planet."
        imgSrc="/images/services/cleaning/main.png" // ảnh tạm
      />
      <TabsSection items={Items} />
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
