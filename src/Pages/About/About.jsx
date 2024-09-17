// import React from 'react'
import Nav from "../../Components/Navbar/Nav";
import Handlers from "../../Services/Handlers";
import { useEffect, useState } from "react";
import AboutStory from "./AboutStory";
import Footer from "../../Components/Footer/Footer";
import AboutTeam from "./AboutTeam";
import AboutValue from "./AboutValue";
import { Link } from "react-router-dom";
import logo from "/Images/logo.png";

const About = () => {
  const { handleOnClick } = Handlers();

  // Slider Image

  const images = [
    "/Images/Main/9.jpg",
    "/Images/Main/8.jpg",
    "/Images/Main/1.jpg",
    "/Images/Main/3.jpg",
    "/Images/Main/2.jpg",
    "/Images/Main/4.jpg",
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
            About Us
          </p>
          <p className="text-[2.5rem] text-[#757474] leading-[1.6] font-medium">
            Ayurveda significance and privileges
          </p>
          <p className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]">
            Rudrarogyam totally neglect allopathy and any other artificial way
            of treatment and promote natural Ayurvedic treatment.
          </p>
        </div>
        <div
          className={`col-span-2 w-[100%] h-[100%] relative object-cover bg-no-repeat bg-center bg-cover transition-all duration-[0.3s] ease-linear max-xl:col-span-1 max-xl:h-[60vh]`}
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          {/* <div className="absolute top-0 left-0 w-[100%] h-[100%]"></div> */}
        </div>
      </section>

      {/* About Story */}

      <AboutStory />

      {/* About Team */}

      <AboutTeam />

      {/* About Value */}

      <AboutValue />

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default About;
