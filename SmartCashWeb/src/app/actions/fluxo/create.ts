"use server"
import { redirect } from "next/navigation"

interface ValidationError {
        tipo: string,
        valor: number,
        descricao: string,
        data: string
    
}

export async function create(prevState: any, formData: FormData){
    await new Promise(r => setTimeout(r, 4000))

    const data = {
        nome: formData.get("nome"),
        icone: formData.get("icone")
    }

    const options = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(process.env.API_BASE_URL + "/fluxodecaixa", options)

    if (resp.ok){
        redirect("/faturamento")
    }

    if (resp.status == 400){
        const data : ValidationError[] = await resp.json()
        return {
            message: data.find(erro=> erro.descricao == "descricao")?.descricao
            // message: data.find(erro=> erro.valor== "valor")?.valor
        }
    }

}