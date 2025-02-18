import clsx from "clsx";
import "./Badge.css";
type Props = {
  label: string;
  className?: string;
};

const Badge = ({ label, className }: Props) => {
  return <div className={clsx("badge", className)}>{label}</div>;
};

export default Badge;
