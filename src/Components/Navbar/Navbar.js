import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    
    <div className="main-header">
      <div className="container-fluid">
        <div className="main-header__content">
          <div className="main-header__right">
            <img
              src="/images/logo/Logo.png"
              className="main-header__logo"
              alt="لوگوی سبزلرن"
            />

            <ul className="main-header__menu">
              <li className="main-header__item">
                <NavLink to="category-info/categorys" className="main-header__link">
                  صفحه اصلی
                </NavLink>
              </li>

              <li className="main-header__item">
              <NavLink to="category-info/categorys" className="main-header__link" >
              آموزش فرانت اند  
              <i className="fas fa-angle-down main-header__link-icon"></i>
              <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <NavLink to="category-info/categorys" className="main-header__dropdown-link">
                        آموزش Html
                      </NavLink>
                    </li>
                    <li className="main-header__dropdown-item">
                      <NavLink to="category-info/categorys" className="main-header__dropdown-link">
                        آموزش Css
                      </NavLink>
                    </li>
                    <li className="main-header__dropdown-item">
                      <NavLink to="category-info/categorys" className="main-header__dropdown-link">
                        آموزش جاوا اسکریپت
                      </NavLink>
                    </li>
                    <li className="main-header__dropdown-item">
                      <NavLink to="category-info/categorys" className="main-header__dropdown-link">
                        آموزش FlexBox
                      </NavLink>
                    </li>
                    <li className="main-header__dropdown-item">
                      <NavLink to="category-info/categorys" className="main-header__dropdown-link">
                        آموزش جامع ری‌اکت
                      </NavLink>
                    </li>
                  </ul>
              </NavLink>
             
              </li>
              <li className="main-header__item">
                <NavLink to="category-info/categorys" className="main-header__link">
                  امنیت
                  <i className="fas fa-angle-down main-header__link-icon"></i>
                  <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <NavLink to="category-info/categorys" className="main-header__dropdown-link">
                        آموزش کالی لینوکس
                      </NavLink>
                    </li>
                    <li className="main-header__dropdown-item">
                      <NavLink to="category-info/categorys" className="main-header__dropdown-link">
                        آموزش پایتون سیاه
                      </NavLink>
                    </li>
                    <li className="main-header__dropdown-item">
                      <NavLink to="category-info/categorys" className="main-header__dropdown-link">
                        آموزش جاوا اسکریپت سیاه
                      </NavLink>
                    </li>
                    <li className="main-header__dropdown-item">
                      <NavLink to="category-info/categorys" className="main-header__dropdown-link">
                        آموزش شبکه
                      </NavLink>
                    </li>
                  </ul>
                </NavLink>
              </li>
              <li className="main-header__item">
                <NavLink to="category-info/categorys" className="main-header__link">
                  مقالات
                  <i className="fas fa-angle-down main-header__link-icon"></i>
                  <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <NavLink to="category-info/categorys" className="main-header__dropdown-link">
                        توسعه وب
                      </NavLink>
                    </li>
                    <li className="main-header__dropdown-item">
                      <NavLink to="category-info/categorys" className="main-header__dropdown-link">
                        جاوا اسکریپت
                      </NavLink>
                    </li>
                    <li className="main-header__dropdown-item">
                      <NavLink to="category-info/categorys" className="main-header__dropdown-link">
                        فرانت اند
                      </NavLink>
                    </li>
                  </ul>
                </NavLink>
              </li>
              <li className="main-header__item">
                <NavLink to="category-info/categorys" className="main-header__link">
                  پایتون
                  <i className="fas fa-angle-down main-header__link-icon"></i>
                  <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <NavLink to="category-info/categorys" className="main-header__dropdown-link">
                        دوره متخصص پایتون
                      </NavLink>
                    </li>
                    <li className="main-header__dropdown-item">
                      <NavLink to="category-info/categorys" className="main-header__dropdown-link">
                        دوره هوش مصنوعی با پایتون
                      </NavLink>
                    </li>
                    <li className="main-header__dropdown-item">
                      <NavLink to="category-info/categorys" className="main-header__dropdown-link">
                        دوره متخصص جنگو
                      </NavLink>
                    </li>
                  </ul>
                </NavLink>
              </li>
              <li className="main-header__item">
                <NavLink to="category-info/categorys" className="main-header__link">
                  مهارت های نرم
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="main-header__left">
            <NavLink to="category-info/categorys" className="main-header__search-btn">
              <i className="fas fa-search main-header__search-icon"></i>
            </NavLink>
            <NavLink to="category-info/categorys" className="main-header__cart-btn">
              <i className="fas fa-shopping-cart main-header__cart-icon"></i>
            </NavLink>
            <NavLink to="category-info/categorys" className="main-header__profile">
              <span className="main-header__profile-text">مدیریت سایت</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>

    
  );
}
