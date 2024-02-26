"use client";

import { usePathname } from "next/navigation";

import { Icon } from "@iconify/react";
import Breadcrumbs from "@/utils/breadcrumbs";

export default function ContentBreadcrumbs({ params } : { params?: string }) {
  const pathname = usePathname();
  return (
    <div className="bg-primary shadow-md p-[10px] mb-[15px] flex gap-[7px] items-center">
      <Icon
        icon="iconamoon:home"
        color="#2aa8da"
        className="w-[23px] h-[23px]"
      />
      {pathname === "/home" ? (
        <Breadcrumbs
          breadcrumbs={[{ label: "Home", href: "/home", active: true }]}
        />
      ) : pathname === "/article" ? (
        <Breadcrumbs
          breadcrumbs={[{ label: "Artikel", href: "/article", active: true }]}
        />
      ) : pathname === "/tutorial" ? (
        <Breadcrumbs
          breadcrumbs={[{ label: "Tutorial", href: "/tutorial", active: true }]}
        />
      ) : pathname === "/contact-us" ? (
        <Breadcrumbs
          breadcrumbs={[
            { label: "Contact Us", href: "/contact-us", active: true },
          ]}
        />
      ) : pathname === `/article/${params}` ? (
        <Breadcrumbs
          breadcrumbs={[
            { label: "Artikel", href: "/article" },
            {
              label: `${params}`.replace("-", " "),
              href: `/article/${params}`,
              active: true,
            },
          ]}
        />
      ) : pathname === `/tutorial/${params}` ? (
        <Breadcrumbs
          breadcrumbs={[
            { label: "Tutorial", href: "/tutorial" },
            {
              label: `${params}`.replace("-", " "),
              href: `/tutorial/${params}`,
              active: true,
            },
          ]}
        />
      ) : pathname === `/articles/article-detail/$${params}` ? (
        <Breadcrumbs
          breadcrumbs={[
            { label: "Artikel", href: "/article" },
            {
              label: "Detail Artikel",
              href: `/article/article-detail/${params}`,
              active: true,
            },
          ]}
        />
      ) : pathname === `tutorials/tutorial-detail/${params}` ? (
        <Breadcrumbs
          breadcrumbs={[
            { label: "Tutorial", href: "/tutorial" },
            {
              label: "Detail Tutorial",
              href: `/tutorial/tutorial-detail/${params}`,
              active: true,
            },
          ]}
        />
      ) : null}
    </div>
  );
}
