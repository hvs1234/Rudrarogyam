// import React from 'react'
import { Link } from "react-router-dom";
import BlogData from "../../APIs/BlogAPI";
import { useState } from "react";
import Handlers from "../../Services/Handlers";

const BlogCard = () => {
  // API
  // ----------------------------Blog API-------------------------------------------

  const [blogdata] = useState(BlogData);

  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="mx-auto py-[9rem] max-w-[140rem] grid grid-cols-3 gap-[2rem] w-[100%] max-xl:max-w-[120rem] max-lg:max-w-[100rem] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:max-w-[60rem] max-[500px]:max-w-[50rem] max-[400px]:max-w-[40rem]">
        {blogdata.map((e) => {
          return (
            <div
              className={`flex flex-col gap-[1rem] justify-start mb-auto h-[100%] shadow-xl border-[1px] border-[#d2d2d2] w-[100%] hover:translate-y-[-2rem] transition-all duration-[0.3s] ease-linear ${e.blogcol}`}
              key={e.id}
            >
              <div className="flex justify-center items-center h-[100%] w-[100%]">
                <img src={e.img} alt="img" className="w-[100%] h-[100%]" />
              </div>
              <div className="flex flex-col gap-[1rem] justify-center px-[2rem] py-[2rem]">
                <div className="">
                  <Link
                    to={e.to}
                    onClick={handleOnClick(e.to)}
                    className="text-[2rem] font-normal transition-all duration-[0.2s] text-[#4e4e4e] ease-linear hover:text-[#7698a4]"
                  >
                    {e.title}
                  </Link>
                </div>
                <div className="py-[2rem]">
                  <Link className="bg-[darkgreen] text-[2rem] text-[white] px-[2rem] py-[1rem] rounded-full border-[1px] border-[] hover:bg-transparent hover:text-[black] hover:border-[black] transition-all duration-[0.3s] ease-linear">
                    {e.link}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogCard;
