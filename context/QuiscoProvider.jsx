import { useState, useEffect, createContext } from "react";
import axios from "axios";

const QuiscoContext = createContext()

const QuiscoProvider = ({children}) =>{

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})

    const obtenerCategorias = async () => {
        try {
            const {data} = await axios('/api/categorias')
            setCategorias(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
        console.log(categoriaActual)
    }, [categorias])

    const handleClickCategoria = (id) =>{
        const categoriaClic =  categorias.filter(c => c.id === id)
        setCategoriaActual(categoriaClic[0])
    }

    return(
        <QuiscoContext.Provider
            value={{
                categorias,
                handleClickCategoria,
                categoriaActual,
            }}
        >
            {children}
        </QuiscoContext.Provider>
    )
} 

export {
    QuiscoProvider
}
export default QuiscoContext