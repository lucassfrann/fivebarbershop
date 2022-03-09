import './CartWidget.css'
import Cart from '../../assets/images/Cart.png'
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import {useContext} from "react"

export default function CartWidget() {
    const {totalQuantity, cart} = useContext(cartContext)
    return (
        <div >  
                <Link to={'/cart'}>
                <div className='cartwidget'>
                <img id='cart-image' src={Cart}/>
                <p>{totalQuantity}</p>
                </div>
                </Link>        
        </div>
    )
}