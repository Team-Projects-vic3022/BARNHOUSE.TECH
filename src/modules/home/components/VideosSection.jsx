import React from "react";
import house from "../assets/images/house.jpg";
import { homeVide } from "../lib/data";

const VideosSection = () => {
  return (
    <>
      <div className="container text-center">
        <p className="mb-8">
          Not a public offer. The price can be specified depending on the
          remoteness of the construction site and construction conditions.
        </p>

        <p className="mb-8">
          My BarnHouse modular houses are assembled by our qualified specialists
          in just 30 days, since they are delivered on site ready-made. The
          design is developed by the Russian studio ARCHMNML in Moscow.
        </p>

        <h2 className="mb-8 text-[28px] font-bold">EUROPEAN LEVEL QUALITY</h2>

        <p className="mb-8">
          The directors of construction of My BarnHouse Chikov Valentin and
          Ardev Borislav from Bulgaria review the individual construction
          project of the house on a turnkey basis.
        </p>
      </div>

      <div className="container text-center mb-20">
        {homeVide.map((item, idx) => {
          return (
            <div
              className={`flex gap-x-4 mb-4 ${
                idx % 2 !== 0 ? "flex-row-reverse" : null
              }`}
            >
              <div className="max-w-[509px]">
                <img src={item.image} alt="" />
              </div>
              <div>
                <h3 className="mb-4">{item.name}</h3>
                <h6 className="mb-16">{item.subTitle}</h6>
                <p>{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VideosSection;
