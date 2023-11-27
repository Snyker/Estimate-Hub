import React, {PropsWithChildren} from "react";
import {MenuListItem} from "@/app/_ui/menu/MenuListItem";

export const MenuSection: React.FC<PropsWithChildren<MenuSectionProps>> = ({ titleClass = '', title, className = '', children, ...props}) => {
    return (
        <div className={`menu-section px-4 py-2 ${className}`} {...props}>
            {
                typeof title !== 'string' ? title : (
                    <span className={`menu-title uppercase ${titleClass}`}>{title}</span>
                )
            }
            <MenuListItem>
                {children}
            </MenuListItem>
        </div>
    );
};

export type MenuSectionProps = React.HTMLAttributes<HTMLDivElement> & {
    title: string | React.ReactNode;
    titleClass?: string;
}
