// import React from 'react'
import treatimg from "/Images/Main/9.jpg";

const ContactForm = () => {
  return (
    <>
      <div className="grid grid-cols-4 w-[100%] h-[100%] max-xl:grid-cols-1 max-xl:h-[100%]">
        <div className="bg-[#f2f2f2] col-span-2 max-xl:col-span-1 flex flex-col justify-center items-start text-left px-[8rem] py-[6rem] gap-[2rem] max-sm:px-[4rem] max-sm:py-[4rem] order-2">
          <form
            action=""
            method="POST"
            className="flex flex-col gap-[4rem] w-[100%]"
          >
            <div className="flex flex-col gap-[1rem]">
              <p className="text-[2rem] text-[black] uppercase font-medium">
                SEND US YOUR COMMENTS OR QUERIES
              </p>
              <p className="text-[1.6rem] text-[black] capitalize font-normal">
                Please fill out the form below. Click the Submit button when
                done.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-[6rem] max-md:grid-cols-1">
              <div className="flex flex-col gap-[1rem]">
                <label
                  htmlFor="name"
                  className="text-[2rem] text-[black] font-normal"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  name="First Name: "
                  placeholder="Your First Name"
                  required
                  autoComplete="off"
                  className="border-b-[1px] border-[black] px-[0] py-[1rem] bg-[#f2f2f2] text-[2rem] outline-none w-[100%]"
                />
              </div>
              <div className="flex flex-col gap-[1rem]">
                <label
                  htmlFor="name"
                  className="text-[2rem] text-[black] font-normal"
                >
                  Last Name{" "}
                </label>
                <input
                  type="text"
                  name="Last Name: "
                  placeholder="Your Last Name"
                  autoComplete="off"
                  className="border-b-[1px] border-[black] px-[0] py-[1rem] bg-[#f2f2f2] text-[2rem] outline-none w-[100%]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[6rem] max-md:grid-cols-1">
              <div className="flex flex-col gap-[1rem]">
                <label
                  htmlFor="email"
                  className="text-[2rem] text-[black] font-normal"
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="Email: "
                  placeholder="Your Email"
                  required
                  autoComplete="off"
                  className="border-b-[1px] border-[black] px-[0] py-[1rem] bg-[#f2f2f2] text-[2rem] outline-none w-[100%]"
                />
              </div>
              <div className="flex flex-col gap-[1rem]">
                <label
                  htmlFor="phone"
                  className="text-[2rem] text-[black] font-normal"
                >
                  Phone Number *
                </label>
                <input
                  type="number"
                  name="Phone Number: "
                  placeholder="Your Phone Number"
                  autoComplete="off"
                  className="border-b-[1px] border-[black] px-[0] py-[1rem] bg-[#f2f2f2] text-[2rem] outline-none w-[100%]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-[6rem] max-md:grid-cols-1 w-[100%]">
              <div className="flex flex-col gap-[1rem]">
                <label
                  htmlFor="message"
                  className="text-[2rem] text-[black] font-normal"
                >
                  Message *
                </label>
                <textarea
                  rows={4}
                  cols={30}
                  type="text"
                  name="Message: "
                  placeholder="Your Message"
                  required
                  autoComplete="off"
                  className="border-b-[1px] border-[black] px-[0] py-[1rem] bg-[#f2f2f2] text-[2rem] outline-none w-[100%] resize-none"
                />
              </div>
              <div className="flex items-center justify-center w-[100%] text-[2rem]">
                <input
                  type="submit"
                  name="Submit"
                  id="submit"
                  value={"Submit Queries"}
                  className="bg-[darkgreen] border-[1px] border-[darkgreen] px-[2rem] py-[1rem] cursor-pointer hover:bg-[transparent] hover:border-[black] hover:text-[black] transition-all duration-[0.2s] ease-linear text-[white] w-[100%] rounded-xl"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-span-2 max-xl:col-span-1 max-xl:order-2">
          <img src={treatimg} alt="img" className="w-[100%] h-[100%]" />
        </div>
      </div>

      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4289.209418379178!2d79.32387257622348!3d30.375831702792617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909d50023fd85a3%3A0x767298de183a769d!2sRopa!5e1!3m2!1sen!2sin!4v1723903634989!5m2!1sen!2sin"
          className="w-[100%] h-[50vh]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactForm;
