import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";

import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import RecommendCarCard from "../components/UI/RecommendCarCard";

import recommendCarsData from "../assets/dummy-data/recommendCars";

const carObj = {
  title: "عدد المتبرعين",
  totalNumber: 15,
  icon: "ri-user-line",
};

const tripObj = {
  title: "عدد المستخدمين",
  totalNumber: 27,
  icon: "ri-user-line",
};

const clientObj = {
  title: "عدد المرضى",
  totalNumber: 12,
  icon: "ri-user-line",
};

// const distanceObj = {
//   title: "Kilometers Daily",
//   totalNumber: 2167,
//   icon: "ri-timer-flash-line",
// };

const Dashboard = () => {
  return (
    <div className="dashboard" dir="rtl">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          {/* <SingleCard item={distanceObj} /> */}
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">أحصائيات المتبرعين</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">المبلغ الحالي</h3>
            <CarStatsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
