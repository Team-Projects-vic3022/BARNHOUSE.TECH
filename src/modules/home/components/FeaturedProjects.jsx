import React from "react";
import house from "../assets/images/house.jpg";
import { projects } from "../lib/data";
import Button from "../../components/Button";

const FeaturedProjects = () => {
  return (
    <>
      <div className="container mb-20">
        <h2 className="capitalize text-[28px] text-center mb-8">
          standard project
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-x-4 gap-y-12">
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
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mb-20">
        <h2 className="capitalize text-[28px] text-center mb-8">
          standard project
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-x-4 gap-y-12">
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
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center mb-20">
        <Button className="uppercase py-2 px-[8rem] bg-[rgba(50,65,96)]">
          All Offers
        </Button>
      </div>
    </>
  );
};

export default FeaturedProjects;
