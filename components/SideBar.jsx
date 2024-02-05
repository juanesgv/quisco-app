import Image from "next/image"
import useQuisco from "@/hooks/useQuisco"
import Categoria from "./Categoria"

const SideBar = () => {

    const {categorias} = useQuisco()

    return (
        <>  
            <div className="flex items-center justify-center">
                <Image
                    width={125}
                    height={125}
                    src="/assets/img/logo.svg"
                    alt="imagen logotipo"
                />
            </div>

            <nav className="mt-8">
                {
                    categorias.map(c => (
                        <Categoria key={c.id}  categoria={c}/>
                    ))
                }
            </nav>

        </>
    )
}

export default SideBar
