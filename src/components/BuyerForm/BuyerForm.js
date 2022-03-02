import react from "react";
import { useEffect } from "react/cjs/react.production.min";

export default function BuyerForm() {
    useEffect (() => {
        console.log('me renderizo soy el Buyer')
    }
    )
    return (
        <div>
            <form>
            <input placeholder="Nombre completo"></input>
            <input placeholder="Direccion"></input>
            <input placeholder="Email"></input>
            <input placeholder="Telefono"></input>
            </form>
        </div>
    )
}