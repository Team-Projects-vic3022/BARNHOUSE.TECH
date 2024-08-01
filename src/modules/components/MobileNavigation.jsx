import React from "react";
import { Link } from "react-router-dom";

const MobileNavigation = ({ mobileNav }) => {
  console.log(mobileNav);
  return (
    <>
      <div
        className={`py-4 absolute left-0 top-0 z-50 bg-white h-full w-[40%] hmLg:w-[60%] transition-transform duration-[.3s] ${
          mobileNav === true ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <div className="container mt-20">
          <div className="flex flex-col gap-y-4 justify-between w-full uppercase tracking-widest">
            <Link
              className="text-[14px] text-[rgb(40,_59,_98)] hover:text-[rgb(83,_114,_178)] duration-300"
              to={"/"}
            >
              home
            </Link>
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
    </>
  );
};

export default MobileNavigation;
