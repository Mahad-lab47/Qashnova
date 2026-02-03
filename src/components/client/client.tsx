"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "@/components/client/client.module.css";
import Logo from "@/assets/svg/Ellipse 35.svg";
// const Slider = dynamic(() => import("react-slick"), {
//   ssr: false,
// });
export default function Client() {
  return (
    <div className={styles.clientwidth}>
      <div className={styles.headingflex}>
        <p className={styles.clientstyling}>CLIENT</p>
        <h1 className={styles.heading}>Our Testimonials</h1>
      </div>
      <div className={styles.card}>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          loop
          navigation
          pagination={{ type: "fraction" }}
          className={styles.slider}
        >
          <SwiperSlide>
            <div className={styles.content}>
              <div className={styles.flex}>
                <Image src={Logo} alt="client" className={styles.avatar} />

                <h4 className={styles.name}>Sarah Johnson</h4>
                <p className={styles.role}>
                  Owner of a Boutique Clothing Store
                </p>
              </div>
              <p className={styles.quote}>
                “Pulse Tech delivers exceptional service! Highly responsive and
                effective digital marketing strategies have boosted our website
                traffic and conversions.”
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.content}>
              <div className={styles.flex}>
                <Image src={Logo} alt="client" className={styles.avatar} />

                <h4 className={styles.name}>John Smith</h4>
                <p className={styles.quote}>
                  “Outstanding support and clean execution. Highly recommended.”
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.content}>
              <div className={styles.flex}>
                <Image src={Logo} alt="client" className={styles.avatar} />

                <h4 className={styles.name}>Emily Brown</h4>
                <p className={styles.quote}>
                  “Professional, fast, and very reliable team.”
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
