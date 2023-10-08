import React from "react";

const Button = ({ buttons }) => {
  return (
    <div className="flex">
      {buttons.map((button) => {
        return (
          <div className="px-5 py-2 m-2 bg-gray-200 rounded-lg" key={button}>
            {button}
          </div>
        );
      })}
    </div>
  );
};

export default Button;
