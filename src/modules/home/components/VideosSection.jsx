import React from "react";
import house from "../assets/images/house.jpg";
import { homeVide } from "../lib/data";
import YouTubePlayer from "./YoutubePlayer";

const VideosSection = () => {
  return (
    <>
      <div className="container text-center">
        <p className="mb-8 text-[#324160]">
          Not a public offer. The price can be specified depending on the
          remoteness of the construction site and construction conditions.
        </p>

        <p className="mb-8 text-[#a0a09f]">
          My BarnHouse modular houses are assembled by our qualified specialists
          in just 30 days, since they are delivered on site ready-made. The
          design is developed by the Russian studio ARCHMNML in Moscow.
        </p>

        <h2 className="mb-8 text-[28px] font-bold text-[#324160]">
          EUROPEAN LEVEL QUALITY
        </h2>

        <p className="mb-8 text-[#a0a09f]">
          The directors of construction of My BarnHouse Chikov Valentin and
          Ardev Borislav from Bulgaria review the individual construction
          project of the house on a turnkey basis.
        </p>
      </div>

      <div className="container text-center mb-20">
        {homeVide.map((item, idx) => {
          return (
            <div
              className={`flex gap-x-4 mb-4 hmXl:block hmXl:mb-20 ${
                idx % 2 !== 0 ? "flex-row-reverse hmXl:flex-row" : null
              }`}
            >
              <div className="w-[60rem] h-[400px] hmXl:w-full hmXl:mb-4">
                <iframe
                  src="https://www.youtube.com/embed/NACLqsyfaiE"
                  title="Youtube Video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div>
                <h3 className="mb-4 text-[#324160]">{item.name}</h3>
                <h6 className="mb-16 text-[#cbb492] hmXl:mb-4">
                  {item.subTitle}
                </h6>
                <p className="text-[#a0a09f]">{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VideosSection;
