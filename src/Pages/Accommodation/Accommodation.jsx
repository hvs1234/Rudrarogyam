// import React from 'react'

import { Link } from "react-router-dom";
import Nav from "../../Components/Navbar/Nav";
import Handlers from "../../Services/Handlers";
import { useEffect, useState } from "react";
import AccommodationRooms from "./AccommodationRooms";
import Footer from "../../Components/Footer/Footer";
import AccommodationFacilities from "./AccommodationFacilities";
// import AccommodationBook from "./AccommodationBook";
import logo from "/Images/logo.png";
import AccomodationPackage from "./AccomodationPackage";

const Accommodation = () => {
  const { handleOnClick } = Handlers();

  // Slider Image

  const images = [
    "/Images/Main/5.jpg",
    "/Images/Main/2.jpg",
    "/Images/Main/6.jpg",
    "/Images/Main/4.jpg",
    "/Images/Main/3.jpg",
    "/Images/Main/9.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const len = images.length;

    const slider = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % len);
    };

    const interval = setInterval(slider, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Navbar */}
      <Nav />
      <section className="px-[0] py-[0] grid grid-cols-3 justify-center items-center relative object-cover w-[100%] h-[100%] shadow-sm max-xl:grid-cols-1">
        <div className="bg-[#f2f2f2] h-[100%] w-[100%] flex flex-col justify-center items-start gap-[2rem] px-[4rem] py-[10rem]">
          <div className="flex justify-start items-start">
            <Link
              to={"/"}
              onClick={handleOnClick("/")}
              className="text-[4rem] font-medium"
            >
              <img src={logo} alt="logo" className="w-[100%] max-sm:w-[80%]" />
            </Link>
          </div>
          <p className="text-[3.5rem] text-[#707070] leading-[1.6] font-medium">
            Accommodations
          </p>
          <p className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]">
            Rudrarogyam offers serene and comfortable accommodations designed to
            enhance your healing experience.
          </p>
          <p className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]">
            Our tranquil environment is thoughtfully curated to provide a
            peaceful retreat from the stresses of daily life. Each room is
            elegantly furnished with calming aesthetics and modern amenities,
            ensuring your stay is both restful and rejuvenating
          </p>
        </div>
        <div
          className={`col-span-2 w-[100%] h-[100%] relative object-cover bg-no-repeat bg-center bg-cover transition-all duration-[0.3s] ease-linear max-xl:col-span-1 max-xl:h-[60vh]`}
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          {/* <div className="absolute top-0 left-0 w-[100%] h-[100%]"></div> */}
        </div>
      </section>

      {/* Accommodation Rooms */}

      <AccommodationRooms />

      {/* Accommodation Facilities */}

      <AccommodationFacilities />

      {/* Accomodation Package Details */}

      <AccomodationPackage />

      {/* Footer */}

      <Footer />
    </>
  );
};

export default Accommodation;
