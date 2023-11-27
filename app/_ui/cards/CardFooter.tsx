import React, {PropsWithChildren} from "react";

export const CardFooter: React.FC<PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>> = ({className='flex-col items-start',children,...props}) => {
    return (
        <div className={`card-footer ${className}`} {...props}>
            {children}
        </div>
    );
};
