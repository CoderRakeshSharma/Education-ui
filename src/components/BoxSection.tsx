import React from "react";
import { boxArr } from "./data";

const BoxSection = () => {
  return (
    <div className="bg-white">
      <div className="bg-purple-950 rounded-3xl">
        <div className="main-container mx-auto py-20">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {boxArr.map((box) => (
              <div key={box.key} className="flex items-center">
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
                  <p className="text-slate-400 text-sm mb-2">{box.text2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxSection;
