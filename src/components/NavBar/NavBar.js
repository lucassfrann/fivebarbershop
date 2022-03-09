import react from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import User from '../../assets/images/user.png'

export default function NavBar() {
    return (
    <header className='header'>
        <div className='header-container'>
            <div className='header-logo'>
                <Link to={'/'} className="header-logo">
                <h1 className="logo">Five Barber</h1>
                </Link>   
            </div>
            <div className='header-nav'>
                <div className="header-login">
                    <img src={User}/>
                 </div>
                <div className="category-cart">
                <div className="product-category">
                     <Link to={"/category/Shampoos"}><p>Shampoos</p></Link>
                     <Link to={"/category/Style"}><p>Styles products</p></Link>
                     <Link to={'/category/Hair cutting'}><p>Hair cutting</p></Link>
                </div>
            </div> 
            <CartWidget />
        </div>
        </div>
    </header>
    )
}