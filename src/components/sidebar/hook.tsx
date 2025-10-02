/*
import { useAppSelector } from "../../redux/hooks/hooks";
import { useAppDispatch } from "../../redux/store";
import { setShowPersonalizationModal } from "../../redux/features/general-slice";
import { setPersonalization, setPersonalizationSelectMaterials, setPersonalizationSelectMaterialsWithGtlf } from "../../redux/features/personalization-slice";
*/
export function useSideBarHook() {
    //const { showPersonalizationModal, showMenu } = useAppSelector(state => state.general);
    //const dispatch = useAppDispatch();



    const menu = [
        {
            group: 'PRINCIPAL',
            items: [
                { name: 'Home', link: '/' },
                { name: 'Empreendimentos', link: '/empreendimentos' },
                { name: 'Clientes', link: '/clientes' },
                { name: 'Personalizar', link: '/', onClick: () => { } },
            ]
        },
        {
            group: 'CONFIGURAÇÕES',
            items: [
                { name: 'Usuários', link: '/usuarios' },
                // {name: 'Materiais', link: ''},
                { name: 'Configurações', link: '/configuracoes' },
            ]
        }
    ];

    return {
        menu,
        //showPersonalizationModal,
        //showMenu
    }
}