import {useEffect, useState} from "react";
import './ItemDetailContainer.css'
import { getItems } from "../../api/api";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export default function ItemDetailContainer({onAdd}) {
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    useEffect (()=> {
        
       const productRef = doc(db,'items',productId);
        getDoc(productRef)
        .then((snapshot) => {
            setProduct({id:snapshot.id, ...snapshot.data()})
        })

    }, [productId])

    return (
        <div>
            <ItemDetail product={product} onAdd={onAdd}/>
        </div>
    )
}