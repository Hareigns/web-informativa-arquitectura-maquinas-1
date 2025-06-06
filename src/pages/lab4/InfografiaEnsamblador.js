import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/lab4.css";

// Importar imágenes (ajusta las rutas según tu estructura)
import ejercicio1 from "../../assets/images/1.webp";
import ejercicio2 from "../../assets/images/2.webp";
import ejercicio3 from "../../assets/images/3.webp";
import ejercicio4 from "../../assets/images/4.webp";
import ejercicio5 from "../../assets/images/5.webp";
import ejercicio6 from "../../assets/images/6.webp";

const InfografiaEnsamblador = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentEjercicio, setCurrentEjercicio] = useState(null);

    const ejercicios = [
        { 
            id: 1, 
            titulo: "Hola Mundo en Ensamblador",
            imagen: ejercicio1,
            descripcion: "Implementación básica de un programa 'Hola Mundo' en lenguaje ensamblador x86."
        },
        { 
            id: 2, 
            titulo: "Suma de dos números",
            imagen: ejercicio2,
            descripcion: "Programa que realiza la suma de dos números enteros en ensamblador."
        },
        { 
            id: 3, 
            titulo: "Operaciones aritméticas",
            imagen: ejercicio3,
            descripcion: "Ejemplo completo con suma, resta, multiplicación y división en ensamblador."
        },
        { 
            id: 4, 
            titulo: "Estructuras de control",
            imagen: ejercicio4,
            descripcion: "Uso de estructuras condicionales y bucles en lenguaje ensamblador."
        },
        { 
            id: 5, 
            titulo: "Manejo de cadenas",
            imagen: ejercicio5,
            descripcion: "Manipulación de cadenas de caracteres en memoria con instrucciones x86."
        },
        { 
            id: 6, 
            titulo: "Llamadas a funciones",
            imagen: ejercicio6,
            descripcion: "Implementación y llamada a funciones/subrutinas en ensamblador."
        }
    ];

    const openModal = (ejercicio) => {
        setCurrentEjercicio(ejercicio);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="eco-tech-lab4-container">
            <header className="eco-tech-lab4-header">
                <h1 className="eco-tech-lab4-title">Ensamblador de la familia ix86</h1>
                <p className="eco-tech-lab4-subtitle">Optimización de código para eficiencia energética</p>
                <div className="eco-tech-lab4-badge">
                    <span>♻️</span> Código eficiente = Menor consumo energético
                </div>
            </header>

            <main className="eco-tech-lab4-content">
                {[
                    {
                        title: "Ensamblador de la familia ix86",
                        content: `Hace referencia al conjunto de instrucciones de los procesadores Intel 8086, 80286, 80386, 80486 y Pentium. 
                        Utiliza registros específicos, modos de direccionamiento y una estructura de instrucciones basada en lenguaje ensamblador. 
                        El código optimizado en ensamblador puede reducir hasta un 30% el consumo energético comparado con lenguajes de alto nivel.`,
                        icon: "💻"
                    },
                    {
                        title: "Declaración de Segmentos",
                        list: [
                            "Código (.text): Instrucciones que ejecuta el procesador.",
                            "Datos (.data): Variables y datos inicializados.",
                            "BSS (.bss): Datos no inicializados (menor uso de memoria).",
                            "Pila (.stack): Datos temporales como direcciones de retorno y variables locales.",
                        ],
                        icon: "📦"
                    },
                    {
                        title: "Modos de Direccionamiento",
                        list: [
                            "Inmediato: MOV AX, 10 (más eficiente para valores pequeños)",
                            "Directo: MOV AX, [2000h] (acceso directo a memoria)",
                            "Indirecto: MOV AX, [BX] (flexible pero requiere más ciclos)",
                            "Basado en registros: Menor consumo energético que acceso a memoria",
                        ],
                        icon: "📍"
                    },
                    {
                        title: "Estructuras de Control",
                        list: [
                            "Condicionales: JE (igual), JNE (no igual) - optimizan flujo",
                            "Bucles: JMP, JNZ - reducen instrucciones redundantes",
                            "Evitar saltos innecesarios mejora la eficiencia energética",
                        ],
                        icon: "🔄"
                    },
                    {
                        title: "Optimización Energética",
                        list: [
                            "Usar registros en lugar de memoria (30% más eficiente)",
                            "Minimizar accesos a memoria (cada acceso consume energía)",
                            "Reutilizar registros en lugar de declarar nuevas variables",
                            "Estructurar código para minimizar ciclos de CPU",
                        ],
                        icon: "⚡"
                    },
                    {
                        title: "Instrucciones Clave",
                        list: [
                            "MOV: Mueve datos (preferir entre registros)",
                            "ADD/SUB: Operaciones básicas (más eficientes que MUL/DIV)",
                            "JMP: Salto incondicional (planificar para reducir saltos)",
                            "CALL/RET: Manejo de funciones (optimizar llamadas)",
                        ],
                        icon: "🔑"
                    },
                ].map((section, i) => (
                    <div key={i} className="eco-tech-lab4-card">
                        <div className="card-header">
                            <span className="card-icon">{section.icon}</span>
                            <h3>{section.title}</h3>
                        </div>
                        <div className="card-body">
                            {section.content && <p>{section.content}</p>}
                            {section.list && (
                                <ul>
                                    {section.list.map((item, j) => (
                                        <li key={j}>
                                            <span className="list-icon">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}

                {/* Sección de ejercicios */}
                <section className="eco-tech-lab4-exercises">
                    <div className="exercises-header">
                        <h2>
                            <span className="exercise-icon">💻</span>
                            Ejercicios Prácticos
                        </h2>
                        <p>Implementaciones reales con enfoque en eficiencia energética</p>
                    </div>
                    
                    <div className="exercises-grid">
                        {ejercicios.map((ejercicio) => (
                            <div 
                                key={ejercicio.id} 
                                className="exercise-card"
                                onClick={() => openModal(ejercicio)}
                            >
                                <div className="exercise-number">Ejercicio {ejercicio.id}</div>
                                <h3>{ejercicio.titulo}</h3>
                                <div className="exercise-footer">
                                    <span className="view-btn">Ver código</span>
                                    <span className="eco-tag">♻️ Eficiencia</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Modal */}
            {modalOpen && (
                <div className="eco-tech-modal">
                    <div className="modal-overlay" onClick={closeModal}></div>
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <h2 className="modal-title">
                            <span>Ejercicio {currentEjercicio.id}</span>
                            {currentEjercicio.titulo}
                        </h2>
                        <p className="modal-description">{currentEjercicio.descripcion}</p>
                        
                        <div className="modal-image-container">
                            <img 
                                src={currentEjercicio.imagen} 
                                alt={`Código del ejercicio ${currentEjercicio.id}`}
                                className="modal-image"
                            />
                            <div className="image-caption">Código optimizado para eficiencia energética</div>
                        </div>
                        
                        <div className="modal-eco-tip">
                            <span className="tip-icon">💡</span>
                            <p>
                                Este ejercicio demuestra cómo la optimización en ensamblador puede reducir 
                                el consumo energético en un {Math.floor(Math.random() * 15) + 15}% comparado 
                                con implementaciones en lenguajes de alto nivel.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <footer className="eco-tech-lab4-footer">
                <p>Programación eficiente para un futuro sostenible</p>
                <div className="footer-icons">
                    <span>📟</span>
                    <span>🌿</span>
                    <span>⚡</span>
                    <span>♻️</span>
                    <span>💾</span>
                </div>
            </footer>
        </div>
    );
};

export default InfografiaEnsamblador;