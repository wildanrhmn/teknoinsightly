"use client";

import { FunctionComponent } from "react";

import { Icon } from "@iconify/react";

import Image from "next/image";

import DummyImage from "../../../assets/images/dummy_img2.png";

import "../../../assets/css/home.css";

const HomeContent: FunctionComponent = () => {
  return (
    <section className="home__section">
      <div className="container">
        <div className="d-flex align-items-center gap-1 home__header">
          <Icon
            icon="iconamoon:home"
            color="#2aa8da"
            className="home__header__icon"
          />
          <h5>Beranda</h5>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 col-xl-9">
            {/* For every content map */}
            <div className="content__card">
              <div className="content__card__header">
                <h3>MSI RTX 4090 TI 8GB Vram DDR5 Review</h3>
                <span>Dipublish 1 menit yang lalu oleh Wildan</span>
              </div>
              <div className="content__card__body mt-2">
                <Image
                  src={DummyImage}
                  alt="dummy image"
                  className="content__card__image"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>
              <div className="content__card__footer" />
            </div>
          </div>
          <div className="d-none d-md-block col-md-4 col-xl-3">Asidebar Here</div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
