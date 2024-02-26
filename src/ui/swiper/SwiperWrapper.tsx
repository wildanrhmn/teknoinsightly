import { fetchAllPosts } from "@/lib/data";

import SwiperCarousel from "./Swiper";

export default async function Swiper(){
    const carouselData = await fetchAllPosts();
    return(
        <SwiperCarousel carouselData={carouselData} />
    )
}