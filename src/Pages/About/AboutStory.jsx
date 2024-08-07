// import React from 'react'
import treatimg from "/Images/About/5.jpg";

const AboutStory = () => {
  return (
    <>
      <div className="grid grid-cols-5 w-[100%] h-[100%] max-xl:grid-cols-1 max-xl:h-[100%]">
        <div className="bg-[#153028] col-span-3 max-xl:col-span-1 flex flex-col justify-center items-center text-center px-[8rem] py-[6rem] gap-[2rem] max-sm:px-[4rem] max-sm:py-[4rem]">
          <p className="text-[3rem] text-[white] font-medium max-sm:text-[3rem]">
            Our Story
          </p>
          <p className="text-[2rem] font-[400] text-[white] leading-[2] max-sm:text-[2rem]">
            <i className="text-[4rem] opacity-[0.5] fa-solid fa-quote-left"></i>
            &nbsp; Rudrarogyam was founded with the mission to promote natural
            healing and holistic wellness. We believe in treating the body,
            mind, and spirit as one &nbsp;
            <i className="text-[4rem] opacity-[0.5] fa-solid fa-quote-right"></i>
          </p>
        </div>
        <div className="col-span-2 max-xl:col-span-1">
          <img src={treatimg} alt="img" className="w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default AboutStory;
