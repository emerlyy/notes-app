import clsx from "clsx";
import React, {
  ChangeEvent,
  FormEvent,
  InputHTMLAttributes,
  SVGProps,
} from "react";
import Button, { ButtonProps } from "../Button/Button";
import Text from "../Text/Text";
import "./RadioGroup.css";

type FormElements<T extends string> = Record<T, RadioNodeList> &
  HTMLFormControlsCollection;
interface UsernameFormElement<T extends string> extends HTMLFormElement {
  elements: FormElements<T>;
}

type RadioGroupProps<T extends string> = {
  name: string;
  className?: string;
  onChange?: (value: T) => void;
  onSubmit?: (value: T) => void;
  children: React.ReactNode;
};

function RadioGroupComponent<T extends string>({
  name,
  className,
  onChange,
  onSubmit,
  children,
}: RadioGroupProps<T>) {
  const hangleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as T;
    if (onChange) onChange(value);
  };

  const handleSubmit = (
    e: FormEvent<UsernameFormElement<RadioGroupProps<T>["name"]>>
  ) => {
    e.preventDefault();
    const elements = e.currentTarget.elements;
    const inputs = elements[name];
    const value = inputs.value as T;
    if (onSubmit) onSubmit(value);
  };

  return (
    <form className={clsx("radio-group", className)} onSubmit={handleSubmit}>
      {React.Children.map(children, (child) =>
        // @ts-expect-error passing props to a chilren
        React.cloneElement(child, { name, onChange: hangleChange })
      )}
    </form>
  );
}

type RadioGroupItemProps<T extends string = string> = {
  value: T;
  icon?: React.ReactElement<SVGProps<SVGSVGElement>>;
  label: string;
  description: string;
} & InputHTMLAttributes<HTMLInputElement>;

const RadioGroupItem = function <T extends string>({
  id,
  icon,
  label,
  description,
  ...rest
}: RadioGroupItemProps<T>) {
  return (
    <label className="radio">
      <div className="radio__content">
        {icon && (
          <div className="radio__icon-wrapper">
            {React.cloneElement(icon, { width: 24, height: 24 })}
          </div>
        )}
        <div className="radio__info">
          <Text tag="h3" size="regular" weight="medium" color="text-secondary">
            {label}
          </Text>
          <Text tag="p" size="small" color="text-primary">
            {description}
          </Text>
        </div>
      </div>
      <input id={id} type="radio" {...rest} />
    </label>
  );
};

const RadioGroupButton = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <Button className={clsx("radio-group__button", className)} {...rest}>
      {children}
    </Button>
  );
};

const RadioGroup = Object.assign(RadioGroupComponent, {
  Item: RadioGroupItem,
  Button: RadioGroupButton,
});

export default RadioGroup;
