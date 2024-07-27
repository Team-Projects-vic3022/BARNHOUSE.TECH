import React from "react";
import wallDrope from "../assets/images/walldrope";

const Furniture = () => {
  return (
    <div className="relative">
      <h2 className="text-[28px]">BARNHOUSE FURNITURE & OPTIONS</h2>
      <div className="relative grid grid-cols-2">
        <div className="">
          <img src={wallDrope} alt="" />
        </div>
        <div>
          <h4>LOFT FURNITURE</h4>
          <h3>Furniture, accessories and lighting fixtures</h3>
          <p>
            We've put together a catalog of Loft furniture for you for every
            BARNHOUSE interior at attractive prices.
          </p>
          <h6>from 20,000 ₽</h6>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
