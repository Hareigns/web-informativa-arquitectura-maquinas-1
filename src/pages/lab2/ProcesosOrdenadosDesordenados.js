import React from "react";
import "../../assets/styles/lab2.css";

const ProcesosOrdenadosDesordenados = () => {
    return (
        <div className="eco-tech-process-container">
            <header className="eco-tech-process-header">
                <h1 className="eco-tech-process-title">Procesos Ordenados y Desordenados</h1>
                <p className="eco-tech-process-subtitle">Eficiencia en la ejecución de tareas</p>
            </header>

            <main className="eco-tech-process-content">
                <section className="eco-tech-process-card">
                    <div className="process-card-header">
                        <h2>¿Qué es un Proceso?</h2>
                    </div>
                    <div className="process-card-body">
                        <p>
                            Un <strong>proceso</strong> es un programa en ejecución que requiere recursos del sistema para funcionar, 
                            como CPU, memoria, archivos y dispositivos de entrada/salida.
                        </p>
                        <p>
                            Los procesos pueden clasificarse por la manera en que son ejecutados, principalmente en 
                            <span className="highlight-green"> procesos ordenados</span> y 
                            <span className="highlight-blue"> procesos desordenados</span>.
                        </p>
                    </div>
                </section>

                <div className="process-columns">
                    <section className="eco-tech-process-card ordered-process">
                        <div className="process-card-header">
                            <h2>
                                <span className="process-icon">🔢</span>
                                Procesos Ordenados
                            </h2>
                        </div>
                        <div className="process-card-body">
                            <p>
                                Son aquellos que siguen una secuencia lógica y estructurada. Cada paso depende del anterior, 
                                por lo que el orden de ejecución es crucial para su correcto funcionamiento.
                            </p>
                            <ul className="process-features">
                                <li>La ejecución es determinística y predecible</li>
                                <li>Se aplican comúnmente en sistemas donde el control de flujo es estricto</li>
                                <li>Ejemplo: algoritmos secuenciales, carga del sistema operativo, instalación de software</li>
                            </ul>
                            <div className="process-efficiency">
                                <span className="efficiency-icon">🌿</span>
                                <p>Los procesos ordenados suelen ser más eficientes energéticamente al minimizar accesos a memoria</p>
                            </div>
                        </div>
                    </section>

                    <section className="eco-tech-process-card unordered-process">
                        <div className="process-card-header">
                            <h2>
                                <span className="process-icon">🌀</span>
                                Procesos Desordenados
                            </h2>
                        </div>
                        <div className="process-card-body">
                            <p>
                                Son procesos cuya ejecución no sigue necesariamente un orden fijo. Pueden depender de eventos 
                                externos o ejecutarse en paralelo sin coordinación explícita.
                            </p>
                            <ul className="process-features">
                                <li>Se presentan en entornos donde la concurrencia es necesaria</li>
                                <li>Ejemplo: procesos en segundo plano, hilos en aplicaciones multiusuario, servicios web</li>
                                <li>Su gestión puede requerir sincronización, semáforos o mecanismos de comunicación</li>
                            </ul>
                            <div className="process-efficiency">
                                <span className="efficiency-icon">⚡</span>
                                <p>Los procesos desordenados permiten mejor aprovechamiento de recursos en sistemas multicore</p>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="eco-tech-process-card importance-section">
                    <div className="process-card-header">
                        <h2>Importancia de esta Clasificación</h2>
                    </div>
                    <div className="process-card-body">
                        <p>
                            Distinguir entre procesos ordenados y desordenados permite diseñar sistemas eficientes, 
                            especialmente en entornos multitarea, programación paralela y sistemas distribuidos.
                        </p>
                        <div className="process-diagram">
                            <div className="diagram-row">
                                <div className="diagram-item">
                                    <div className="diagram-node ordered-node">
                                        <span>Ordenados</span>
                                    </div>
                                    <div className="diagram-line"></div>
                                    <div className="diagram-label">Eficiencia energética</div>
                                </div>
                                <div className="diagram-item">
                                    <div className="diagram-node unordered-node">
                                        <span>Desordenados</span>
                                    </div>
                                    <div className="diagram-line"></div>
                                    <div className="diagram-label">Escalabilidad</div>
                                </div>
                            </div>
                            <div className="diagram-meeting">
                                <div className="meeting-point">
                                    <span>🔄</span>
                                    <p>Balance óptimo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="eco-tech-process-card conclusion-card">
                    <div className="process-card-header">
                        <h2>Conclusión</h2>
                    </div>
                    <div className="process-card-body">
                        <p>
                            Comprender el comportamiento de los procesos permite al desarrollador o ingeniero tomar decisiones 
                            clave sobre la arquitectura del software, el rendimiento del sistema y la eficiencia en la ejecución 
                            de tareas.
                        </p>
                        <div className="eco-tech-message">
                            <span className="message-icon">🌍</span>
                            <p>
                                La optimización de procesos contribuye a reducir el consumo energético en centros de datos, 
                                haciendo la computación más sostenible ambientalmente.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="eco-tech-process-footer">
                <p>Tecnología eficiente para un futuro más verde</p>
                <div className="footer-icons">
                    <span>♻️</span>
                    <span>💻</span>
                    <span>🌱</span>
                </div>
            </footer>
        </div>
    );
};

export default ProcesosOrdenadosDesordenados;