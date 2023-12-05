import React, {PropsWithChildren} from "react";

export const CardBody: React.FC<PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>> = ({className='',children,...props}) => {
    return (
        <div className={`card-body select-none ${className}`} {...props}>
            {children}
        </div>
    );
};
