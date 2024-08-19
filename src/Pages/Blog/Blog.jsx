// import React from 'react'

import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Navbar/Nav";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      {/* Navbar */}

      <Nav />

      {/* Blog */}

      <div className="relative object-cover w-[100%] h-[50vh] bg-[url('/Images/bg7.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[darkblue] opacity-[0.6]"></div>
        <div className="relative w-[100%] h-[100%] flex flex-col gap-[2rem] justify-center items-center text-center">
          <h1 className="text-[white] font-medium text-[6rem] leading-[1.4] max-md:text-[5rem] max-sm:text-[4rem] max-sm:w-[80%] tracking-[0]">
            Rudrarogyam Naturecure Blog
          </h1>
        </div>
      </div>

      <BlogCard />

      {/* Footer */}

      <Footer />
    </>
  );
};

export default Blog;
