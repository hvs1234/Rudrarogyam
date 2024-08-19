// import React from 'react'

import { Link } from "react-router-dom";
import Nav from "../../Components/Navbar/Nav";
import { useEffect, useState } from "react";
import Handlers from "../../Services/Handlers";
import TreatmentData from "./TreatmentData";
import Footer from "../../Components/Footer/Footer";
import logo from "/Images/logo.png";

const Treatment = () => {
  const { handleOnClick } = Handlers();

  // Slider Image

  const images = [
    "/Images/Treatment/4.jpg",
    "/Images/Treatment/3.jpg",
    "/Images/Treatment/5.jpg",
    "/Images/Treatment/1.jpg",
    "/Images/Treatment/10.jpg",
    "/Images/Treatment/6.jpg",
    "/Images/Treatment/2.jpg",
    "/Images/Treatment/7.jpg",
    "/Images/Treatment/9.jpg",
    "/Images/Treatment/8.jpg",
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
            Treatments
          </p>
          <p className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]">
            At Rudrarogyam, we offer a variety of treatments that focus on
            detoxification and holistic healing. Our approach activates the
            body`s natural healing mechanisms.
          </p>
          <p className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]">
            Our expert practitioners tailor each treatment to your unique needs,
            ensuring a personalized journey towards rejuvenation and vitality.
            Experience transformative healing with our integrative therapies.
          </p>
        </div>
        <div
          className={`col-span-2 w-[100%] h-[100%] relative object-cover bg-no-repeat bg-center bg-cover transition-all duration-[0.3s] ease-linear max-xl:col-span-1 max-xl:h-[60vh]`}
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          {/* <div className="absolute top-0 left-0 w-[100%] h-[100%]"></div> */}
        </div>
      </section>

      {/* Treatement Data */}

      <TreatmentData />

      {/* Footer */}

      <Footer />
    </>
  );
};

export default Treatment;
