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
      title: 'Daily Office Cleaning',
      content: {
        title: 'Daily Office Cleaning',
        description:
          'We ensure workspaces are clean and presentable every day with dusting, vacuuming, restroom sanitization, and trash removal.',
        img: '/images/services/cleaning/1.png'
      }
    },
    {
      title: 'After-Hours Service',
      content: {
        title: 'After-Hours Service',
        description:
          'Our flexible scheduling allows us to clean during off-hours to minimize disruptions and maintain operational flow.',
        img: '/images/services/cleaning/2.jpg'
      }
    },
    {
      title: 'Restroom Maintenance',
      content: {
        title: 'Restroom Maintenance',
        description:
          'Disinfected, fresh-smelling, and well-stocked restrooms are essential—we handle all aspects of janitorial restroom care.',
        img: '/images/services/cleaning/3.jpg'
      }
    },
    {
      title: 'Green Cleaning Practices',
      content: {
        title: 'Green Cleaning Practices',
        description:
          'We use environmentally safe products and methods to provide a healthy workspace while reducing environmental impact.',
        img: '/images/services/cleaning/4.jpg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Janitorial Cleaning"
        subTitle="Professional, Reliable & Eco-Friendly"
        text="GoGreen offers full-service janitorial solutions tailored to your facility's needs. From daily upkeep to specialized tasks, we keep your space pristine and productive."
        imgSrc="/images/services/cleaning/main.png"
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
