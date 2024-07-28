import React from "react";
import walldroper from "../assets/images/walldrope.jpg";

const FurnitureSection = () => {
  return (
    <div className="">
      <h2 className="mb-20 text-center text-[28px]">
        BARNHOUSE FURNITURE & OPTIONS
      </h2>
      <div className=" bg-[#1E2F52] py-16">
        <div className="max-w-[50rem] mx-auto grid grid-cols-2 relative">
          <div className="w-[16rem] h-[22rem] object-cover absolute top-[-6rem] left-16">
            <img src={walldroper} alt="" className="w-full h-full" />
          </div>
          <div className="col-[2]">
            <h2 className="text-white mb-6">LOFT FURNITURE</h2>
            <h3 className="text-[rgb(203,_180,_146)] mb-8">
              Furniture, accessories and lighting fixtures
            </h3>

            <p className="text-[rgb(97,_110,_137)] mb-28">
              We've put together a catalog of Loft furniture for you for every
              BARNHOUSE interior at attractive prices.
            </p>
            <h3>from 20,000 ₽</h3>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(41,_60,_96)] py-16 mb-10">
        <div className="max-w-[50rem] mx-auto grid grid-cols-2 gap-x-[5rem] relative">
          <div className="w-[16rem] h-[22rem] object-cover absolute bottom-[-3rem] right-16">
            <img src={walldroper} alt="" className="w-full h-full" />
          </div>
          <div className="">
            <h2 className="text-white mb-6">LOFT FURNITURE</h2>
            <h3 className="text-[rgb(203,_180,_146)] mb-8">
              Furniture, accessories and lighting fixtures
            </h3>

            <p className="text-[rgb(97,_110,_137)] mb-28">
              We've put together a catalog of Loft furniture for you for every
              BARNHOUSE interior at attractive prices.
            </p>
            <h3>from 20,000 ₽</h3>
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
