import react from "react";

import './ItemListContainer.css'

export default function ItemListContainer( {greeting} ) {
    return (
        <div className="itemlist-container">
        <p>{greeting}</p>
        </div>
    )
}