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
        setQuantity(quantity)
        addToCart(quantity, product)
    }

    return (
        <div className="detail-container">
            <img className="product-img" src={product.image}/> 
                <div className="info-container">
                <h1>{product.title}</h1>
                <p className="product-brand">{product.brand}</p>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                {
                quantity <= 0?
                <ItemCount key={product.id} stock={product.stock} initial={1} onAddProduct={onAddProduct}/> 
                :
                <Link to={'/cart'}> Ir al carrito</Link>           
                }
                </div>
        </div>
    )
}