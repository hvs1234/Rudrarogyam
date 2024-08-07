// import React from 'react'
import Nav from "../../Components/Navbar/Nav";
import Handlers from "../../Services/Handlers";
import { useEffect, useState } from "react";
import AboutStory from "./AboutStory";
import Footer from "../../Components/Footer/Footer";
import AboutTeam from "./AboutTeam";
import AboutValue from "./AboutValue";
import { Link } from "react-router-dom";

const About = () => {
  const { handleOnClick } = Handlers();

  // Slider Image

  const images = [
    "/Images/About/1.jpg",
    "/Images/About/2.jpg",
    "/Images/About/3.jpg",
    "/Images/About/4.jpg",
    "/Images/About/5.jpg",
    "/Images/About/6.jpg",
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
              <span className="text-[4.5rem] text-[white] bg-[green] px-[1rem] py-[0rem] rounded-md">
                R
              </span>{" "}
              <span className="text-[green]">R</span>udra
              <span className="text-[green]">R</span>ogyam
            </Link>
          </div>
          <p className="text-[3.5rem] text-[#707070] leading-[1.6] font-medium">
            About Us
          </p>
          <p className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]">
            Rudrarogyam was founded with the mission to promote natural healing
            and holistic wellness. We believe in treating the body, mind, and
            spirit as one.
          </p>
          <p className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]">
            Our approach integrates ancient wisdom with modern practices,
            providing personalized care that nurtures balance and harmony. Join
            us on a journey towards vibrant health and a more mindful, fulfilled
            life. Through our diverse range of therapies, workshops, and
            wellness programs, we empower individuals to achieve their highest
            potential.
          </p>
          <p className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]">
            Experience the transformative power of holistic healing and discover
            a path to inner peace, vitality, and lifelong well-being.
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
