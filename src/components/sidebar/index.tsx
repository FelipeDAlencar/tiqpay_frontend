import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Settings, ChevronDown, ChartColumn, Ticket, CreditCard, Archive, Users, MessageSquare, ChartSpline, Building, MessageCircleQuestionMark } from "lucide-react";

//import { Tooltip } from "@material-tailwind/react"; // Opcional para tooltips

// Tipo atualizado: icon agora é opcional
type MenuItem = {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    subItems?: MenuItem[];
};

export const SidebarComponent = () => {
    //const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    const menuItems: MenuItem[] = [
        {

            label: "Dashboard",
            icon: <Home size={20} />,
            onClick: () => {
                if (location.pathname !== "/home") {
                    navigate("/home")
                }
            },
        },
        {
            label: "Análise de Vendas",
            icon: <ChartColumn size={20} />,
            onClick: () => alert("Clicou em Profile"),
        },
        {
            label: "Vouchers",
            icon: <Ticket size={20} />,

        },
        {
            label: "Maquininhas",
            icon: <CreditCard size={20} />,
            onClick: () => alert("Clicou em Logout"),
        },
        {
            label: "Filiais",
            icon: <Archive size={20} />,
            onClick: () => alert("Clicou em Logout"),
        },
        {
            label: "Franquias",
            icon: <Archive size={20} />,
            onClick: () => alert("Clicou em Logout"),
        },
        {
            label: "Usuários",
            icon: <Users size={20} />,
            onClick: () => alert("Clicou em Logout"),
        },
        {
            label: "Pesquisas",
            icon: <MessageSquare size={20} />,
            onClick: () => alert("Clicou em Logout"),
        },
        {
            label: "Métricas",
            icon: <ChartSpline size={20} />,
            onClick: () => alert("Clicou em Logout"),
        },
        {
            label: "Perfil da empresa",
            icon: <Building size={20} />,
            onClick: () => alert("Clicou em Logout"),
        },
        {
            label: "Configurações",
            icon: <Settings size={20} />,
            onClick: () => alert("Clicou em Logout"),
        },
        {
            label: "Suporte IA",
            icon: <MessageCircleQuestionMark size={20} />,
            onClick: () => alert("Clicou em Logout"),
        },

    ];

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`bg-sky text-black h-screen p-5 pt-8 relative duration-300 }`}
            >
                {/* Botão para abrir/fechar 
                <button
                    className="absolute -right-3 top-9 w-6 h-6 bg-white text-gray-800 rounded-full flex items-center justify-center cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "<" : ">"}
                </button>
                */}
                {/* Logo */}
                <div className="flex items-center gap-x-4">
                    <span className={`text-2xl font-bold text-[#4067e6] w-24 justify-center text-Color-fill-brand  brand leading-snug`}>TiqPay</span>
                </div>

                {/* Menu */}
                <ul className="pt-6">

                    {menuItems.map((item) => (

                        <div>
                            {item.label === "Dashboard" && <div className="greymenu12w600 mb-3" >
                                PRINCIPAL
                            </div>}
                            {item.label === "Vouchers" && <div className="greymenu12w600 mb-3" >
                                GESTÃO
                            </div>}
                            {item.label === "Pesquisas" && <div className="greymenu12w600 mb-3" >
                                FEEDBACK
                            </div>}
                            {item.label === "Perfil da empresa" && <div className="greymenu12w600 mb-3" >
                                CONFIGURAÇÕES
                            </div>}
                            <li key={item.label} className="mb-1">
                                <div
                                    className="flex items-center gap-x-4 p-2 hover:bg-[#4772FF] hover:text-white text-black rounded-md cursor-pointer select-none"
                                    onClick={() => {
                                        if (item.subItems) {
                                            setOpenSubMenu(openSubMenu === item.label ? null : item.label);
                                        } else if (item.onClick) {
                                            item.onClick();
                                        }
                                    }}
                                >
                                    {/* Ícone, só renderiza se existir */}
                                    <div className={`origin-left duration-200`}>
                                        {item.icon && item.icon}
                                    </div>

                                    {/* Texto */}
                                    <span className={`origin-left duration-200`}>
                                        {item.label}
                                    </span>

                                    {/* Setinha de sub-menu */}
                                    {item.subItems && (
                                        <ChevronDown
                                            size={16}
                                            className={`ml-auto transition-transform duration-200 ${openSubMenu === item.label ? "rotate-180" : ""
                                                }`}
                                        />
                                    )}

                                    {/* Tooltip quando colapsado */}

                                </div>

                                {/* Sub-items */}
                                {item.subItems && openSubMenu === item.label && (
                                    <ul className="pl-10 mt-1">
                                        {item.subItems.map((sub) => (
                                            <li
                                                key={sub.label}
                                                className="p-2 hover:bg-gray-700 rounded-md cursor-pointer"
                                                onClick={sub.onClick}
                                            >
                                                {sub.label}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {item.label === "Suporte IA" && <div className="cursor-pointer">
                                    <div className="mt-6 pl-2">
                                        Precisa de ajuda?
                                    </div>
                                    <div className="mb-6 pl-2 greymenu12w600">
                                        Nossa IA está disponível 24/7
                                    </div>
                                </div>}

                            </li>

                        </div>

                    ))}
                </ul>
                <div
                    className="mb-6 text-gray-50"
                >
                    aa
                </div>

            </div>

            {/* Conteúdo principal 
            <div className="p-7 flex-1 h-screen bg-gray-100">
                <h1 className="text-2xl font-semibold">Conteúdo Principal</h1>
            </div>
            */}


        </div>
    );
};

