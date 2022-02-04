import react, { useState, useEffect } from "react";
import './ItemListContainer.css'



export default function ItemListContainer( {stock, initial, onAdd} ) {

    const [quantity, setQuantity] = useState(initial - 1)
    const [conditional, setConditional] = useState(true)


    // function changeQuantity(conditional){
    //     if (conditional) {
    //         if (quantity < stock)
    //         setQuantity(quantity + 1)
    //     } else {
    //         if (quantity > 0) {
    //             setQuantity(quantity - 1)
    //         }
    //     }

    // }

    function addQuantity() {
        if (quantity < stock)
        setQuantity(quantity + 1)
    }

    function removeQuantity() {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="itemlist-container">
            <div className="item-container">
                <div className="quantity-container">
                <div className="button-quantity">
                    <button id="button-add" onClick={() => addQuantity()}>+</button>
                    {/* <button id="button-add" onClick={() => changeQuantity(setConditional(true))}>+</button> */}
                </div>
                <div className="quantity">
                    <p>{quantity}</p>
                </div>
                <div className="button-quantity">
                    <button id='button-discount' onClick={() => removeQuantity()}>-</button>
                    {/* <button id="button-discount" onClick={() => changeQuantity(setConditional(false))}>-</button> */}
                </div>
                </div>
                <div className="button-addtocart" onClick={() => onAdd()}>
                    <button>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )   
}