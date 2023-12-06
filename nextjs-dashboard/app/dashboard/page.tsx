import { fetchRevenue } from "../lib/data";

export default async function DashboardPage() {
    const revenue = await fetchRevenue();
    console.log("revenue", revenue);
    return <p>Esta pagina es el contenido del dashboard</p>
}