import React from "react";
import "../styles/sell-car.css";
import Sidebar from "../components/Sidebar/Sidebar";

const SellCar = () => {
  return (
    <div className="sell__car" dir="rtl">
      <Sidebar />
      <div className="sell__car-wrapper">
        <div className="offer__wrapper">
          <div className="offer__top">
            <h2 className="sell__car-title">المتبرعين</h2>
          </div>

          <div className="offer__list">
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">حمزة الظهراوي</h3>
                <h6 className="avg__price">
                  $1200 <span>اجمالي مبلغ التبرع</span>
                </h6>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">$100</h6>
                <p className="spend__title">اخر مبلغ متبرع به</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i class="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">$1174</h6>
                <p className="spend__title">Model Spend</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">$811</h6>
                <p className="spend__title">Spend Per Unit Turned</p>
              </div>
            </div>
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">رزان عبوشي</h3>
                <h6 className="avg__price">
                  $750 <span>اجمالي مبلغ التبرع</span>
                </h6>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">200$</h6>
                <p className="spend__title">اخر مبلغ متبرع به</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i class="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">$1174</h6>
                <p className="spend__title">Model Spend</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">$811</h6>
                <p className="spend__title">Spend Per Unit Turned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCar;
