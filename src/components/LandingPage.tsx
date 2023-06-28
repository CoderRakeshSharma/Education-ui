import React from "react";
import { FiSearch } from "react-icons/fi";

const LandingPage = () => {
  return (
    <div className="w-full bg-[#FDF8EE] border-b border-primary">
      <div className="flex flex-col md:flex-row">
        <div className="w-full mt-20 mb-20 md:ml-24 md:w-1/2 order-2 md:order-1">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              The
              <span className="text-orange"> Smart</span>
            </h2>
            <h2 className="text-3xl font-bold mb-4">
              Choice For
              <span className="text-orange"> Future</span>
            </h2>
            <h2 className="text-xl text-slate-500 mb-4 break-words">
              Elearn is a global training provider based across the UK that
              specialises in accredited and bespoke training courses. We crush
              the...
            </h2>
          </div>
          <div className="flex items-center mt-4 border rounded-3xl bg-white w-3/4">
            <div className="flex items-center p-2">
              <FiSearch className="h-6 w-6 text-gray-600" />
            </div>
            <input
              type="text"
              placeholder="Search for a location..."
              className="bg-transparent px-4 py-2 flex-grow"
            />
            <button className="primary-btn">Continue</button>
          </div>
        </div>
        <div className="w-full mt-20 mb-20 mr-24 md:w-1/2 order-1 md:order-2">
          <img src="landing.png" alt="Image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
