import React, {cloneElement, HTMLAttributes} from "react";
import {MdCategory} from "react-icons/md";
import {FaHourglass, FaMoneyBill1Wave} from "react-icons/fa6";
import {FaListAlt} from "react-icons/fa";

export const TextInfos: React.FC<TextInfosProps> = ({ className = '', icon, quantity=0, text, ...props}) => {
    return (
        <div className={`flex flex-row gap-1.5 text-sm text-content3 items-center ${className}`} {...props}>
            { icon && icon}
            { text && <span>{text}</span>}
            { quantity && <span>{quantity}</span>}
        </div>
    );
};

export type TextInfosProps = HTMLAttributes<HTMLDivElement> & {
    icon?: React.ReactElement;
    quantity?: string | number;
    text?: string;
    animate?: boolean;
}

export type QuantityInfosProps = Omit<TextInfosProps, "text" | "icon">;

export const ItemInfos: React.FC<TextInfosProps> = ({ className = '', animate = false,  quantity=0, icon=null,text, ...props}) => {
    return (
        <div className={`flex flex-row gap-1.5 text-sm border-t border-t-content3 py-3 px-2 justify-between items-center ${animate && 'cursor-pointer group hover:bg-backgroundSecondary active:bg-backgroundPrimary'} ${className}`} {...props}>
            { text && <span className={`text-content1 ${animate && 'transition ease-in-out group-hover:translate-x-1'}`}>{text}</span>}
            {
                icon ? cloneElement(icon, { size: 18 }) : quantity != null &&
                    <span className={'text-primary'}>{quantity}</span>
            }
        </div>
    );
};
export const TaskInfos: React.FC<QuantityInfosProps> = (props) => {
    return (
        <TextInfos icon={<FaListAlt />} text={"Tâches"} {...props} />
    );
};

export const FeatureInfos: React.FC<QuantityInfosProps> = (props) => {
    return (
        <TextInfos icon={<MdCategory />} text={"Fonctionnalitées"} {...props} />
    );
};

export const CostInfos: React.FC<QuantityInfosProps> = (props) => {
    return (
        <TextInfos icon={<FaMoneyBill1Wave />} text={"Coûts"} {...props} />
    );
};

export const TimeInfos: React.FC<QuantityInfosProps> = (props) => {
    return (
        <TextInfos icon={<FaHourglass />} text={"Temps estimé"} {...props} />
    );
};
