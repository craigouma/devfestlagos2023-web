import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from "react";
import { classNames } from "@/utils/classNames";
import ArrowRight from "@/images/arrow-right-bg-light.svg";

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant: "primary" | "secondary" | "tertiary";
};

const Button: FC<PropsWithChildren<Props>> = ({ children, variant, ...props }) => {
  return (
    <button {...props} className={classNames("c-button", `c-button--${variant}`, props.className)}>
      {children}
    </button>
  );
};

export const PrimaryButton: FC<PropsWithChildren<Omit<Props, "variant">>> = (props) => {
  return <Button {...props} variant='primary' />;
};

export const SecondaryButton: FC<PropsWithChildren<Omit<Props, "variant">>> = (props) => {
  return <Button {...props} variant='secondary' />;
};

export const TertiaryButton: FC<PropsWithChildren<Omit<Props, "variant">>> = (props) => {
  return (
    <Button {...props} variant='tertiary'>
      <span>{props.children}</span>
      <ArrowRight />
    </Button>
  );
};

export default Button;
