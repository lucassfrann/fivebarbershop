import {createContext, useState, useEffect} from "react";
import Cart from "../components/Cart/Cart";

export const cartContext = createContext([]);

export default function CartContextProvider({children}) {
    const [finalPrice, setFinalPrice] = useState(0)
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect (() => {
        if (localStorage.length > 0) {
            console.log('Encuentro localStorage')
            let productStorage = JSON.parse(localStorage.getItem('Cart'))
            productStorage.forEach((product)=> {console.log(product)})
            
        }
    }, [])

    useEffect (() => {
        finalQuantity(cart)
    }, [cart])

    useEffect(() => {
        let totalprice = cart.map(product => product.price * product.quantity).reduce((a, b) => a + b, 0)
        setFinalPrice(totalprice) 
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
        console.log(cart)
        let cartJSON = JSON.stringify(cart)
        localStorage.setItem('Cart', cartJSON)

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


