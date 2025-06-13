import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/laboratorio5.css';

const Laboratorio5 = () => {
    return (
        <div className="lab-container">
            <h1 className="lab-title">Laboratorio 5</h1>
            <h2 className="lab-subtitle">Ensamblador x86</h2>
            
            <p className="lab-description">Programación en lenguaje ensamblador</p>
            
            {/* Tarjeta de conceptos clave */}
            <div className="lab-key-concepts">
                <h3>Características x86:</h3>
                <ul>
                    <li>Registros básicos (EAX, EBX, ECX, EDX)</li>
                    <li>Modos de operación (16/32/64 bits)</li>
                    <li>Instrucciones SSE/AVX</li>
                    <li>Convenciones de llamadas</li>
                </ul>
            </div>

            {/* Cita técnica */}
            <blockquote className="lab-quote">
                "Dominar el ensamblador x86 es entender el corazón mismo de los PCs modernos."
                <footer>— Dr. Jonathan Bartlett</footer>
            </blockquote>

            <div className="lab-meta">
                <p className="lab-date"><strong>Fecha:</strong> 10/04/2025</p>
                <Link to="/lab5/Ensamblador-Familiax86" className="lab-link">
                    <button className="lab-btn">Ver arquitectura x86 →</button>
                </Link>
            </div>

            <div className="lab-img-container">
                
            </div>
        </div>
    );
};

export default Laboratorio5;