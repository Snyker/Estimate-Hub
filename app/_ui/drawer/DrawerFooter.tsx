import React, {HTMLAttributes, PropsWithChildren} from "react";

export const DrawerFooter: React.FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ children, className = '', ...props }) => {
    return (
        <div className={`drawer-footer ${className}`} {...props}>
            {children}
        </div>
    );
};
