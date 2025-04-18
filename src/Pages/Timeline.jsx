import React from "react";

const Timeline = () => {
  const steps = [
    {
      side: "right",
      title: "Q4 - 2021",
      text: "Blandit sed penatibus elit tortor fermentum velit donec. Id eleifend volutpat dolor netus auctor at. Volutpat sed auctor non in commodo, felis viverra risus tristique.",
    },
    {
      side: "left",
      title: "Q1 - 2022",
      text: "Blandit sed penatibus elit tortor fermentum velit donec. Id eleifend volutpat dolor netus auctor at. Volutpat sed auctor non in commodo, felis viverra risus tristique.",
    },
    {
      side: "right",
      title: "Q2 - 2022",
      text: "Blandit sed penatibus elit tortor fermentum velit donec. Id eleifend volutpat dolor netus auctor at. Volutpat sed auctor non in commodo, felis viverra risus tristique.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#000A1A] py-12 flex flex-col justify-center">
      <div className="sm:max-w-xl w-full mx-auto px-4">
        <div className="relative text-white font-popins antialiased text-sm sm:text-base">
          {/* Vertical dashed line */}
          <div className="hidden sm:block w-1 border-l-2 border-dashed border-blue-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {steps.map((item, idx) => (
            <div key={idx} className="mt-6 sm:mt-0 sm:mb-16">
              <div className="flex flex-col sm:flex-row items-center">
                <div
                  className={`flex justify-${
                    item.side === "left" ? "start" : "end"
                  } w-full mx-auto items-center`}
                >
                  <div
                    className={`w-full sm:w-1/2 ${
                      item.side === "left" ? "sm:pr-8" : "sm:pl-8"
                    }`}
                  >
                    <div className="p-6 bg-transparent text-white space-y-2 max-w-4xl">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-white opacity-70">{item.text}</p>
                    </div>
                  </div>
                </div>

                {/* Blue Dot */}
                <div className="rounded-full bg-blue-500 w-4 h-4 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 shadow-lg border-2 border-white"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="font-popins text-[20px] leading-[150%] text-white">
          And this just the begining , the team is working on more suprises for
          our community. Buddybullies stronger together !!
        </div>
      </div>
    </div>
  );
};

export default Timeline;
