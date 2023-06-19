/* eslint-disable no-unused-vars */
import React, { useState } from "react";


const ProfilePage = () => {
  const [password, setPassword] = useState("123456");
  const [email, setemail] = useState("dania@ghoush.com");
  const [user, setUser] = useState("Dania");

  return (
    <>
      <div className="p-16 bg-white mt-20">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] to-[#8dbbd0] uppercase">
            صفحتي الشخصية
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1a73e8] to-[#8dbbd0] uppercase"></span>
        </h1>
        <div>
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-right text-sm font-light">
                  <tbody>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        الاسم{" "}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">{user}</td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        البريد الالكتروني
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">{email}</td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        الرقم السري
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">{password}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-center">
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 mt-8  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-20">
                    تعديل المعلومات الشخصية
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] to-[#8dbbd0] uppercase">
            {" "}
            التبرعات السابقة
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1a73e8] to-[#8dbbd0] uppercase"></span>
        </h1>
        <div className="p-8 bg-white shadow mt-4">
          {" "}
          <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16  bg-white">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10 opacity-50">
              {/* {prevOrders?.map((order) => { */}
              {/* return( */}
              <div className="rounded overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    className="w-full"
                    src="https://i.pinimg.com/564x/02/e7/07/02e7072b08889e5a18d66e0de678ac1c.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

                  <div className="absolute bottom-0 left-0 bg-amber-600 px-4 py-2 text-white text-sm font-bold">
                    {/* {order.table_number} */}
                  </div>

                  <div className="text-sm absolute top-0 right-0 bg-amber-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3">
                    <span className="font-bold">قيمة التبرع</span>
                    <small>{/* {order.orders_id} */}</small>
                  </div>
                </div>
                <div className="bg-white">
                  <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto">
                    <li>
                      <div className="px-4 py-5 sm:px-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg leading-6 text-gray-900 font-bold">
                            التبرع الى{" "}
                          </h3>
                          <p className="mt-1 max-w-2xl text-medium text-black">
                            {/* {order.table_number} */}
                          </p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-500">
                            التبرع الى:
                            <span className="text-green-600">
                              {/* {order.status} */}
                            </span>
                          </p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-500">
                            قيمة التبرع:
                            <span className="text-black">
                              {/* {formatDate(order.order_date)} */}
                            </span>
                          </p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-500">
                            حالة التبرع
                            <span className="text-black">
                              {/* {formatTime(order.order_time)} */}
                            </span>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ) */}
              {/* })} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
