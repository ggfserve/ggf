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
      title: 'Heavy-Duty Surface Cleaning',
      content: {
        title: 'Heavy-Duty Surface Cleaning',
        description:
          'We thoroughly clean concrete and epoxy floors in garages and warehouses using commercial-grade equipment that removes deep-seated dirt, dust, tire marks, oil spills, and chemical residue—restoring surface cleanliness and safety.',
        img: '/images/services/garage-warehouse-cleaning/1.png'
      }
    },
    // {
    //   title: 'Oil & Chemical Spill Remediation',
    //   content: {
    //     title: 'Oil & Chemical Spill Remediation',
    //     description:
    //       'Our trained technicians handle oil and chemical stain removal using eco-safe degreasers and absorbents. We ensure compliance with safety and environmental standards while protecting your floor and drainage systems.',
    //     img: '/images/services/garage-warehouse-cleaning/2.png'
    //   }
    // },
    // {
    //   title: 'Dust & Debris Control',
    //   content: {
    //     title: 'Dust & Debris Control',
    //     description:
    //       'Using industrial vacuums and air-scrubbers, we remove fine dust particles and debris from hard-to-reach areas, improving air quality and reducing fire or slip hazards in high-traffic operational zones.',
    //     img: '/images/services/garage-warehouse-cleaning/3.png'
    //   }
    // }
  ];


  return (
    <>
      <MainSection
        title="Garage & Warehouse Cleaning Services"
        subTitle="Industrial-Grade Cleaning Solutions for Safe, Organized Workspaces"
        text="GoGreen offers specialized cleaning services for garages, warehouses, and other industrial spaces. Our team removes oil stains, dust, debris, and contaminants using eco-safe methods and heavy-duty equipment. Whether it’s a commercial garage, storage facility, or distribution center, we help you maintain a cleaner, safer, and more efficient environment."
        imgSrc="/images/services/garage-warehouse-cleaning/main.png" // ảnh tạm thời
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
