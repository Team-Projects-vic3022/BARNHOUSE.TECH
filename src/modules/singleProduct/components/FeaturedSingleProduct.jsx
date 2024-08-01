import React from "react";
import { projects } from "../../home/lib/data";
import house from "../assets/house.jpg";
import TrustUs from "../../home/components/TrustUs";
import { Button } from "../../components";

const FeaturedSingleProduct = () => {
  return (
    <div>
      <div className=" mb-20">
        <h2 className="capitalize text-[28px] text-center">
          КОМПЛЕКТАЦИЯ ДЛЯ КРУГЛОГОДИЧНОГО ПРОЖИВАНИЯ
        </h2>
        <p className="text-center mb-8">
          Мы подобрали оптимальное решение для данного проекта.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-x-4 gap-y-12 mb-20">
          {projects.map((item, idx) => {
            return (
              <div className="grid gap-y-4">
                <div className="h-[20rem]">
                  <img src={house} alt="" className="h-full object-cover" />
                </div>
                <h6>{item.name}</h6>
                <h6>{item.price} </h6>
                <h6>{item.rooms} </h6>
                <p>
                  <h6>{item.des1}</h6>
                  <h6>{item.des2}</h6>
                  <h6>{item.des3}</h6>
                  <h6>{item.des4}</h6>
                </p>
                <Button className="text-[#5272b2] border border-[#5272b2] w-max px-10 py-2">
                  see more
                </Button>
              </div>
            );
          })}
        </div>
        <TrustUs />
      </div>
    </div>
  );
};

export default FeaturedSingleProduct;
