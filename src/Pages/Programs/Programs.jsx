// import React from 'react'

import { useEffect, useState } from "react";
import Handlers from "../../Services/Handlers";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Navbar/Nav";
import ProgramsMore from "./ProgramsMore";
import logo from "/Images/logo.png";

const Programs = () => {
  const { handleOnClick } = Handlers();

  // Slider Image

  const images = [
    "/Images/Programs/1.jpg",
    "/Images/bg3.jpg",
    "/Images/Accommodation/2.jpg",
    "/Images/Treatment/1.jpg",
    "/Images/Treatment/4.jpg",
    "/Images/Programs/2.jpg",
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
            Wellness Programs
          </p>
          <p className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]">
            Rudrarogyam offers various wellness programs, including retreats,
            workshops, and personalized wellness plans tailored to your needs
          </p>
          <p className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]">
            Our expert team of practitioners combines traditional and modern
            healing techniques to rejuvenate your mind, body, and spirit.
            Experience holistic well-being through customized therapies,
            nutritional guidance, and mindful practices designed to restore
            balance and vitality.
          </p>
          <p className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]">
            Join us for transformative experiences that promote inner peace,
            improved health, and lasting happiness. Rediscover your true self
            through our comprehensive approach to wellness, where every detail
            is crafted to support your unique journey towards optimal health.
          </p>
        </div>
        <div
          className={`col-span-2 w-[100%] h-[100%] relative object-cover bg-no-repeat bg-center bg-cover transition-all duration-[0.3s] ease-linear max-xl:col-span-1 max-xl:h-[60vh]`}
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          {/* <div className="absolute top-0 left-0 w-[100%] h-[100%]"></div> */}
        </div>
      </section>

      {/* Program More */}

      <ProgramsMore />

      {/* Footer */}

      <Footer />
    </>
  );
};

export default Programs;
