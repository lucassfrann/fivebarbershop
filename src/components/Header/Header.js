import react from "react";
import './Header.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
    <header className='header'>
        <div className='header-container'>
            <div className='header-logo'>
                <Link to={'/'}>
                <h1 className="logo">Five Barber</h1>
                </Link>   
            </div>
            <nav className='header-nav'>
                <a href='#'> Encontranos </a>
                <a href='#'>Reserva tu turno</a>
                <a href='#l'>Nuestros precios</a>
                <a href='#'>Productos</a>
            </nav>
        </div>
    </header>
    )
}