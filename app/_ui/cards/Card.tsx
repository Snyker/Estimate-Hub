import React, {PropsWithChildren} from "react";

export const Card: React.FC<PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>> = ({className='',children,...props}) => {
    return (
        <div className={`card max-w-none hover:scale-105 active:scale-95 hover:bg-gray-5 transition ease-in-out cursor-pointer ${className}`} {...props}>
            {children}
        </div>
    );
};
