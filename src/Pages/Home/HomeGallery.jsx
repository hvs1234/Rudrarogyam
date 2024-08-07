// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import homegalleryimg from "/Images/bg7.jpg";

const HomeGallery = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="grid grid-cols-4 w-[100%] h-[100%] max-xl:grid-cols-1">
        <div className="bg-[#3b2d1f] col-span-2 max-xl:col-span-1 flex flex-col justify-center items-start px-[8rem] py-[6rem] gap-[2rem] max-sm:px-[4rem] max-sm:py-[4rem]">
          <p className="text-[3rem] text-[white] font-medium">Gallery</p>
          <p className="text-[2rem] font-normal text-[#f3f3f3] leading-[1.6]">
            Explore the gallery at Rudrarogyam and immerse yourself in the
            serene beauty of our retreat. Each image captures the essence of our
            tranquil environment, showcasing the elegant design and calming
            spaces that define our holistic sanctuary. From peaceful treatment
            rooms to lush outdoor areas, our gallery reflects the harmony and
            balance we strive to create for our guests.
          </p>
          <Link
            to={"/"}
            onClick={handleOnClick("/")}
            className={`text-[2rem] font-normal bg-[#50392c] border-[1px] border-[#50392c] text-[white] rounded-md px-[2rem] py-[0.5rem] mt-[2rem] hover:bg-transparent hover:border-[white] hover:text-[white] transition-all duration-[0.2s]`}
          >
            Read More
          </Link>
        </div>
        <div className="col-span-2 max-xl:col-span-1">
          <img src={homegalleryimg} alt="img" className="w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default HomeGallery;
