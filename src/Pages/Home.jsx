import React from "react";
import shadow from "../Assets/Rectangle 60.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // only animate once
    });
  }, []);
  return (
    <>
      <div className="homebg h-[100vh] relative">
        <div className="max-w-[1140px] mx-auto px-3  text-white pt-[28px]">
          <div className="flex justify-between ">
            <div className="">logo</div>
            <div className="">
              {" "}
              <ul className="flex gap-[80px] w-[634px] font-popins font-[17px] cursor-pointer hover:text-yellow-50">
                <li className="hover:text-[#0060a58d] transition duration-600">
                  Minting
                </li>
                <li>Road Map</li>
                <li>Faq </li>
                <li>Team</li>
                <li>Join Us</li>
              </ul>
            </div>
          </div>
          <div className="lg:ml-[150px] xl:ml-[150px] md:ml-[150px] sm:ml-[50px] ">
            <h1
              className="max-w-[515px]  text-[70px] mt-[265px] "
              data-aos="fade-right"
            >
              Vitae nunc,{" "}
              <span className="font-bold" data-aos="fade-right">
                blandit a odio
              </span>
            </h1>
            <p
              className="max-w-[574px] font-popins font-medium text-[20px] text-[#B2CEE1] leading-[41px] "
              data-aos="fade-right"
            >
              Semper in egestas risus id tempus. Pellentesque dolor eros
              sollicitudin feugiat ut odio semper. Mattis fermentum eget ut
              vestibulum dolor diam
            </p>
          </div>
        </div>
        <div className=" absolute bottom-0 ">
          {" "}
          <img src={shadow} alt="" className=" w-full" />
        </div>
      </div>
    </>
  );
}

export default Home;
