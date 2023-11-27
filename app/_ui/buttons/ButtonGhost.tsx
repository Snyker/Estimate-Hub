import React, {ButtonHTMLAttributes, PropsWithChildren} from "react";

export const ButtonGhost: React.FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({ children, className= '', ...props}) => {
    return (
        <button className={`btn btn-ghost ${className}`} type={'button'} {...props}>
            {children}
        </button>
    );
};
