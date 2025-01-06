import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
}
export const Button = ({
  children,
  loading,
  disabled,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      title=""
      disabled={disabled || loading}
      className={clsx(
        "bg-[#31DEF4] rounded-md disabled:opacity-25 text-gray-700 text-sm disabled:border-neutral-200 shadow-md disabled:cursor-not-allowed justify-center inline-flex font-medium px-4 py-2.5 items-center hover:opacity-70 transition-opacity",
        className
      )}
    >
      {children}
    </button>
  );
};
