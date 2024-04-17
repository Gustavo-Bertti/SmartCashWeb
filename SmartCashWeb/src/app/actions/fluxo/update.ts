"use server"
import { redirect } from "next/navigation"

interface ValidationError {
        tipo: string,
        valor: number,
        descricao: string,
        dataInclusao: string
    
}

export async function update(prevState: any, formData: FormData){
    await new Promise(r => setTimeout(r, 4000))
    const id = formData.get("id");
    const data = {
        nome: formData.get("nome"),
        tipo: formData.get("tipo"),
        valor:formData.get("valor"),
        descricao:formData.get("descricao"),
        dataInclusao:formData.get("dataInclusao")
    }

    const options = {
        method: "put",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(process.env.API_BASE_URL + "/fluxodecaixa/"+ id, options)

    if (resp.ok){
        redirect("/fluxoCaixa")
    }

    if (resp.status == 400){
        const data : ValidationError[] = await resp.json()
        return {
            message: data.find(erro=> erro.descricao == "descricao")?.descricao
            // message: data.find(erro=> erro.valor== "valor")?.valor
        }
    }

}