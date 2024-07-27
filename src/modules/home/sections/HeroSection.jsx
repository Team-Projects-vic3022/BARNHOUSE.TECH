import React from "react";
import house from "../assets/images/house.jpg";
import Button from "../../components/Button";

const HeroSection = () => {
  return (
    <div
      className={`mb grid grid-cols-1 grid-rows-1 items-center h-screen text-white relative`}
    >
      <div className="h-full w-full col-[1_/_1] row-[1_/_1]">
        <img src={house} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="container col-[1_/1] row-[1_/_1]">
        <div className=" flex w-max gap-5 mt-[18rem]">
          <div className="flex flex-col max-w-[347px] px-8 py-10 bg-[rgba(50,65,96,0.8)]">
            <h1 className="text-3xl font-bold mb-4 tracking-wide ">
              THE BESTSELLING BARNHOUSES IN RUSSIA
            </h1>
            <p className="text-[16px] mb-4">
              A clean and minimalistic look with simple shapes. Panoramic
              windows from top to bottom and spacious balconies visually unify
              the house and the land. All finishes done with the most modern
              materials.
            </p>
            <hr className="mb-4" />
            <h3 className="mb-4">3 690 000 ₽</h3>
            <Button className="py-3 border uppercase">see more</Button>
          </div>
          <div className="max-w-[576px]">
            <h1 className="text-3xl">
              BARNHOUSE СТРОИТЕЛЬСТВО ДОМОВ И КОТТЕДЖЕЙ ПОД КЛЮЧ В МОСКВЕ И
              МОСКОВСКОЙ ОБЛАСТИ
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
