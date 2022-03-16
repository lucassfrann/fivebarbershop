import react from "react";
import './Footer.css'


export default function footer() {
    return (
        <footer>
        <section className="footer-container">
            <div className="footer-content">
                <div className="footer-nav">
                    <nav>
                        <ul className="footer-nav-list">
                            <li><a href="encontranos.html"> Encontranos </a></li>
                            <li><a href="turno.html">Reserva tu turno</a></li>
                            <li><a href="precio.html">Nuestros precios</a></li>
                            <li><a href="productos.html">Productos</a></li>
                        </ul>
                    </nav>
                </div>
                </div>
        </section>
        </footer>
    )   
}