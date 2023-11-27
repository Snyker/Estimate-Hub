import Link, {LinkProps} from "next/link";
import React, {PropsWithChildren} from "react";

export const Anchor: React.FC<PropsWithChildren<Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps>> = ({children, className = '', ...props}) => {
    return (
        <Link className={`link link-underline-hover link-primary text-sm ${className}`} {...props}>{children}</Link>
    );
};
