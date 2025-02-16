import clsx from "clsx";
import { HTMLElementType, ReactNode } from "react";
import "./List.css";

type ListDirection = "row" | "column";
type ListWrap = "wrap" | "nowrap";
type Props = {
  tag?: HTMLElementType;
  direction?: ListDirection;
  wrap?: ListWrap;
  className?: string;
  gap?: number;
  children?: ReactNode;
};

const List = ({
  tag = "div",
  direction = "row",
  wrap = "nowrap",
  gap = 0,
  className,
  children,
}: Props) => {
  const Tag = tag;
  return (
    <Tag
      className={clsx("list", `list_${direction}`, className, {
        list_wrap: wrap === "wrap",
      })}
      style={{ gap }}
    >
      {children}
    </Tag>
  );
};

export default List;
