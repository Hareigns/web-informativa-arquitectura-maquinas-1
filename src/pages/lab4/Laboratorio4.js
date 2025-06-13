import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/laboratorio4.css';

const Laboratorio4 = () => {
    return (
        <div className="lab-container">
            <h1 className="lab-title">Laboratorio 4</h1>
            <h2 className="lab-subtitle">Infografía Ensamblador</h2>
            
            <p className="lab-description">Lenguaje de bajo nivel y su estructura</p>
            
            {/* Tarjeta de conceptos clave */}
            <div className="lab-key-concepts">
                <h3>Elementos clave:</h3>
                <ul>
                    <li>Registros del procesador</li>
                    <li>Instrucciones básicas (MOV, ADD, SUB)</li>
                    <li>Modos de direccionamiento</li>
                    <li>Sintaxis AT&T vs Intel</li>
                </ul>
            </div>

            {/* Cita técnica */}
            <blockquote className="lab-quote">
                "El ensamblador es el lenguaje que realmente entiende tu procesador, todo lo demás es traducción."
                <footer>— Programador anónimo</footer>
            </blockquote>

            <div className="lab-meta">
                <p className="lab-date"><strong>Fecha:</strong> 06/04/2025</p>
                <Link to="/lab4/infografia-ensamblador" className="lab-link">
                    <button className="lab-btn">Explorar infografía →</button>
                </Link>
            </div>

            <div className="lab-img-container">
                
            </div>
        </div>
    );
};

export default Laboratorio4;