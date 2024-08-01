import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import img1 from "../assets/images/wood-house-1.jpg";
import img2 from "../assets/images/wood-house-2.jpeg";
import img3 from "../assets/images/wood-house-3.jpg";

const InstagramSocial = () => {
  return (
    <>
      <div
        className="
      pb-4 mb-20 container hmXl:w-full"
      >
        <h2 className="text-center text-[28px] font-bold mb-20 uppercase text-[#324160]">
          we are on instagram
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-2 mb-20">
          <div className="h-[18rem]">
            <img src={img1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="h-[18rem]">
            <img src={img2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="h-[18rem]">
            <img src={img3} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="h-[18rem]">
            <img src={img1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="h-[18rem]">
            <img src={img2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="h-[18rem]">
            <img src={img3} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <Button className="block mx-auto border py-1 px-4 text-[rgb(82,_114,_178)] border-[rgb(82,_114,_178)]">
          <Link>Показать еще</Link>
        </Button>
      </div>
    </>
  );
};

export default InstagramSocial;
