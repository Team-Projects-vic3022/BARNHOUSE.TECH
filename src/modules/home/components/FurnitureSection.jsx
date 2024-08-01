import React from "react";
import walldroper from "../assets/images/walldrope.jpg";

const FurnitureSection = () => {
  return (
    <div className="">
      <h2 className="mb-20 text-center text-[28px] font-bold text-[#324160]">
        BARNHOUSE FURNITURE & OPTIONS
      </h2>
      <div className="bg-[#1E2F52] py-16">
        <div className="max-w-[50rem] mx-auto grid grid-cols-2 relative  hmXl:grid-cols-1 hmXl:grid-rows[auto_auto] container">
          <div className="w-[16rem] h-[22rem] object-cover absolute top-[-6rem] left-160 hmXl:relative hmXl:top-0 left-0 hmXl:mb-4 hmXl:row-span-1">
            <img src={walldroper} alt="" className="w-full h-full" />
          </div>
          <div className="col-[2] hmXl:row-[2/2] hmXl:col-[1]">
            <h2 className="text-white mb-6">LOFT FURNITURE</h2>
            <h3 className="text-[rgb(203,_180,_146)] mb-8">
              Furniture, accessories and lighting fixtures
            </h3>

            <p className="text-[rgb(97,_110,_137)] mb-28 hmXl:mb-4">
              We've put together a catalog of Loft furniture for you for every
              BARNHOUSE interior at attractive prices.
            </p>
            <h3 className="font-bold text-[#5272b2]">from 20,000 ₽</h3>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(41,_60,_96)] py-16 mb-10">
        <div className="max-w-[50rem] mx-auto grid grid-cols-2 gap-x-[5rem] relative hmXl:grid-cols-1 hmXl:grid-rows[auto_auto] container">
          <div className="w-[16rem] h-[22rem] object-cover absolute bottom-[-3rem] right-16 hmXl:relative hmXl:top-0 hmXl:left-0 hmXl:mb-4 hmXl:row-span-1">
            <img src={walldroper} alt="" className="w-full h-full" />
          </div>
          <div className="">
            <h2 className="text-white mb-6">LOFT FURNITURE</h2>
            <h3 className="text-[rgb(203,_180,_146)] mb-8">
              Furniture, accessories and lighting fixtures
            </h3>

            <p className="text-[rgb(97,_110,_137)] mb-28 hmXl:mb-4">
              We've put together a catalog of Loft furniture for you for every
              BARNHOUSE interior at attractive prices.
            </p>
            <h3 className="font-bold text-[#5272b2]">from 20,000 ₽</h3>
          </div>
        </div>
      </div>
      <p className="text-center mb-20">
        Experience the excellence of our offerings specifically designed for the
        My BarnHouse project.
      </p>
    </div>
  );
};

export default FurnitureSection;
