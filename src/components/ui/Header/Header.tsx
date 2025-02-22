import clsx from "clsx";
import Link from "next/link";
import Search from "../../Search/Search";
import { IconSettings } from "../icons";
import Title from "../Title/Title";
import "./Header.css";

type Props = {
  title?: string;
  className?: string;
};

const Header = ({ title, className }: Props) => {
  return (
    <header className={clsx("header", className)}>
      <div>
        {title && (
          <Title size="large" color="text-primary">
            {title}
          </Title>
        )}
      </div>
      <div className="header__right">
        <Search className="header__search" />
        <Link href="/settings">
          <IconSettings width={24} height={24} className="color_light" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
