import {createContext, useState, useEffect} from "react";

export const cartContext = createContext([]);

export default function CartContextProvider({children}) {
    const [finalPrice, setFinalPrice] = useState(0)
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect (() => {
        finalQuantity(cart)
    }, [cart])

    useEffect(() => {
        let totalprice = cart.map(product => product.price * product.quantity).reduce((a, b) => a + b, 0)
        setFinalPrice(totalprice)
        console.log(finalPrice)  
      },[cart])

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
        addQuantity(quantity, product )
      
    } else {
        setCart([...cart, {...product, quantity}]);

    }   
}

    const finalQuantity = (cart, totalQuantity)=> {
        let cartquantity = cart.map(product => totalQuantity =+ product.quantity ).reduce((a, b) => a + b, 0)
        setTotalQuantity(cartquantity)
    }

    const addQuantity = (quantity, product) => {
        const cartCopy = [...cart]
        cartCopy.forEach(item => {
            if (item.id == product.id) {
                item.quantity += quantity 
                finalQuantity(cart)
            }
        });
    }

   

    return(
        <cartContext.Provider value={{cart, addToCart, removeProduct, clearCart, totalQuantity, finalPrice}}>
            {children}
        </cartContext.Provider>
    )


}


