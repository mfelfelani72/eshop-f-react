/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const OriginalLogo = ({ type, className, divClassName, text = "Cuisine", hasHotFood = true }) => {
  return (
    <div className={`w-[137px] h-[29px] relative ${className}`}>
      <div
        className={`[font-family:'Playfair_Display',Helvetica] left-[31px] italic tracking-[-0.30px] text-[32px] font-semibold leading-[22px] whitespace-nowrap absolute ${
          type === "dark" ? "top-px" : "top-[2px]"
        } ${type === "dark" ? "text-[#dbdfd0]" : "text-template-colorsecondary"} ${divClassName}`}
      >
        {text}
      </div>
      {hasHotFood && (
        <img
          className="w-[28px] left-0 top-0 h-[28px] absolute"
          alt="Hot food"
          src={
            type === "dark"
              ? "https://c.animaapp.com/nDFk6xrj/img/hot-food-1.svg"
              : "https://c.animaapp.com/nDFk6xrj/img/hot-food-1-1.svg"
          }
        />
      )}
    </div>
  );
};
