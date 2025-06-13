import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/laboratorio1.css';

const Laboratorio1 = () => {
    return (
        <div className="lab-container">
            <h1 className="lab-title">Laboratorio 1</h1>
            <h2 className="lab-subtitle">Microprocesadores</h2>
            
            <p className="lab-description">Fundamentos de arquitectura de procesadores</p>
            
            {/* Tarjeta de conceptos clave */}
            <div className="lab-key-concepts">
                <h3>Conceptos clave:</h3>
                <ul>
                    <li>Arquitectura von Neumann</li>
                    <li>Unidad de Control y ALU</li>
                    <li>Registros del CPU</li>
                    <li>Ciclo de instrucción</li>
                </ul>
            </div>

            {/* Cita técnica */}
            <blockquote className="lab-quote">
                "El rendimiento de un microprocesador se mide por su capacidad para ejecutar instrucciones por ciclo (IPC)."
                <footer>— Patterson & Hennessy</footer>
            </blockquote>

            <div className="lab-meta">
                <p className="lab-date"><strong>Fecha:</strong> 16/09/2025</p>
                <Link to="/lab1/microprocesadores" className="lab-link">
                    <button className="lab-btn">Ver contenido →</button>
                </Link>
            </div>

            <div className="lab-img-container">
               
            </div>
        </div>
    );
};

export default Laboratorio1;