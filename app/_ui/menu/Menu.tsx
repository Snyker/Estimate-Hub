import React, {Children, PropsWithChildren} from "react";

export const Menu: React.FC<PropsWithChildren<React.HTMLAttributes<HTMLElement>>> = ({ className = '', children, ...props}) => {
    return (
        <nav className={`menu rounded-md ${className}`} {...props}>
            {
                Children.map(children, (child, index) => {
                    const childrens: any[] = [child];
                    if(index < Children.count(children) - 1)
                        childrens.push(<div className={'divider my-0'}></div>);
                    return childrens.flat();
                })
            }
        </nav>
    );
};
