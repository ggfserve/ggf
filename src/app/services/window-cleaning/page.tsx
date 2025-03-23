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
      title: 'Interior Window Cleaning',
      content: {
        title: 'Interior Window Cleaning',
        description:
          'We clean smudges, fingerprints, and buildup from interior glass with streak-free solutions and microfiber tools.',
        img: '/images/services/cleaning/1.png'
      }
    },
    {
      title: 'Exterior Window Washing',
      content: {
        title: 'Exterior Window Washing',
        description:
          'We safely clean exterior windows using poles, lifts, or rope access—leaving your building sparkling clean.',
        img: '/images/services/cleaning/2.jpg'
      }
    },
    {
      title: 'Post-Construction Cleaning',
      content: {
        title: 'Post-Construction Cleaning',
        description:
          'We remove paint overspray, dust, and residue from newly installed or renovated windows without scratching the surface.',
        img: '/images/services/cleaning/3.jpg'
      }
    },
    {
      title: 'Hard Water & Mineral Removal',
      content: {
        title: 'Hard Water & Mineral Removal',
        description:
          'Our specialists eliminate mineral deposits and water stains that affect glass clarity and appearance.',
        img: '/images/services/cleaning/4.jpg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Window Cleaning"
        subTitle="Clear Views, Inside & Out"
        text="Let the light shine through with GoGreen’s professional window cleaning. Our eco-safe methods deliver streak-free, spotless results every time."
        imgSrc="/images/services/cleaning/main.png"
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
