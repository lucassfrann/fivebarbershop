import react from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import './Cart.css'


export default function Cart() {
    const {cart, removeProduct, clearCart} = useContext(cartContext)
    return(
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
                        <button onClick={() => {removeProduct(product.id)}}>
                            Eliminar producto
                        </button>    
                    </div>   
                  )         
              })
          }
          <button onClick={()=> {clearCart()}}>Vaciar carrito</button>
        </div>
        </div>
    )


}