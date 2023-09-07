import React, { useEffect, useState } from "react";
import SectionHeader from "./../SectionHeader/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import CourseBox from "./../../Components/CourseBox/CourseBox";

import "swiper/css";
import "swiper/css/pagination";

import "./PopularCourses.css";

export default function PopularCourses() {
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title="محبوب ترین دوره ها"
          desc="دوره های محبوب بر اساس امتیاز دانشجوها"
        />

        <div className="courses-content">
          <div className="container">
            <div className="row">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <CourseBox
                    title={"آموزش حرفه ای NodeJS بدون پیش نیاز"}
                    teacher={"محمدامین سعیدی راد"}
                    members={259}
                    price={"4,350,000 "}
                    img={"nodejs.png"}
                    isSlider={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CourseBox
                    title={"رسیدن به درامد ماهانه ۱۰۰ دلار از طریق یوتیوب"}
                    teacher={"قدیر یلمه"}
                    members={656}
                    price={"420,000"}
                    img={"youtuber.png"}
                    isSlider={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CourseBox
                    title={"آموزش حرفه ای NodeJS بدون پیش نیاز"}
                    teacher={"محمدامین سعیدی راد"}
                    members={235}
                    price={"4,350,000 "}
                    img={"python.png"}
                    isSlider={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CourseBox
                    title={"آموزش حرفه ای NodeJS بدون پیش نیاز"}
                    teacher={"محمدامین سعیدی راد"}
                    members={156}
                    price={"750,000 "}
                    img={"js_project.png"}
                    isSlider={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CourseBox
                    title={"آموزش حرفه ای NodeJS بدون پیش نیاز"}
                    teacher={"رضا دولتی"}
                    members={7852}
                    price={"1,500,000 "}
                    img={"jango.png"}
                    isSlider={true}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
