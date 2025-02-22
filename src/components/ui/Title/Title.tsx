import clsx from "clsx";
import { HTMLElementType, ReactNode } from "react";
import { TextColor, TextWeight } from "../../../types";
import "./Title.css";

type TitleSize = "large" | "small";

type Props = {
  tag?: HTMLElementType;
  size?: TitleSize;
  color?: TextColor;
  weight?: TextWeight;
  className?: string;
  children?: ReactNode;
};

const Title = ({
  tag = "h2",
  size = "small",
  color = "text-primary",
  weight = "bold",
  className,
  children,
}: Props) => {
  const Tag = tag;
  return (
    <Tag
      className={clsx(
        "title",
        `title_${size}`,
        `color_${color}`,
        `weight_${weight}`,
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Title;
