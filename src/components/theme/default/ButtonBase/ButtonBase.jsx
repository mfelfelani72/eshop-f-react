/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconOutlineArrowRight15 } from "../../icons/IconOutlineArrowRight15";
import { IconOutlineArrowRight9 } from "../../icons/IconOutlineArrowRight9";
import { IconOutlineCheck1 } from "../../icons/IconOutlineCheck1";

export const ButtonBase = ({
  showRightIcon = true,
  showLeftIcon = true,
  buttonText = "Button",
  size,
  type,
  state,
  borderRadius,
  className,
  divClassName,
}) => {
  return (
    <button
      className={`all-[unset] box-border inline-flex items-center gap-[10px] justify-center relative ${
        type === "secondary" ? "border-[1.5px] border-solid" : "border border-solid"
      } ${
        state === "default" && type === "primary"
          ? "border-primarymain"
          : type === "primary" && state === "hover"
          ? "border-primaryhover"
          : state === "focused" && ["large", "small"].includes(size) && (size === "large" || type === "primary")
          ? "border-blue-600"
          : state === "hover" && type === "secondary" && ["full", "none"].includes(borderRadius)
          ? "border-neutral-07"
          : type === "secondary" && size === "small" && state === "focused"
          ? "border-blue-800"
          : "border-neutral-03"
      } ${
        type === "primary" && state === "disabled" && borderRadius === "none" && size === "large"
          ? "px-[25px] py-[18px]"
          : size === "small"
          ? "px-[20px] py-[15px]"
          : "px-[24px] py-[18px]"
      } ${borderRadius === "full" ? "rounded-[50px]" : borderRadius === "eight-px" ? "rounded-[8px]" : ""} ${
        state === "default" && type === "primary"
          ? "bg-primarymain"
          : type === "primary" && state === "hover"
          ? "bg-primaryhover"
          : type === "primary" && state === "focused"
          ? "bg-primaryfocus"
          : type === "primary" && state === "disabled"
          ? "bg-neutral-03"
          : type === "secondary" && state === "focused"
          ? "bg-primaryborder"
          : type === "secondary" && state === "disabled"
          ? "bg-neutral-01"
          : ""
      } ${className}`}
    >
      {showLeftIcon && (
        <IconOutlineCheck1
          className="!relative !w-[16px] !h-[16px]"
          color={
            type === "secondary" && ["default", "hover"].includes(state)
              ? "black"
              : type === "secondary" && state === "focused"
              ? "#1E40AF"
              : type === "secondary" && state === "disabled"
              ? "#CBD5E1"
              : type === "primary" && state === "disabled" && size === "small"
              ? "white"
              : "#F9FAFB"
          }
        />
      )}

      <div
        className={`w-fit text-right whitespace-nowrap relative ${
          size === "large"
            ? "font-body-16px-medium"
            : state === "default" && type === "primary" && size === "small" && borderRadius === "none"
            ? "font-body-14px-bold"
            : "font-body-14px-medium"
        } ${
          (borderRadius === "eight-px" && state === "hover" && type === "primary") ||
          (borderRadius === "full" && size === "small" && state === "default" && type === "primary") ||
          (borderRadius === "full" && state === "hover" && type === "primary") ||
          (borderRadius === "none" && size === "large" && state === "hover" && type === "primary") ||
          (size === "large" && state === "default" && type === "primary") ||
          (state === "disabled" && type === "primary") ||
          (state === "focused" && type === "primary")
            ? "mt-[-1.00px]"
            : (borderRadius === "full" && size === "small" && state === "default" && type === "secondary") ||
              (size === "large" && state === "default" && type === "secondary") ||
              (state === "disabled" && type === "secondary") ||
              (state === "focused" && type === "secondary") ||
              (state === "hover" && type === "secondary")
            ? "mt-[-1.50px]"
            : (borderRadius === "eight-px" && size === "small" && state === "default" && type === "secondary") ||
              (borderRadius === "none" && size === "small" && state === "default" && type === "secondary")
            ? "mt-[-0.19px]"
            : ""
        } ${
          size === "large"
            ? "tracking-[var(--body-16px-medium-letter-spacing)]"
            : state === "default" && type === "primary" && size === "small" && borderRadius === "none"
            ? "tracking-[var(--body-14px-bold-letter-spacing)]"
            : "tracking-[var(--body-14px-medium-letter-spacing)]"
        } ${
          size === "large"
            ? "text-[length:var(--body-16px-medium-font-size)]"
            : state === "default" && type === "primary" && size === "small" && borderRadius === "none"
            ? "text-[length:var(--body-14px-bold-font-size)]"
            : "text-[length:var(--body-14px-medium-font-size)]"
        } ${
          size === "large"
            ? "[font-style:var(--body-16px-medium-font-style)]"
            : state === "default" && type === "primary" && size === "small" && borderRadius === "none"
            ? "[font-style:var(--body-14px-bold-font-style)]"
            : "[font-style:var(--body-14px-medium-font-style)]"
        } ${
          type === "secondary" && ["default", "hover"].includes(state)
            ? "text-neutral-07"
            : type === "secondary" && state === "focused"
            ? "text-blue-800"
            : type === "secondary" && state === "disabled"
            ? "text-slate-300"
            : state === "default" && type === "primary" && size === "small" && borderRadius === "none"
            ? "text-neutral-01"
            : type === "primary" && state === "disabled" && size === "small"
            ? "text-base-000"
            : "text-white"
        } ${
          size === "large"
            ? "font-[number:var(--body-16px-medium-font-weight)]"
            : state === "default" && type === "primary" && size === "small" && borderRadius === "none"
            ? "font-[number:var(--body-14px-bold-font-weight)]"
            : "font-[number:var(--body-14px-medium-font-weight)]"
        } ${
          size === "large"
            ? "leading-[var(--body-16px-medium-line-height)]"
            : state === "default" && type === "primary" && size === "small" && borderRadius === "none"
            ? "leading-[var(--body-14px-bold-line-height)]"
            : "leading-[var(--body-14px-medium-line-height)]"
        } ${divClassName}`}
      >
        {buttonText}
      </div>
      {showRightIcon && (
        <>
          <>
            {((borderRadius === "eight-px" && state === "default") ||
              (borderRadius === "none" && state === "default") ||
              (borderRadius === "none" && state === "hover" && type === "primary")) && (
              <IconOutlineArrowRight9
                className="!relative !w-[22.63px] !h-[22.63px]"
                color={type === "secondary" ? "black" : "#F9FAFB"}
              />
            )}

            {((borderRadius === "eight-px" && state === "hover" && type === "primary") ||
              (borderRadius === "full" && state === "default") ||
              (borderRadius === "full" && state === "hover" && type === "primary") ||
              state === "disabled" ||
              state === "focused" ||
              (state === "hover" && type === "secondary")) && (
              <IconOutlineArrowRight15
                className="!relative !w-[16px] !h-[16px]"
                color={
                  type === "secondary" && ["default", "hover"].includes(state)
                    ? "black"
                    : type === "secondary" && state === "focused"
                    ? "#1E40AF"
                    : type === "secondary" && state === "disabled"
                    ? "#CBD5E1"
                    : type === "primary" && state === "disabled" && size === "small"
                    ? "white"
                    : "#F9FAFB"
                }
              />
            )}
          </>
        </>
      )}
    </button>
  );
};
