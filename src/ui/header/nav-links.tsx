"use client";

import Link from "next/link";
import clsx from "clsx";

import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { links } from "../../utils/links-data";

import NavSubLinks from "./nav-sublinks";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <div key={link.name} className="relative group">
          <Link
            href={link.hasDropdown ? "#" : link.href}
            className={clsx(
              "relative flex items-center gap-1 text-dark text-[14.5px] font-base",
              {
                "after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-secondary after:transition-all after:duration-200":
                  pathname === link.href && !link.hasDropdown,
              },
              { "font-medium": pathname === link.href },
              {
                'after:content-[" "] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[3px] after:bg-secondary after:transition-all after:duration-200 hover:after:w-full':
                  !link.hasDropdown,
              }
            )}
          >
            {link.name}
            {link.hasDropdown && (
              <Icon
                icon="raphael:arrowdown"
                fontSize={15}
                className="group-hover:rotate-180 transition-all duration-500"
              />
            )}
          </Link>
          {link.hasDropdown && <NavSubLinks navData={link.dropdownItems} />}
        </div>
      ))}
    </>
  );
}
