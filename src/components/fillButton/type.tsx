import { MouseEventHandler, ReactNode } from "react";

export interface FillButtonProps {
    children: ReactNode;
    type?: 'submit' | 'button';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    disabled?: boolean;
    borderColor?: string;
    textColor?: string;
    textSize?: string;
}