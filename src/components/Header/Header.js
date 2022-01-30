import react from "react";
import './Header.css';

export default function Header() {
    return (
    <header className='header'>
        <div className='header-container'>
            <div className='header-logo'>
                <a href='index.html' className='logo'>Five barber</a>
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