import React from "react";
import Button from "./Button";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-1 bg-white p-4 hmXl:p-0">
      <input
        type="text"
        placeholder="Name"
        className="border px-6 py-1 "
        required:true
      />
      <input
        type="emai"
        placeholder="E-mail"
        className="border px-6 py-1 "
        required:true
      />
      <input
        type="phone"
        placeholder="Phone"
        className="border px-6 py-1 "
        required:true
      />
      <input
        type="text"
        placeholder="Subject"
        className="border px-6 py-1 "
        required:true
      />
      <textarea
        name=""
        id=""
        placeholder="Message"
        className="border px-6 py-1 mb-8 border-gray-950 resize-none h-[8rem]"
        required:true
      ></textarea>
      <Button className=" text-center py-1 bg-[rgb(40,_59,_98)] hover:bg-[#A0A09F] text-white">
        send
      </Button>
    </form>
  );
};

export default Form;
