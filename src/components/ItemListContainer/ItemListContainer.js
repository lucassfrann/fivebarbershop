import react, { useState, useEffect } from "react";
import './ItemListContainer.css'
import { getItems } from "../../api/api";
import ItemList from "../ItemList/ItemList";



export default function ItemListContainer( {stock, initial, onAdd} ) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getItems().then((products)=> {
            setProducts(products);
        } )
    }, [])

    return (
        <div>
        { products.length > 0 ? <ItemList products={products} onAdd={onAdd}/> : <p>Productos no obtenidos</p> }
        </div>
    )   
}