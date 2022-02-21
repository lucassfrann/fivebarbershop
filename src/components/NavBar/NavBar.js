import react from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="product-navbar">
        <h3>Nuestros productos</h3>
        <div className="category-cart">
            <div className="product-category">
                <p>Categorias:</p>
                <Link to={"/category/shampoo"}><p>Shampoo</p></Link>
                <Link to={"/category/Style"}><p>Style</p></Link>
            </div>
            <CartWidget />
        </div>
        </div>
    )
}