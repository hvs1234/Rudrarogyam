// import React from 'react'
import TreatmentDataPart from "../../APIs/TreatmentDataAPI";
import { useState } from "react";

const TreatmentData = () => {
  // API
  //---------------------------------------------------Treatment Data API--------------------------------------------------------

  const [treatmentdata] = useState(TreatmentDataPart);

  return (
    <>
      {treatmentdata.map((e) => {
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

export default TreatmentData;
