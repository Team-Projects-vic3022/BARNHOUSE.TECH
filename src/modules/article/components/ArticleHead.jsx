import React from "react";
import { CiSearch } from "react-icons/ci";

const ArticleHead = () => {
  return (
    <div className="container flex justify-between py-8 mb-4">
      <h3>Bce посты</h3>
      <div className="flex gap-2">
        <input
          type="search"
          className="border-b border-gray-950 active:border-none"
        />
        <span className="rounded-full bg-[#0288D1] text-white w-6 h-6 flex justify-center items-center">
          c
        </span>
      </div>
    </div>
  );
};

export default ArticleHead;
