import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-cetner items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
      {label}
      <img
        src={iconURL}
        alt="arrow right icon"
        className="m1-2 rounded-full w-5 h-5"
      ></img>
    </button>
  );
};

export default Button;
