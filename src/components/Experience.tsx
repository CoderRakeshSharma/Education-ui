import React from "react";
import { expArr } from "./data";

const Experience = () => {
  return (
    <div className="w-full bg-[#FDF8EE] border-b border-primary">
      <div className="flex flex-col md:flex-row">
        <div className=" mt-20 mb-20 mr-24 md:w-1/2 order-2 md:order-1">
          <img src="experience.png" alt="Image" className="w-full" />
        </div>
        <div className="w-full mt-20 mb-20 md:ml-24 md:w-1/2 order-1 md:order-2">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Premium
              <span className="text-orange"> Learning</span>
            </h2>
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
          </div>
          <div className="flex flex-wrap">
            {expArr.map((exp) => (
              <div
                key={exp.key}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 "
              >
                <div className="">
                  <img
                    src={exp.image}
                    alt="Student"
                    className="block mx-auto h-8 w-8 sm:mx-0 sm:shrink-0"
                  />
                  <h3 className="text-base text-slate-400 break-words">
                    {exp.text1}
                  </h3>
                  <div className="flex items-center">
                    <div className="text-center sm:text-left ml-4">
                      <div className="">
                        <p className="text-black text-base mb-2">{exp.text2}</p>
                      </div>
                    </div>
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
