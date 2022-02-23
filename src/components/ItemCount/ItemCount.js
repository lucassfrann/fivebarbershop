import react, {useState, useEffect} from "react";  
import './ItemCount.css'

export default function ItemCount({stock, initial, onAddProduct}) {
    const [quantity, setQuantity] = useState(initial)
    function addQuantity() {
        if (quantity < stock)
        setQuantity(quantity + 1)
    }

    function removeQuantity() {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    function addToCart(quantity) {
        onAddProduct(quantity);
    }

    return (
        <div className="itemcount-container">
        <div className="count-container">
            <div className="quantity-container">
            <div className="button-quantity">
                <button id='button-discount' onClick={() => removeQuantity()}>-</button>
                {/* <button id="button-discount" onClick={() => changeQuantity(setConditional(false))}>-</button> */}
            </div>    
            <div className="quantity">
                <p>{quantity}</p>
            </div>
            <div className="button-quantity">
                <button id="button-add" onClick={() => addQuantity()}>+</button>
                {/* <button id="button-add" onClick={() => changeQuantity(setConditional(true))}>+</button> */}
            </div>
           
            </div>
            <div className="button-addtocart" onClick={() => addToCart(quantity)}>
                <button>
                    Agregar al carrito
                </button>
            </div>
        </div>
    </div>
    )
}

