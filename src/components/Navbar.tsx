import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-orange-50 flex justify-between items-center">
      <div>
        <img src="/logo1.png" alt="Logo" className="h-18 w-18 ml-20" />
      </div>
      <div>
        <ul className="flex gap-3 text-l text-black">
          <li className="pt-2">Home</li>
          <li className="pt-2">About us</li>
          <li className="pt-2">Courses</li>
          <li className="pt-2">Our Service</li>
          <li className="pt-2">Contact us</li>
          <div>
            <button className="rounded-full bg-violet-950 text-white text-lg h-10 w-32 mr-20">
              Sign In
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
