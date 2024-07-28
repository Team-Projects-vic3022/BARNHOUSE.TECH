import React from "react";
import "../home/index.css";

const FourGridLayoutSection = () => {
  return (
    <>
      <div
        className="review-section
      pb-4 mb-20"
      >
        <h2 className="text-[28px] uppercase font-bold text-center text-white py-16">
          customer review
        </h2>
        <div className="container grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-2">
          <div className="h-[15rem] rounded-3xl bg-green-800"></div>
          <div className="h-[15rem] rounded-3xl bg-green-800"></div>
          <div className="h-[15rem] rounded-3xl bg-green-800"></div>
          <div className="h-[15rem] rounded-3xl bg-green-800"></div>
          <div className="h-[15rem] rounded-3xl bg-green-800"></div>
          <div className="h-[15rem] rounded-3xl bg-green-800"></div>
        </div>
      </div>
    </>
  );
};

export default FourGridLayoutSection;
