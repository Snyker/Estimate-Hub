'use client'
import React, {PropsWithChildren, useRef} from "react";
import {DrawerHook} from "@/app/_hooks/drawer.hook";

const classBySide = (side: Side) => {
    switch (side) {
        case "bottom":
            return 'drawer-bottom';
        case "right":
            return 'drawer-right';
        case 'top':
            return 'drawer-top';
        default:
            return ''
    }
}

export const Drawer: React.FC<PropsWithChildren<DrawerProps>> = (
    {
        drawer,
        children,
        side = "left",
        className = '',
        stopClose = false,
        open = false,
        ...props
    }) => {

    return (
        <div>
            <input type="checkbox" id={drawer.drawerId} className="drawer-toggle" ref={drawer.inputDrawerRef} />
            <label className="overlay" htmlFor={stopClose ? '' : drawer.drawerId}></label>
            <div className={`drawer w-fit max-w-screen-lg ${classBySide(side)} ${className}`} {...props}>
                {children}
            </div>
        </div>
    );
};

type Side = 'left' | 'top' | 'right' | 'bottom';

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> & {
    drawer: DrawerHook;
    side?: Side;
    stopClose?: boolean;
    open?: boolean;
}
