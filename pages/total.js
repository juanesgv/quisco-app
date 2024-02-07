import Layout from "@/layout/Layout"
import { useEffect, useCallback } from "react"
import useQuisco from "@/hooks/useQuisco"
import { formatearDinero } from '../helpers'


export default function Total(){

    const {pedido, nombre, setNombre, colocarOrden, total} = useQuisco()

    const comprobarFormulario = useCallback(() => { 
        return pedido.length === 0 || nombre === '' || nombre.length < 3;
    }, [pedido, nombre])

    useEffect (() =>{
        comprobarFormulario()
    },[pedido])

    

    return(
        <Layout pagina={'Total y confirmar pedido'}>
            <h1 className="text-4xl font-black">Total y confirmar pedido</h1>
            <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

            <form onSubmit={colocarOrden}>
                <div>
                    <label className="block uppercase text-slate-800 font-bold text-xl" htmlFor="nombre">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                        value={nombre}
                        onChange={(e)=> setNombre(e.target.value)}
                    />
                </div>

                <div className="mt-10 text-2xl">
                    <p>Total a pagar: {''} <span className="font-bold">{formatearDinero(total)}</span></p>
                </div>

                <div className="mt-5">
                    <input
                        className= {`${comprobarFormulario() ? 'bg-indigo-100' : `bg-indigo-600 hover:bg-indigo-800`} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white  text-center`} 
                        value={"Confirmar pedido"}
                        type="submit"
                        disabled= {comprobarFormulario()}
                    />
                </div>
            </form>
        </Layout>
    )
}