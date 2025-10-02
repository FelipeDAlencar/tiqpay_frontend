//import { useNavigate } from "react-router-dom";

import { BasePageProps } from "./type"


export const BasePageComponent = (props: BasePageProps) => {

    return (
        <div className="flex flex-col">
            <div className="mb-4 text-stone-900 text-xl font-semibold font-['Inter'] leading-normal">{props.title}</div>
            <div className="flex flex-col gap-2">
                {props.children}
            </div>
        </div>
    )
}