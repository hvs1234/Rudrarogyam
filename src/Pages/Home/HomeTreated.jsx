// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import treatimg from "/Images/bg3.jpg";
import HomeTreatedData from "../../APIs/HomeTreatedAPI";
import { useState } from "react";

const HomeTreated = () => {
  // API
  //------------------------------------------Home Treated API-----------------------------------------------

  const [hometreateddata] = useState(HomeTreatedData);

  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="grid grid-cols-4 w-[100%] h-[100%] max-xl:grid-cols-1 max-xl:h-[100%]">
        <div className="bg-[darkred] col-span-2 max-xl:col-span-1 flex flex-col justify-center items-start px-[8rem] py-[6rem] gap-[2rem] max-sm:px-[4rem] max-sm:py-[4rem]">
          <p className="text-[3rem] text-[white] font-medium">
            Disease Treated
          </p>
          <p className="text-[2rem] font-normal text-[#f3f3f3] leading-[1.6]">
            At Rudrarogyam, we offer a variety of treatments that focus on
            detoxification and holistic healing. Our approach activates the
            body`s natural healing mechanisms, promoting overall wellness and
            balance.
          </p>
          {hometreateddata.map((e) => {
            return (
              <p
                className="text-[2rem] font-normal text-[#f3f3f3] leading-[1.6]"
                key={e.id}
              >
                {e.text}
              </p>
            );
          })}
          <Link
            to={"/treatment"}
            onClick={handleOnClick("/treatment")}
            className={`text-[2rem] font-normal bg-[red] border-[1px] border-[red] text-[white] rounded-md px-[2rem] py-[0.5rem] mt-[2rem] hover:bg-transparent hover:border-[white] hover:text-[white] transition-all duration-[0.2s]`}
          >
            Explore All Treatments
          </Link>
        </div>
        <div className="col-span-2 max-xl:col-span-1">
          <img src={treatimg} alt="img" className="w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default HomeTreated;
