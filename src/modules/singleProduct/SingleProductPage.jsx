import React from "react";
import SingleProductImage from "./components/SingleProductImage";
import SingleProductText from "./components/SingleProductText";
import SingleProductsSubImages from "./components/SingleProductsSubImages";
import SingleProductDesc from "./components/SingleProductDesc";
import SingleProductDesc2 from "./components/SingleProductDesc2";
import FeaturedSingleProduct from "./components/FeaturedSingleProduct";
import Caurosel from "./components/Caurosel";

const SingleProductPage = () => {
  return (
    <>
      <div className="container text-drkblue">
        <SingleProductText />
        <SingleProductImage />

        <SingleProductsSubImages />
        <SingleProductDesc />
        <SingleProductDesc2 />
        <FeaturedSingleProduct />
      </div>
      <Caurosel />
    </>
  );
};

export default SingleProductPage;
