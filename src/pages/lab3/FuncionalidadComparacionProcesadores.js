import React from "react";
import "../../assets/styles/lab3.css";

const FuncionalidadComparacionProcesadores = () => {
    return (
        <div className="eco-tech-lab3-container">
            <header className="eco-tech-lab3-header">
                <h1 className="eco-tech-lab3-title">Funcionalidad y Comparación de Procesadores</h1>
                <p className="eco-tech-lab3-subtitle">Evolución tecnológica con conciencia ambiental</p>
            </header>

            <main className="eco-tech-lab3-content">
                <section className="eco-tech-lab3-section">
                    <div className="section-header">
                        <h2>
                            <span className="icon">💡</span>
                            Conceptos y su funcionalidad
                        </h2>
                        <p className="section-description">
                            Componentes clave en la arquitectura de procesadores y su impacto en la eficiencia energética
                        </p>
                    </div>

                    <div className="concept-grid">
                        {[
                            {
                                title: "Interfaz programable (8255)",
                                icon: "🔌",
                                points: [
                                    "Circuito de Intel para conectar dispositivos E/S con la CPU",
                                    "24 pines divididos en tres puertos de 8 bits: A, B y C",
                                    "Usado en sistemas embebidos, control industrial y automatización"
                                ],
                                color: "var(--blue-tech)"
                            },
                            {
                                title: "Interrupciones programables (8259)",
                                icon: "⚠️",
                                points: [
                                    "Controlador de interrupciones para múltiples dispositivos",
                                    "Permite priorizar y manejar interrupciones sin conflictos",
                                    "Usado en sistemas x86 y tiempo real"
                                ],
                                color: "var(--green-eco)"
                            },
                            {
                                title: "Comunicación serial",
                                icon: "📡",
                                points: [
                                    "Transmisión de datos bit por bit por un solo canal",
                                    "Ejemplos: RS-232, SPI, I2C, UART",
                                    "Popular por eficiencia y bajo consumo energético"
                                ],
                                color: "var(--purple-tech)"
                            },
                            {
                                title: "Arquitectura x86",
                                icon: "🏗️",
                                points: [
                                    "Procesadores Intel/AMD con instrucciones x86",
                                    "Desde el Intel 8086 hasta modernos de 64 bits",
                                    "Evolución hacia mayor eficiencia energética"
                                ],
                                color: "var(--orange-tech)"
                            },
                            {
                                title: "Modelos de memoria",
                                icon: "🧠",
                                points: [
                                    "Segmentada: divide código, datos y pila",
                                    "Plana: acceso continuo a memoria",
                                    "Caché: reduce consumo energético al minimizar accesos a RAM"
                                ],
                                color: "var(--teal-eco)"
                            },
                            {
                                title: "Registros",
                                icon: "⚡",
                                points: [
                                    "Espacios internos de CPU para operaciones rápidas",
                                    "Incluye registros AX, BX, CX, DX, entre otros",
                                    "Clave para ejecución eficiente de instrucciones"
                                ],
                                color: "var(--yellow-tech)"
                            }
                        ].map((item, index) => (
                            <div 
                                key={index} 
                                className="concept-card"
                                style={{ borderTop: `4px solid ${item.color}` }}
                            >
                                <div className="concept-header">
                                    <span className="concept-icon">{item.icon}</span>
                                    <h3>{item.title}</h3>
                                </div>
                                <ul className="concept-points">
                                    {item.points.map((point, i) => (
                                        <li key={i}>
                                            <span className="point-icon">•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <div className="concept-footer">
                                    <span className="eco-tag">♻️ Eficiencia energética</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="eco-tech-lab3-section">
                    <div className="section-header">
                        <h2>
                            <span className="icon">📊</span>
                            Evolución de Procesadores
                        </h2>
                        <p className="section-description">
                            Comparación histórica del rendimiento y eficiencia energética
                        </p>
                    </div>

                    <div className="comparison-table-container">
                        <table className="eco-tech-comparison-table">
                            <thead>
                                <tr>
                                    <th>Procesador</th>
                                    <th>Año</th>
                                    <th>Arquitectura</th>
                                    <th>Frecuencia</th>
                                    <th>Núcleos/Hilos</th>
                                    <th>Eficiencia Energética</th>
                                    <th>Características</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Intel 4004", "1971", "4 bits", "740 kHz", "1/1", "🔋", "Primer microprocesador comercial"],
                                    ["Intel 8086", "1978", "16 bits", "5-10 MHz", "1/1", "🔋", "Inicio de la arquitectura x86"],
                                    ["Intel 80286", "1982", "16 bits", "6-25 MHz", "1/1", "🟡", "Soporte para memoria protegida"],
                                    ["Intel 80386", "1985", "32 bits", "12-40 MHz", "1/1", "🟡", "Introduce multitarea y modo protegido"],
                                    ["Intel Pentium", "1993", "32 bits", "60-300 MHz", "1/2", "🟢", "Ejecución en paralelo"],
                                    ["AMD Athlon 64", "2003", "64 bits", "1.8-3.0 GHz", "1/2", "🟢", "Soporte 64 bits, mejora de rendimiento"],
                                    ["Intel Core i7", "2008", "64 bits", "2.66-3.33 GHz", "4/8", "🌿", "Hyper-Threading y Turbo Boost"],
                                    ["AMD Ryzen 5000", "2020", "64 bits", "3.4-4.9 GHz", "8-16/16-32", "🌿", "Eficiencia y rendimiento multinúcleo"],
                                    ["Intel Core i9-13900K", "2022", "64 bits", "5.8 GHz", "24/32", "♻️", "Arquitectura híbrida eco-eficiente"]
                                ].map((row, i) => (
                                    <tr key={i}>
                                        {row.map((cell, j) => (
                                            <td key={j} data-label={j === 0 ? "Procesador" : 
                                                j === 1 ? "Año" : 
                                                j === 2 ? "Arquitectura" : 
                                                j === 3 ? "Frecuencia" : 
                                                j === 4 ? "Núcleos/Hilos" : 
                                                j === 5 ? "Eficiencia" : "Características"}>
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="evolution-timeline">
                        <div className="timeline-bar"></div>
                        <div className="timeline-points">
                            {["1970s", "1980s", "1990s", "2000s", "2010s", "2020s"].map((decade, i) => (
                                <div key={i} className="timeline-point">
                                    <div className="point-marker"></div>
                                    <div className="point-label">{decade}</div>
                                    <div className="point-info">
                                        {i === 0 && "4-8 bits"}
                                        {i === 1 && "16-32 bits"}
                                        {i === 2 && "32 bits"}
                                        {i === 3 && "64 bits"}
                                        {i === 4 && "Multinúcleo"}
                                        {i === 5 && "Eco-diseño"}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="eco-tech-lab3-summary">
                    <div className="summary-card">
                        <h3>Impacto Ambiental de la Evolución</h3>
                        <p>
                            Los procesadores modernos han logrado reducir el consumo energético por operación en un 90% 
                            comparado con los primeros modelos, demostrando que el avance tecnológico puede ir de la 
                            mano con la sostenibilidad ambiental.
                        </p>
                        <div className="eco-stats">
                            <div className="stat-item">
                                <div className="stat-value">90%</div>
                                <div className="stat-label">Menor consumo energético</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">10x</div>
                                <div className="stat-label">Más eficiencia por watt</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">75%</div>
                                <div className="stat-label">Menor generación de calor</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="eco-tech-lab3-footer">
                <p>Tecnología que evoluciona, planeta que perdura</p>
                <div className="footer-icons">
                    <span>💾</span>
                    <span>🌱</span>
                    <span>⚡</span>
                    <span>♻️</span>
                    <span>💻</span>
                </div>
            </footer>
        </div>
    );
};

export default FuncionalidadComparacionProcesadores;