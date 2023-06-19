import React from "react";
import img from "../assets/images/image.png";
import "../styles/details.css";
import Sidebar from "../components/Sidebar/Sidebar";

const Details = () => {
  return (
    <>
      <div className="containerr" dir="rtl">
        <div className="box">
          <div className="images">
            <div className="img-holder active">
              <img src={img} />
            </div>
            <div className="img-holder">
              <img src={img} />
            </div>
            <div className="img-holder">
              <img src={img} />
            </div>
            <div className="img-holder">
              <img src={img} />
            </div>
          </div>
          <div className="basic-info">
            <h1>بيانات الطلب</h1>
          </div>
          <div className="info">
            <p>الأسم:</p>
            <p>رقم الهاتف:</p>
            <p>البريد الألكتروني:</p>
            <p>العنوان:</p>
            <p className="p_story">قصتي:</p>
          </div>
          <div className="approve_req"></div>
        </div>
      </div>
    </>
  );
};

export default Details;
