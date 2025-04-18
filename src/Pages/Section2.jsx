import React from "react";
import cartoonicon from "../Assets/ezgif-6-99e160664e9b.png";
import bgshadow from "../Assets/Ellipse 1.png";
import socialicon from "../Assets/Group 6.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Section2() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // only animate once
    });
  }, []);
  return (
    <div className=" bg-[#000A1A] h-[150vh] overflow-hidden">
      <div className="container">
        <div className="  flex flex-wrap flex-row mx-[-12px] pt-[153px] items-end ">
          <div
            className="relative xl:w-6/12 w-full px-3 justify-center flex"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={cartoonicon}
              alt=""
              className="max-w-[574px] max-sm:max-w-[250px] "
            />
            <img
              src={bgshadow}
              alt=""
              className="absolute  z-[-1] top-0 left-5 "
            />
          </div>
          <div
            className="xl:w-6/12 w-full px-3 justify-center flex"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="1000"
            data-aos-duration="1000"
          >
            <div className="">
              <h2 className="font-popins font-semibold text-[50px] text-white max-w-[338px]">
                Mint Your Bat
              </h2>
              <h3 className="text-[30px] font-medium font-popins text-white">
                Minting: 1,5 SOL
              </h3>
              <span className="font-popins font-regular text-[#80858D] line-through">
                Before 2 SOL
              </span>
              <h3 className="text-[30px] font-medium font-popins text-white mt-[21px]">
                Whitelist: 0,88 SOL
              </h3>
              <div className="font-popins font-regular text-[#80858D] line-through">
                Before 1 SOL
              </div>
              <button className="font-popins font-medium text-4 bg-white border-1 border-black rounded-full mt-[63px] p-5 transition duration-500 hover:border-white hover:border-solid hover:bg-transparent hover:text-white">
                Coming soon
              </button>
              <img src={socialicon} alt="" className="mt-[52px]" />
            </div>
            <img
              src={bgshadow}
              alt=""
              className="absolute top-0 right-[-350px]  z-[-1] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
