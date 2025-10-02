import { CardHomeProps } from "./type"


export const CardHomeComponent = (props: CardHomeProps) => {

    return (
        <div className="p-4 rounded-lg shadow-md outline-offset-[-0.50px] outline-Color-stroke-Minimal inline-flex flex-col justify-start items-end gap-1 border border-[#E0E0E0]">
            <div className="self-stretch inline-flex justify-between items-center">
                <div className="justify-between greymenu12w500 font-['Inter']">{props.title}</div>

                <div>
                    {props.icon}

                </div>

            </div>
            <div className="self-stretch justify-center black16w500">{props.value}</div>
            <div className="self-stretch justify-center  greymenu12w500">{props.subtext}</div>
        </div>
    )
}