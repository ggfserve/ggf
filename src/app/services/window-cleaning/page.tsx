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

export const metadata: Metadata = getPageMeta('/services/window-cleaning');

export default async function Page() {
  const Items = [
    {
      title: 'Interior & Exterior Window Cleaning',
      content: {
        title: 'Interior & Exterior Window Cleaning',
        description:
          'We thoroughly clean both sides of your windows—including frames, sills, and tracks—leaving them spotless and streak-free. Perfect for homes, offices, storefronts, and buildings of all sizes.',
        img: '/images/services/window-cleaning/1.jpg'
      }
    },
    {
      title: 'High-Rise & Multi-Storey Access',
      content: {
        title: 'High-Rise & Multi-Storey Access',
        description:
          'Our trained technicians use professional-grade equipment, ladders, and safety harnesses to clean hard-to-reach and upper-floor windows—safely and efficiently, with minimal disruption.',
        img: '/images/services/window-cleaning/2.png'
      }
    },
    {
      title: 'Eco-Friendly & Streak-Free Finish',
      content: {
        title: 'Eco-Friendly & Streak-Free Finish',
        description:
          'We use purified water systems and biodegradable cleaning solutions that lift dirt and residue without leaving streaks or harming plants, pets, or surfaces.',
        img: '/images/services/window-cleaning/3.png'
      }
    }
  ];


  return (
    <>
      <MainSection
        title="Professional Window Cleaning Services"
        subTitle="Crystal-Clear Results for Homes and Businesses"
        text="Let the light in with GoGreen’s expert window cleaning services. We clean interior and exterior windows, skylights, glass doors, and facades using streak-free techniques and eco-safe products. Whether it’s a residential home, office, or multi-storey commercial building, our experienced team ensures spotless clarity, improved curb appeal, and long-lasting shine."
        imgSrc="/images/services/window-cleaning/main.jpg" // ảnh tạm thời
      />

      <TabsSection items={Items} />
      <ServicesSection
        items={_services}
        subtitle="More Than Just Glass"
        title="Explore Our Services"
      />
      <section>
        <div className="container">
          <TextBlock
            subtitle="Precision & Safety"
            title="Our Window Cleaning Approach"
            paragraph="GoGreen cleans everything from storefronts to skyscrapers with safety, eco-conscious products, and unmatched attention to detail."
          />
        </div>
      </section>
      <TimelineModern />
      <IndustriesSection
        items={_industries}
        title="Industries We Serve"
        subTitle="Commercial, Residential & More"
      />
      <FAQ />
      <ContactUsSection />
    </>
  );
}
