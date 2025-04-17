import React from "react";
import png1 from "../Assets/6.png";
import png2 from "../Assets/6 (1).png";
import png3 from "../Assets/6 (2).png";

const Card = () => {
  return (
    <section className="bg-[#000A1A]">
      <div className=" container pt-[138px] pb-[131px]">
        <div className="flex flex-row flex-wrap mx-[-12px]">
          <div className="lg:w-4/12 sm:w-6/12 px-3">
            <div className="bg-[#031227] px-10 pt-10 pb-[78px]  rounded-lg">
              <div className="h-[145px]">
                <img src={png1} alt="" />
              </div>
              <h5 className="text-white font-popins font-semibold text-[30px] leading-[100%] pb-[25px] pt-11">
                ART COLLECTION
              </h5>
              <h6 className=" font-popins font-normal  leading-[150%] text-white opacity-[70%]">
                Complete the art collection in full with +70 unique traits, and
                publish our rarity chart on our webpage.
              </h6>
            </div>
          </div>
          <div className="lg:w-4/12 sm:w-6/12 px-3 pt-5 sm:pt-0">
            <div className="bg-[#031227] px-10 pt-10 pb-[78px]  rounded-lg">
              <div className="h-[145px]">
                <img src={png2} alt="" />
              </div>
              <h5 className="text-white font-popins font-semibold text-[30px] leading-[100%] pb-[25px] pt-11">
                BREEDING
              </h5>
              <h6 className=" font-popins font-normal  leading-[150%] text-white opacity-[70%]">
                20 Buddybullies will have a very special and ersonalized
                resembling of famous people who are into NFTs those will be
                available after the minting.
              </h6>
            </div>
          </div>
          <div className="lg:w-4/12 sm:w-6/12 px-3  lg:pt-0  pt-5">
            <div className="bg-[#031227] px-10 pt-10 pb-[78px]  rounded-lg">
              <div className="h-[145px]">
                <img src={png3} alt="" />
              </div>
              <h5 className="text-white font-popins font-semibold text-[30px] leading-[100%] pb-[25px] pt-11">
                SPECIAL BULLIES
              </h5>
              <h6 className=" font-popins font-normal  leading-[150%] text-white opacity-[70%]">
                Our BuddyBullies will not come alone, as we will announce the
                breeding function after the minting and you will be able to get
                a PuppyBully for free.
              </h6>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap mx-[-12px] mt-[41px]">
          <div className="lg:w-4/12 sm:w-6/12 px-3">
            <div className="bg-[#031227] px-10 pt-10 pb-[78px]  rounded-lg">
              <div className="h-[145px]">
                <img src={png1} alt="" />
              </div>
              <h5 className="text-white font-popins font-semibold text-[30px] leading-[100%] pb-[25px] pt-11">
                ART COLLECTION
              </h5>
              <h6 className=" font-popins font-normal  leading-[150%] text-white opacity-[70%]">
                Complete the art collection in full with +70 unique traits, and
                publish our rarity chart on our webpage.
              </h6>
            </div>
          </div>
          <div className="lg:w-4/12 sm:w-6/12 px-3 pt-5 sm:pt-0">
            <div className="bg-[#031227] px-10 pt-10 pb-[78px]  rounded-lg">
              <div className="h-[145px]">
                <img src={png2} alt="" />
              </div>
              <h5 className="text-white font-popins font-semibold text-[30px] leading-[100%] pb-[25px] pt-11">
                BREEDING
              </h5>
              <h6 className=" font-popins font-normal  leading-[150%] text-white opacity-[70%]">
                20 Buddybullies will have a very special and ersonalized
                resembling of famous people who are into NFTs those will be
                available after the minting.
              </h6>
            </div>
          </div>
          <div className="lg:w-4/12 sm:w-6/12 px-3  lg:pt-0  pt-5">
            <div className="bg-[#031227] px-10 pt-10 pb-[78px]  rounded-lg">
              <div className="h-[145px]">
                <img src={png3} alt="" />
              </div>
              <h5 className="text-white font-popins font-semibold text-[30px] leading-[100%] pb-[25px] pt-11">
                SPECIAL BULLIES
              </h5>
              <h6 className=" font-popins font-normal  leading-[150%] text-white opacity-[70%]">
                Our BuddyBullies will not come alone, as we will announce the
                breeding function after the minting and you will be able to get
                a PuppyBully for free.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
