import { BackButtonProps } from "./type";
import { ArrowLeft } from "lucide-react";

export const BackButtonComponent = (props: BackButtonProps) => {
    return (
        <button
            {...props}
            className="text-black hover:text-gray-900 cursor-pointer"
        >
            <ArrowLeft size={20} />
        </button>
    );
}

