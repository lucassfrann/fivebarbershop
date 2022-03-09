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
                <div className="footer-logo">
                    <a href="#"> 
                        <img src="Imagenes/logo.jpg" alt="Logo Five Barber"/>
                    </a>
                </div>
                <div className="footer-contact">
                        <h1>Contactanos</h1>
                        <a href="">
                            <img src="Imagenes/instagram.png"/>
                        </a>
                        <a href="">
                            <img src="Imagenes/tiktok.png"/>
                        </a>
                        <p>five5barber@gmail.com</p>
                        <p>1341234321423</p>
                </div>
                </div>
        </section>
        </footer>
    )   
}