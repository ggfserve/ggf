import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollExpandLine } from '../Animations';

const DropdownMenu = ({
  title,
  content,
  href,
  linkClass,
  currentPath,
  menuItems
}: {
  title: string;
  content: string;
  linkClass?: string;
  currentPath: string;
  href: string;
  menuItems: {
    title: string;
    link?: string;
  }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={href}
        className={`${linkClass} ${currentPath === href ? ' text-goGreen-green' : ''
          }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </Link>

      <motion.div
        className="fixed w-screen h-fit bg-white flex flex-col items-center justify-start z-40 left-0 top-[110px] overflow-hidden"
        initial={{ maxHeight: 0 }}
        animate={{ maxHeight: isOpen ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container">
          <div className="grid grid-cols-[1fr_3fr] gap-4 overflow-y-auto">
            <div className="">
              <h4 className="h4 mb-2">{title}</h4>
              <p className="mb-6">{content}</p>
              <Link
                href={href}
                className="uppercase flex items-center justify-center w-fit cursor-pointer transition-colors duration-300 ease-in-out text-goGreen-green hover:underline"
                onClick={() => setIsOpen(!isOpen)}
              >
                Learn More
              </Link>
            </div>
            <div className="grid grid-cols-2 relative pl-11">
              <ScrollExpandLine className="rounded-full" />
              {[...Array(Math.ceil(menuItems.length / 8))].map((_, i) => {
                const itemsInColumn = menuItems.slice(i * 8, (i + 1) * 8);
                return (
                  <div className="flex flex-col gap-4" key={i}>
                    {itemsInColumn.map((item, index) => (
                      <Link
                        href={item.link || '#'}
                        className={`Accent uppercase hover:text-goGreen-green transition-colors text-[14px] duration-300 ease-in-out 
            ${currentPath === item.link ? 'text-goGreen-green' : ''}`}
                        key={index}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DropdownMenu;
