import {Card} from "@/app/_ui/cards/Card";
import {CardBody} from "@/app/_ui/cards/CardBody";
import {FaPlus} from "react-icons/fa6";
import {CardHeader} from "@/app/_ui/cards/CardHeader";
import React from "react";

export const CardAdd: React.FC<CardAddProps> = ({ title, onClick }) => {
    return (
        <Card onClick={onClick}>
            <CardBody className={'h-full justify-center items-center'}>
                <CardHeader className={'text-center'}>
                    <span>{title}</span>
                </CardHeader>
                <FaPlus size={64}/>
            </CardBody>
        </Card>
    );
};

export type CardAddProps = {
    title: string;
    onClick?: (() => void) | undefined;
}
