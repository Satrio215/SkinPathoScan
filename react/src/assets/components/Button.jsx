import React from "react";
import clsx from "clsx";
import Ripples from "react-ripples";

const Button = ({
    variant = "primary",
    isLoading = false,
    fullWidth = false,
    className,
    children,
    ...props
}) => {
    const variants = {
        primary: "text-white bg-[#1E3A8A] hover:bg-[#162c65]",
        outline:
            "text-[#1E3A8A] bg-white border border-[#1E3A8A] hover:bg-[#e0e7ff]",
    };

    const baseClass = clsx(
        "inline-flex items-center justify-center rounded-lg px-6 py-3 font-poppins font-semibold text-2xl leading-none transition duration-300 ease-in-out",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variant && variants[variant],
        fullWidth ? "w-full" : "w-fit",
        className,
    );

    const buttonContent = (
        <button className={baseClass} disabled={isLoading} {...props}>
            {isLoading ? "Please wait..." : children}
        </button>
    );

    return (
        <Ripples
            during={1000}
            color="rgba(30, 58, 138, 0.9)"
            className={
                fullWidth ? "w-full rounded-lg" : "inline-block rounded-lg"
            }
        >
            {buttonContent}
        </Ripples>
    );
};

export default Button;
