import React, { useEffect, useState } from "react";
import SectionHeader from "./../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseBox from "./../../Components/CourseBox/CourseBox";

import "swiper/css";
import "swiper/css/pagination";

import "./PresellCourses.css";

export default function PresellCourses() {
  const [presellCourses, setPresellCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/v1/courses/presell")
      .then((res) => res.json())
      .then((allPresellCourses) => {
        setPresellCourses(allPresellCourses);
      });
  }, []);
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title="دوره های در حال پیش فروش"
          desc="متن تستی برای توضیحات دوره های پیش فروش"
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
                    teacher={"قدیر یلمه"}
                    members={1105}
                    price={"5,78,000 "}
                    img={"fareelancer.png"}
                    isSlider={true}
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <CourseBox
                    title={"پروژه های کاربردی با پایتون"}
                    teacher={"رضا دولتی"}
                    members={22}
                    price={"658,000 "}
                    img={"tricks.png"}
                    isSlider={true}
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <CourseBox
                    title={"پروژه های کاربردی با پایتون"}
                    teacher={"رضا دولتی"}
                    members={899}
                    price={"224,000 "}
                    img={"python-p.png"}
                    isSlider={true}
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <CourseBox
                    title={"آموزش Canvas برای برنامه نویسان فرانت‌اند"}
                    teacher={"محمدامین سعیدی راد"}
                    members={965}
                    price={"687,000 "}
                    img={"canvas.png"}
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
