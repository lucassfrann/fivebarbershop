import react from "react";
import './CartWidget.css'
import Cart from '../../assets/images/Cart.png'

export default function CartWidget() {
    return (
        <div >
            <img id='cart-image' src={Cart}/>
        </div>
    )
}