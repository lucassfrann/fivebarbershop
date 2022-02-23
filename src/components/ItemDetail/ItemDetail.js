import react from "react";
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

export default function ItemDetail({product}) {

    const [quantity, setQuantity] = useState(0)
    const {addToCart} = useContext(cartContext)

    function onAddProduct(quantity) {
        console.log(quantity)
        setQuantity(quantity)
        addToCart(quantity, product)
    }

    return (
        <div>
            <p className="product-title">{product.title}</p>
            <p className="product-brand">{product.brand}</p>
            <img className="product-img" src={product.image}/>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>
            {
                quantity <= 0?
                <ItemCount key={product.id} stock={10} initial={1} onAddProduct={onAddProduct}/> 
                :
                <Link to={'/cart'}> Ir al carrito</Link>           
            }
        </div>
    )
}