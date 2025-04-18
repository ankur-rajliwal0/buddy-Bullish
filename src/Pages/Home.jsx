import React, { useState } from "react";
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
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="homebg  relative">
        <div className="max-w-[1140px] mx-auto px-3  text-white pt-[28px]">
          <div className="flex justify-between ">
            <div className="">logo</div>
            <div
              className={` ${
                show ? "left0" : "left100"
              } max-lg:absolute  max-lg:bg-red-500 max-lg:w-full  max-lg:h-screen  max-lg:z-10  max-lg:top-0  max-lg:left-0  max-lg:flex-col  max-lg:justify-center  max-lg:items-center max-lg:flex duration-300 ease-linear `}
            >
              <ul className="flex gap-[80px] w-[634px] font-popins font-[17px] cursor-pointer hover:text-yellow-50 max-lg:flex-col max-lg:items-center ">
                <li className="hover:text-[#0060a58d] transition duration-600">
                  Minting
                </li>
                <li>Road Map</li>
                <li>Faq </li>
                <li>Team</li>
                <li>Join Us</li>
              </ul>
            </div>
            <div
              className="lg:hidden block z-20"
              onClick={() => setshow(!show)}
            >
              <span className="h-[2px] w-[25px] bg-white block "></span>
              <span className="h-[3px] w-[25px] bg-white my-1 block"></span>
              <span className="h-[2px] w-[25px] bg-white block "></span>
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
