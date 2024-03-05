"use client";

import { usePathname } from "next/navigation";

import { Icon } from "@iconify/react";
import Breadcrumbs from "@/utils/breadcrumbs";

export default function ContentBreadcrumbs({
  params,
  term,
}: {
  params?: string;
  term?: string;
}) {
  const pathname = usePathname();
  return (
    <div className="bg-primary shadow-md p-[10px] flex gap-[7px] items-center">
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
      ) : pathname === `/search/${term}` ? (
        <Breadcrumbs
          breadcrumbs={[
            { label: "Search", href: "/home" },
            {
              label: `Hasil pencarian pada ${term}`,
              href: `/search/${term}}`,
              active: true,
            },
          ]}
        />
      ) : null}
    </div>
  );
}
