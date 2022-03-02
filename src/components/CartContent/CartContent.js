import react from "react";
import './CartContent.css'
import { useContext, useEffect, useState, memo} from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import BuyerForm from "../BuyerForm/BuyerForm";

const CartContent = memo(() => {
    const {cart, removeProduct, clearCart, totalQuantity} = useContext(cartContext)
    const [finalprice, setFinalPrice] = useState(0)

    useEffect(() => {
      let totalprice = cart.map(product => product.price * product.quantity).reduce((a, b) => a + b, 0)
      setFinalPrice(totalprice)
      console.log('me renderizo')  
    },[cart])

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
                    <button onClick={() => {removeProduct(product.id)}}>
                        Eliminar producto
                    </button>    
                </div>  
        )            
          })
      }
      <div className="finalprice"> Precio total : {finalprice}</div>
      <div className="quantityProducts">{totalQuantity}</div>
      <div className='cart-button'> 
        <button> Terminar compra </button>
        <button onClick={()=> {clearCart()}}>Vaciar carrito</button>
      </div>
    </div>
    </div>)
}, (oldProp, newProp) => oldProp.cart.length === newProp.cart.length)

export default CartContent