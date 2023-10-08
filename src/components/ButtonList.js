import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const ButtonList = [
    "All",
    "Live",
    "Music",
    "Film Critics",
    "JavaScript",
    "History",
    "Mixes",
    "Cooking",
  ];

  return (
    <div className="flex">
      <Button buttons={ButtonList} />
    </div>
  );
};

export default ButtonList;
