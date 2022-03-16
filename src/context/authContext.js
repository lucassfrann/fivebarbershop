import {createContext, useState, useEffect, useContext} from "react";


export const authContext = createContext([]);

const useAuth = () => {
    const context = useContext(authContext)
    return context
}

export default function AuthContextProvider({children}) {

    const user = {
        login: true
    }

    return (
        <authContext.Provider value={{user}}>
            {children}
        </authContext.Provider>
    )
}