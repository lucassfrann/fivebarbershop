import react from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
    return (
    <header className='header'>
        <div className='header-container'>
            <div className='header-logo'>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                <h1 className="logo">Five Barber</h1>
                </Link>   
            </div>
                <div className='header-nav'>
                <div className="category-cart">
                    <div className="product-category">
                        <Link to={"/category/shampoo"}><p>Shampoos</p></Link>
                        <Link to={"/category/Style"}><p>Styles products</p></Link>
                    </div>
                    <CartWidget />
                </div> 
            </div>
        </div>
    </header>
    )
}