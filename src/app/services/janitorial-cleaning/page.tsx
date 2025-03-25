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

export const metadata: Metadata = getPageMeta('/services/janitorial-cleaning');

export default async function Page() {
  const Items = [
    {
      title: 'Daily & Scheduled Cleaning',
      content: {
        title: 'Daily & Scheduled Cleaning',
        description:
          'Our janitorial services include daily, nightly, or custom cleaning schedules to keep your facility consistently clean and ready for business. We adapt to your operational hours and space usage for minimal disruption.',
        img: '/images/services/janitorial-cleaning/1.jpg'
      }
    },
    {
      title: 'Restroom & Common Area Sanitation',
      content: {
        title: 'Restroom & Common Area Sanitation',
        description:
          'We thoroughly disinfect high-touch areas, restrooms, kitchens, and shared spaces to prevent the spread of germs and maintain hygiene standards. All products are non-toxic and safe for regular use.',
        img: '/images/services/janitorial-cleaning/2.jpg'
      }
    },
    {
      title: 'Green Cleaning Solutions',
      content: {
        title: 'Green Cleaning Solutions',
        description:
          'We use certified green cleaning agents that are both effective and environmentally responsible—reducing chemical exposure and improving indoor air quality for employees, clients, and visitors.',
        img: '/images/services/janitorial-cleaning/3.jpg'
      }
    },
    {
      title: 'Trained & Trustworthy Staff',
      content: {
        title: 'Trained & Trustworthy Staff',
        description:
          'Our janitorial teams are fully trained, background-checked, and supervised for quality control. We focus on attention to detail, reliability, and professionalism to deliver exceptional service every time.',
        img: '/images/services/janitorial-cleaning/4.png'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Janitorial Cleaning Services"
        subTitle="Reliable, Professional Daily Cleaning for Your Business"
        text="GoGreen delivers consistent, high-quality janitorial cleaning services tailored to your facility’s needs. From offices and schools to medical centers and retail spaces, our trained staff ensures a spotless, hygienic, and welcoming environment—using eco-friendly products and detailed cleaning protocols to promote health, safety, and productivity."
        imgSrc="/images/services/janitorial-cleaning/main.jpg" // ảnh tạm thời
      />
      <TabsSection items={Items} />
      <ServicesSection
        items={_services}
        subtitle="Full-Service Facility Care"
        title="Our Services"
      />
      <section>
        <div className="container">
          <TextBlock
            subtitle="Your Clean, Our Commitment"
            title="The GoGreen Janitorial Approach"
            paragraph="With a consistent schedule and a dedicated team, we deliver reliable janitorial services that support employee wellness, cleanliness, and your brand image."
          />
        </div>
      </section>
      <TimelineModern />
      <IndustriesSection
        items={_industries}
        title="Industries We Serve"
        subTitle="Customized Janitorial Solutions"
      />
      <FAQ />
      <ContactUsSection />
    </>
  );
}
