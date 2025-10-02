import { CardSuggestedActionItemComponent } from "../cardSuggestedActionItem"
import { CardSuggestedActionsProps } from "./type"
import { TrendingUp } from "lucide-react";


export const CardSuggestedActionsComponent = (props: CardSuggestedActionsProps) => {

    return (
        <div data-property-1="Default" className="w-full px-6 py-4 rounded-lg shadow-md outline-offset-[-0.50px] outline-Color-stroke-Minimal inline-flex flex-col justify-start items-end gap-1 border border-[#E0E0E0]">
            <div className="self-stretch inline-flex justify-end items-center gap-1">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch inline-flex justify-start items-center gap-1">
                        <div className="w-56 justify-center black16w600">{props.title}</div>
                    </div>
                </div>
            </div>
            <div className="mb-4 self-stretch justify-center greymenu12w500 leading-none">Últimas avaliações dos usuários</div>
            <div className="w-full flex gap-5">
                <CardSuggestedActionItemComponent title="Oportunidade de crescimento" subtitle="Aumento de 25% nos pagamentos por aproximação" value="25%" icon={<TrendingUp size={16} color=" #26BC7D" />} />
                <CardSuggestedActionItemComponent title="Oportunidade de crescimento" subtitle="Aumento de 25% nos pagamentos por aproximação" value="25%" icon={<TrendingUp size={16} color=" #26BC7D" />} />
                <CardSuggestedActionItemComponent title="Oportunidade de crescimento" subtitle="Aumento de 25% nos pagamentos por aproximação" value="25%" icon={<TrendingUp size={16} color=" #26BC7D" />} />
                <CardSuggestedActionItemComponent title="Oportunidade de crescimento" subtitle="Aumento de 25% nos pagamentos por aproximação" value="25%" icon={<TrendingUp size={16} color=" #26BC7D" />} />


            </div>
        </div>
    )
}