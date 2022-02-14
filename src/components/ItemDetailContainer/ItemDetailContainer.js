import {useEffect, useState} from "react";
import './ItemDetailContainer.css'
import { getItems } from "../../api/api";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

export default function ItemDetailContainer({onAdd}) {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    useEffect (()=> {
        getItems().then((products) => {
            const product = products.find((product) => product.id === Number(productId))
            setProduct(product)
        })
    }, [productId])

    return (
        <div className="detailcontainer">
            <ItemDetail product={product} onAdd={onAdd}/>
        </div>
    )
}