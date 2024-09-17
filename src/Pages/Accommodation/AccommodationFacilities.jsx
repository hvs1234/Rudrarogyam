// import React from 'react'

import { FaWifi } from "react-icons/fa";
import { useEffect, useState } from "react";

const AccommodationFacilities = () => {
  // Slider Image

  const images = [
    "/Images/Main/1.jpg",
    "/Images/Main/5.jpg",
    "/Images/Main/3.jpg",
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
      <div className="flex justify-start items-center gap-[2rem] px-[4rem] py-[2rem] bg-[#3b2d1f] w-[100%] max-xl:text-center max-xl:justify-center">
        <p className="text-[3rem] font-normal text-[white]">Facilities</p>
        <FaWifi size={26} className="text-[white]" />
      </div>

      <section className="px-[0] py-[0] grid grid-cols-4 justify-center items-center relative object-cover w-[100%] h-[100%] shadow-sm max-xl:grid-cols-1">
        <div className="bg-[#42421a] col-span-2 max-xl:col-span-1 flex flex-col w-[100%] h-[100%] justify-center items-center text-center px-[8rem] py-[6rem] gap-[2rem] max-sm:px-[4rem] max-sm:py-[4rem]">
          <p className="text-[3rem] text-[white] font-medium max-sm:text-[3rem]">
            Our Facilities
          </p>
          <p className="text-[2rem] font-[400] text-[white] leading-[2] w-[80%] max-sm:text-[2rem] max-xl:w-[90%]">
            <i className="text-[4rem] opacity-[0.5] fa-solid fa-quote-left"></i>
            &nbsp; Our facilities include yoga studios, meditation halls, dining
            areas, and beautiful gardens &nbsp;
            <i className="text-[4rem] opacity-[0.5] fa-solid fa-quote-right"></i>
          </p>
        </div>
        <div
          className={`col-span-2 w-[100%] h-[60vh] relative object-cover bg-no-repeat bg-center bg-cover transition-all duration-[0.3s] ease-linear max-xl:col-span-1 max-xl:h-[60vh]`}
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          {/* <div className="absolute top-0 left-0 w-[100%] h-[100%]"></div> */}
        </div>
      </section>
    </>
  );
};

export default AccommodationFacilities;
