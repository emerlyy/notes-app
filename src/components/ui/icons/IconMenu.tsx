import type { SVGProps } from "react";
const SvgIconMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 16.762c-.695 0-1.262.565-1.262 1.26a1.262 1.262 0 0 0 2.523 0c0-.695-.566-1.26-1.26-1.26Zm0-6.022c-.695 0-1.262.565-1.262 1.261a1.262 1.262 0 0 0 2.523 0c0-.696-.566-1.26-1.26-1.26Zm0-3.5c.695 0 1.261-.565 1.261-1.261a1.262 1.262 0 0 0-2.523 0c0 .696.567 1.26 1.262 1.26Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconMenu;
