import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="py-4">
        <div className="container">
          <div className="text-end flex gap-4 justify-end">
            <Link>Mockba</Link>
            <Link>+44 7440 54 00 80</Link>
          </div>
          <div className="flex items-end gap-8">
            <div className="flex items-end gap-2">
              <div className="w-[6rem]">
                <img
                  src="https://static.wixstatic.com/media/d43eb5_50a96102b45b4209815d94077cebb2a6~mv2.jpg/v1/fill/w_73,h_73,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Barnhouse%20logo-2.jpg"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-[28px]">My BarnHouse</h2>
            </div>

            <div className="flex justify-between w-full">
              <Link>projects</Link>
              <Link>technologies</Link>
              <Link>services</Link>
              <Link>about</Link>
              <Link>kohtabi</Link>
              <Link>article</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
