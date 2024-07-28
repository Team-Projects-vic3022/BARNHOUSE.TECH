import React from "react";
import { cooperation, homeVide } from "../lib/data";
import walldrope from "../assets/images/walldrope.jpg";
import Button from "../../components/Button";

const Cooperation = () => {
  return (
    <>
      <div className="container">
        <div>
          <h2 className="text-[28px] text-center font-bold mb-20">
            STAGES OF COOPERATION
          </h2>
          <p className="mb-20">
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
                  ? "grid-cols-[4.5fr,_4fr]"
                  : "grid-cols-[4fr,_4.5fr]"
              }`}
            >
              <div
                className={`max-w-[509px] ${idx % 2 !== 0 ? "col-[2]" : null}`}
              >
                <img src={item.image} alt="" />
              </div>
              <div className={`${idx % 2 !== 0 ? "col-[1] row-[1]" : null}`}>
                <h3 className="mb-4">{item.name}</h3>
                <h6 className="mb-16">{item.subTitle}</h6>
                <p>{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[rgb(41,_60,_96)] py-16 mb-10">
        <div className="container mx-auto grid grid-cols-2 gap-x-[5rem] relative">
          <div className="w-[30rem] h-[22rem] object-cover absolute top-[-6rem] right-0">
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
            <Button className="uppercase border py-2 px-5">
              to get a consultation
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cooperation;
