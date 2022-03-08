import { addDoc, collection, getFirestore } from "firebase/firestore";
import react from "react";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import './BuyerForm.css'
import { Link } from "react-router-dom";

export default function BuyerForm() {
    const {cart, finalPrice, clearCart} = useContext(cartContext)
    const [name, setName] = useState("")
    const [adress, setAdress] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState(0)
    const [finish, setFinish] = useState(false)
    const [idOrder, setidOrder] = useState()

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
        .then(doc => {
            console.log("logrado", doc.id)
            clearCart()
            setFinish(true)
            setidOrder(doc.id)
        }
        )
        .catch(error => {
            console.log(error)
        });

    }

    return (
        <div className="main-container">
            { 
             !finish ? <div>{cart.map((product) => {
                return (
                    <>
                        <h1>Finaliza tu compra</h1>
                        <div className="product" key={product.id}>
                            <img src={product.image}/>
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                            <p>x{product.quantity}</p>   
                            <p>{finalPrice}</p>
                        </div>
                      
                    </>  
                ) 
                }) }     
                <div className="form-conteiner">
                <form onSubmit={submit}className="form">
                <input value={name} required onChange={nameChange} className="input-order" placeholder="Nombre completo"></input>
                <input value={adress} required onChange={adressChange} className="input-order" placeholder="Direccion"></input>
                <input value={email} required onChange={emailChange} className="input-order" placeholder="Email"></input>
                <input value={number} required onChange={numberChange} className="input-order" placeholder="Telefono"></input>
                <button type="submit">Enviar</button>
                </form>
                </div>      
                </div>             
                  
                  : 
                  <div>
                  <label> Compra finalizada, Muchas gracias por elegirnos</label> 
                  <p> El id de su compra es {idOrder}</p>
                  <Link to={'/'}>
                  <a>Volver al inicio</a>
                  </Link>
                  </div>
            }
        </div>
    )
}


