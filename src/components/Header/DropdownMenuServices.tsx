import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollExpandLine } from '../Animations';

type MenuGroup = {
    groupTitle: string;
    items: {
        title: string;
        link?: string;
    }[];
};

const DropdownMenuServices = ({
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
    menuItems: MenuGroup[];
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
                className="fixed w-screen bg-white flex flex-col items-center justify-start z-40 left-0 top-[118px] overflow-hidden"
                initial={{ maxHeight: 0 }}
                animate={{ maxHeight: isOpen ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="container pb-5">
                    <div className="grid grid-cols-[1fr_3fr] gap-4 overflow-y-auto">
                        {/* Left column: Title + Description */}
                        <div>
                            <h4 className="h4 mb-2">{title}</h4>
                            <p className="mb-6">{content}</p>
                            <Link
                                href={href}
                                className="uppercase flex items-center justify-center w-fit cursor-pointer transition-colors duration-300 ease-in-out text-goGreen-green hover:underline"
                                onClick={() => setIsOpen(false)}
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Right column: Mega menu groups */}
                        <div className="grid grid-cols-4 gap- relative pl-11 text-[16px]">
                            <ScrollExpandLine className="rounded-full" />
                            {menuItems.map((group, i) => (
                                <div className="flex flex-col gap-3 pr-4" key={i}>
                                    <h5 className="font-semibold text-goGreen-green mb-1">
                                        {group.groupTitle}
                                    </h5>
                                    {group.items.map((item, index) => (
                                        <Link
                                            href={item.link || '#'}
                                            className={`Accent uppercase hover:text-goGreen-green transition-colors duration-300 ease-in-out text-[14px] leading-snug ${currentPath === item.link ? 'text-goGreen-green' : ''
                                                }`}
                                            key={index}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default DropdownMenuServices;
