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
      title: 'Sweeping & Debris Removal',
      content: {
        title: 'Sweeping & Debris Removal',
        description:
          'We remove sand, leaves, litter, and other debris to ensure a clean and professional appearance in parkades and lots.',
        img: '/images/services/cleaning/1.png'
      }
    },
    {
      title: 'Oil Stain Cleaning',
      content: {
        title: 'Oil Stain Cleaning',
        description:
          'We lift oil and fluid stains from concrete or asphalt using safe and effective degreasers that restore the surface.',
        img: '/images/services/cleaning/2.jpg'
      }
    },
    {
      title: 'Pressure Washing',
      content: {
        title: 'Pressure Washing',
        description:
          'Our pressure washers scrub away dirt, salt, and residue, improving safety and traction in parking areas.',
        img: '/images/services/cleaning/3.jpg'
      }
    },
    {
      title: 'Drain & Grate Clearing',
      content: {
        title: 'Drain & Grate Clearing',
        description:
          'We prevent flooding and water buildup by cleaning out clogged drains, grates, and surrounding areas.',
        img: '/images/services/cleaning/4.jpg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Underground Parkade & Lot Cleaning"
        subTitle="Cleaner Lots. Safer Spaces."
        text="GoGreen keeps your underground and surface lots spotless and hazard-free. We sweep, scrub, and clean with detail and eco-conscious care."
        imgSrc="/images/services/cleaning/main.png"
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
