"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Icon } from "@iconify/react";
import { Post } from "@/lib/definiton/definition";

import Link from "next/link";

import "swiper/css";
import "./swipercustom.css";

export default function SwiperCarousel({
  carouselData,
}: {
  carouselData: Post[];
}) {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <section className="mb-5">
      <div className="w-full h-full p-[25px] flex justify-center bg-dark bg-opacity-20">
        <div className="container flex items-center justify-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={15}
            autoplay
            modules={[Navigation]}
            navigation={{
              prevEl,
              nextEl,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            className="mySwiper"
          >
            {carouselData?.map((data, index) => {
              const path = data.type === "article" ? "/article" : "/tutorial";
              const pathDetail = `${path}/${path}-detail/${data.id}`;
              return (
                <SwiperSlide key={index}>
                  <div className="w-[354px] h-[200px] sm:h-[250px]">
                    <Image
                      src={data.image[1]}
                      alt="dummy image"
                      className="swiper__img"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="w-full absolute bottom-0 bg-black bg-opacity-25 p-[5px] flex justify-center items-center lg:p-[10px]">
                    <Link
                      href={pathDetail}
                      className="text-primary text-[13px] font-semibold xl:text-[15px] lg:text-[14px]"
                    >
                      {data.title}
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div
            ref={(node) => setPrevEl(node)}
            className="swiper__navigation__prev flex items-center justify-center"
          >
            <Icon
              icon="tabler:arrow-left"
              color="white"
              className="swiper__navigation__icon"
            />
          </div>
          <div
            ref={(node) => setNextEl(node)}
            className="swiper__navigation__next flex items-center justify-center"
          >
            <Icon
              icon="tabler:arrow-right"
              color="white"
              className="swiper__navigation__icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
