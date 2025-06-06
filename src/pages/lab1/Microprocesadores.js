import React from "react";
import "../../assets/styles/lab1.css";

const Microprocesadores = () => {
    return (
        <div className="eco-tech-container">
            <header className="eco-tech-header">
                <h1 className="eco-tech-title">Microprocesadores</h1>
                <div className="eco-tech-subtitle">Tecnología con conciencia ambiental</div>
            </header>

            <main className="eco-tech-content">
                <section className="eco-tech-card">
                    <div className="card-header">
                        <h2>¿Qué es un Microprocesador?</h2>
                    </div>
                    <div className="card-body">
                        <p>
                            Un <strong>microprocesador</strong> es el circuito integrado central de un computador, 
                            encargado de ejecutar instrucciones y procesar datos. Es conocido como el "cerebro" 
                            de los dispositivos electrónicos.
                        </p>
                        <p>
                            Los microprocesadores modernos incluyen múltiples núcleos, caché, unidades de 
                            procesamiento vectorial y otras características que optimizan su rendimiento.
                        </p>
                    </div>
                </section>

                <section className="eco-tech-card architecture-section">
                    <div className="card-header">
                        <h2>Arquitecturas Comparadas</h2>
                    </div>
                    <div className="card-body">
                        <div className="architecture-columns">
                            <div className="architecture-col von-neumann">
                                <h3>Arquitectura de Von Neumann</h3>
                                <p>
                                    Propuesta por John von Neumann en 1945. Memoria y buses compartidos, 
                                    lo que simplifica el diseño pero puede generar cuellos de botella.
                                </p>
                                <ul>
                                    <li>Memoria compartida para datos e instrucciones</li>
                                    <li>Usada en computadoras personales</li>
                                    <li>Mayor flexibilidad en programación</li>
                                </ul>
                            </div>
                            
                            <div className="architecture-col harvard">
                                <h3>Arquitectura de Harvard</h3>
                                <p>
                                    Buses de datos e instrucciones separados, permitiendo acceso simultáneo 
                                    más eficiente. Usada en sistemas embebidos.
                                </p>
                                <ul>
                                    <li>Memoria separada para instrucciones y datos</li>
                                    <li>Usada en microcontroladores y DSPs</li>
                                    <li>Mayor rendimiento al evitar colisiones</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="eco-tech-card">
                    <div className="card-header">
                        <h2>Diagrama de Bloques</h2>
                    </div>
                    <div className="card-body">
                        <p>
                            Un microprocesador típico consta de varios componentes esenciales que interactúan 
                            para ejecutar instrucciones.
                        </p>
                        <div className="block-diagram">
                            <div className="block-row">
                                <div className="block-component">
                                    <div className="block-icon">💠</div>
                                    <strong>Unidad de Control (CU)</strong>
                                    <p>Interpreta instrucciones y dirige el flujo de datos</p>
                                </div>
                                <div className="block-component">
                                    <div className="block-icon">➕</div>
                                    <strong>Unidad Aritmético-Lógica (ALU)</strong>
                                    <p>Realiza operaciones matemáticas y lógicas</p>
                                </div>
                            </div>
                            <div className="block-row">
                                <div className="block-component">
                                    <div className="block-icon">📊</div>
                                    <strong>Registros</strong>
                                    <p>Memoria rápida para datos temporales</p>
                                </div>
                                <div className="block-component">
                                    <div className="block-icon">🛣️</div>
                                    <strong>Bus de Datos y Dirección</strong>
                                    <p>Transportan información entre componentes</p>
                                </div>
                                <div className="block-component">
                                    <div className="block-icon">⚡</div>
                                    <strong>Memoria Caché</strong>
                                    <p>Almacena datos frecuentes para mayor velocidad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="eco-tech-card conclusion">
                    <div className="card-header">
                        <h2>Conclusión</h2>
                    </div>
                    <div className="card-body">
                        <p>
                            Los microprocesadores han evolucionado significativamente desde sus inicios. 
                            Comprender sus arquitecturas y funcionamiento es esencial para optimizar su 
                            rendimiento y aplicaciones, siempre considerando su impacto ambiental.
                        </p>
                        <div className="eco-message">
                            <span className="leaf-icon">🌱</span>
                            <p>
                                La tecnología debe avanzar de la mano con la sostenibilidad. 
                                Los diseños eficientes en energía reducen la huella de carbono.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="eco-tech-footer">
                <p>Tecnología sostenible para un futuro mejor</p>
                <div className="footer-icons">
                    <span>♻️</span>
                    <span>💻</span>
                    <span>🌍</span>
                </div>
            </footer>
        </div>
    );
};

export default Microprocesadores;