import Layout from "@/layout/Layout"
import useQuisco from "@/hooks/useQuisco"
import ResumenProducto from "@/components/ResumenProducto"

export default function Resumen(){
    const {pedido} = useQuisco()
    return(
        <Layout pagina={'Resumen'}>
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-2xl my-10">Revisa tu pedido</p>

            {pedido.length === 0 ?(
                <p className="text-center text-2xl">No hay elementos en tu pedido</p>
            ): (
                pedido.map(p =>(
                    <ResumenProducto key={p.id} productoPedido={p}/>
                ))
            )}
        </Layout>
    )
}