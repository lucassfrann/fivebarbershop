import react from "react"
import './ItemList.css'
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item'
import { useParams } from "react-router-dom";



export default function ItemList({products, onAdd, category}){

    return(
        <div className="itemlist-container">
        {
            category ? 
    
            <div className="title">
                <h1>{category}</h1>
            </div>

            :

            <div className="title">
                <h1>Nuestros productos</h1>
            </div> 
        }
        <div className="list-container" > 
            {
             products.map( function(product){
                 return(
                  <div key={product.id}>
                   <Item key={product.id} product={product} onAdd={onAdd}  />
                  </div>
                 )
             })   
            }
        </div>
        </div>
    )
}