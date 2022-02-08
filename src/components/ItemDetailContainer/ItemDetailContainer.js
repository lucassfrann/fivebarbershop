import {useEffect, useState} from "react";
import './ItemDetailContainer.css'
import { getItems } from "../../api/api";
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer({onAdd}) {
    const [product, setProduct] = useState();
    useEffect (()=> {
        getItems().then((products) => {
            const product = products.find((product) => product.id === 2)
            setProduct(product)
        })
    }, [])

    return (
        <div>
            <ItemDetail product={product} onAdd={onAdd}/>
        </div>
    )
}