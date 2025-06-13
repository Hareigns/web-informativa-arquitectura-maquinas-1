import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/laboratorio2.css';

const Laboratorio2 = () => {
    return (
        <div className="lab-container">
            <h1 className="lab-title">Laboratorio 2</h1>
            <h2 className="lab-subtitle">Procesos Ordenados/Desordenados</h2>
            
            <p className="lab-description">Análisis de flujo de instrucciones</p>
            
            {/* Tarjeta de conceptos clave */}
            <div className="lab-key-concepts">
                <h3>Conceptos clave:</h3>
                <ul>
                    <li>Pipeline de instrucciones</li>
                    <li>Riesgos de datos y control</li>
                    <li>Ejecución en orden vs fuera de orden</li>
                    <li>Branch prediction</li>
                </ul>
            </div>

            {/* Cita técnica */}
            <blockquote className="lab-quote">
                "La ejecución fuera de orden mejora el IPC pero incrementa la complejidad del hardware."
                <footer>— David A. Patterson</footer>
            </blockquote>

            <div className="lab-meta">
                <p className="lab-date"><strong>Fecha:</strong> 22/05/2025</p>
                <Link to="/lab2/ProcesosOrdenadosDesordenados" className="lab-link">
                    <button className="lab-btn">Ver contenido →</button>
                </Link>
            </div>

            <div className="lab-img-container">
                
            </div>
        </div>
    );
};

export default Laboratorio2;