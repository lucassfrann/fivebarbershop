import react from "react";
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

export default function ItemDetail({product, onAdd}) {
    return (
        <div>
            <p className="product-title">{product.title}</p>
            <p className="product-brand">{product.brand}</p>
            <img className="product-img" src={product.image}/>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
            <ItemCount key={product.id} stock={10} initial={1} onAdd={onAdd}/>
        </div>
    )
}