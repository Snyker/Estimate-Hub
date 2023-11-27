import React, {HTMLAttributes, PropsWithChildren} from "react";

export const DrawerHeader: React.FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ children, className = '', ...props }) => {
    return (
        <div className={`drawer-header ${className}`} {...props}>
            {children}
        </div>
    );
};
