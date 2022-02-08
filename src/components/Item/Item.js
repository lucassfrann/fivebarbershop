import react from "react"; 
import './Item.css' ;
import ItemCount from '../ItemCount/ItemCount'

export default function Item({product, onAdd}) {
    
    return (
        <div className='product-container' key={product.id}>
        <p className="product-title">{product.title}</p>
        <img className="product-img" src={product.image}/>
        <p className="product-price">{product.price}</p>
        <ItemCount key={product.id} stock={10} initial={1} onAdd={onAdd}/>
        </div>
    )
}