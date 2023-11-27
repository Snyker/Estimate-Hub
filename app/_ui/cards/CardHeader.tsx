import React, {PropsWithChildren} from "react";

export const CardHeader: React.FC<PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>> = ({className='',children,...props}) => {
    return (
        <div className={`card-header justify-start gap-4 ${className}`} {...props}>
            {children}
        </div>
    );
};
