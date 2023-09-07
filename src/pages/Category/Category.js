import React from "react";
import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";

import "./Category.css";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pagination/Pagination";

export default function Category() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="courses">
        <div className="container">
          <div className="courses-top-bar">
            <div className="courses-top-bar__right">
              <div className="courses-top-bar__row-btn courses-top-bar__icon--active">
                <i className="fas fa-border-all courses-top-bar__icon"></i>
              </div>
              <div className="courses-top-bar__column-btn">
                <i className="fas fa-align-left courses-top-bar__icon"></i>
              </div>

              <div className="courses-top-bar__selection">
                <span className="courses-top-bar__selection-title">
                  مرتب سازی پیش فرض
                  <i className="fas fa-angle-down courses-top-bar__selection-icon"></i>
                </span>
                <ul className="courses-top-bar__selection-list">
                  <li className="courses-top-bar__selection-item courses-top-bar__selection-item--active">
                    مرتب سازی پیش فرض
                  </li>
                  <li className="courses-top-bar__selection-item">
                    مربت سازی بر اساس محبوبیت
                  </li>
                  <li className="courses-top-bar__selection-item">
                    مربت سازی بر اساس امتیاز
                  </li>
                  <li className="courses-top-bar__selection-item">
                    مربت سازی بر اساس آخرین
                  </li>
                  <li className="courses-top-bar__selection-item">
                    مربت سازی بر اساس ارزان ترین
                  </li>
                  <li className="courses-top-bar__selection-item">
                    مربت سازی بر اساس گران ترین
                  </li>
                </ul>
              </div>
            </div>

            <div className="courses-top-bar__left">
              <form action="#" className="courses-top-bar__form">
                <input
                  type="text"
                  className="courses-top-bar__input"
                  placeholder="جستجوی دوره ..."
                />
                <i className="fas fa-search courses-top-bar__search-icon"></i>
              </form>
            </div>
          </div>

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

          <Pagination />

        </div>
      </section>

      <Footer />
    </>
  );
}
