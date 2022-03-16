import react from "react";
import './CartContent.css'
import { useContext, useEffect, useState, memo} from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const CartContent = () => {
    const {cart, removeProduct, clearCart, totalQuantity, finalPrice} = useContext(cartContext)

    return (
    <div>
    <h2 className="cart-title">Mi Carrito</h2>
    <div className="cart-content">
      {
        cart.map((product) => {
        return (
                <div className="product" key={product.id}>
                    <img src={product.image}/>
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    <p>x{product.quantity}</p>
                    <button className="button" id="remove" onClick={() => {removeProduct(product.id)}}>
                        Eliminar producto
                    </button>    
                </div>  
        )            
          })
      }
      <div className="finalprice"> Precio total : ${finalPrice}</div>
      <div className='cart-button'> 
        <Link to={'/endbuy'}>
        <button className="button" id="addtocart"> Terminar compra </button>
        </Link>
        <button className="button" id="remove" onClick={()=> {clearCart()}}>Vaciar carrito</button>
      </div>
    </div>
    </div>)
}



export default CartContent