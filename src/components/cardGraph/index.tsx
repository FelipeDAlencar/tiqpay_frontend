import { ExportButtonComponent } from "../exportButton";
import { CardGrapProps } from "./type"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const CardGraphComponent = (props: CardGrapProps) => {
    const data = [
        { name: '01/12', value: 6000 },
        { name: '02/12', value: 4500 },
        { name: '03/12', value: 3000 },
        { name: '04/12', value: 1500 },
        { name: '05/12', value: 1500 },
        { name: '06/12', value: 1500 },
        { name: '07/12', value: 1500 },
    ];


    return (
        <div data-property-1="Default" className="w-1/2 h-96 px-6 py-4 rounded-lg shadow-md outline-offset-[-0.50px] outline-Color-stroke-Minimal inline-flex flex-col justify-start items-end gap-1 border border-[#E0E0E0]">
            <div className="self-stretch inline-flex justify-end items-center gap-1">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch inline-flex justify-start items-center gap-1">
                        <div className="w-56 justify-center black16w600">Vendas por aproximação</div>
                    </div>
                    <div className="self-stretch justify-center black16w500 leading-snug">R$45.231,89</div>
                </div>
                <ExportButtonComponent>
                    <div className="text-xs text-[#212121]">Exportar relatório</div>
                </ExportButtonComponent>
            </div>
            <div className="self-stretch justify-center text-neutral-500 text-xs font-medium font-['Inter'] leading-none">+20% em relação ao período anterior</div>
            <div className="w-lg h-80 inline-flex justify-start items-center">
                <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={data} margin={{ top: 15, right: 20, left: 0, bottom: 0 }} >
                        <XAxis dataKey="name" tick={{ fill: "#777777", fontSize: 12, fontWeight: 600, textAnchor: "end" }} />
                        <YAxis tick={{ fill: "#777777", fontSize: 12, fontWeight: 600, textAnchor: "end" }} tickFormatter={(value) => `R$ ${value}`} />
                        <Tooltip formatter={(value: number) => `R$ ${value}`} />
                        <Line type="monotone" dataKey="value" stroke="#4067e6" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}