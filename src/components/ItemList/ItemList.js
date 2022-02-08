import react from "react"
import './ItemList.css'
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item'



export default function ItemList({products, onAdd}){
    return(
        <div className="itemlist-container">
            {
             products.map( function(product){
                 console.log(product)
                 return(
                  <div key={product.id}>
                   <Item key={product.id} product={product} onAdd={onAdd}  />
                  </div>
                 )
             })   
            }
        </div>
    )
}