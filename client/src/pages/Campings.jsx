import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "@mui/material/Pagination";

const ServiceAll = () => {
    const [benefices, setBenefices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [beneficesPerPage] = useState(6);

    useEffect(() => {
        axios
            .get("http://localhost:5000/benefices")
            .then((response) => {
                console.log(response.data);
                setBenefices(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    // Pagination
    const indexOfLastBenefice = currentPage * beneficesPerPage;
    const indexOfFirstBenefice = indexOfLastBenefice - beneficesPerPage;
    const currentBenefices = benefices.slice(
        indexOfFirstBenefice,
        indexOfLastBenefice
    );

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    // Search bar
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBenefices = benefices.filter((benefice) =>
        benefice.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Dropdown filters
    const [filter1, setFilter1] = useState("");
    const [filter2, setFilter2] = useState("");

    const handleFilter1Change = (event) => {
        setFilter1(event.target.value);
    };

    const handleFilter2Change = (event) => {
        setFilter2(event.target.value);
    };

    const filteredBeneficesWithFilters = filteredBenefices.filter(
        (benefice) =>
            (filter1 === "" || benefice.filter1 === filter1) &&
            (filter2 === "" || benefice.filter2 === filter2)
    );


    let cards = [

        { Name: "  Qaysar Pizza ", path: "https://d2nuhorlnps36p.cloudfront.net/hotels/93783/93783_039_Restaurant.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },
        { Name: "  Pizza Nina ", path: "https://one-sourceconstruction.com/site/wp-content/uploads/c9.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },
        { Name: "  The Judge", path: "https://eventective-media.azureedge.net/2524260_lg.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },
    
    
      ]
  

    return (
        <>
            <div className="relative mt-16 ">
                <img
                    src="https://th.bing.com/th/id/OIP.js3hde2QptkO6B_MITy68AHaDt?pid=ImgDet&rs=1"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 bg-opacity-75">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    ساعد محتاج الان{" "}
                                    <br className="hidden md:block" />
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                    ,   الان بامكانك ان تنقذ حياه احدهم سارع بالتبرع
                                </p>
                                <button className="buttonNav border-none bg-transparent px-8 py-3 text-black mr-4">
                                    <Link to="/Details"> Details </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div>
                <center>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ساعد محتاج الآن{" "}
                    </h5>
                </center>
                {/* شريط البحث */}
                <div className="flex justify-center my-4">
                    <input
                        type="text"
                        placeholder="البحث..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                {/* عوامل التصفية المنسدلة */}
                <div className="flex justify-center my-4 space-x-4">
                    <div>
                        <select
                            value={filter1}
                            onChange={handleFilter1Change}
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        >
                            <option value="">التصفية 1</option>
                            {/* أضف الخيارات بناءً على التصفية المحددة */}
                        </select>
                    </div>
                    <div>
                        <select
                            value={filter2}
                            onChange={handleFilter2Change}
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        >
                            <option value="">التصفية 2</option>
                            {/* أضف الخيارات بناءً على التصفية المحددة */}
                        </select>
                    </div>
                </div>
                {/* عرض الفوائد */}
                <div className="flex flex-wrap gap-10 justify-center my-16">
                    {cards.map((benefice) => (
                        <div key={benefice.id}>
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img
                                        className="rounded-t-lg w-full h-80 object-cover"
                                        src={benefice.path}
                                        alt=""
                                    />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center dark:text-white">
                                            {benefice.Name}
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {benefice.describtion}
                                    </p>
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div
                                            className="bg-blue-600 text-xs font-medium text-blue-100 mb-4 text-center p-0.5 leading-none rounded-full"
                                            style={{ width: `${benefice.progress}%` }}
                                        >
                                            {benefice.progress}%
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent mt-4 rounded transition-colors duration-300">
                                            تبرع
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* الترقيم */}
                <div className="flex justify-center">
                    <Pagination
                        count={Math.ceil(filteredBeneficesWithFilters.length / beneficesPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    );
};

export default ServiceAll;