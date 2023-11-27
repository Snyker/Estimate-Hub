import React, {HTMLAttributes, PropsWithChildren} from "react";

export const CardList: React.FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ className='', children, ...props}) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 ${className}`} {...props}>
            {children}
        </div>
    );
};

