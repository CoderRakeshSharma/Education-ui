import React from "react";
import { footerArr } from "./data";

const Footer = () => {
  return (
    <footer className="bg-[#FDF8EE] flex justify-between items-center w-full flex-col">
      <div className="container py-8 mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {footerArr.map((item) => (
            <div key={item.key} className="mt-3">
              {item.image && (
                <div>
                  <img src={item.image} alt="Logo" className="h-18 w-18" />
                </div>
              )}
              {item.title && (
                <h2 className="mb-3 text-xl font-bold">{item.title}</h2>
              )}
              <ul>
                {Object.values(item)
                  .filter((val, index) => index >= 2)
                  .map((listItem, index) => (
                    <li className="mt-3" key={index}>
                      {listItem}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full py-2 text-lg border-t border-slate-600">
        <div className="items-center justify-center w-full text-center">
          BookStore All Right Reserved, 2022
        </div>
      </div>
    </footer>
  );
};

export default Footer;
