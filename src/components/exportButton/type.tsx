import { MouseEventHandler, ReactNode } from "react";

export interface ExportButtonProps {
    children: ReactNode;
    label?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}