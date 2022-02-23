import react from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";
import CartContent from "../CartContent/CartContent";
import './Cart.css'


export default function Cart() {
    const {cart, removeProduct, clearCart} = useContext(cartContext)
    
    return(
        <div>
          {cart.length > 0 ? (
              <CartContent cart={cart}/>
          ) : (
              <p>No hay productos</p>
          )      
          }          
        </div>  
    )


}