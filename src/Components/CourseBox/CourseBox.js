import React, { useState } from "react";
import CircleSpinner from "../CircleSpinner/CircleSpinner";

import "./CourseBox.css";

export default function CourseBox({title,dec,img,teacher,price,members,isSlider}) {

  const [isImgShow, setIsImgShow] = useState(false)

  const onImageLoaded = () => setIsImgShow(true)

  const onImageError = () => {
    // Codes
  }

  return (
    <div className="col-4" style={{width: `${isSlider && '100%'}`}}>
      <div className="course-box">
        <a href="#">
          <img
            src={`/images/courses/${img}`}
            alt="Course img"
            className="course-box__img"
            onLoad={onImageLoaded}
            onError={onImageError}
          />
          {
            !isImgShow && (
              <CircleSpinner />
            )
          }
        </a>
        <div className="course-box__main">
          <a href="#" className="course-box__title">
           {title}
          </a>

          <div className="course-box__rating-teacher">
            <div className="course-box__teacher">
              <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
              <a href="#" className="course-box__teacher-link">
               {teacher}
              </a>
            </div>
            <div className="course-box__rating">
              <img
                src="/images/svgs/star.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
            </div>
          </div>

          <div className="course-box__status">
            <div className="course-box__users">
              <i className="fas fa-users course-box__users-icon"></i>
              <span className="course-box__users-text ">{members}</span>
            </div>
            <span className="course-box__price">{price}</span>
          </div>
        </div>

        <div className="course-box__footer">
          <a href="#" className="course-box__footer-link">
            مشاهده اطلاعات
            <i className="fas fa-arrow-left course-box__footer-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
