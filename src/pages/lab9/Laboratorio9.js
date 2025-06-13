import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/laboratorio9.css';

const Laboratorio9 = () => {
    return (
        <div className="lab-container">
            <h1 className="lab-title">Laboratorio 9</h1>
            <h2 className="lab-subtitle">Control de Hardware</h2>
            
            <p className="lab-description">Interfaz con periféricos y dispositivos</p>
            
            {/* Tarjeta de conceptos clave */}
            <div className="lab-key-concepts">
                <h3>Técnicas clave:</h3>
                <ul>
                    <li>Acceso directo a memoria (DMA)</li>
                    <li>Control de puertos E/S</li>
                    <li>Manejo de interrupciones</li>
                    <li>Comunicación SPI/I2C</li>
                </ul>
            </div>

            {/* Cita técnica */}
            <blockquote className="lab-quote">
                "El verdadero poder de la programación de sistemas se revela cuando interactúas directamente con el hardware."
                <footer>— Elecia White</footer>
            </blockquote>

            <div className="lab-meta">
                <p className="lab-date"><strong>Fecha:</strong> 10/05/2025</p>
                <Link to="/lab9/Control de Hardware" className="lab-link">
                    <button className="lab-btn">Ver técnicas de control →</button>
                </Link>
            </div>

            <div className="lab-img-container">
                
            </div>
        </div>
    );
};

export default Laboratorio9;