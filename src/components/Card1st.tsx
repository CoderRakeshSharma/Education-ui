import React from "react";
import { card1stArr } from "./data";
import { type } from "os";

const Card1st = () => {
  return (
    <div className="main-container bg-white pb-8 md:pb-12 lg:pb-16 flex flex-col gap-6 md:gap-10 lg:gap-12">
      <div className="text-center text-black flex flex-col gap-1">
        <h2 className="text-4xl font-bold">Our Tracks</h2>
        <p className="text-lg text-slate-400">
          Lorem lpsum is simply dummy text of the printing.
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full md:w-5/6 lg:w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {card1stArr.map((card) => (
            <div key={card.key} className="w-full">
              <div className="rounded-xl p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="w-full">
                  <img
                    src={card.image}
                    alt="course"
                    className="w-full h-60 object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-2 p-2">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs text-slate-500">{card.text1}</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((item, index) => (
                          <div
                            key={index}
                            className={`${
                              index >= card.ratting
                                ? "text-gray-400"
                                : "text-yellow-500"
                            }`}
                          >
                            {card.star}
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-black text-base">{card.text2}</p>
                  </div>
                  <p className="text-orange text-sm">{card.text3}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-0.5">
                      {card.icon1}
                      <p className="text-slate-400 text-sm ">{card.text4}</p>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {card.icon2}
                      <p className="text-slate-400 text-sm ">{card.text5}</p>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {card.icon3}
                      <p className="text-slate-400 text-sm ">{card.text6}</p>
                    </div>
                  </div>
                  <div className="mt-3 w-full">
                    <button className="secondary-btn w-full">{card.btn}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card1st;
