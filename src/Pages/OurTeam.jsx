import React from "react";
import png1 from "../Assets/2 (2).png";
import png2 from "../Assets/7.png";
import png3 from "../Assets/ezgif-6-99e160664e9b (1).png";
function OurTeam() {
  return (
    <div className="bg-[#000A1A]">
      <div className="container pt-[138px] pb-[131px] ">
        <h1 className="text-white text-center text-[50px] font-semibold font-popins">
          Our Team
        </h1>
        <div className="flex flex-row flex-wrap mx-[-12px] ">
          <div className="w-4/12 max-md:w-6/12 max-sm:w-full  flex  justify-center  ">
            <div className="">
              <img
                src={png1}
                alt="member1"
                className="max-w-[312px] min-h-[312px]"
              />
              <h3 className="text-white text-center text-[30px] font-semibold font-popins ">
                Prime Bullister{" "}
              </h3>
              <h4 className="text-[18px] font-popins text-white text-center">
                Pruduct Designer
              </h4>
            </div>
          </div>
          <div className="w-4/12 max-md:w-6/12 max-sm:w-full flex  justify-center">
            <div>
              {" "}
              <img
                src={png2}
                alt="member2"
                className="max-w-[312px] min-h-[312px]"
              />
              <h3 className="text-white text-center text-[30px] font-semibold font-popins ">
                Solvador Bulli{" "}
              </h3>
              <h4 className="text-[18px] font-popins text-white text-center">
                Artist
              </h4>
            </div>
          </div>
          <div className="w-4/12 max-md:w-6/12 max-sm:w-full flex  justify-center">
            <div>
              <img
                src={png3}
                alt="member3"
                className="max-w-[312px] min-h-[312px]"
              />
              <h3 className="text-white text-center text-[30px] font-semibold font-popins ">
                Meta Bully{" "}
              </h3>
              <h4 className="text-[18px] font-popins text-white text-center">
                Developer
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
