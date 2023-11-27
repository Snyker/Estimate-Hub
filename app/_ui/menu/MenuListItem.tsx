'use client'
import React, {Children, cloneElement, JSXElementConstructor, PropsWithChildren, ReactElement, useId} from "react";
import {usePathname} from "next/navigation";
import {FaAngleLeft} from "react-icons/fa6";

export const MenuListItem: React.FC<PropsWithChildren<MenuListItemProps>> = (
    {
        className = '',
        collapse = false,
        name = '',
        children,
        ...props}) => {

    if(collapse) {
        const id = useId();
        const path = usePathname();

        const hasPathInChild = () => {
            return Children.toArray(children)
                .filter((child) => path.toLowerCase() === (child as ReactElement).props?.name.toLowerCase()).length > 0;
        }

        return (
                <li>
                    <input type="checkbox" id={id} className="menu-toggle" />
                    <label className={`menu-item justify-between ${hasPathInChild() ? 'menu-active' : ''}`} htmlFor={id}>
                        <span>{name}</span>
                        <span className="menu-icon">
                            <FaAngleLeft />
                        </span>
                    </label>

                    <div className="menu-item-collapse">
                        <ul className="menu-items min-h-0 mt-1.5">
                            {
                                Children.map(children, (child) => cloneElement(child as ReactElement, { className: 'ml-6'}))
                            }
                        </ul>
                    </div>
                </li>
            )
    }

    return (
        <ul className={`menu-items ${className}`} {...props}>
            {children}
        </ul>
    );
};

export type MenuListItemProps = React.HTMLAttributes<HTMLUListElement> & {
    collapse?: boolean;
    name?: string;
}
