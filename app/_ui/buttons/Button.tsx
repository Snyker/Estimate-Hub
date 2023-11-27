import React, {ButtonHTMLAttributes, PropsWithChildren} from "react";

export const Button: React.FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({ children, className = '', ...props}) => {
    return (
        <button type="button" className={`btn btn-primary ${className}`} {...props}>{children}</button>
    );
};
