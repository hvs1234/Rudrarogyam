// import React from 'react'
import treatimg from "/Images/Main/2.jpg";

const AboutTeam = () => {
  return (
    <>
      <div className="grid grid-cols-4 w-[100%] h-[100%] max-xl:grid-cols-1 max-xl:h-[100%]">
        <div className="bg-[darkred] col-span-2 max-xl:col-span-1 flex flex-col justify-center items-center text-center px-[8rem] py-[6rem] gap-[2rem] max-sm:px-[4rem] max-sm:py-[4rem] order-2">
          <p className="text-[3rem] text-[white] font-medium max-sm:text-[3rem]">
            Our Team
          </p>
          <p className="text-[2rem] font-[400] text-[white] leading-[2] max-sm:text-[2rem]">
            <i className="text-[4rem] opacity-[0.5] fa-solid fa-quote-left"></i>
            &nbsp; Our team of experienced practitioners is dedicated to
            providing personalized care, utilizing their expertise in
            naturopathy and holistic health &nbsp;
            <i className="text-[4rem] opacity-[0.5] fa-solid fa-quote-right"></i>
          </p>
        </div>
        <div className="col-span-2 max-xl:col-span-1 max-xl:order-2">
          <img src={treatimg} alt="img" className="w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
