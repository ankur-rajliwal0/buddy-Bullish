import React from "react";
import socialicon from "../Assets/Group 6.png";

function Footer() {
  return (
    <div className="bg-vector h-[70vh] bg-[#000A1A]">
      <div className="container">
        {" "}
        <h1 className="text-center text-[50px] font-popins text-white font-semibold pt-[130px]">
          JOIN NOW
        </h1>
        <div className="flex flex-wrap flex-row mx-[-12px] text-white  items-center">
          <div className="w-8/12 ">
            <h4 className="text-[30px] font-popins  ">LOGO</h4>
            <p className="text-[16px] font-popins max-w-[388px] mt-[21px] text-[#ffffffa2]">
              Aenean arcu sed rhoncus sapien euismod cursus morbi lacus,
              blandit. Placerat tortor duis fames cras pellentesque dui
              adipiscing neque gravida. Sociis neque consectetur id quis
              pharetra.
            </p>
            <div className="mt-[20px] font-popins text-4 ">Email@gmail.com</div>
          </div>
          <div className="w-2/12">
            <div className="flex flex-col gap-[10px] ">
              <a href="" className="text-4 font-popins">
                Resources
              </a>
              <a href="" className="text-4 font-popins">
                Roadmap
              </a>
              <a href="" className="text-4 font-popins">
                FAQs
              </a>
              <a href="" className="text-4 font-popins">
                Mint your Bully
              </a>
            </div>
          </div>
          <div className="w-2/12 flex justify-end">
            <div className=" flex gap- [138px] justify- end ">
              <div>
                <a href="" className="text-4 font-popins">
                  Community
                </a>
                <img src={socialicon} alt="" className="w-[80px]" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
