import Swiper from "@/ui/swiper/SwiperWrapper";
import Content from "@/ui/content/Content";

import { Suspense } from "react";
import { SwiperSkeleton } from "@/ui/skeletons";

import { fetchAllPages } from "@/lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchAllPages({ type: "" });
  return (
    <>
      <Suspense fallback={<SwiperSkeleton />}>
        <Swiper />
      </Suspense>
      <Content currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
