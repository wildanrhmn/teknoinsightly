"use client";

import Link from "next/link";
import clsx from "clsx";

import { useContext } from "react";
import { HeaderContext } from "@/lib/context/HeaderContext";
import { usePathname } from "next/navigation";
import { links } from "../../utils/links-data";

export default function MobileNavLinks() {
  const { isActive } = useContext(HeaderContext);
  const pathname = usePathname();
  return (
    <div
      className={clsx(
        "bg-dark bg-opacity-95 absolute h-[100vh] z-20 transition-all duration-200 translate-y-[-100%]",
        {
          "translate-y-[0%]": isActive,
        }
      )}
    >
      <div className="flex justify-center items-center flex-col gap-10 mt-[100px]">
        {links.map((link, index) => (
          <div key={index} className="relative group">
            <Link
              href={link.href}
              className={clsx(
                "text-primary text-[16px] flex items-center gap-1 relative",
                {
                  "text-secondary font-medium after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-secondary after:transition-all after:duration-200":
                    pathname === link.href,
                }
              )}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-5 px-5 mt-[55px]">
        <input type="text" className="w-full h-[33px] rounded-[16px] bg-primary outline-none border-none text-[13px] px-5 focus:border-solid focus:border-secondary focus:border-2" />
        <button className="rounded-[16px] bg-secondary text-primary px-[15px] w-[120px] h-[34px] font-medium text-[14px]">Cari</button>
      </div>
    </div>
  );
}
