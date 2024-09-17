import { useEffect, useState } from "react";
import Nav from "../../Components/Navbar/Nav";
import logo from "/Images/logo.png";
import Handlers from "../../Services/Handlers";
import { Link } from "react-router-dom";
import { BiEnvelope, BiPhoneCall } from "react-icons/bi";
import ContactForm from "./ContactForm";
import Footer from "../../Components/Footer/Footer";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  const { handleOnClick } = Handlers();

  // Slider Image

  const images = [
    "/Images/Main/6.jpg",
    "/Images/Main/3.jpg",
    "/Images/Main/1.jpg",
    "/Images/Main/2.jpg",
    "/Images/Main/4.jpg",
    "/Images/Main/5.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const len = images.length;

    const slider = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % len);
    };

    const interval = setInterval(slider, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
      {/* Navbar */}
      <Nav />
      <section className="px-[0] py-[0] grid grid-cols-3 justify-center items-center relative object-cover w-[100%] h-[100%] shadow-sm max-xl:grid-cols-1">
        <div className="bg-[#f2f2f2] h-[100%] w-[100%] flex flex-col justify-center items-start gap-[2rem] px-[4rem] py-[10rem]">
          <div className="flex justify-start items-start">
            <Link
              to={"/contact"}
              onClick={handleOnClick("/contact")}
              className="text-[4rem] font-medium"
            >
              <img src={logo} alt="logo" className="w-[100%] max-sm:w-[80%]" />
            </Link>
          </div>
          <p className="text-[3.5rem] text-[#707070] leading-[1.6] font-medium">
            Get Touch With Us
          </p>
          <p className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]">
            We invite you to get in touch with Rudrarogyam for inquiries,
            bookings, or more information.
          </p>
          <p className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]">
            Contact Details:
          </p>
          <div className="flex items-center gap-[1rem]">
            <GrLocation size={30} className="text-[#585858]" />
            <p className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]">
              Rudrarogyam wellness village, khaltaal, maithana District
              (Chamoli)
            </p>
          </div>
          <div className="flex items-center gap-[1rem]">
            <BiPhoneCall size={30} className="text-[#585858]" />
            <a
              href="tel:9258343156"
              className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]"
            >
              +91-92583 43156
            </a>
          </div>
          <div className="flex items-center gap-[1rem]">
            <BiEnvelope size={30} className="text-[#585858]" />
            <a
              href="mailto:namasterudra13@gmail.com"
              className="text-[2rem] text-[#585858] font-normal leading-[1.6] mt-[0]"
            >
              namasterudra13@gmail.com
            </a>
          </div>
        </div>
        <div
          className={`col-span-2 w-[100%] h-[100%] relative object-cover bg-no-repeat bg-center bg-cover transition-all duration-[0.3s] ease-linear max-xl:col-span-1 max-xl:h-[60vh]`}
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          {/* <div className="absolute top-0 left-0 w-[100%] h-[100%]"></div> */}
        </div>
      </section>

      {/* Contact Form */}

      <ContactForm />

      {/* Footer */}

      <Footer />
    </>
  );
};

export default Contact;
