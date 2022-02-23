import react from "react";
import './CartWidget.css'
import Cart from '../../assets/images/Cart.png'
import { Link } from "react-router-dom";

export default function CartWidget() {
    return (
        <div >
            <Link to={'/cart'}>
            <img id='cart-image' src={Cart}/>
            </Link>
        </div>
    )
}