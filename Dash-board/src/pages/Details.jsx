import React from "react";
import img from "../assets/images/image.png";
import "../styles/details.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const [details, setDetails] = useState([]);
  const params = useParams();
  const { formId } = useParams();
  useEffect(() => {
    const fetchAllResort = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/getForms/${formId}`);
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
            {/* <div className="img-holder active">
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
            </div> */}
            {details.Images?.map((image, index) => (
              <img
                alt="image"
                src={`http://localhost:5000/${image}`}
                className="img-holder"
                style={{ height: "300px" }}
                key={index}
              />
            ))}
          </div>
          <div className="basic-info">
            <h1>بيانات الطلب</h1>
          </div>
          <div className="info">
            <p>الأسم: {details.fullName}</p>
            <p>رقم الهاتف: {details.phone}</p>
            <p>البريد الألكتروني: {details.email}</p>
            <p>
              العنوان:{" "}
              {`${details.city}/${details.streetName}/${details.buldingNumber}`}
            </p>
            <p className="p_story">قصتي: {details.DescriptionOfConsept}</p>
          </div>
          <div className="approve_req"></div>
        </div>
      </div>
    </>
  );
};

export default Details;
