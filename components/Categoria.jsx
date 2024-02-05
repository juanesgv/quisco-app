import React from 'react'
import Image from 'next/image'
import useQuisco from '@/hooks/useQuisco'

const Categoria = ({ categoria }) => {
    
    const {handleClickCategoria, categoriaActual} = useQuisco()
    const {nombre, icono, id} = categoria
    return (
        <div className={`${categoriaActual?.id === id ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
            <Image
                width={50}
                height={50}
                src={`/assets/img/icono_${icono}.svg`}
                alt='Imagen icono'
            />  

            <button type='button' className='text-2xl font-bold hover:cursor-pointer'
                    onClick={() => handleClickCategoria(id)}
            >
                {nombre}
            </button>
        </div>
    )
}

export default Categoria
