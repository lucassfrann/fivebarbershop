import {createContext, useState} from "react";

export const cartContext = createContext([]);

export default function CartContextProvider({children}) {

    const [cart, setCart] = useState([]);

    const isOnCart = (id) => {
        const verification = cart.some((product) => product.id == id)
        return verification;
    }

    const clearCart = () => {
        setCart([]);
    }

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id))
    }

    const addToCart = (quantity, product) => {

    if (isOnCart(product.id)) {
        console.log('Producto duplicado')
        addQuantity(quantity, product )
      
    } else {
        setCart([...cart, {...product, quantity}]);
    }   
}

    const addQuantity = (quantity, product) => {
        const cartCopy = [...cart]
        cartCopy.forEach(item => {
            if (item.id == product.id) {
                item.quantity += quantity
            }
        });
    }

   

    return(
        <cartContext.Provider value={{cart, addToCart, removeProduct, clearCart}}>
            {children}
        </cartContext.Provider>
    )


}


