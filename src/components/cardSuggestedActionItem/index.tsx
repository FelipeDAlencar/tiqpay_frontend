import { FillButtonComponent } from "../fillButton"
import { CardSuggestedActionItemProps } from "./type"


export const CardSuggestedActionItemComponent = (props: CardSuggestedActionItemProps) => {

    return (
        <div className="p-4 rounded-lg shadow-md outline-offset-[-0.50px] inline-flex flex-col justify-start items-end gap-1 border border-[#E0E0E0]">
            <div className="self-stretch inline-flex justify-between items-center">
                <div className="justify-between blackfeddback12w500">{props.title}</div>

                <div>
                    {props.icon}

                </div>

            </div>
            <div className="self-stretch justify-center green16w600">{props.value}</div>
            <div className="mb-4 self-stretch justify-center greyfeedback12w500">{props.subtitle}</div>
            <FillButtonComponent borderColor="#E0E0E0" textColor="#1D1D1D" textSize="12px">Criar voucher promocional</FillButtonComponent>
        </div>
    )
}