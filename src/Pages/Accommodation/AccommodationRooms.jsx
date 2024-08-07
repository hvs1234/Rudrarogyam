// import React from 'react'

import { HiOutlineHomeModern } from "react-icons/hi2";
import AccommodationRoomData from "../../APIs/AccommodationRoomAPI";
import { useState } from "react";

const AccommodationRooms = () => {
  // API
  //------------------------------------------Accommodation Room API------------------------------------------------

  const [accommodationroomdata] = useState(AccommodationRoomData);

  return (
    <>
      <div className="flex justify-start items-center gap-[2rem] px-[4rem] py-[2rem] bg-[darkred] w-[100%] max-xl:text-center max-xl:justify-center">
        <p className="text-[3rem] font-normal text-[white]">Room Types</p>
        <HiOutlineHomeModern size={26} className="text-[white]" />
      </div>

      {accommodationroomdata.map((e) => {
        return (
          <div className={e.mainclass} key={e.id}>
            <div className={e.dataclass}>
              <p className="text-[3rem] text-[white] font-medium max-sm:text-[3rem]">
                {e.title}
              </p>
              <p className="text-[2rem] font-[400] text-[white] leading-[2] max-sm:text-[2rem]">
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

export default AccommodationRooms;
