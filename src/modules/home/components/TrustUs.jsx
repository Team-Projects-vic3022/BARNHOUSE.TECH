import React from "react";
import { SlNotebook } from "react-icons/sl";
import { trusUs } from "../lib/data";

const TrustUs = () => {
  return (
    <div>
      <h2 className="mb-20 text-center text-[28px] uppercase font-bold">
        you can trust us
      </h2>
      <div className="container mb grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-12 text-center">
        {trusUs.map((item, idx) => {
          return (
            <div className="">
              <div className="w-max mx-auto mb-4 text-[3rem] text-[rgb(203,_180,_146)]">
                <SlNotebook />
              </div>
              <h3 className="mb-16">{item.name}</h3>
              <p>{item.des}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustUs;
