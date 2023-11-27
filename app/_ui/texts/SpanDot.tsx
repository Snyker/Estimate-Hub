import React, {HTMLProps, PropsWithChildren} from "react";

export const SpanDot: React.FC<PropsWithChildren<SpanDotProps>> = (
    {
        children,
        dotClass = 'dot',
        isValid = false,
        dotValidClass = 'dot-success',
        validClass = 'text-success',
        className = ''
    }) => {
    return (
        <p className={`text-xs text-gray-11 w-full ${className} ${isValid && validClass}`}><span className={`mr-2 ${dotClass} ${isValid && dotValidClass}`} />{children}</p>
    );
};

export type SpanDotProps = HTMLProps<HTMLParagraphElement> & {
    dotClass?: string;
    isValid?: boolean;
    dotValidClass?: string;
    validClass?: string;
}
