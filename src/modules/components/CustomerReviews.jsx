import React from "react";
import "../home/index.css";
import house from "../home/assets/images/house.jpg";

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
          {[1, 2, 3, 4, 5, 6].map((_, idx) => {
            return (
              <div key={idx} className="h-[15rem] rounded-3xl bg-white p-2">
                <div className="flex items-center gap-2">
                  <div className="w-[2rem] h-[2rem] self-start">
                    <img src={house} className="w-full h-full rounded-full" />
                  </div>{" "}
                  <div>
                    <h3 className="text-[14px] font-bold">Victor Ezekiel</h3>
                    <h6 className="text-[14px]">20 min</h6>
                  </div>
                </div>
                <p className="text-[14px] font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  ducimus culpa dolores iste numquam rerum aut cum vitae
                  veritatis commodi porro mollitia soluta delectus voluptatum
                  nisi accusantium deserunt, nesciunt placeat eveniet nobis vel
                  reiciendis earum. Tempora provident unde aliquam laboriosam
                  nisi sint, quae necessitatibus sapiente ea quam cum illo
                  eveniet.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FourGridLayoutSection;
