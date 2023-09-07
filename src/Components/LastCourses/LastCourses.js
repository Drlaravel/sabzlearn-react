import React from "react";
import CourseBox from "../CourseBox/CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";

import "./LastCourses.css";

export default function LastCourses() {
  return (
    <>
      <div className="courses">
        <div className="container">
          <SectionHeader
            title="جدیدترین دوره ها"
            desc="سکوی پرتاپ شما به سمت موفقیت"
            btnTitle="تمامی دوره ها"
            btnHref='courses'
          />

          <div className="courses-content">
            <div className="container">
              <div className="row">
                <CourseBox title={'آموزش حرفه ای NodeJS بدون پیش نیاز'} teacher={'محمدامین سعیدی راد'} members={259} price={"4,350,000 "} img={"nodejs.png"} />
                <CourseBox title={'رسیدن به درامد ماهانه ۱۰۰ دلار از طریق یوتیوب'} teacher={'قدیر یلمه'} members={656} price={'420,000'} img={"youtuber.png"} />
                <CourseBox title={'آموزش حرفه ای NodeJS بدون پیش نیاز'} teacher={'محمدامین سعیدی راد'} members={235} price={"4,350,000 "} img={"python.png"} />
                <CourseBox title={'آموزش حرفه ای NodeJS بدون پیش نیاز'} teacher={'محمدامین سعیدی راد'} members={156} price={"750,000 "} img={"js_project.png"} />
                <CourseBox title={'آموزش حرفه ای NodeJS بدون پیش نیاز'} teacher={'رضا دولتی'} members={7852} price={"1,500,000 "} img={"jango.png"} />
                <CourseBox title={'آموزش حرفه ای NodeJS بدون پیش نیاز'} teacher={'قدیر یلمه'} members={1105} price={"5,78,000 "} img={"fareelancer.png"} />
                <CourseBox title={'پروژه های کاربردی با پایتون'} teacher={'رضا دولتی'} members={22} price={"658,000 "} img={"tricks.png"} />
                <CourseBox title={'پروژه های کاربردی با پایتون'} teacher={'رضا دولتی'} members={899} price={"224,000 "} img={"python-p.png"} />
                <CourseBox title={'آموزش Canvas برای برنامه نویسان فرانت‌اند'} teacher={'محمدامین سعیدی راد'} members={965} price={"687,000 "} img={"canvas.png"} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
