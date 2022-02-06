import react from "react"; 
import './Item.css' ;

export default function Item({product}) {
    return (
        <div className='product-container' key={product.id}>
        <p className="product-title">{product.title}</p>
        <img className="product-img" src={product.image}/>
        <p className="product-price">{product.price}</p>
        </div>
    )
}