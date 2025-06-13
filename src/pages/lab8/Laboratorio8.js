import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/laboratorio8.css';

const Laboratorio8 = () => {
    return (
        <div className="lab-container">
            <h1 className="lab-title">Laboratorio 8</h1>
            <h2 className="lab-subtitle">Arquitectura PCI</h2>
            
            <p className="lab-description">Familia de microcontroladores PIC</p>
            
            {/* Tarjeta de conceptos clave */}
            <div className="lab-key-concepts">
                <h3>Características PCI:</h3>
                <ul>
                    <li>Bus paralelo de 32/64 bits</li>
                    <li>Frecuencias de 33-66 MHz</li>
                    <li>Arbitraje de bus</li>
                    <li>Configuración Plug and Play</li>
                </ul>
            </div>

            {/* Cita técnica */}
            <blockquote className="lab-quote">
                "PCI revolucionó la expansión de hardware al estandarizar la comunicación entre dispositivos."
                <footer>— Don Anderson</footer>
            </blockquote>

            <div className="lab-meta">
                <p className="lab-date"><strong>Fecha:</strong> 01/05/2025</p>
                <Link to="/lab8/ArquitecturaPCI" className="lab-link">
                    <button className="lab-btn">Explorar arquitectura →</button>
                </Link>
            </div>

            <div className="lab-img-container">
                
            </div>
        </div>
    );
};

export default Laboratorio8;