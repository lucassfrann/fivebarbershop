import react from "react";
import './CartWidget.css'
import Cart from '../../images/Cart.png'

export default function CartWidget() {
    return (
        <div className="product-navbar">
            <img id='cart-image' src={Cart}/>
        </div>
    )
}