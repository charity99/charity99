import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const EditProfile = () => {
  const [user, setUser] = useState({});
  const [id, setId] = useState({});

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/benifi")
      .then((response) => {
        setUser(response.data[0]);

        // iv
        setId(response.data[0].userid);

        setUsername(response.data[0].username);
        setEmail(response.data[0].email);
        setPhoneNumber(response.data[0].phone_number);
        setPassword(response.data[0].password);
      })
      .catch((error) => console.log(error.message));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .put(`http://localhost:5000/user/${id}`, {
        username,
        email,
        phone_number: PhoneNumber,
        password: Password,
      })
      .then(function (response) {
        console.log(response.data);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your details has been updated successfully",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-black-900">
              {" "}
              تعديل الملف الشخصي
            </h2>
            <br />
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
                {user.length !== 0 && (
                  <form onSubmit={handleSubmit} className="lg:col-span-2">
                    <div className="lg:col-span-2">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          <label htmlFor="full_name"> اسم المريض</label>
                          <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            defaultValue=""
                            placeholder="Your Name"
                            value={username}
                            onChange={(event) =>
                              setUsername(event.target.value)
                            }
                          />
                        </div>
                        <br />
                        <div className="md:col-span-5">
                          <label htmlFor="email">البريد الالكتروني</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            defaultValue=""
                            placeholder="email@domain.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                          />
                        </div>
                        <br />

                        <br />
                        <div className="md:col-span-5">
                          <label htmlFor="password">كلمة السر</label>
                          <input
                            type="password"
                            name="password"
                            id="passwoord"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            defaultValue=""
                            placeholder="*******"
                            value={Password}
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
                          />
                        </div>

                        <div className="md:col-span-5 text-right">
                          <div className="inline-flex items-end">
                            <br />
                            <br />
                            <br />
                            <button
                              type="submit"
                              className="bg-[#8dbbd0] hover:[#8dbbd0] text-white font-bold py-2 px-4 rounded"
                            >
                              حفظ
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
