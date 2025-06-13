import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/laboratorio7.css';

const Laboratorio7 = () => {
    return (
        <div className="lab-container">
            <h1 className="lab-title">Laboratorio 7</h1>
            <h2 className="lab-subtitle">Memoria en Microcontroladores</h2>
            
            <p className="lab-description">Organización de memoria en sistemas embebidos</p>
            
            {/* Tarjeta de conceptos clave */}
            <div className="lab-key-concepts">
                <h3>Estructuras de memoria:</h3>
                <ul>
                    <li>Memoria Flash (programa)</li>
                    <li>SRAM (datos volátiles)</li>
                    <li>EEPROM (datos persistentes)</li>
                    <li>Mapa de memoria y segmentación</li>
                </ul>
            </div>

            {/* Cita técnica */}
            <blockquote className="lab-quote">
                "En sistemas embebidos, cada byte de memoria cuenta. La eficiencia es la clave."
                <footer>— Michael Barr</footer>
            </blockquote>

            <div className="lab-meta">
                <p className="lab-date"><strong>Fecha:</strong> 26/04/2025</p>
                <Link to="/lab7/Memoria-Microcontroladores" className="lab-link">
                    <button className="lab-btn">Ver organización de memoria →</button>
                </Link>
            </div>

            <div className="lab-img-container">
                
            </div>
        </div>
    );
};

export default Laboratorio7;