import Swiper from "@/ui/swiper/SwiperWrapper";
import Content from "@/ui/content/Content";

import { Suspense } from "react";
import { SwiperSkeleton } from "@/ui/skeletons";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<SwiperSkeleton />}>
        <Swiper />
      </Suspense>
      <Content />
    </>
  );
}
