import clsx from "clsx";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import "./Input.css";
type Props = {
  className?: string;
  icon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, icon, ...props }, ref) => {
    return (
      <label className={clsx("input", className)}>
        {icon && <div className="input__icon">{icon}</div>}
        <input ref={ref} {...props} type="text" className="input__field" />
      </label>
    );
  }
);
Input.displayName = "Input";

export default Input;
