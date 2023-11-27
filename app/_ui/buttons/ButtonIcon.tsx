import React, {ButtonHTMLAttributes, PropsWithChildren} from "react";

export const ButtonIcon: React.FC<PropsWithChildren<ButtonIconProps>> = ({ children, className='', icon = (<></>), side = 'left', ...props}) => {
    return (
        <button type="button" className={`btn btn-rounded p-2 w-8 h-8 gap-2 ${className} ${side === 'left' ? 'flex-row' : 'flex-row-reverse'}`} {...props}>
            {icon && icon}
            {children}
        </button>
    );
};

export type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    side?: 'left' | 'right'
    icon?: React.ReactElement
}
