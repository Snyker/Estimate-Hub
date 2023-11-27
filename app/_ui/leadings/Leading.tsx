import React, {DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from "react";

export const Leading1: React.FC<PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>> = ({children, className = '', ...props}) => {
    return (
        <h1 className={`text-4xl text-center my-4 ${className}`} {...props}>
            {children}
        </h1>
    );
};

export const Leading2: React.FC<PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>> = ({children, className = '', ...props}) => {
    return (
        <h2 className={`text-3xl text-center my-3.5 ${className}`} {...props}>
            {children}
        </h2>
    );
};

export const Leading3: React.FC<PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>> = ({children, className = '', ...props}) => {
    return (
        <h3 className={`text-2xl text-center my-3 ${className}`} {...props}>
            {children}
        </h3>
    );
};
