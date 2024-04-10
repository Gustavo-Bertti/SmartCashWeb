import DropDownActions from "@/components/DropDownActions";

    

interface FluxoCaixaProps {
    fluxo : {
        id: number,
        tipo: string,
        valor: number,
        descricao: string,
        data: string
    }
}

export function FluxoItem({ fluxo }: FluxoCaixaProps) {
   
    return (
        <div className="flex justify-between p-2">
            <div className="flex items-center gap-2">
                <span>{fluxo.tipo}</span><p>,</p>
                <span>{fluxo.descricao}</span><p>,</p>
                <span>{fluxo.valor} reais</span><p>,</p>
                <span className="text-amber-500">{fluxo.data}</span>
            </div>
            <DropDownActions />
        </div>
    )
}