import { useState, useEffect, createContext } from "react";
import axios from "axios";
import {toast} from 'react-toastify'
import { useRouter } from "next/router";

const QuiscoContext = createContext()

const QuiscoProvider = ({children}) =>{

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])

    const router = useRouter()

    const obtenerCategorias = async () => {
        try {
            const {data} = await axios('/api/categorias')
            setCategorias(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }
    const handleChangeModal = () => {
        setModal(!modal)
    }
    
    useEffect(()=>{
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = (id) =>{
        const categoriaClic =  categorias.filter(c => c.id === id)
        setCategoriaActual(categoriaClic[0])
        router.push('/')
    }

    const handleAgregarPedido = ({categoriaId, ...producto}) => { //remueve categoria del objeto producto

        if(pedido.some(productostate => productostate.id  === producto.id)){
            const pedidoActualizado = pedido.map(productostate => productostate.id === producto.id ? producto : productostate)
            setPedido(pedidoActualizado)
            toast.success('Pedido actualizado correctamente')
        }else{
            setPedido([...pedido, producto]) //Hago una copia de pedido actualmente y agrego el producto que me llega desde la función
            toast.success('Producto añadido correctamente.')
        }

        setModal(false)
    }

    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)
        setProducto(productoActualizar[0])
        setModal(!modal)
    }

    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id) //Saca el producto del objeto (solamente filtra a los ids diferentes)
        setPedido(pedidoActualizado)
    }


    return(
        <QuiscoContext.Provider
            value={{
                categorias,
                handleClickCategoria,
                categoriaActual,
                producto,
                handleSetProducto,
                handleChangeModal,
                modal,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProducto
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