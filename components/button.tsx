import {
  type ForwardedRef,
  forwardRef,
  ButtonHTMLAttributes,
} from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  children: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, children, ...rest }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        {...rest}
        className={`text-black font-arialBold font-bold uppercase px-4 py-1.5 ${
          variant === "primary"
            ? "bg-eu-yellow/90 hover:bg-eu-yellow/100"
            : "bg-white/90 hover:bg-white/100"
        } ${rest.className}`}
      >
        {children}
      </button>
    );
  }
);

export default Button;

Button.displayName = "Button";
