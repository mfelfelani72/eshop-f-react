/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconOutlineArrowRight15 } from "../icons/IconOutlineArrowRight15";
import { IconOutlineCheckCircle3 } from "../icons/IconOutlineCheckCircle3";

export const Button = ({
  state,
  type,
  className,
  visible = true,
  text = "Get Started Now",
  visible1 = true,
  divClassName,
}) => {
  return (
    <button
      className={`all-[unset] box-border inline-flex items-center gap-[10px] justify-center relative ${
        ["border", "small"].includes(type) ? "border-[1.5px] border-solid" : ""
      } ${
        state === "normal" && ["border", "small"].includes(type)
          ? "border-[#2b2e23]"
          : state === "hover" && ["border", "small"].includes(type)
          ? "border-template-colorprimary"
          : ""
      } ${state === "hover" && ["primary", "secondary"].includes(type) ? "shadow-shadow-01" : ""} ${
        type === "small"
          ? "px-[24px] py-[12px]"
          : type === "link" && state === "normal"
          ? "px-0 py-[2px]"
          : type === "link" && state === "hover"
          ? "px-0 py-[4px]"
          : "px-[32px] py-[20px]"
      } ${["border", "primary", "secondary", "small"].includes(type) ? "rounded-[118px]" : ""} ${
        type === "primary" ? "bg-template-colorprimary" : type === "secondary" ? "bg-template-colorsecondary" : ""
      } ${className}`}
    >
      {visible && (
        <IconOutlineCheckCircle3
          className="!relative !w-[16px] !h-[16px]"
          color={
            ["primary", "secondary"].includes(type)
              ? "white"
              : state === "hover" && ["border", "small"].includes(type)
              ? "#ED5700"
              : "#182226"
          }
        />
      )}

      <div
        className={`font-body-16px-bold w-fit tracking-[var(--body-16px-bold-letter-spacing)] text-[length:var(--body-16px-bold-font-size)] [font-style:var(--body-16px-bold-font-style)] font-[number:var(--body-16px-bold-font-weight)] text-right whitespace-nowrap leading-[var(--body-16px-bold-line-height)] relative ${
          type === "border" || type === "small" || (state === "hover" && type === "link")
            ? "mt-[-1.50px]"
            : "mt-[-1.00px]"
        } ${
          ["primary", "secondary"].includes(type)
            ? "text-white"
            : state === "hover" && ["border", "small"].includes(type)
            ? "text-template-colorprimary"
            : "text-[#172126]"
        } ${divClassName}`}
      >
        {text}
      </div>
      {visible1 && (
        <IconOutlineArrowRight15
          className="!relative !w-[16px] !h-[16px]"
          color={
            ["primary", "secondary"].includes(type)
              ? "white"
              : state === "hover" && ["border", "small"].includes(type)
              ? "#ED5700"
              : "#182226"
          }
        />
      )}
    </button>
  );
};
