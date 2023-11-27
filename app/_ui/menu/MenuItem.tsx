'use client'
import React, {cloneElement, PropsWithChildren, ReactElement} from "react";
import Link from "next/link";
import {Url} from "next/dist/shared/lib/router/router";
import {usePathname} from "next/navigation";

export const MenuItem: React.FC<PropsWithChildren<MenuItemProps>> = (
    {
        className = '',
        icon,
        name='',
        href = '',
        render,
        side = 'left',
        onClick = undefined,
        children,
        ...props}) => {

    const path = usePathname();

    if(render) {
        return render(path);
    }

    const isSamePath = href ? path.toLowerCase() === href.toLowerCase() : false;

    return (
        <li className={`menu-item ${isSamePath ? 'menu-active' : ''} ${className} ${side === 'right' ? 'flex-row-reverse' : ''}`} {...props}>
            {icon && cloneElement(icon, { width: 20, height: 20 })}
            {
                !onClick ? <Link className={'w-full'} href={href}>{name}</Link> : <span className={'w-full'} onClick={onClick}>{name}</span>
            }

        </li>
    );
};

export type MenuItemProps = React.HTMLAttributes<HTMLElement> & {
    icon?: React.ReactElement;
    side?: 'left' | 'right'
    name: string;
    href?: string;
    render?: (path: string) => React.ReactNode;
    onClick?: ((path: string) => void) | undefined;
}
