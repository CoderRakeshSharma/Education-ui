import React from "react";
import { card3rdArr } from "./data";

const Card3rd = () => {
  return (
    <div className="p-20 bg-white">
      <div className="text-center text-black">
        <h2 className="mb-2 text-xl font-bold">Our Tracks</h2>
        <p className="text-lg text-slate-400">
          Lorem lpsum is simply dummy text of the printing
        </p>
      </div>
      <div className="flex flex-wrap">
        {card3rdArr.map((card) => (
          <div
            key={card.key}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 "
          >
            <div className="border-8 border-white pt-3 pr-3 pl-3 rounded-xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <img
                src={card.image}
                alt="Professor"
                className="w-full mb-4 rounded-xl"
              />
              <h3 className="text-lg font-bold">{card.text1}</h3>
              <p className="text-slate-500 text-base mb-2">{card.text2}</p>
              <p className="text-slate-400 text-sm mb-2">{card.text3}</p>

              <div className="flex items-center justify-between">
                <p className="text-orange text-base mb-4 flex-grow">
                  {card.text4}
                </p>
                <div className="flex">
                  <img
                    src={card.icon1}
                    alt="Instagram"
                    className="w-6 h-6 mr-2"
                  />
                  <img src={card.icon2} alt="LinkedIn" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card3rd;
