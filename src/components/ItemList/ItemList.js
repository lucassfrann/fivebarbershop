import react from "react"
import './ItemList.css'
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item'



export default function ItemList({products, stock, initial, onAdd}){
    return(
        <div className="itemlist-container">
            {
             products.map( function(product){
                 console.log(product)
                 return(
                  <div>
                   <Item key={product.id} product={product} />
                   <ItemCount key={product.id} stock={10} initial={1} onAdd={onAdd}/>
                  </div>
                 )
             })   
            }
        </div>
    )
}