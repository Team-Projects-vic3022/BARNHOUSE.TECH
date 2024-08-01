import React from "react";
import { cooperation, homeVide } from "../lib/data";
import walldrope from "../assets/images/walldrope.jpg";
import Button from "../../components/Button";

const Cooperation = () => {
  return (
    <>
      <div className="container">
        <div>
          <h2 className="text-[28px] text-center font-bold mb-20 text-[#324160]">
            STAGES OF COOPERATION
          </h2>
          <p className="mb-20 text-[#324160]">
            To order the project and to build a wooden house turnkey in London
            from My BarnHouse means to make a choice in favor of reasonable
            savings and comfort. For your convenience we divide the entire
            construction process into 3 stages:
          </p>
        </div>
      </div>

      <div className="container text-center mb-20">
        {cooperation.map((item, idx) => {
          return (
            <div
              className={`grid gap-x-4 mb-14 ${
                idx % 2 === 0
                  ? "grid-cols-[4.5fr,_4fr] hmXl:grid-cols-1"
                  : "grid-cols-[4fr,_4.5fr] hmXl:grid-cols-1"
              }`}
            >
              <div
                className={`max-w-[509px] hmXl:mb-4 hmXl:justify-self-center ${
                  idx % 2 !== 0
                    ? "col-[2] hmXl:col-[1_/_-1] hmXl:row-span-1 "
                    : null
                }`}
              >
                <img src={item.image} alt="" />
              </div>
              <div
                className={`${
                  idx % 2 !== 0
                    ? "col-[1] row-[1] hmXl:row-span-2 hmXl:col-span-2"
                    : null
                }`}
              >
                <h3 className="mb-4 text-[#324160] uppercase font-bold">
                  {item.name}
                </h3>
                <p className="text-[#a0a09f]">{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[rgb(41,_60,_96)] py-16 mb-10">
        <div className="container mx-auto grid grid-cols-2 gap-x-[5rem] relative hmXl:grid-cols-1 hmXl:grid-rows[auto_auto]">
          <div className="w-[30rem] h-[22rem] object-cover absolute top-[-6rem] right-0  hmXl:relative hmXl:top-0 hmXl:left-0 hmXl:mb-4 hmXl:row-span-1 hmXl:w-full">
            <img src={walldrope} alt="" className="w-full h-full" />
          </div>
          <div className="">
            <h2 className="text-white mb-6">LOFT FURNITURE</h2>
            <h3 className="text-[rgb(203,_180,_146)] mb-8">
              Furniture, accessories and lighting fixtures
            </h3>

            <p className="text-[rgb(97,_110,_137)] mb-16">
              We've put together a catalog of Loft furniture for you for every
              BARNHOUSE interior at attractive prices.
            </p>
            <Button className="uppercase border border-[#5272b2] text-[#5272b2] py-2 px-5">
              to get a consultation
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cooperation;
