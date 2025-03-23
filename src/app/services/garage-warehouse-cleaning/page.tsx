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

export const metadata: Metadata = getPageMeta('/services/garage-warehouse-cleaning');

export default async function Page() {
  const Items = [
    {
      title: 'Floor Degreasing',
      content: {
        title: 'Floor Degreasing',
        description:
          'We tackle oil, grease, and chemical buildup on concrete or industrial floors with powerful, eco-safe degreasing agents that restore safety and cleanliness.',
        img: '/images/services/cleaning/1.png'
      }
    },
    {
      title: 'Dust & Debris Removal',
      content: {
        title: 'Dust & Debris Removal',
        description:
          'Our team removes layers of dust, debris, and clutter in hard-to-reach areas like corners, beams, and shelving units for a clean operational space.',
        img: '/images/services/cleaning/2.jpg'
      }
    },
    {
      title: 'Wall & Equipment Cleaning',
      content: {
        title: 'Wall & Equipment Cleaning',
        description:
          'We clean walls, doors, workstations, storage areas, and industrial equipment to maintain hygiene and improve working conditions.',
        img: '/images/services/cleaning/3.jpg'
      }
    },
    {
      title: 'Safety & Compliance',
      content: {
        title: 'Safety & Compliance',
        description:
          'A clean garage or warehouse improves visibility, reduces fire risk, and meets health and safety regulations—keeping your staff safe and inspectors satisfied.',
        img: '/images/services/cleaning/4.jpg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Garage & Warehouse Cleaning"
        subTitle="Heavy-Duty Cleaning for Operational Efficiency"
        text="GoGreen specializes in deep-cleaning industrial garages and warehouses. From floor degreasing to debris removal, we help maintain a clean, safe, and efficient facility."
        imgSrc="/images/services/cleaning/main.png"
      />
      <TabsSection items={Items} />
      <ServicesSection
        items={_services}
        subtitle="Explore Our Other Services"
        title="Complete Facility Solutions"
      />
      <section>
        <div className="container">
          <TextBlock
            subtitle="Clean Spaces, Productive Operations"
            title="Our Approach to Industrial Cleaning"
            paragraph="We understand the unique needs of industrial environments. GoGreen brings powerful cleaning solutions, trained staff, and eco-conscious practices to every garage and warehouse job."
          />
        </div>
      </section>
      <TimelineModern />
      <IndustriesSection
        items={_industries}
        title="Industries We Serve"
        subTitle="From Logistics to Manufacturing & Beyond"
      />
      <FAQ />
      <ContactUsSection />
    </>
  );
}
