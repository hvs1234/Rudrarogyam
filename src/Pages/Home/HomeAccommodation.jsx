// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import accommodationimg from "/Images/bg6.jpg";

const HomeAccommodation = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="grid grid-cols-5 w-[100%] h-[100%] max-xl:grid-cols-1">
        <div className="bg-[black] col-span-3 max-xl:col-span-1 relative object-cover max-xl:h-[100%] max-xl:order-2">
          <img src={accommodationimg} alt="img" className="w-[100%]"/>
        </div>
        <div
          className={`bg-[#42421a] col-span-2 max-xl:col-span-1 flex flex-col px-[8rem] py-[6rem] gap-[2rem] justify-center items-start max-sm:px-[4rem] max-sm:py-[4rem]`}
        >
          <p className={`text-[3rem] font-medium capitalize text-[white]`}>
            Accommodation
          </p>
          <p className={`text-[2rem] font-normal text-[#eeeeee] leading-[1.6]`}>
            Rudrarogyam offers serene and comfortable accommodations designed to
            enhance your healing experience. Our tranquil environment is
            thoughtfully curated to provide a peaceful retreat from the stresses
            of daily life. Each room is elegantly furnished with calming
            aesthetics and modern amenities, ensuring your stay is both restful
            and rejuvenating.
          </p>
          <Link
            to={"/accommodation"}
            onClick={handleOnClick("/accommodation")}
            className={`text-[2rem] font-normal bg-[#77772e] border-[1px] border-[#77772e] text-[white] rounded-md px-[2rem] py-[0.5rem] mt-[2rem] hover:bg-transparent hover:border-[white] hover:text-[white] transition-all duration-[0.2s]`}
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeAccommodation;
