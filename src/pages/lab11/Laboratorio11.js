import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/laboratorio11.css';

const Laboratorio11 = () => {
    return (
        <div className="lab-container">
            <h1 className="lab-title">Laboratorio 11</h1>
            <h2 className="lab-subtitle">Señales y Temporizadores</h2>
            
            <p className="lab-description">Generación y medición de señales digitales</p>
            
            {/* Tarjeta de conceptos clave */}
            <div className="lab-key-concepts">
                <h3>Técnicas principales:</h3>
                <ul>
                    <li>Configuración de temporizadores (TIMERS)</li>
                    <li>Generación de señales PWM</li>
                    <li>Captura de pulsos externos</li>
                    <li>Interrupciones por temporización</li>
                </ul>
            </div>

            {/* Cita técnica */}
            <blockquote className="lab-quote">
                "Los temporizadores son el latido del microcontrolador, sincronizando cada operación crítica."
                <footer>— Jack Ganssle</footer>
            </blockquote>

            <div className="lab-meta">
                <p className="lab-date"><strong>Fecha:</strong> 20/05/2025</p>
                <Link to="/lab11/señales y temporizador" className="lab-link">
                    <button className="lab-btn">Ver técnicas avanzadas →</button>
                </Link>
            </div>

            <div className="lab-img-container">
                
            </div>
        </div>
    );
};

export default Laboratorio11;