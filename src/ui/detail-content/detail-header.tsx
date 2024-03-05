"use client";

import { usePathname } from "next/navigation";
import Breadcrumbs from "@/utils/breadcrumbs";

export default function DetailContentHead({
  title,
  date,
  author,
  id,
}: {
  title: string;
  date: string;
  author: string;
  id: string;
}) {
  const pathname = usePathname();
  return (
    <div className="w-full bg-[#D9D9D9] bg-opacity-20 p-6 sm:p-14 text-dark">
      <div className="flex flex-col gap-5 items-center justify-center">
        {pathname.includes("article") ? (
          <Breadcrumbs
            breadcrumbs={[
              { label: "Home", href: "/home" },
              { label: "Artikel", href: "/article" },
              {
                label: title,
                href: `/article/article-detail/${id}`,
                active: true,
              },
            ]}
          />
        ) : (
          <Breadcrumbs
            breadcrumbs={[
              { label: "Home", href: "/home" },
              { label: "Tutorial", href: "/tutorial" },
              {
                label: "MSI RTX 4090Ti Overclock 8GB Vram",
                href: `/tutorial/tutorial-detail/${id}`,
                active: true,
              },
            ]}
          />
        )}
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="sm:text-[28px] text-[24px] font-extrabold">{title}</h1>
          <span className="text-[13px]">
            {`Dipublish pada ${date} oleh ${author}`}
          </span>
        </div>
      </div>
    </div>
  );
}
