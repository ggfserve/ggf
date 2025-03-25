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
      title: 'Recurring Home Cleaning',
      content: {
        title: 'Recurring Home Cleaning',
        description:
          'We offer flexible recurring cleaning plans—weekly, bi-weekly, or monthly—tailored to your lifestyle and preferences. From kitchens and bathrooms to bedrooms and living areas, we keep your home consistently fresh and welcoming.',
        img: '/images/services/cleaning/1.png'
      }
    },
    {
      title: 'Deep Cleaning Services',
      content: {
        title: 'Deep Cleaning Services',
        description:
          'Our deep cleaning service targets areas often overlooked in routine cleaning—baseboards, behind appliances, interior windows, and more. Ideal for seasonal cleaning, move-ins, or post-renovation resets.',
        img: '/images/services/cleaning/2.jpg'
      }
    },
    {
      title: 'Green Cleaning Products',
      content: {
        title: 'Green Cleaning Products',
        description:
          'We use eco-certified, non-toxic, and biodegradable cleaning products that are safe for children, pets, and allergy-sensitive individuals. Clean doesn’t have to mean harsh chemicals.',
        img: '/images/services/cleaning/3.jpg'
      }
    },
    {
      title: 'Trusted, Trained Professionals',
      content: {
        title: 'Trusted, Trained Professionals',
        description:
          'Our cleaners are background-checked, insured, and professionally trained. You can count on respectful, detail-oriented service every time we enter your home.',
        img: '/images/services/cleaning/4.jpg'
      }
    }
  ];


  return (
    <>
      <MainSection
        title="Residential Cleaning Services"
        subTitle="Eco-Friendly Cleaning for a Healthier, Happier Home"
        text="Enjoy a spotless, stress-free living space with GoGreen’s professional residential cleaning services. Whether it’s regular upkeep or a deep seasonal refresh, our trained cleaners use safe, non-toxic products to clean your home from top to bottom—ensuring comfort, hygiene, and peace of mind for you and your family."
        imgSrc="/images/services/cleaning/main.png" // ảnh tạm thời
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
