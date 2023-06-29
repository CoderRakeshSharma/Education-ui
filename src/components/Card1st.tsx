import React from "react";
import { card1stArr } from "./data";

const Card1st = () => {
  return (
    <div className="p-20 bg-white">
      <div className="text-center text-black">
        <h2 className="mb-2 text-xl font-bold">Our Tracks</h2>
        <p className="text-lg text-slate-400">
          Lorem lpsum is simply dummy text of the printing
        </p>
      </div>
      <div className="flex flex-wrap">
        {card1stArr.map((card) => (
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
              <h3 className="text-lg text-slate-500">{card.text1}</h3>
              <p className="text-black text-base mb-2">{card.text2}</p>
              <p className="text-orange text-sm mb-2">{card.text3}</p>
              <p className="text-slate-400 text-sm mb-2">{card.text4}</p>
              <p className="text-slate-400 text-sm mb-2">{card.text5}</p>
              <p className="text-slate-400 text-sm mb-2">{card.text6}</p>
              <button className="secondary-btn">{card.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card1st;
