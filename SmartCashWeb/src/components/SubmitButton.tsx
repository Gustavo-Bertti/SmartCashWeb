"use client"
import { Button } from "@nextui-org/button";
import { useFormStatus } from "react-dom";

export function SubmitButton(){
    const { pending } = useFormStatus()
    return (
        <Button className="bg-amber-500" type="submit"  isLoading={pending}>
            salvar
        </Button>
    )
}