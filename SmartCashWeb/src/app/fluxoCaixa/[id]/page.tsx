import { getById } from "@/app/actions/fluxo/get-by-id";
import NavBar from "@/components/NavBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";


export default async function EditarFluxo({params}: Params){
    const id = params.id

    const fluxo = await getById(id);
    return(
        <main>
            <NavBar active="fluxoCaixa"/>
            <p>{fluxo.descricao}</p>
            <EditForm {...fluxo}/>
            
        </main>
    )
}