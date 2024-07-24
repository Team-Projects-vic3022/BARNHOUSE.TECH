import React from "react";

const Button = ({ children, func, className }) => {
  return (
    <button onClick={func} className={className}>
      {children}
    </button>
  );
};

export default Button;
