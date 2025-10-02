import { ExportButtonProps } from "./type";

export const ExportButtonComponent = (props: ExportButtonProps) => {
    return (
        <button
            {...props}
            className={`
                flex px-3 py-2 justify-center bg-black-100  gap-4 text-[16px] font-semibold rounded-[4px] items-center border border-neutral-200 cursor-pointer
                text-[#212121]
                
                
            `}
        >
            <div className="flex flex-nowrap text-nowrap gap-2">
                {props.children}
            </div>
        </button>
    );
}