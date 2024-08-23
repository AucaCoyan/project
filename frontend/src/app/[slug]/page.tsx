import Card from "@/components/cards"
import Error from "../error";


type Pedido = {
    apellido: string
}

const pedido = {
    usuario: "auca",
    carrito: ["jabon", "shampoo", "detergente"],
    precio: 1000.00
}
const listaDeMesas = ["1","2","3","4","5","6","7","8"]

export default function Page({ params }: { params: { slug: string } }) {
    if (listaDeMesas.includes(params.slug)) {
        return <><h1>Estas dentro la mesa: {params.slug}</h1></>
    }
    return (<>
    <div>
    No existe la mesa: {params.slug} </div>
    
    {/* <Error></Error> */}
    </>
    )
  }