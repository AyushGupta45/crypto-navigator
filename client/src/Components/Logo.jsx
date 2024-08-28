import React from "react";
import { TbCoinFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const LogoComponent = () => {
  return (
    <NavLink to="/" className="flex justify-center items-center gap-1">
      <div>
        <div className="self-center  whitespace-nowrap font-extrabold text-4xl text-white">
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">CRYPTO</span>{" "} NAVIGATOR
        </div>
        <p className="text-white text-center font-semibold">THE FUTURE OF FINANCE</p>
      </div>
    </NavLink>
  );
};

export default LogoComponent;
