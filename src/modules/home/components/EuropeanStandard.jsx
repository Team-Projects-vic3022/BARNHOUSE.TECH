import React from "react";

const EuropeanStandard = () => {
  return (
    <div className="container mb-8">
      <h2 className="mb-2 text-center text-[28px] uppercase font-bold text-[#324160]">
        building according to european standard
      </h2>
      <p className="text-center mb-8">
        we build modern houses in London and London region
      </p>
      <div className="w-full h-[30rem] mb-8">
        <iframe
          src="https://www.youtube.com/embed/NACLqsyfaiE?autoplay=1&mute=1"
          title="Youtube Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share autoplay"
          allowfullscreen
          className="w-full h-full"
        ></iframe>
      </div>
      <p className="">
        The general director of construction "My Barn House" Chikov Valentin and
        Ardev Borislav from Bulgaria review the individual construction project
        of the house "BARN 307" from laminated timber on a turnkey basis.
        Planning decisions are well thought out in detail: the spaces impress
        not only with the high quality of finishing works, but with the entire
        construction as a whole. Moscow region, Dmitrov 2021
      </p>
    </div>
  );
};

export default EuropeanStandard;
