import react, { useState, useEffect } from "react";
import './ItemListContainer.css'
import { getItems } from "../../api/api";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer( {onAdd} ) {

    const [products, setProducts] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        getItems().then((products)=> {
            if (!category) {
                setProducts(products)
            } else {
                    const itemFilter = products.filter((product)=> {
                        return product.category === category
                    })
                    setProducts(itemFilter)      
            } 
            })
        
    }, [category])

    return (
        <div>
        { products.length > 0 ? <ItemList products={products} onAdd={onAdd} category={category}/> : <p>Productos no obtenidos</p> }
        </div>
    )   
}