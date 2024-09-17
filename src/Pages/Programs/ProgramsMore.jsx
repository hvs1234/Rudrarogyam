// import React from 'react'

import { FaEye } from "react-icons/fa";
import ProgramsData from "../../APIs/ProgramsAPI";
import { useState } from "react";

const ProgramsMore = () => {
  // API
  //---------------------------------------------Programs API-------------------------------------------------

  const [programsdata] = useState(ProgramsData);

  return (
    <>
      <div className="flex justify-start items-center gap-[2rem] px-[4rem] py-[2rem] bg-[#42421a] w-[100%] max-xl:text-center max-xl:justify-center">
        <p className="text-[3rem] font-normal text-[white]">Our Programs</p>
        <FaEye size={26} className="text-[white]" />
      </div>

      {programsdata.map((e) => {
        return (
          <div className={e.mainclass} key={e.id}>
            <div className={e.dataclass}>
              <p className="text-[3rem] text-[white] font-medium max-sm:text-[3rem]">
                {e.title}
              </p>
              <p className="text-[2rem] font-[400] text-[white] leading-[2] max-sm:text-[2rem] max-w-[60%] max-md:max-w-[100%]">
                <i className="text-[4rem] opacity-[0.5] fa-solid fa-quote-left"></i>
                &nbsp; {e.desc} &nbsp;
                <i className="text-[4rem] opacity-[0.5] fa-solid fa-quote-right"></i>
              </p>
            </div>
            <div className={e.imgclass}>
              <img src={e.img} alt="img" className="w-[100%]" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProgramsMore;
