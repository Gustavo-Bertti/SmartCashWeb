import NavBar from "@/components/NavBar"
import { FluxoItem } from "./FluxoItem";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { getFluxoDeCaixas } from "@/app/actions/fluxo/index";

export default async function Faturamento() {

  const fluxos : Array<Fluxo> = await getFluxoDeCaixas()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="fluxoCaixa"/>
     
      <section className="flex flex-col gap-2 bg-black mt-4 p-3 rounded min-w-[500px]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Faturamentos</h2>
          <Link href="/fluxoCaixa/new">
            <Button className="bg-amber-500" startContent={<Plus />}>
              Novo fluxo
            </Button>
          </Link>
        </div>

        {fluxos.map(fluxo => <FluxoItem fluxo={fluxo} /> )}

      </section>

    </main>
  );
}
