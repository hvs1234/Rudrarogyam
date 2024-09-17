// import React from 'react'

import { BiPackage } from "react-icons/bi";
import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";

const AccomodationPackage = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="flex justify-start items-center gap-[2rem] px-[4rem] py-[2rem] bg-[#162939] w-[100%] max-xl:text-center max-xl:justify-center">
        <p className="text-[3rem] font-normal text-[white]">Package Details</p>
        <BiPackage size={30} className="text-[white]" />
      </div>

      <div className="grid grid-cols-2 w-[100%] max-md:grid-cols-1">
        <div className="w-[100%] flex flex-col justify-start items-start gap-[1rem] px-[8rem] py-[6rem] bg-[darkred]">
          <h2 className="text-[3rem] text-[white]">
            <i className="fa-solid fa-medal"></i>&nbsp; 7 Days Programme
          </h2>
          <div className="flex flex-col gap-[2rem] mt-[1rem]">
            <p className="text-[2rem] text-[white]">
              <i className="fa-solid fa-arrows-to-dot"></i>&nbsp; Gentle Yoga{" "}
            </p>
            <p className="text-[2rem] text-[white]">
              <i className="fa-solid fa-arrows-to-dot"></i>&nbsp; Joints
              Rotation{" "}
            </p>
            <p className="text-[2rem] text-[white]">
              <i className="fa-solid fa-arrows-to-dot"></i>&nbsp; Breath Work{" "}
            </p>
            <p className="text-[2rem] text-[white]">
              <i className="fa-solid fa-arrows-to-dot"></i>&nbsp; Meditation
              (Awareness and Proper Sessions){" "}
            </p>
          </div>
          <div className="flex flex-col gap-[2rem] mt-[2rem]">
            <p className="text-[2.1rem] text-[white] mb-[1rem]">Therapies</p>
            <p className="text-[2rem] text-[white]">
              <i className="fa-solid fa-arrows-to-dot"></i>&nbsp; Cupping
              Therapy{" "}
            </p>
            <p className="text-[2rem] text-[white]">
              <i className="fa-solid fa-arrows-to-dot"></i>&nbsp; Padabhyang{" "}
            </p>
            <p className="text-[2rem] text-[white]">
              <i className="fa-solid fa-arrows-to-dot"></i>&nbsp; Akshitarpana{" "}
            </p>
            <p className="text-[2rem] text-[white]">
              <i className="fa-solid fa-arrows-to-dot"></i>&nbsp; Diet Therapy{" "}
            </p>
          </div>
          <Link
            to={"/book"}
            onClick={handleOnClick("/book")}
            className={`text-[2.5rem] font-normal bg-[transparent] border-[1px] border-[white] text-[white] rounded-md px-[6rem] py-[0.5rem] mt-[3rem] hover:bg-transparent hover:border-[white] hover:text-[white] transition-all duration-[0.2s]`}
          >
            Book Now
          </Link>
        </div>
        <div className="w-[100%] flex flex-col justify-start items-start gap-[1rem] px-[8rem] py-[6rem] bg-[#3b2d1f]">
          <h2 className="text-[3rem] text-[white]">
            <i className="fa-solid fa-medal"></i>&nbsp; 15 Days Programme
          </h2>
          <div className="flex flex-col gap-[2rem] mt-[2rem]">
            <p className="text-[2.1rem] text-[white] mb-[1rem]">Panchkarma</p>
            <p className="text-[2rem] text-[white]">
              <i className="fa-solid fa-arrows-to-dot"></i>&nbsp; Vaman{" "}
            </p>
            <p className="text-[2rem] text-[white]">
              <i className="fa-solid fa-arrows-to-dot"></i>&nbsp; Purgation{" "}
            </p>
            <p className="text-[2rem] text-[white]">
              <i className="fa-solid fa-arrows-to-dot"></i>&nbsp; Nirhuam{" "}
            </p>
            <p className="text-[2rem] text-[white]">
              <i className="fa-solid fa-arrows-to-dot"></i>&nbsp; Anuvaasar{" "}
            </p>
            <p className="text-[2rem] text-[white]">
              <i className="fa-solid fa-arrows-to-dot"></i>&nbsp; Nasyam{" "}
            </p>
          </div>
          <Link
            to={"/book"}
            onClick={handleOnClick("/book")}
            className={`text-[2.5rem] font-normal bg-[transparent] border-[1px] border-[white] text-[white] rounded-md px-[6rem] py-[0.5rem] mt-[3rem] hover:bg-transparent hover:border-[white] hover:text-[white] transition-all duration-[0.2s]`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default AccomodationPackage;
