import React from "react";
import { card2ndArr } from "./data";

const Card2nd = () => {
  return (
    <div className="p-20 bg-white">
      <div className="text-center text-black">
        <h2 className="mb-2 text-xl font-bold">What student’s say</h2>
        <p className="text-lg text-slate-400">
          Lorem lpsum is simply dummy text of the printing
        </p>
      </div>
      <div className="flex flex-wrap">
        {card2ndArr.map((card) => (
          <div
            key={card.key}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 "
          >
            <div className="border-8 border-white pt-3 pr-3 pl-3 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
              <h3 className="text-base text-slate-400 break-words">{card.text1}</h3>
              <div className="flex items-center">
                <img
                  src={card.image}
                  alt="Student"
                  className="block mx-auto h-8 w-8 rounded-full sm:mx-0 sm:shrink-0"
                />
                <div className="text-center sm:text-left ml-4">
                  <div className="">
                    <p className="text-black text-base mb-2">
                      {card.text2}
                    </p>
                    <p className="text-slate-400 text-sm mb-2">{card.text3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2nd;
