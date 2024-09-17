// import React from 'react'
import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import homeaboutimg from "/Images/Main/6.jpg";

const HomeAbout = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="home-about grid grid-cols-5 w-[100%] h-[100%] max-xl:grid-cols-1 max-xl:h-[100%]">
        <div className="bg-[black] col-span-2 max-xl:col-span-1 max-xl:order-2 max-xl:h-[100%] relative object-cover">
          <img src={homeaboutimg} alt="img" className="w-[100%] h-[100%]" />
        </div>
        <div
          className={`bg-[#f2f2f2] col-span-3 max-xl:col-span-1 flex flex-col px-[8rem] py-[6rem] gap-[2rem] justify-center items-start max-sm:px-[4rem] max-sm:py-[4rem]`}
        >
          <p className={`text-[3rem] font-medium capitalize text-[#3c3c3c]`}>
            About Rudrarogyam
          </p>
          <p className={`text-[2.2rem] font-medium capitalize text-[#595169]`}>
            Ayurveda significance and privileges
          </p>
          <p className={`text-[2rem] font-normal text-[#595959] leading-[1.6]`}>
            Rudrarogyam totally neglect allopathy and any other artificial way
            of treatment and promote natural Ayurvedic treatment.
          </p>
          <Link
            to={"/about"}
            onClick={handleOnClick("/about")}
            className={`text-[2rem] font-normal bg-[orangered] border-[1px] border-[orangered] text-[white] rounded-md px-[2rem] py-[0.5rem] mt-[2rem] hover:bg-transparent hover:border-[black] hover:text-[black] transition-all duration-[0.2s]`}
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
