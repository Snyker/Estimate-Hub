import React, {HTMLAttributes, PropsWithChildren} from "react";

export const Summary: React.FC<PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>> = ({ className = '', children, ...props}) => {
    return (
        <p className={`text-content2 text-sm text-ellipsis overflow-hidden line-clamp-3 ${className}`} {...props}>
            {children}
        </p>
    );
};
