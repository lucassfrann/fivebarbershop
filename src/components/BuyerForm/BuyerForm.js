import { addDoc, collection, getFirestore } from "firebase/firestore";
import react from "react";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

export default function BuyerForm() {
    const {cart, finalPrice} = useContext(cartContext)
    const [name, setName] = useState("")
    const [adress, setAdress] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState(0)

    function nameChange(event) {
        setName(event.target.value)
    }
    function adressChange(event) {
        setAdress(event.target.value)
    }
    function emailChange(event) {
        setEmail(event.target.value)
    }
    function numberChange(event) {
        setNumber(event.target.value)
    }
  
    function submit(event) {
        event.preventDefault()

        const ordersCollection = collection(db, "orders")

        const newOrder = {
            name,
            adress,
            email,
            number,
            cart,
            finalPrice
        }

        addDoc(ordersCollection, newOrder)
    }

    return (
        <div className="form-conteiner">
            <form onSubmit={submit}className="form">
            <input value={name} onChange={nameChange} className="input-order" placeholder="Nombre completo"></input>
            <input value={adress} onChange={adressChange} className="input-order" placeholder="Direccion"></input>
            <input value={email} onChange={emailChange} className="input-order" placeholder="Email"></input>
            <input value={number} onChange={numberChange} className="input-order" placeholder="Telefono"></input>
            <button type="submit">Enviar</button>
            </form>
        </div>
    )
}