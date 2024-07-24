import React from "react";

const FourGridLayoutSection = () => {
  return (
    <>
      <div className="mb grid grid-cols-2 gap-4 bg-slate-300">
        <div className="h-[5.5rem] bg-green-800"></div>
        <div className="h-[5.5rem] bg-green-800"></div>
        <div className="h-[5.5rem] bg-green-800"></div>
        <div className="h-[5.5rem] bg-green-800"></div>
      </div>
    </>
  );
};

export default FourGridLayoutSection;
