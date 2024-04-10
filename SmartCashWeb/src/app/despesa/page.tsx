import NavBar from "@/components/NavBar"
import { FluxoItem } from "./FluxoItem";
import { Button } from "@nextui-org/button";

export default function Despesas() {

  const fluxos = [
    {
        "id": 1,
        "tipo": "SAIDA",
        "valor": 5000.00,
        "descricao": "Folha de pagamento",
        "data": "01/04/2024"
    },
    {
      "id": 2,
        "tipo": "SAIDA",
        "valor": 300.00,
        "descricao": "Conta de água",
        "data": "01/04/2024"
    },
    {
      "id": 3,
        "tipo": "SAIDA",
        "valor": 500.00,
        "descricao": "Conta de luz",
        "data": "01/04/2024"
    },
  ]


  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="despesa" />
     
      <section className="flex flex-col gap-2 bg-black mt-4 p-3 rounded min-w-[500px]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Despesas</h2>
          <Button>nova despesa</Button>
        </div>

        {fluxos.map(fluxo => <FluxoItem fluxo={fluxo} /> )}

      </section>

    </main>
  );
}
