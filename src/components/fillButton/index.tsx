import { FillButtonProps } from "./type";

export const FillButtonComponent = (props: FillButtonProps) => {
    console.log(props.borderColor !== null)
    return (
        <button
            {...props}
            className={`
                flex pt-2 pb-2  w-full justify-center bg-black-100  gap-4 font-semibold rounded-[4px] items-center border ${props.borderColor != null ? `border-[${props.borderColor}]` : "border-[#4772FF]"
                } cursor-pointer
                ${props.textColor != null ? `text-[${props.textColor}]` : "text-[#4772FF]"
                }
                ${props.textSize != null ? `text-[${props.textSize}]` : "text-[16px]"
                }
                ${props.disabled && '!bg-[#cecece]'}
                ${props.className}
                
            `}
        >
            <div className="flex flex-nowrap text-nowrap gap-2">
                {props.children}
            </div>
        </button>
    );
}

/*
 ${props.buttonstyle === 'primary' ? 'bg-[#4772FF] border border-[#4772FF] text-sky-50' : props.buttonstyle === 'terciary' ?
                    'bg-gray-700 !text-black-500 border border-black-500' :
                    props.buttonstyle === 'secondary' ?
                        'bg-[#4E4535] border border-[#4E4535]' :
                        ''
                }
*/