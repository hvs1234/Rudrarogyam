// import React from 'react'
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import { useState } from "react";
import NavLink from "../../APIs/NavAPI";
import "./Nav.css";

const Nav = () => {
  // API
  //----------------------------------------------Nav API---------------------------------------------------

  const [navlinkdata] = useState(NavLink);

  const { handleOnClick } = Handlers();

  // Responsive Navbar

  const [isActive, setIsActive] = useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header
        className={`header flex justify-center fixed w-full h-[auto] items-center py-[2rem] max-md:py-[3rem] bg-[#f2f2f2] z-[1001] ${
          isActive ? "active" : ""
        }`}
      >
        <nav className="navbar flex justify-center items-center">
          <ul className="flex justify-center items-center gap-[3rem]">
            {navlinkdata.map((e) => {
              return (
                <Link
                  key={e.id}
                  to={e.to}
                  onClick={handleOnClick(e.to)}
                  className={e.class}
                >
                  {e.title}
                </Link>
              );
            })}
          </ul>
        </nav>
        <div className="flex justify-end items-center fixed top-[2rem] right-[1rem]">
          <HiMenu
            size={26}
            className="cursor-pointer nav-btn"
            onClick={toggleNavbar}
          />
        </div>
      </header>
    </>
  );
};

export default Nav;
