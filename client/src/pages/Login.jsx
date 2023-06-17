/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [user, setUSer] = useState({
    email: "",
    password: "",
  });
 

  console.log(id);

 

  function handleCallBackResponse(response) {
    console.log("Encoded JWT: " + response.credential);
  }

  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id:
  //       "7253351254-sqamgnt7l36cs9op6he04hoaena21vqd.apps.googleusercontent.com",
  //     callback: handleCallBackResponse,
  //   });

  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // }, []);

  // Rest of your login page code

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 sm:max-w-md">
        <form action="" >
          <div className="max-w-sm w-full text-black border-2 border-gray-200 bg-white shadow p-5 py-6 sm:p-6 sm:rounded-lg ">
            <div className="text-center pb-8">
              <span className="font-bold text-4xl">
                تسجيل<span className="text-[#5aa1c2] font-bolder"> الدخول   </span>{" "}
              </span>
            </div>
            <div
              id="signInDiv"
              className="w-full max-w-full flex justify-center"
            ></div>
            <feConvolveMatrix className="space-y-5">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium mt-12"
                >
                  البريد الالكتروني
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your email"
                  className={`w-full mt-2 px-3 text-black py-2 bg-transparent outline-none border shadow-sm rounded-lg`}
                  name="email"
                  
                />
        
              </div>
              <div>
                <label
                  for="password"
                  className={`block mb-2 text-sm font-medium`}
                >
                  كلمة السر
                </label>
                <input
                  type="password"
                  required
                  placeholder="password"
                  id="password"
                  className={`w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border shadow-sm rounded-lg`}
                  name="password"
                
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 mb-5 text-white font-medium bg-[#4e94b5] hover:bg-white hover:text-black border hover:border-black rounded-lg duration-150"
              >
                تسجيل الدخول
              </button>
            </feConvolveMatrix>

            <p className="text-center mt-2">
ليس لديك حساب؟              <span className="ml-1">
                <Link
                  to={"/signup"}
                  className="font-medium text-[#4e94b5] hover:text-black hover:underline transition"
                >
                    انشاء حساب
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;