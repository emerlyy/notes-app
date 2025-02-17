'use client'

import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";
import Card from "../Card/Card";
import Text from "../Text/Text";
import { IconChevronRight } from "../icons";

import { usePathname } from "next/navigation";
import "./ListCard.css";

type ListCardButtonProps = {
  icon?: React.ReactNode;
  text: string;
  isActive?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ListCardButton = ({
  icon,
  text,
  isActive,
  ...rest
}: ListCardButtonProps) => {
  return (
    <Card
      as="button"
      variant="list"
      className={clsx({ "list-card_active": isActive })}
      {...rest}
    >
      {icon}
      <Text weight="medium">{text}</Text>
      {isActive && (
        <span className="list-card__chevron">
          <IconChevronRight width={20} height={20} />
        </span>
      )}
    </Card>
  );
};

type ListCardLinkProps = {
  icon?: React.ReactNode;
  text: string;
  href: string;
};

const ListCardLink = ({ icon, text, href }: ListCardLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Card
      as="link"
      variant="list"
      href={href}
      className={clsx({ "list-card_active": isActive })}
    >
      {icon}
      <Text weight="medium">{text}</Text>
      {isActive && (
        <span className="list-card__chevron">
          <IconChevronRight width={20} height={20} />
        </span>
      )}
    </Card>
  );
};

const ListCard = {
  Link: ListCardLink,
  Button: ListCardButton,
};

export default ListCard;
