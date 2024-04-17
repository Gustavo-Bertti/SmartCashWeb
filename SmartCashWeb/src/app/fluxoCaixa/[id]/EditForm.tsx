"use client"

import { Button, Input } from "@nextui-org/react"

import Link from "next/link"
import { SubmitButton } from "@/components/SubmitButton"
import { useFormState } from "react-dom"
import { update } from "@/app/actions/fluxo/update";

export function EditForm(fluxo : Fluxo){
    const initialState = {
        message: ""
    }
    
    const [state, formAction] = useFormState(update, initialState)

    return (
        <form action={formAction} className="flex flex-col gap-4 bg-slate-900 p-6 m-6 rounded">
               <h2 className="text-2xl font-bold">Editar {fluxo.descricao}</h2>
                <input type="hidden" name="id" value={fluxo.id}></input>
                <input type="hidden" name="dataInclusao" value={fluxo.dataInclusao} />
                <Input 
                    name="tipo"
                    label="tipo"
                    labelPlacement="outside"
                    defaultValue={fluxo.tipo}
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                <Input 
                    name="valor"
                    label="valor"
                    labelPlacement="outside"
                    variant="bordered"
                    defaultValue={fluxo.valor.toString()}
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                   
                />
                <Input 
                    name="descricao"
                    label="descricao"
                    labelPlacement="outside"
                    variant="bordered"
                    defaultValue={fluxo.descricao}
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                



                <div className="flex justify-around">
                    <Link href="/fluxoCaixa">
                    <Button variant="bordered">cancelar</Button>
                    </Link>

                    <SubmitButton />
                </div>

            </form>
    )
}