// import React from 'react'

import { Link } from "react-router-dom";
import Nav from "../../Components/Navbar/Nav";
import Handlers from "../../Services/Handlers";
import { useEffect, useState } from "react";
import logo from "/Images/logo.png";
import Footer from "../../Components/Footer/Footer";
import GalleryData from "../../APIs/GalleryAPI";

const Gallery = () => {
  // API
  // -------------------------------------Gallery API--------------------------------------------

  const [gallerydata] = useState(GalleryData);

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

  const [currentImage, setCurrentImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const showNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % gallerydata.length);
  };

  const showPrevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + gallerydata.length) % gallerydata.length
    );
  };

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
            Our Gallery
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

      {/* Gallery */}

      <div className="homegallery-container py-[9rem] px-[9rem] w-[100%] h-[100%] max-md:px-[2rem] max-md:py-[2rem]">
        <div className="gallery grid grid-cols-3 gap-[2rem] max-lg:grid-cols-2 max-md:grid-cols-1">
          {gallerydata.map((curele, index) => {
            return (
              <div
                className={`overflow-hidden flex justify-center w-[100%] h-[100%] ${curele.class}`}
                key={curele.id}
                onClick={() => openPopup(index)}
              >
                <img
                  src={curele.img}
                  alt="img"
                  className={`w-[100%] h-[100%] transition-all duration-[0.4s] overflow-hidden cursor-pointer ease-linear hover:scale-[1.3]`}
                />
              </div>
            );
          })}
        </div>

        {/* Popup */}
        {isOpen && (
          <div className="fixed inset-0 top-[0rem] bg-[#636363] flex justify-center items-center z-50 w-[100%]">
            <button
              className="absolute top-[10rem] right-[2rem] text-white z-[1001] text-[4rem]"
              onClick={closePopup}
            >
              &times;
            </button>
            <div className="relative flex justify-center items-center w-[100%] h-[auto] py-[10rem]">
              <img
                src={gallerydata[currentImage].img}
                alt="img"
                className="w-[80%] h-[100%]"
              />
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-[4rem] px-4"
                onClick={showPrevImage}
              >
                &#10094;
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-[4rem] px-4"
                onClick={showNextImage}
              >
                &#10095;
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}

      <Footer />
    </>
  );
};

export default Gallery;
