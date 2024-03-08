import { fetchSwiperData } from "@/lib/data";

import SwiperCarousel from "./Swiper";

export default async function Swiper() {
  const carouselData = await fetchSwiperData();
  return <SwiperCarousel carouselData={carouselData} />;
}
