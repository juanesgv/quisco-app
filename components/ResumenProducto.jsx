import React from 'react'
import Image from 'next/image'
import { formatearDinero } from '../helpers'
import useQuisco from '@/hooks/useQuisco'

const ResumenProducto = ({ productoPedido }) => {

    const {handleEditarCantidad, handleEliminarProducto} = useQuisco()

    return (
        <div className='shadow p-5 mb-3 flex gap-10 items-center'>
            <div className='md:w-1/6'>
                <Image
                    width={300}
                    height={400}
                    alt={`Imagen productoPedido ${productoPedido.imagen}`}
                    src={`/assets/img/${productoPedido.imagen}.jpg`}
                />
            </div>

            <div className='md:w-4/6'>
                <p className='text-3xl font-bold'>{productoPedido.nombre}</p>
                <p className='text-xl font-bold mt-2'>Cantidad: {productoPedido.cantidad}</p>
                <p className='text-xl font-bold mt-2 text-amber-500'>Precio: {formatearDinero(productoPedido.precio)}</p>
                <p className='mt-2 text-sm text-gray-700'>Subtotal: {formatearDinero(productoPedido.precio * productoPedido.cantidad)}</p>
            </div>

            <div>
                <button 
                    type='button' 
                    className='bg-sky-700 flex px-5 py-2 text-white rounded font-bold uppercase shadow-md w-full gap-2'
                    onClick={() => handleEditarCantidad(productoPedido.id)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
                    </svg>
                    Editar
                </button>
                <button 
                    type='button' 
                    className='bg-red-700 flex px-5 py-2 text-white rounded font-bold uppercase shadow-md w-full mt-5 gap-2'
                    onClick={()=> handleEliminarProducto(productoPedido.id)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                    </svg>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default ResumenProducto
