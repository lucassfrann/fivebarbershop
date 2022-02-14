import react ,{createContext, useState} from "react";



export const cartContext = createContext([]);

export default function CartContextProvider({children}) {

    const [cart, setCart] = useState([]) 

    const addToCart = (products) => {
        setCart(products)
    }

    return(
        <cartContext.Provider>
            {children}
        </cartContext.Provider>
    )
}