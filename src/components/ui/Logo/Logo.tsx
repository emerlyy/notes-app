import Image from "next/image";
import "./Logo.css";

const Logo = () => {
  return (
    <Image className="logo" src="/logo.svg" alt="" width={95} height={28} />
  );
};

export default Logo;
