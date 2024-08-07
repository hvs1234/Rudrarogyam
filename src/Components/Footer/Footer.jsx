// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import FooterNavLink from "../../APIs/FooterNavAPI";
import { useState } from "react";

const Footer = () => {
  // API
  //------------------------------------------------------Footer NavLink API---------------------------------------------

  const [footernavlink] = useState(FooterNavLink);

  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="py-[6rem] px-[20rem] grid grid-cols-3 ml-auto mr-auto justify-center items-start gap-[0rem] bg-[#3c2e2e] max-lg:grid-cols-1 max-lg:gap-[8rem] max-lg:px-[4rem]">
        <div className="flex flex-col gap-[3rem] w-[100%]">
          <Link
            to={"/"}
            onClick={handleOnClick("/")}
            className="text-[4rem] text-[white] font-normal max-xl:text-[3rem]"
          >
            <span className="text-[4.5rem] text-[white] bg-[green] px-[1rem] py-[0rem] rounded-md max-xl:text-[3.5rem]">
              R
            </span>{" "}
            <span className="text-[lime]">R</span>udra
            <span className="text-[lime]">R</span>ogyam
          </Link>
          <p className="text-[2rem] text-[white] font-light leading-[2] tracking-[1px]">
            Rudrarogyam is a premier naturopathy wellness village dedicated to
            holistic healing through natural methods.
          </p>
        </div>
        <div className="flex flex-col gap-[3rem] justify-center items-start ml-auto mr-auto text-[white] max-lg:items-start max-lg:ml-0">
          <p className="text-[3rem] font-normal text-[white]">Our Links</p>
          <div className="f-links flex flex-col gap-[2rem]">
            {footernavlink.map((e) => {
              return (
                <Link
                  key={e.id}
                  to={e.to}
                  onClick={handleOnClick(e.to)}
                  className="text-[2rem] font-light text-[white] tracking-[1px] hover:scale-[1.1] transition-all duration-[0.2s]"
                >
                  <i className="fa-solid fa-arrow-right"></i>&nbsp; {e.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-[3rem]">
          <p className="text-[3rem] text-[white] font-normal">
            Social Accounts
          </p>
          <p className="text-[2rem] font-light tracking-[1px] text-[white]">
            Follow Us On:
          </p>
          <div className="flex gap-[2rem]">
            <a href="https://www.facebook.com/rudraarogyam/" target="_blank">
              <FaFacebookF
                size={45}
                className="bg-[black] text-[white] px-[1rem] py-[1rem] border-[1px] border-[black] rounded-md hover:bg-[white] hover:text-[black] transition-all duration-[0.2s] ease-linear hover:border-[white]"
              />
            </a>
            <a href="https://www.instagram.com/rudrarogyam/" target="_blank">
              <BsInstagram
                size={45}
                className="bg-[black] text-[white] px-[1rem] py-[1rem] border-[1px] border-[black] rounded-md hover:bg-[white] hover:text-[black] transition-all duration-[0.2s] ease-linear hover:border-[white]"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[black] px-[2rem] py-[1rem] flex items-center justify-center text-center">
        <p className="text-[2rem] tracking-[1px] text-[white] font-light">
          &copy; Copyright Rudrarogyam 2024 | All right reserved | IT Support By{" "}
          <a
            href="https://twomglobal.com"
            target="_blank"
            className="text-[goldenrod] hover:text-[gold] transition-all duration-[0.2s]"
          >
            TWOM Global
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;