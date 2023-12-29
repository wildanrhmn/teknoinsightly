'use client'

import { FunctionComponent, useState } from "react";
import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import "swiper/css";
import "../../../assets/css/swiperCarousel.css";

import dummyImg from '../../../assets/images/dummy_img.png';

import { Icon } from '@iconify/react';

const SwiperCarousel: FunctionComponent = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
  return (
    <section className="swiper__section">
      <div className="swiper__bg">
        <div className="container d-flex align-items-center justify-content-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={15}
            modules={[Navigation]}
            navigation={{
              prevEl,
              nextEl
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              0: {
                slidesPerView: 1
              }
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={dummyImg} alt="dummy image" priority className="swiper__img" />
              <div>
                <span>MSI RTX 4090 TI OverClock</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dummyImg} alt="dummy image" priority className="swiper__img" />
              <div>
                <span>MSI RTX 4090 TI OverClock</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dummyImg} alt="dummy image" priority className="swiper__img" />
              <div>
                <span>MSI RTX 4090 TI OverClock</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dummyImg} alt="dummy image" priority className="swiper__img" />
              <div>
                <span>MSI RTX 4090 TI OverClock</span>
              </div>
            </SwiperSlide>
          </Swiper>
          <div ref={(node) => setPrevEl(node)} className="swiper__navigation__prev d-flex align-items-center justify-content-center">
            <Icon icon="tabler:arrow-left" color="white" className="swiper__navigation__icon" />
          </div>
          <div ref={(node) => setNextEl(node)} className="swiper__navigation__next d-flex align-items-center justify-content-center">
            <Icon icon="tabler:arrow-right" color="white" className="swiper__navigation__icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwiperCarousel;
