import { useState } from "react";
import StayRoomData from "../../APIs/BookAPI/StayRoomAPI";
import Multiselect from "multiselect-react-dropdown";
import TreatmentData from "../../APIs/BookAPI/TreatmentAPI";
import CountryData from "../../APIs/BookAPI/CountryData";

// import React from 'react'
const BookingForm = () => {
  // API

  const [stayroomdata] = useState(StayRoomData);
  const [treatmentdata] = useState(TreatmentData);
  const [countrydata] = useState(CountryData);

  return (
    <>
      <div className="grid grid-cols-1 w-[100%] h-[100%] max-xl:grid-cols-1 max-xl:h-[100%]">
        <div className="bg-[white] col-span-1 max-xl:col-span-1 flex flex-col justify-center items-start text-left px-[8rem] py-[6rem] gap-[2rem] max-sm:px-[4rem] max-sm:py-[4rem] order-2">
          <form
            action=""
            method="POST"
            className="flex flex-col gap-[4rem] w-[100%]"
          >
            {/* Stay Information */}

            <div className="flex flex-col gap-[1rem]">
              <p className="text-[2rem] text-[black] uppercase font-medium">
                Rudrarogyam Admission and Reservation
              </p>
              <p className="text-[1.6rem] text-[black] capitalize font-normal">
                Please fill out the reservation form below. Click the book now
                button when done.
              </p>
              <p className="text-[2rem] text-[black] mt-[4rem] uppercase font-medium">
                Stay Information
              </p>
              <div className="line h-[1px] w-[100%] bg-[grey] mt-[1rem] mb-[-1rem]"></div>
            </div>
            <div className="grid grid-cols-2 gap-[6rem] mb-[-1rem] max-md:grid-cols-1">
              <div className="flex flex-col gap-[1rem]">
                <label
                  htmlFor="stay_room"
                  className="text-[2rem] text-[black] font-normal"
                >
                  Stay Room *
                </label>
                <Multiselect
                  options={stayroomdata}
                  displayValue="title"
                  required
                  className="px-[0] cursor-pointer rounded-xl py-[1rem] bg-[white] text-[2rem] outline-none w-[100%]"
                />
              </div>
              <div className="flex flex-col gap-[1rem]">
                <label
                  htmlFor="stay_room"
                  className="text-[2rem] text-[black] font-normal"
                >
                  Treatment *
                </label>
                <Multiselect
                  options={treatmentdata}
                  displayValue="title"
                  required
                  className="px-[0] cursor-pointer rounded-xl py-[1rem] bg-[white] text-[2rem] outline-none w-[100%]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[6rem] max-md:grid-cols-1">
              <div className="flex flex-col gap-[1rem]">
                <label
                  htmlFor="stay_room"
                  className="text-[2rem] text-[black] font-normal"
                >
                  Country *
                </label>
                <select
                  id="country"
                  required
                  className="border-b-[1px] border-[black] cursor-pointer px-[0] py-[1rem] bg-[white] text-[2rem] outline-none w-[100%]"
                >
                  <option value="">Select Country</option>
                  {countrydata.map((e) => {
                    return (
                      <option
                        key={e.id}
                        value={e.value}
                        className="cursor-pointer"
                      >
                        {e.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <label
                  htmlFor="city"
                  className="text-[2rem] text-[black] font-normal"
                >
                  City *
                </label>
                <input
                  type="text"
                  name="City: "
                  placeholder="Your City"
                  required
                  className="border-b-[1px] border-[black] px-[0] py-[1rem] bg-[white] text-[2rem] outline-none w-[100%]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[6rem] max-md:grid-cols-1">
              <div className="flex flex-col gap-[1rem]">
                <label
                  htmlFor="name"
                  className="text-[2rem] text-[black] font-normal"
                >
                  Stay From *
                </label>
                <input
                  type="date"
                  name="Stay From: "
                  required
                  className="border-b-[1px] border-[black] cursor-pointer px-[0] py-[1rem] bg-[white] text-[2rem] outline-none w-[100%]"
                />
              </div>
              <div className="flex flex-col gap-[1rem]">
                <label
                  htmlFor="name"
                  className="text-[2rem] text-[black] font-normal"
                >
                  Stay To
                </label>
                <input
                  type="date"
                  name="Stay To: "
                  className="border-b-[1px] border-[black] cursor-pointer px-[0] py-[1rem] bg-[white] text-[2rem] outline-none w-[100%]"
                />
              </div>
            </div>

            {/* Personal Details */}

            <div className="flex flex-col gap-[1rem]">
              <p className="text-[2rem] text-[black] mt-[2rem] uppercase font-medium">
                Personal Details
              </p>
              <div className="line h-[1px] w-[100%] bg-[grey] mt-[1rem] mb-[-1rem]"></div>
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
                  className="border-b-[1px] border-[black] px-[0] py-[1rem] bg-[white] text-[2rem] outline-none w-[100%]"
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
                  className="border-b-[1px] border-[black] px-[0] py-[1rem] bg-[white] text-[2rem] outline-none w-[100%]"
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
                  className="border-b-[1px] border-[black] px-[0] py-[1rem] bg-[white] text-[2rem] outline-none w-[100%]"
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
                  className="border-b-[1px] border-[black] px-[0] py-[1rem] bg-[white] text-[2rem] outline-none w-[100%]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-[6rem] max-md:grid-cols-1">
              <div className="flex flex-col gap-[1rem]">
                <label
                  htmlFor="address"
                  className="text-[2rem] text-[black] font-normal"
                >
                  Current Address *
                </label>
                <textarea
                  rows={3}
                  cols={30}
                  type="text"
                  name="Address: "
                  placeholder="Your Stay Address"
                  required
                  autoComplete="off"
                  className="border-b-[1px] border-[black] px-[0] py-[1rem] bg-[white] text-[2rem] outline-none w-[100%] resize-none"
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
                  rows={3}
                  cols={30}
                  type="text"
                  name="Message: "
                  placeholder="Your Message"
                  required
                  autoComplete="off"
                  className="border-b-[1px] border-[black] px-[0] py-[1rem] bg-[white] text-[2rem] outline-none w-[100%] resize-none"
                />
              </div>
              <div className="flex items-center justify-center w-[100%] text-[2rem]">
                <input
                  type="submit"
                  name="Submit"
                  id="submit"
                  value={"Book Now"}
                  className="bg-[darkgreen] border-[1px] border-[darkgreen] px-[2rem] py-[1rem] cursor-pointer hover:bg-[transparent] hover:border-[black] hover:text-[black] transition-all duration-[0.2s] ease-linear text-[white] w-[100%] rounded-xl"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
