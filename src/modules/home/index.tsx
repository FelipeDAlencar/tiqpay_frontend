//import { useNavigate } from "react-router-dom";

import { BasePageComponent } from "../../components/basePage"
import { CardFeedbackComponent } from "../../components/cardFeedback";
import { CardGraphComponent } from "../../components/cardGraph";
import { CardHomeComponent } from "../../components/cardHome"
import { ChartColumn, Ticket, MessageSquare, Star } from "lucide-react";
import { CardSuggestedActionsComponent } from "../../components/cardSuggestedActions";

export const HomePage = () => {
    //const hook = useLoginModalHook();
    // const navigate = useNavigate();
    return (
        <BasePageComponent title="Dashboard">
            <div className="mb-4 flex gap-4">
                <CardHomeComponent title="Vendas totais" subtext="+20% em relação ao período anterior" value="R$45.231,89" icon={<ChartColumn size={16} color="#212121" />} />
                <CardHomeComponent title="Vouchers resgatados" subtext="+180.1% em relação ao período anterior" value="+573" icon={<Ticket size={16} color="#212121" />} />
                <CardHomeComponent title="Pesquisas respondidas" subtext="+12% em relação ao período anterior" value="324" icon={<MessageSquare size={16} color="#212121" />} />
                <CardHomeComponent title="Satisfação média" subtext="+2.5% em relação ao período anterior" value="92%" icon={<Star size={16} color="#212121" />} />
            </div>
            <div className="mb-4 flex gap-4">
                <CardGraphComponent />
                <CardFeedbackComponent title="Feedback recente" subtitle="Últimas avaliações dos usuários" />
            </div>
            <div className="mb-4">
                <CardSuggestedActionsComponent title="Ações sugeridas" subtitle="Baseado nos dados coletados" />
            </div>
        </BasePageComponent>
    )
}