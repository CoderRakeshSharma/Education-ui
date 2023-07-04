import React from "react";
import { expArr } from "./data";

const Experience = () => {
  return (
    <div className="w-full bg-[#FDF8EE] ">
      <div className="flex flex-col md:flex-row">
        <div className="  md:w-2/5 order-1 md:order-1">
          <img src="experience.png" alt="Image" className="w-96" />
        </div>
        <div className="w-full mt-20 mb-20 md:ml-24 md:w-3/5 order-2 md:order-2">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Premium
              <span className="text-orange"> Learning</span>
            </h2>
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
          </div>
          <div className="flex flex-col">
            {expArr.map((exp) => (
              <div
                key={exp.key}
                className="w-full  p-4 "
              >
                <div className="flex items-center">
                  <div className="bg-[#4D2C5E] flex items-center justify-center h-16 w-28 rounded-2xl ">
                    <img
                      src={exp.image}
                      alt="icon"
                      className="block mx-auto h-8 w-8 sm:mx-0 sm:shrink-0"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base text-black font-semibold">
                      {exp.text1}
                    </h3>
                    <p className="text-slate-400 text-base mb-2">{exp.text2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
