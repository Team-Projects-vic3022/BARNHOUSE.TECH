import React from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Navigation = ({ setMobileNav, mobileNav }) => {
  return (
    <>
      <div className="py-4">
        <div className="container">
          <div className="text-end flex gap-4 justify-end">
            <Link>Mockba</Link>
            <Link>+44 7440 54 00 80</Link>
          </div>
          <div className="flex items-end hmXl:items-center hmXl:justify-between gap-8">
            <Link to={"/"} className="flex items-end gap-2">
              <div className="w-[6rem] hmLg:w-[4.5rem]">
                <img
                  src="https://static.wixstatic.com/media/d43eb5_50a96102b45b4209815d94077cebb2a6~mv2.jpg/v1/fill/w_73,h_73,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Barnhouse%20logo-2.jpg"
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <h2 className="text-[28px] text-[#283B62] font-bold">
                My BarnHouse
              </h2>
            </Link>
            <HiMenu
              className="text-[2.5rem] border border-drkblue hidden hmXl:block cursor-pointer"
              onClick={() => setMobileNav(!mobileNav)}
            />

            <div className="flex justify-between w-full uppercase hmXl:hidden">
              <Link
                className="text-[14px] text-[rgb(40,_59,_98)] hover:text-[rgb(83,_114,_178)] duration-300"
                to={"/projects/id"}
              >
                projects
              </Link>
              <Link
                className="text-[14px] text-[rgb(40,_59,_98)] hover:text-[rgb(83,_114,_178)] duration-300"
                to={"/technologies"}
              >
                technologies
              </Link>
              <Link
                className="text-[14px] text-[rgb(40,_59,_98)] hover:text-[rgb(83,_114,_178)] duration-300"
                to={"/services"}
              >
                services
              </Link>
              <Link
                className="text-[14px] text-[rgb(40,_59,_98)] hover:text-[rgb(83,_114,_178)] duration-300"
                to={"/about"}
              >
                about
              </Link>
              <Link
                className="text-[14px] text-[rgb(40,_59,_98)] hover:text-[rgb(83,_114,_178)] duration-300"
                to={"/kohtabi"}
              >
                kohtabi
              </Link>
              <Link
                className="text-[14px] text-[rgb(40,_59,_98)] hover:text-[rgb(83,_114,_178)] duration-300"
                to={"/blog"}
              >
                article
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
