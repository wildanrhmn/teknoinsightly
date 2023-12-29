"use client";

import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import { Icon } from "@iconify/react";

import Image from "next/image";
import DummyImage from "../../../assets/images/dummy_img2.png";
import "../../../assets/css/home.css";

const HomeContent: FunctionComponent = () => {
  const pathname = usePathname();
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
          {pathname === "/articles" && <h5>Artikel</h5>}
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
              <hr />
            </div>
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
              <hr />
            </div>
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
              <hr />
            </div>
          </div>
          <div className="d-none d-md-flex flex-column gap-3 col-md-4 col-xl-3">
            {pathname !== "/tutorials" && (              
              <div className="asidebar">
                  <div className="asidebar__header">
                    <h3>Artikel Populer</h3>
                  </div>
                  <div className="asidebar__content">
                    <div className="asidebar__content__item">
                      <h5>Intel I9 9900K Version 7.00</h5>
                      <span>Kemarin oleh Wildan Nur Rahman</span>
                    </div>
                    <div className="asidebar__content__item">
                      <h5>Intel I9 9900K Version 7.00</h5>
                      <span>Kemarin oleh Wildan Nur Rahman</span>
                    </div>
                    <div className="asidebar__content__item">
                      <h5>Intel I9 9900K Version 7.00</h5>
                      <span>Kemarin oleh Wildan Nur Rahman</span>
                    </div>
                  </div>
              </div>
            )}
            
            {pathname !== '/articles' && (              
              <div className="asidebar">
                  <div className="asidebar__header">
                    <h3>Tutorial Terbaru</h3>
                  </div>
                  <div className="asidebar__content">
                    <div className="asidebar__content__item d-flex align-items-center gap-3">
                      <div className="asidebar__content__image" />
                      <h5>Cara mendapatkan RAM 8GB ddr5</h5>
                    </div>
                    <div className="asidebar__content__item d-flex align-items-center gap-3">
                      <div className="asidebar__content__image" />
                      <h5>Cara mendapatkan RAM 8GB ddr5</h5>
                    </div>
                    <div className="asidebar__content__item d-flex align-items-center gap-3">
                      <div className="asidebar__content__image" />
                      <h5>Cara mendapatkan RAM 8GB ddr5</h5>
                    </div>
                  </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
