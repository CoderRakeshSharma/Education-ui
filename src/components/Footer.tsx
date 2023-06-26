import React from "react";
import { footerArr } from "./data";

const Footer = () => {
  return (
    <footer className="bg-[#FDF8EE] flex justify-between items-center w-full flex-col">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {footerArr.map((item) => (
            <div key={item.key} className="mt-3">
              {item.image && (
                <div>
                  <img
                    src={item.image}
                    alt="Logo"
                    className="h-18 w-18"
                  />
                </div>
              )}
              {item.title && <h2 className="text-xl font-bold mb-3">{item.title}</h2>}
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
      <div className="text-lg border-t w-full border-slate-600 py-2">
        <div className="w-full items-center justify-center text-center">
          BookStore All Right Reserved, 2022
        </div>
      </div>
    </footer>
  );
};

export default Footer;
