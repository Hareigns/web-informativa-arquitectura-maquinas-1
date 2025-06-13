import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/laboratorio12.css';

const Laboratorio12 = () => {
    return (
        <div className="lab-container">
            <h1 className="lab-title">Laboratorio 12</h1>
            <h2 className="lab-subtitle">Transmisión Digital</h2>
            
            <p className="lab-description">Conversión serie y comunicación A/D</p>
            
            {/* Tarjeta de conceptos clave */}
            <div className="lab-key-concepts">
                <h3>Tecnologías clave:</h3>
                <ul>
                    <li>Protocolos de comunicación serial (UART, SPI, I2C)</li>
                    <li>Conversión Analógico-Digital (ADC)</li>
                    <li>Muestreo y cuantización</li>
                    <li>Control de errores en transmisión</li>
                </ul>
            </div>

            {/* Cita técnica */}
            <blockquote className="lab-quote">
                "La magia de la comunicación digital está en transformar el mundo analógico en bits y viceversa."
                <footer>— Claude Shannon</footer>
            </blockquote>

            <div className="lab-meta">
                <p className="lab-date"><strong>Fecha:</strong> 31/05/2025</p>
                <Link to="/lab12/Transmision y Conversion Digital" className="lab-link">
                    <button className="lab-btn">Ver sistemas de transmisión →</button>
                </Link>
            </div>

            <div className="lab-img-container">
                
            </div>
        </div>
    );
};

export default Laboratorio12;