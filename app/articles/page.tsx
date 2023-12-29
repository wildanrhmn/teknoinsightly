import { NextPage, Metadata } from "next";

import SwiperCarousel from "@/components/modules/utils/Swiper";
import HomeContent from "@/components/modules/utils/Content";

export const metadata: Metadata = {
    title: 'TeknoInsight - Articles',
    description: 'Generated by create next app',
  };


const Page: NextPage = () => {
    return(
        <>
            <SwiperCarousel />
            <HomeContent />
        </>
    )
}

export default Page;