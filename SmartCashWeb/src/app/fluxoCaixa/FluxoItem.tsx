"use client"
import DropDownActions from "@/components/DropDownActions";
import { destroy } from "../actions/fluxo/destroy";
import toast from "react-hot-toast";
    

interface FluxoItemProps {
    fluxo: Fluxo
}

export function FluxoItem({ fluxo }: FluxoItemProps) {

    function handleDelete() {
        toast.promise(
            destroy(fluxo.id),
            {
                loading: `apagando fluxo de caixa...`,
                success: "Fluxo registrado",
                error: "erro ao apagar fluxo",
            }
        );

    }



   
    return (
        <div className="flex justify-between p-2">
            <div className="flex items-center gap-2">
                <span>{fluxo.tipo}</span><p>,</p>
                <span>{fluxo.descricao}</span><p>,</p>
                <span>{fluxo.valor} reais</span><p>,</p>
                <span className="text-amber-500">{fluxo.data}</span>
            </div>
            <DropDownActions onDelete={handleDelete} />
        </div>
    )
}