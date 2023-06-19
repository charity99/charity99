import React from "react";
import img from "../assets/images/image.png";
import "../styles/details.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

const Details = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchAllResort = async () => {
      try {
        const res = await axios.get("http://localhost:5000/getAllBeneficer");
        setDetails(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllResort();
  }, []);
  return (
    <>
      <div className="containerr" dir="rtl">
        <Sidebar />
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
          {details.map((DonationForm) => (
            <div className="info">
              <p>الأسم: {DonationForm.fullName}</p>
              <p>رقم الهاتف: {DonationForm.phone}</p>
              <p>البريد الألكتروني: {DonationForm.email}</p>
              <p>
                العنوان:{" "}
                {`${DonationForm.city}/${DonationForm.streetName}/${DonationForm.buldingNumber}`}
              </p>
              <p className="p_story">
                قصتي: {DonationForm.DescriptionOfConsept}
              </p>
            </div>
          ))}
          <div className="approve_req"></div>
        </div>
      </div>
    </>
  );
};

export default Details;
