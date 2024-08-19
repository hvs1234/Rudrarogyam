// import React from 'react'

import { useEffect, useState } from "react";
import Nav from "../../Components/Navbar/Nav";
import { Link } from "react-router-dom";
import HomeAbout from "./HomeAbout";
import HomeTreated from "./HomeTreated";
import HomeAccommodation from "./HomeAccommodation";
import HomeGallery from "./HomeGallery";
import Footer from "../../Components/Footer/Footer";
import Handlers from "../../Services/Handlers";
import logo from "/Images/logo.png";

const Home = () => {
  const { handleOnClick } = Handlers();

  // Slider Image

  const images = [
    "/Images/bg1.jpg",
    "/Images/bg2.jpg",
    "/Images/bg3.jpg",
    "/Images/bg4.jpg",
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
          <Link
            to={"/book"}
            onClick={handleOnClick("/book")}
            className="text-[1.6rem] font-normal bg-[#00804b] border-[1px] border-[#00804b] text-[white] rounded-md px-[1rem] py-[0.5rem] transition-all duration-[0.3s] hover:border-[1px] hover:border-[black] hover:bg-[#f2f2f2] hover:text-[black] mt-[2rem]"
          >
            Book Now
          </Link>
          <p className="text-[3.5rem] text-[#707070] leading-[1.6] font-medium">
            Welcome to Rudrarogyam: <br /> Your Wellness Village
          </p>
          <p className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[1rem]">
            Rudrarogyam is a premier naturopathy wellness village dedicated to
            holistic healing through natural methods. Our serene environment and
            comprehensive wellness treatments ensure a rejuvenating experience
          </p>
        </div>
        <div
          className={`col-span-2 w-[100%] h-[100%] relative object-cover bg-no-repeat bg-center bg-cover transition-all duration-[0.3s] ease-linear max-xl:col-span-1 max-xl:h-[60vh]`}
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          {/* <div className="absolute top-0 left-0 w-[100%] h-[100%]"></div> */}
        </div>
      </section>

      {/* Home About */}

      <HomeAbout />

      {/* Home Treated */}

      <HomeTreated />

      {/* Home Accommodation */}

      <HomeAccommodation />

      {/* Home Gallery */}

      <HomeGallery />

      {/* Footer */}

      <Footer />
    </>
  );
};

export default Home;
