// import React from 'react'

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-col gap-[3rem] mt-[10rem] items-center justify-center text-center">
        <p className="text-[3rem] font-normal text-[#4f4f4f] max-[400px]:text-[2.5rem]">
          <i className="fa-regular fa-face-dizzy text-[darkblue]"></i>&nbsp;
          Oops! Something Went Wrong.
        </p>
        <p className="text-[8rem] font-medium text-[grey] max-sm:text-[5rem] max-[400px]:text-[4rem]">
          404 Page Not Found!
        </p>
        <Link
          to={"/"}
          className="text-[3rem] text-[#4f4f4f] font-normal leading-[1px] hover:text-[darkblue] hover:underline max-[400px]:text-[2.5rem]"
        >
          Back To Site&nbsp; <i className="fa-regular fa-hand-point-left"></i>
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
