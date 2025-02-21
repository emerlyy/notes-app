import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import "./Card.css";

type CardVariant = "regular" | "list";

type BaseProps = {
  variant?: CardVariant;
  className?: string;
  children: ReactNode;
};

type CardAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
  };

type CardAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as: "link";
  };

export type CardProps = CardAsButton | CardAsLink;

// {
//   type = "button",
//   variant = "regular",
//   className,
//   children,
//   ...props
// }

const Card = (props: CardProps) => {
  if (props.as === "link") {
    // eslint-disable-next-line
    const { variant = "regular", className, children, as, ...rest } = props;
    return (
      <Link
        className={clsx("card", className, {
          card_list: variant === "list",
        })}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { variant = "regular", className, children, ...rest } = props;
  return (
    <button
      className={clsx("card", className, {
        card_list: variant === "list",
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Card;
