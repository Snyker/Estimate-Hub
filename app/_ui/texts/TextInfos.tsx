import React, {HTMLAttributes} from "react";
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
}

export type QuantityInfosProps = Pick<TextInfosProps, "quantity">;

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
