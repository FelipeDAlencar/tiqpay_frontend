import { MouseEventHandler, ReactNode } from "react";

export interface PrimaryButtonProps {
    children: ReactNode;
    type?: 'submit' | 'button';
    buttonstyle: 'primary' | 'secondary' | 'terciary';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    disabled?: boolean;
}