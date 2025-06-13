import { Link } from 'react-router-dom';
import "../assets/styles/laboratorios.css";
import React from "react";

// Importar todas las imágenes de los laboratorios
import lab1Icon from "../assets/images/lab1.webp";
import lab2Icon from "../assets/images/lab2.webp";
import lab3Icon from "../assets/images/lab3.webp";
import lab4Icon from "../assets/images/lab4.webp";
import lab5Icon from "../assets/images/lab5.webp";
import lab6Icon from "../assets/images/lab6.webp";
import lab7Icon from "../assets/images/lab7.webp";
import lab8Icon from "../assets/images/lab8.webp";
import lab9Icon from "../assets/images/lab9.webp";
import lab10Icon from "../assets/images/lab10.webp";
import lab11Icon from "../assets/images/lab11.webp";
import lab12Icon from "../assets/images/lab12.webp";

const Laboratorios = () => {
    const labs = [
        { id: 1, title: "Microprocesadores", icon: lab1Icon, date: "15/03/2025", description: "Fundamentos de arquitectura de procesadores" },
        { id: 2, title: "Procesos Ordenados/Desordenados", icon: lab2Icon, date: "22/03/2025", description: "Análisis de flujo de instrucciones" },
        { id: 3, title: "Comparación de Procesadores", icon: lab3Icon, date: "29/03/2025", description: "Benchmarking y análisis de rendimiento" },
        { id: 4, title: "Infografía Ensamblador", icon: lab4Icon, date: "05/04/2025", description: "Lenguaje de bajo nivel y su sintaxis" },
        { id: 5, title: "Ensamblador x86", icon: lab5Icon, date: "12/04/2025", description: "Programación en lenguaje ensamblador" },
        { id: 6, title: "Arquitectura Microcontroladores", icon: lab6Icon, date: "19/04/2025", description: "Estructura de sistemas embebidos" },
        { id: 7, title: "Memoria en Microcontroladores", icon: lab7Icon, date: "26/04/2025", description: "Gestión de memoria en sistemas embebidos" },
        { id: 8, title: "Arquitectura PIC", icon: lab8Icon, date: "03/05/2025", description: "Familia de microcontroladores PIC" },
        { id: 9, title: "Control de Hardware", icon: lab9Icon, date: "10/05/2025", description: "Interfaz con periféricos y dispositivos" },
        { id: 10, title: "Módulo CCP", icon: lab10Icon, date: "17/05/2025", description: "Captura, comparación y PWM" },
        { id: 11, title: "Señales y Temporizadores", icon: lab11Icon, date: "24/05/2025", description: "Generación y medición de señales" },
        { id: 12, title: "Transmisión Digital", icon: lab12Icon, date: "31/05/2025", description: "Comunicación serial y conversión A/D" }
    ];

    return (
        <div className="eco-tech-labs-container">
            <header className="eco-tech-labs-header">
                <h1 className="eco-tech-labs-title">Laboratorios de <strong>Arquitectura de Máquinas 1</strong></h1>
                <p className="eco-tech-labs-subtitle">
                    Explora nuestros laboratorios prácticos sobre arquitectura de computadoras y sistemas embebidos
                </p>
                <div className="eco-tech-labs-badge">
                    <span>🔬</span> Aprendizaje práctico con enfoque en eficiencia energética
                </div>
            </header>

            <main className="eco-tech-labs-content">
                <div className="labs-grid">
                    {labs.map((lab) => (
                        <Link to={`/laboratorio/${lab.id}`} key={lab.id} className="lab-card-link">
                            <div className="eco-tech-lab-card">
                                <div className="lab-icon-container">
                                    <img src={lab.icon} alt={`Laboratorio ${lab.id}`} className="lab-icon" />
                                </div>
                                <div className="lab-info">
                                    <h3 className="lab-title">Laboratorio {lab.id}</h3>
                                    <h4 className="lab-subtitle">{lab.title}</h4>
                                    <p className="lab-description">{lab.description}</p>
                                    <div className="lab-meta">
                                        <span className="lab-date">📅 {lab.date}</span>
                                        <span className="lab-link">Ver detalles →</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <section className="eco-tech-labs-about">
                <div className="about-card">
                    <h3>¿Qué encontrarás en estos laboratorios?</h3>
                    <p>
                        Cada laboratorio contiene material teórico, ejercicios prácticos, ejemplos de código
                        y recomendaciones para optimizar el rendimiento y consumo energético de los sistemas.
                    </p>
                    <div className="eco-tip">
                        <span className="tip-icon">💡</span>
                        <p>Los laboratorios están diseñados con un enfoque eco-tecnológico, promoviendo prácticas sostenibles en computación.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Laboratorios;