import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";

const InstagramSocial = () => {
  return (
    <>
      <div
        className="
      pb-4 mb-20 container"
      >
        <h2 className="text-center text-[28px] font-bold mb-20 uppercase">
          we are on instagram
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-2 mb-20">
          <div className="h-[15rem] bg-green-800"></div>
          <div className="h-[15rem] bg-green-800"></div>
          <div className="h-[15rem] bg-green-800"></div>
          <div className="h-[15rem] bg-green-800"></div>
          <div className="h-[15rem] bg-green-800"></div>
          <div className="h-[15rem] bg-green-800"></div>
        </div>
        <Button className="block mx-auto border py-1 px-4 text-[rgb(82,_114,_178)] border-[rgb(82,_114,_178)]">
          <Link>Показать еще</Link>
        </Button>
      </div>
    </>
  );
};

export default InstagramSocial;
