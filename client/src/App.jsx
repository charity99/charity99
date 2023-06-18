/* eslint-disable no-unused-vars */
import "./App.css";
import Nav from "./pages/nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pop from "./component/Pop";
import BenForm from "./pages/BenifactorForm";
import BemProfile from "./pages/profile/dashBen";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Profile from "./pages/profile/Profile";
import Main from "./pages/profile/Main";
import FormSetting from "./pages/profile/HelpProfile";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import Campings from "./pages/Campings";
import BenDetails from "./pages/BenDetails";
import ProfilePage from "./pages/ProfilePage";
import EditProfile from "./pages/EditProfile";
import EditProfileben from "./pages/ProfileEditBen";
function App() {
  const [userType, setUserType] = useState("guest");

  return (
    <>
      {userType === "guest" && (
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="form" element={<BenForm />} />
            <Route path="/pay/:formId" element={<Payment />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="campings" element={<Campings />} />
            <Route path="/BenDetails/:formId" element={<BenDetails />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/EditProfileben" element={<EditProfileben />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}

      {/* {userType === "benf" && (
        <BrowserRouter>
          <BemProfile />
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/info" element={<Profile />} />
            <Route path="/form" element={<BenForm />} />
            <Route path="/FormSetting" element={<FormSetting />} />
            <Route path="/main" element={<Main />} />
            <Route path="benprofile" element={<BemProfile />} />
          </Routes>
        </BrowserRouter>
      )} */}
    </>
  );
}

export default App;
