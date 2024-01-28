"use client";

import { usePathname } from "next/navigation";

import { Icon } from "@iconify/react";
import Breadcrumbs from "@/utils/breadcrumbs";

export default function ContentBreadcrumbs({ params }: { params?: string }) { 
    const pathname = usePathname();
  return (
    <div className="bg-primary shadow-md p-[10px] mb-[15px] flex gap-[7px] items-center">
      <Icon
        icon="iconamoon:home"
        color="#2aa8da"
        className="w-[23px] h-[23px]"
      />
      {pathname === "/home" ? (
        <Breadcrumbs breadcrumbs={[{ label: "Home", href: "/home", active: true }]} />
      ) : pathname === "/articles" ? (
        <Breadcrumbs breadcrumbs={[{ label: "Artikel", href: "/articles", active: true }]} />
      ) : pathname === "/tutorials" ? (
        <Breadcrumbs breadcrumbs={[{ label: "Tutorial", href: "/tutorials", active: true }]} />
      ) : pathname === "/contact-us" ? (
        <Breadcrumbs breadcrumbs={[{ label: "Contact Us", href: "/contact-us", active: true }]} />
      ) : pathname === "/articles/article-detail/[id]" ? (
        <Breadcrumbs breadcrumbs={[{ label: "Artikel", href: "/articles" }, { label: "Detail Artikel", href: `/articles/article-detail/${params}`, active: true }]} />
      ) : pathname === "/tutorials/tutorial-detail/[id]" ? (
        <Breadcrumbs breadcrumbs={[{ label: "Tutorial", href: "/tutorials" }, { label: "Detail Tutorial", href: `/tutorials/tutorial-detail/${params}`, active: true }]} />
      ) : null }
    </div>
  );
}
