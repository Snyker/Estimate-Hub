import React, {HTMLAttributes, PropsWithChildren} from "react";

export const DrawerBody: React.FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ children, className = '', ...props }) => {
    return (
        <div className={`drawer-content flex flex-col h-full ${className}`} {...props}>
            {children}
        </div>
    );
};
