import react from "react"; 
import { Link } from "react-router-dom";
import './Item.css' ;
import ItemCount from '../ItemCount/ItemCount'

export default function Item({product}) {
    
    return (
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
            <div className='product-container' key={product.id}>
            <img className="product-img" src={product.image}/>
            <p className="product-title">{product.title}</p>
            <p className="product-price">${product.price}</p>
            </div>
        </Link>
        
    )
}