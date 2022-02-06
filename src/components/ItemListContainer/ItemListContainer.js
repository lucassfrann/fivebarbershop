import react, { useState, useEffect } from "react";
import './ItemListContainer.css'
import { getItems } from "../../api/api";
import ItemCount from '../ItemCount/ItemCount';
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
        { products.length > 0 ? <ItemList products={products}/> : <p>Productos no obtenidos</p> }
        </div>
    )   
}