import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

type ButtonVariant = "default" | "outlined";
type ButtonColor = "primary" | "secondary";

export type ButtonProps = {
  variant?: ButtonVariant;
  color?: ButtonColor;
  className?: string;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = "default",
  color = "primary",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "button",
        `button_${variant}`,
        `button_${color}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
