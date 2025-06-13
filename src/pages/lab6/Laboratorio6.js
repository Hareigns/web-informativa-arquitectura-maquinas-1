import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/laboratorio6.css';

const Laboratorio6 = () => {
    return (
        <div className="lab-container">
            <h1 className="lab-title">Laboratorio 6</h1>
            <h2 className="lab-subtitle">Arquitectura Microcontroladores</h2>
            
            <p className="lab-description">Estructura de sistemas embebidos</p>
            
            {/* Tarjeta de conceptos clave */}
            <div className="lab-key-concepts">
                <h3>Componentes clave:</h3>
                <ul>
                    <li>Unidad Central de Procesamiento (CPU)</li>
                    <li>Memoria (Flash/RAM)</li>
                    <li>Periféricos integrados</li>
                    <li>Sistemas de interrupción</li>
                </ul>
            </div>

            {/* Cita técnica */}
            <blockquote className="lab-quote">
                "Los microcontroladores son los cerebros invisibles que controlan el mundo moderno."
                <footer>— Jack Ganssle</footer>
            </blockquote>

            <div className="lab-meta">
                <p className="lab-date"><strong>Fecha:</strong> 18/04/2025</p>
                <Link to="/lab6/Arq-Microcontroladores" className="lab-link">
                    <button className="lab-btn">Explorar arquitectura →</button>
                </Link>
            </div>

            <div className="lab-img-container">
                
            </div>
        </div>
    );
};

export default Laboratorio6;