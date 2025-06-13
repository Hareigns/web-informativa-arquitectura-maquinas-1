import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/laboratorio3.css';

const Laboratorio3 = () => {
    return (
        <div className="lab-container">
            <h1 className="lab-title">Laboratorio 3</h1>
            <h2 className="lab-subtitle">Comparación de Procesadores</h2>
            
            <p className="lab-description">Benchmark y análisis de rendimiento</p>
            
            {/* Tarjeta de conceptos clave */}
            <div className="lab-key-concepts">
                <h3>Métricas clave:</h3>
                <ul>
                    <li>IPC (Instrucciones por ciclo)</li>
                    <li>Frecuencia de reloj</li>
                    <li>Consumo energético</li>
                    <li>Latencia de memoria</li>
                </ul>
            </div>

            {/* Cita técnica */}
            <blockquote className="lab-quote">
                "Comparar procesadores solo por GHz es como comparar autos solo por RPM."
                <footer>— Linus Torvalds</footer>
            </blockquote>

            <div className="lab-meta">
                <p className="lab-date"><strong>Fecha:</strong> 29/03/2025</p>
                <Link to="/lab3/funcionalidad-comparacion" className="lab-link">
                    <button className="lab-btn">Ver análisis comparativo →</button>
                </Link>
            </div>

            <div className="lab-img-container">
                
            </div>
        </div>
    );
};

export default Laboratorio3;