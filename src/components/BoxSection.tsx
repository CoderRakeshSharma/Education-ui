import React from "react";
import { boxArr } from "./data";

const BoxSection = () => {
  return (
  <div className="p-20 bg-white">
    <div className="p-8 bg-purple-950 rounded-3xl">
    <div className="flex flex-wrap">
            {boxArr.map((box) => (
              <div
                key={box.key}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 "
              >
                <div className="flex items-center">
                  <div className="bg-slate-400 flex items-center justify-center h-16 w-52 rounded-2xl">
                    <img
                      src={box.image}
                      alt="icon"
                      className="block mx-auto h-8 w-8 sm:mx-0 sm:shrink-0"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base text-white font-bold">
                      {box.text1}
                    </h3>
                    <p className="text-slate-400 text-sm text-base mb-2">{box.text2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  </div>
  );
};

export default BoxSection;
