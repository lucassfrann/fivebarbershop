import react from "react";
import './navBar.css';

export default function navBar() {
    return (
    <header className='header'>
        <div className='header-container'>
            <div className='header-logo'>
                <a href='index.html' className='logo'></a>
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