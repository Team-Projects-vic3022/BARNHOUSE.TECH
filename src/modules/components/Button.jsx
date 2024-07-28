import React from "react";

const Button = ({ children, func, className }) => {
  const buttonFunction = (e) => e.preventDefault;
  return (
    <button onClick={func || buttonFunction} className={className}>
      {children}
    </button>
  );
};

export default Button;
