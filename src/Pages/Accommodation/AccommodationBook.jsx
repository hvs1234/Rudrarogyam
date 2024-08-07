// import React from 'react'

import { ImMobile } from "react-icons/im";
import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";

const AccommodationBook = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="flex justify-start items-center gap-[2rem] px-[4rem] py-[2rem] bg-[#3a1a1a] w-[100%] max-xl:text-center max-xl:justify-center">
        <p className="text-[3rem] font-normal text-[white]">Booking</p>
        <ImMobile size={26} className="text-[white]" />
      </div>

      <div className="grid grid-cols-1 w-[100%] h-[100%] max-xl:grid-cols-1 max-xl:h-[100%]">
        <div className="bg-[#162939] max-xl:col-span-1 flex flex-col justify-center items-center text-center px-[8rem] py-[6rem] gap-[2rem] max-sm:px-[4rem] max-sm:py-[4rem]">
          <p className="text-[3rem] text-[white] font-medium max-sm:text-[3rem]">
            Our Bookings
          </p>
          <p className="text-[2rem] font-[400] text-[white] leading-[2] max-sm:text-[2rem]">
            <i className="text-[4rem] opacity-[0.5] fa-solid fa-quote-left"></i>
            &nbsp; To book your stay, visit our booking page for details on
            rates, packages, and special offers &nbsp;
            <i className="text-[4rem] opacity-[0.5] fa-solid fa-quote-right"></i>
          </p>
          <Link
            to={"/accommodation"}
            onClick={handleOnClick("/accommodation")}
            className={`text-[2.5rem] font-normal bg-[crimson] border-[1px] border-[crimson] text-[white] rounded-md px-[6rem] py-[0.5rem] mt-[2rem] hover:bg-transparent hover:border-[white] hover:text-[white] transition-all duration-[0.2s]`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default AccommodationBook;
