import { SidebarComponent } from ".";
import { Outlet } from "react-router-dom";

export const LayoutComponent = () => {
    return (
        <div className="flex">
            {/* Sidebar fixa */}
            <SidebarComponent />

            {/* Área dinâmica */}
            <main className="flex-1 p-7 bg-sky">
                <Outlet /> {/* Aqui o React Router injeta a rota atual */}
            </main>
        </div>
    );
};

