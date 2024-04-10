import NavBar from "@/components/NavBar"
import { FluxoItem } from "../despesa/FluxoItem";
import { Button } from "@nextui-org/button";

export default function Faturamentos() {

  const fluxos = [
    {
        "id": 1,
        "tipo": "ENTRADA",
        "valor": 5000.00,
        "descricao": "Venda de produtos",
        "data": "01/04/2024"
    },
    {
      "id": 2,
        "tipo": "ENTRADA",
        "valor": 500.00,
        "descricao": "Aluguel de equipamentos",
        "data": "01/04/2024"
    },
    {
      "id": 3,
        "tipo": "ENTRADA",
        "valor": 1000.00,
        "descricao": "Venda de produtos",
        "data": "01/04/2024"
    },
  ]


  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="faturamento" />
     
      <section className="flex flex-col gap-2 bg-black mt-4 p-3 rounded min-w-[500px]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Faturamentos</h2>
          <Button>novo faturamento</Button>
        </div>

        {fluxos.map(fluxo => <FluxoItem fluxo={fluxo} /> )}

      </section>

    </main>
  );
}
