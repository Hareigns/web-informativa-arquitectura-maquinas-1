import React, { useState } from 'react';
import "../../assets/styles/lab12.css";

const Lab12 = () => {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  return (
    <div className="eco-tech-lab-container">
      <header className="eco-tech-lab-header">
        <h1 className="eco-tech-lab-title">Laboratorio 12: Transmisión y Conversión Digital</h1>
        <p className="eco-tech-lab-subtitle">Comunicación eficiente para sistemas sostenibles</p>
        <div className="eco-tech-lab-badge">
          <span>📡</span> Optimización de transmisión de datos con bajo consumo
        </div>
      </header>

      <main className="eco-tech-lab-content">
        <section className="eco-tech-lab-card">
          <div className="card-header">
            <h2>Resumen Temático</h2>
          </div>
          <div className="card-body">
            <ul className="concept-list">
              <li>🧭 <strong>Puerto de Comunicación Serial</strong></li>
              <li>📤 Módulo Transmisor</li>
              <li>📥 Módulo Receptor</li>
              <li>💻 Comunicación Serial con la Computadora</li>
              <li>🔄 <strong>Conversión Analógico/Digital</strong></li>
              <ul className="sublist">
                <li>📋 Registros Internos</li>
                <li>⏱ Tiempo de Conversión por Bit</li>
                <li>📶 Consideraciones de Ancho de Banda</li>
                <li>📈 Muestreo Periódico de Señales Continuas</li>
              </ul>
            </ul>
            <div className="eco-tip">
              <span className="tip-icon">💡</span>
              <p>La optimización de la transmisión de datos reduce el consumo energético en sistemas embebidos, contribuyendo a la sostenibilidad tecnológica.</p>
            </div>
          </div>
        </section>

        <div className="toggle-section">
          <button 
            className="eco-tech-btn" 
            onClick={() => setMostrarContenido(!mostrarContenido)}
          >
            {mostrarContenido ? 'Ocultar Ejercicios Prácticos' : 'Mostrar Ejercicios Prácticos'}
            <span className="toggle-icon">{mostrarContenido ? '↑' : '↓'}</span>
          </button>
        </div>

        {mostrarContenido && (
          <div className="exercises-container">
            {/* Ejercicio 1 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 1 – Tiempo de conversión a 2 Mbps</h2>
              </div>
              <div className="card-body">
                <p className="exercise-description">
                  Una señal digital se transmite a 2 Mbps.
                </p>
                <div className="calculation-block">
                  <p>Tiempo por bit = 1 / frecuencia</p>
                  <p>T = 1 / 2,000,000 = <strong>0.5 µs</strong></p>
                </div>
                <div className="result-block">
                  <h3>Respuesta:</h3>
                  <p>0.5 microsegundos por bit</p>
                </div>
                <div className="eco-tip">
                  <span className="tip-icon">🌱</span>
                  <p>Mayores velocidades de transmisión permiten completar las operaciones más rápido, permitiendo que el procesador entre en modos de bajo consumo más frecuentemente.</p>
                </div>
              </div>
            </section>

            {/* Ejercicio 2 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 2 – Tiempo por bit a 9600 bps</h2>
              </div>
              <div className="card-body">
                <p className="exercise-description">
                  Velocidad: 9600 bps.
                </p>
                <div className="calculation-block">
                  <p>T = 1 / 9600 = 0.00010417 s = <strong>104.17 µs</strong></p>
                </div>
                <div className="result-block">
                  <h3>Respuesta:</h3>
                  <p>104.17 microsegundos</p>
                </div>
              </div>
            </section>

            {/* Ejercicio 3 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 3 – Tiempo por bit a 115200 bps</h2>
              </div>
              <div className="card-body">
                <div className="calculation-block">
                  <p>T = 1 / 115200 = 0.00000868 s = <strong>8.68 µs</strong></p>
                </div>
                <div className="result-block">
                  <h3>Respuesta:</h3>
                  <p>8.68 microsegundos</p>
                </div>
                <div className="tech-details">
                  <h3>Comparación de Velocidades:</h3>
                  <ul>
                    <li><strong>9600 bps:</strong> Adecuado para aplicaciones de bajo consumo</li>
                    <li><strong>115200 bps:</strong> Mayor velocidad pero mayor consumo energético</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Ejercicio 4 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 4 – Tasa de transmisión para 50 ns</h2>
              </div>
              <div className="card-body">
                <p className="exercise-description">
                  Tiempo por bit: 50 ns
                </p>
                <div className="calculation-block">
                  <p>T = 50 ns = 50 × 10<sup>-9</sup> s</p>
                  <p>Velocidad = 1 / T = <strong>20,000,000 bps</strong> = 20 Mbps</p>
                </div>
                <div className="result-block">
                  <h3>Respuesta:</h3>
                  <p>20 Mbps</p>
                </div>
              </div>
            </section>

            {/* Ejercicio 5 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 5 – Bitrate con 0.25 ms por bit</h2>
              </div>
              <div className="card-body">
                <p className="exercise-description">
                  Tiempo por bit: 0.25 ms
                </p>
                <div className="calculation-block">
                  <p>T = 0.25 ms = 0.00025 s</p>
                  <p>Bitrate = 1 / 0.00025 = <strong>4000 bps</strong></p>
                </div>
                <div className="result-block">
                  <h3>Respuesta:</h3>
                  <p>4000 bps</p>
                </div>
                <div className="eco-tip">
                  <span className="tip-icon">⚡</span>
                  <p>Seleccionar la velocidad de transmisión adecuada según los requerimientos de la aplicación permite optimizar el balance entre rendimiento y consumo energético.</p>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="eco-tech-lab-footer">
        <p>Comunicación digital eficiente para un futuro tecnológico sostenible</p>
        <div className="footer-icons">
          <span>📡</span>
          <span>🔋</span>
          <span>🌍</span>
        </div>
      </footer>
    </div>
  );
};

export default Lab12;