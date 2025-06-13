import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/laboratorio10.css';

const Laboratorio10 = () => {
    return (
        <div className="lab-container">
            <h1 className="lab-title">Laboratorio 10</h1>
            <h2 className="lab-subtitle">Módulo CCP</h2>
            
            <p className="lab-description">Captura, Comparación y Modulación PWM</p>
            
            {/* Tarjeta de conceptos clave */}
            <div className="lab-key-concepts">
                <h3>Funcionalidades:</h3>
                <ul>
                    <li>Captura de señales temporizadas</li>
                    <li>Comparación de valores</li>
                    <li>Generación de señales PWM</li>
                    <li>Control preciso de tiempos</li>
                </ul>
            </div>

            {/* Cita técnica */}
            <blockquote className="lab-quote">
                "El módulo CCP es el relojero de los microcontroladores, midiendo y generando tiempos con precisión."
                <footer>— Lucio Di Jasio</footer>
            </blockquote>

            <div className="lab-meta">
                <p className="lab-date"><strong>Fecha:</strong> 17/05/2025</p>
                <Link to="/lab10/moduloCCP" className="lab-link">
                    <button className="lab-btn">Explorar módulo CCP →</button>
                </Link>
            </div>

            <div className="lab-img-container">
                
            </div>
        </div>
    );
};

export default Laboratorio10;