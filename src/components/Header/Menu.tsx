'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { _industries, _services } from '@/utils/constants';
import DropdownMenu from './DropdownMenu';
import { MenuHeader } from '@/utils/URL';
import DropdownMenuServices from './DropdownMenuServices';

const Menu = () => {
  const pathname = usePathname();

  const linkClass = `whitespace-nowrap font-Avenir font-black uppercase transition-colors duration-300 ease-in-out hover:text-goGreen-green`;

  const aboutLinks = [
    {
      title: 'Why Go Green',
      link: '/why-us'
    },
    {
      title: 'Our History',
      link: '/our-journey'
    },
    {
      title: 'Our Technologies',
      link: '/our-technologies'
    }
  ];

  const aboutContent =
    'We maintain competitive pricing and unwavering quality and are committed to reducing environmental impact and protecting people`s health.';
  const servicesContent =
    'Your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton.';
  const groupedMenuItems: any = [
    {
      groupTitle: '🧹 Cleaning Services',
      items: [
        _services.find((s) => s.title === 'Cleaning'),
        _services.find((s) => s.title === 'Residential Cleaning'),
        _services.find((s) => s.title === 'Commercial Floor Cleaning'),
        _services.find((s) => s.title === 'Janitorial Cleaning'),
        _services.find((s) => s.title === 'Carpet Steam Cleaning'),
        _services.find((s) => s.title === 'Window Cleaning'),
      ].filter(Boolean)
    },
    {
      groupTitle: '🛠 Specialized Cleaning',
      items: [
        _services.find((s) => s.title === 'Post-Construction Cleaning'),
        _services.find((s) => s.title === 'Disinfection & Sanitization'),
        _services.find((s) => s.title === 'Garage & Warehouse Cleaning'),
        _services.find((s) => s.title === 'Underground Parkade & Lot Cleaning'),
        _services.find((s) => s.title === 'Driveway Pressure Wash & Sealing'),
        _services.find((s) => s.title === 'Building Pressure Washing'),
        _services.find((s) => s.title === 'Outdoor Building Maintenance'),
      ].filter(Boolean)
    },
    {
      groupTitle: '🏭 Industries Served',
      items: _industries.map((item) => ({
        title: item.title,
        link: item.link
      }))
    },
    {
      groupTitle: '🔧 Other Services',
      items: [
        _services.find((s) => s.title === 'Integrated Facility'),
        _services.find((s) => s.title === 'Environmental'),
        _services.find((s) => s.title === 'Specialized Services'),
        _services.find((s) => s.title === 'Junk Removal'),
      ].filter(Boolean)
    }
  ];

  return (
    <>
      <DropdownMenu
        title="About Us"
        content={aboutContent}
        href="/about"
        menuItems={aboutLinks}
        linkClass={linkClass}
        currentPath={pathname}
      />
      <DropdownMenuServices
        title="Services and Industries"
        content={servicesContent}
        href="/services"
        menuItems={groupedMenuItems}
        linkClass={linkClass}
        currentPath={pathname}
      />
      <Link href="/blogs" className={`${linkClass} ${pathname === '/blogs' ? ' text-goGreen-green' : ''}`}>
        Blogs
      </Link>
      {MenuHeader.map((item, index) => (
        <div key={index}>
          <Link
            href={item.link || '#'}
            className={`${linkClass} ${pathname === item.link ? ' text-goGreen-green' : ''}`}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Menu;
