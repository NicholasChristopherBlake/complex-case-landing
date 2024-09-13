import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "send"
  | "accent"
  | "round"
  | "outlined"
  | "text"
  | "detailed"
  | "list";

export type ButtonAccentColor = "none" | "green" | "purple" | "blue";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  maxWidth?: boolean;
  accentColor?: ButtonAccentColor;
  size?: "sm" | "md" | "lg";
  addRight?: ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "send",
  children,
  accentColor = "none",
  addRight,
  className = "",
  ...props
}) => {
  const baseStyles =
    "text-primary-black flex items-center justify-center font-semibold rounded-full disabled:cursor-not-allowed disabled:bg-bg-disabled";

  const variantStyles: Record<ButtonVariant, string> = {
    send: "bg-accent1 py-[15px] px-[30px] w-full text-p3 hover:text-p2 focus:text-p2",
    accent: "gap-[20px] py-[15px] px-[30px] hover:px-[40px] hover:gap-[25px]",
    round: "py-0 px-0 hover:p-[2.5px]",
    outlined:
      "border border-primary-white text-primary-white py-[15px] px-[30px] gap-[20px] hover:px-[40px] hover:gap-[25px]",
    text: "py-0 px-0 text-primary-white gap-[20px] hover:gap-[25px]",
    detailed: "bg-primary-white py-[15px] px-[30px] hover:px-[40px]",
    list: "text-primary-white px-[20px] py-[10px] border-0 border-primary-white hover:border-1",
  };

  const accentColorStyles: Record<ButtonAccentColor, string> = {
    none: "",
    green: "bg-accent1 text-primary-black",
    purple: "bg-accent2 text-primary-white",
    blue: "text-primary-black text-accent3",
  };

  const buttonClasses = clsx(
    baseStyles,
    variantStyles[variant],
    accentColorStyles[accentColor],
    className
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
      {addRight && <span>{addRight}</span>}
    </button>
  );
};
