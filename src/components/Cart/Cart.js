import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import CartContent from "../CartContent/CartContent";
import './Cart.css'
import addcart from '../../assets/images/addcart.png'

export default function Cart() {
    const {cart} = useContext(cartContext)
    
    return(
        <div>
          {cart.length > 0 ? (
              <CartContent cart={cart}/>
          ) : 
                <div className="alert">
                    <h1>No agregaste ningun producto al carrito!</h1>
                    <div>
                    <img src={addcart}/>
                    </div>
                    <div>
                    <Link to="/" className="alert-button">Volver al inicio</Link> 
                    </div>
                </div>    
          }          
        </div>  
    )


}