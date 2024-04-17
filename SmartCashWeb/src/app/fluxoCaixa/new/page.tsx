"use client"
import { create } from "@/app/actions/fluxo/create";
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import {  Button,Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";


const initialState = {
    message: ""
}

export default function FormFluxo(){
    const [state, formAction] = useFormState(create, initialState)

    return(
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="home"/>

            <form action={formAction} className="flex flex-col gap-4 bg-slate-900 p-6 m-6 rounded">
                <h2 className="text-2xl font-bold">Cadastrar fluxo de caixa</h2>

                <Input 
                    name="tipo"
                    label="tipo"
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                 <Input 
                    name="valor"
                    label="valor"
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                 <Input 
                    name="descricao"
                    label="descricao"
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                 

                

                <div className="flex justify-around">
                    <Link href="/faturamento">
                    <Button variant="bordered">cancelar</Button>
                    </Link>

                    <SubmitButton />
                </div>

            </form>
        </main>
    )
}