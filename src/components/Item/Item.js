import { Link } from "react-router-dom";
import './Item.css' ;

export default function Item({product}) {
    
    return (
        <Link to={`/product/${product.id}`} className="item" style={{ textDecoration: 'none' }}>
            <div className='item-container' key={product.id}>
            <img className="item-img" src={product.image}/>
            <p className="item-title">{product.title}</p>
            <p className="item-price">${product.price}</p>
            </div>
        </Link>
        
    )
}