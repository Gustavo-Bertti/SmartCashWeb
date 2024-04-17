export async function getFluxoDeCaixas() {
    const resp = await fetch(process.env.API_BASE_URL + "/fluxodecaixa", { next: { revalidate: 0 } })
    return await resp.json()
}