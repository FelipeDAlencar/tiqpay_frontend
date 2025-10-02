import { FeedbackItemComponent } from "../feedbackItem"
import { CardFeedbackProps } from "./type"

export const CardFeedbackComponent = (props: CardFeedbackProps) => {

    return (
        <div data-property-1="Default" className="w-1/2 h-96 px-6 py-4 rounded-lg shadow-md outline-offset-[-0.50px] outline-Color-stroke-Minimal inline-flex flex-col justify-start items-end gap-1 border border-[#E0E0E0]">
            <div className="self-stretch inline-flex justify-end items-center gap-1">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch inline-flex justify-start items-center gap-1">
                        <div className="w-56 justify-center black16w600">{props.title}</div>
                    </div>
                </div>
            </div>
            <div className="mb-3 self-stretch justify-center greymenu12w500 leading-none">Últimas avaliações dos usuários</div>
            <div className="w-full">
                <FeedbackItemComponent author="Felipe Alencar" content="Ótimo atendimento, ambiente impecável!" assessment={5} createAt="Há 2 horas" />
                <FeedbackItemComponent author="Felipe Alencar" content="Ótimo atendimento, ambiente impecável!" assessment={5} createAt="Há 2 horas" />
                <FeedbackItemComponent author="Felipe Alencar" content="Ótimo atendimento, ambiente impecável!" assessment={5} createAt="Há 2 horas" />

            </div>
        </div>
    )
}