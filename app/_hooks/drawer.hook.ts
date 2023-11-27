'use client'
import { useRef, useState} from "react";

export function createDrawer(drawerId: string): DrawerHook {
    const [open, setOpen] = useState(false);
    const inputDrawerRef = useRef<HTMLInputElement>();

    const openDrawer = () => {
        if(inputDrawerRef.current) {
            inputDrawerRef.current?.click();
            setOpen(true);
        }
    }

    const closeDrawer = () => {
        if(inputDrawerRef.current) {
            inputDrawerRef.current?.click();
            setOpen(false);
        }
    }

    return { open, openDrawer, closeDrawer, drawerId, inputDrawerRef };
}

export type DrawerHook = {
    open: boolean;
    drawerId: string;
    openDrawer: () => void;
    closeDrawer: () => void;
    inputDrawerRef: any;
}
