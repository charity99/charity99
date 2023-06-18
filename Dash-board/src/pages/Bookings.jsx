import React from "react";
import "../styles/bookings.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar/Sidebar";

const Bookings = () => {
  const [beneficer, setBeneficer] = useState([]);

  useEffect(() => {
    const fetchAllResort = async () => {
      try {
        const res = await axios.get("http://localhost:5000/getAllBeneficer");
        setBeneficer(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllResort();
  }, []);
  console.log(beneficer);
  return (
    <div className="bookings" dir="rtl">
      <Sidebar />
      <div className="booking__wrapper">
        <div className="booking__car-list">
          {/* {carData?.map((item) => (
            <CarItem item={item} key={item.id} />
          ))} */}
          {/* ************ user details **************** */}
          <div className="alluser_details">
            <div className="order_user_list" style={{ color: "white" }}>
              <div className="order_user_header">
                <h2>معلومات المستخدمين</h2>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>الأسم</td>
                    <td>الدور الوظيفي</td>
                    <td>البريد الألكتروني</td>
                  </tr>
                </thead>
                {/* *****************user info************** */}
                <tbody>
                  {beneficer.map((getAllBeneficer) => (
                    <tr>
                      <td>{getAllBeneficer.fullName}</td>
                      <td>{getAllBeneficer.role}</td>
                      <td>{getAllBeneficer.email}</td>
                      <td>
                        <i className="ri-delete-bin-6-fill delete__icon"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
