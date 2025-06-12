import React, { useState } from 'react';
import '../../assets/styles/lab6.css';

function Lab6Microcontroladores() {
  const [showConceptos, setShowConceptos] = useState(false);
  const [showArquitecturas, setShowArquitecturas] = useState(false);
  const [showAplicaciones, setShowAplicaciones] = useState(false);

  return (
    <div className="eco-tech-lab-container">
      <header className="eco-tech-lab-header">
        <h1 className="eco-tech-lab-title">Laboratorio 6: Microcontroladores</h1>
        <p className="eco-tech-lab-subtitle">Arquitectura, Tipos y Aplicaciones Sostenibles</p>
        <div className="eco-tech-lab-badge">
          <span>🌱</span> Tecnología eficiente para un futuro sostenible
        </div>
      </header>

      <main className="eco-tech-lab-content">
        {/* Tarjeta de Objetivos */}
        <section className="eco-tech-lab-card">
          <div className="card-header">
            <div className="header-content">
              <span className="card-icon">🎯</span>
              <h2>Objetivos del Laboratorio</h2>
            </div>
          </div>
          <div className="card-body">
            <p>
              Comprender los microcontroladores desde su arquitectura hasta sus aplicaciones prácticas, 
              con especial énfasis en su eficiencia energética y potencial para soluciones sostenibles.
            </p>
            <div className="objective-grid">
              <div className="objective-item">
                <span className="obj-icon">🏗️</span>
                <p>Analizar arquitecturas internas</p>
              </div>
              <div className="objective-item">
                <span className="obj-icon">📊</span>
                <p>Comparar tipos y familias</p>
              </div>
              <div className="objective-item">
                <span className="obj-icon">💡</span>
                <p>Identificar aplicaciones eficientes</p>
              </div>
              <div className="objective-item">
                <span className="obj-icon">⚡</span>
                <p>Evaluar consumo energético</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tarjeta de Conceptos Clave */}
        <section className="eco-tech-lab-card">
          <div className="card-header">
            <div className="header-content">
              <span className="card-icon">📚</span>
              <h2>Conceptos Clave</h2>
            </div>
          </div>
          <div className="card-body">
            <div className="toggle-section">
              <button 
                className="eco-tech-btn" 
                onClick={() => setShowConceptos(!showConceptos)}
              >
                {showConceptos ? 'Ocultar Conceptos' : 'Mostrar Conceptos'}
                <span className="toggle-icon">{showConceptos ? '↑' : '↓'}</span>
              </button>
            </div>

            {showConceptos && (
              <div className="conceptos-container">
                <div className="concepto-item">
                  <h3 className="concept-title">
                    <span className="concept-icon">🏛️</span>
                    Arquitectura de Microcontroladores
                  </h3>
                  <p>Organización interna de CPU, memoria y periféricos para optimizar rendimiento y consumo energético.</p>
                </div>

                <div className="concepto-item">
                  <h3 className="concept-title">
                    <span className="concept-icon">🔢</span>
                    Tipos por Ancho de Bus
                  </h3>
                  <ul>
                    <li><strong>8 bits:</strong> Bajo consumo (PIC, AVR)</li>
                    <li><strong>16 bits:</strong> Balance potencia/consumo</li>
                    <li><strong>32 bits:</strong> Alto rendimiento (ARM)</li>
                  </ul>
                </div>

                <div className="concepto-item">
                  <h3 className="concept-title">
                    <span className="concept-icon">🏗️</span>
                    Arquitecturas Fundamentales
                  </h3>
                  <div className="arquitectura-comparison">
                    <div className="arch-card">
                      <h4>Harvard</h4>
                      <p>Memorias separadas para datos e instrucciones</p>
                      <div className="eco-badge">+ Eficiencia</div>
                    </div>
                    <div className="arch-card">
                      <h4>Von Neumann</h4>
                      <p>Un solo bus para datos e instrucciones</p>
                      <div className="eco-badge">+ Simplicidad</div>
                    </div>
                  </div>
                </div>

                <div className="concepto-item">
                  <h3 className="concept-title">
                    <span className="concept-icon">⚙️</span>
                    Conjunto de Instrucciones
                  </h3>
                  <div className="instruction-comparison">
                    <div>
                      <h4>CISC</h4>
                      <ul>
                        <li>Instrucciones complejas</li>
                        <li>Menos eficiente energéticamente</li>
                      </ul>
                    </div>
                    <div>
                      <h4>RISC</h4>
                      <ul>
                        <li>Instrucciones simples</li>
                        <li>Mayor eficiencia energética</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Tarjeta de Aplicaciones */}
        <section className="eco-tech-lab-card">
          <div className="card-header">
            <div className="header-content">
              <span className="card-icon">🌍</span>
              <h2>Aplicaciones Sostenibles</h2>
            </div>
          </div>
          <div className="card-body">
            <div className="toggle-section">
              <button 
                className="eco-tech-btn" 
                onClick={() => setShowAplicaciones(!showAplicaciones)}
              >
                {showAplicaciones ? 'Ocultar Aplicaciones' : 'Mostrar Aplicaciones'}
                <span className="toggle-icon">{showAplicaciones ? '↑' : '↓'}</span>
              </button>
            </div>

            {showAplicaciones && (
              <div className="aplicaciones-container">
                <div className="aplicacion-card">
                  <div className="app-header">
                    <span className="app-icon">☀️</span>
                    <h3>Sistemas Solares</h3>
                  </div>
                  <p>Control de paneles solares y optimización de energía.</p>
                  <div className="tech-details">
                    <h4>Microcontroladores recomendados:</h4>
                    <ul>
                      <li>PIC para sistemas pequeños</li>
                      <li>ARM Cortex-M para sistemas complejos</li>
                    </ul>
                  </div>
                </div>

                <div className="aplicacion-card">
                  <div className="app-header">
                    <span className="app-icon">💧</span>
                    <h3>Gestión de Agua</h3>
                  </div>
                  <p>Sistemas de riego eficiente y monitoreo de recursos hídricos.</p>
                  <div className="eco-impact">
                    <span className="impact-icon">🌱</span>
                    <p>Hasta 60% de ahorro en consumo de agua</p>
                  </div>
                </div>

                <div className="aplicacion-card">
                  <div className="app-header">
                    <span className="app-icon">🏠</span>
                    <h3>Domótica</h3>
                  </div>
                  <p>Automatización de hogares para reducir consumo energético.</p>
                  <div className="tech-details">
                    <h4>Tecnologías clave:</h4>
                    <ul>
                      <li>ESP32 para conectividad</li>
                      <li>STM32 para procesamiento</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Tarjeta de Comparativa */}
        <section className="eco-tech-lab-card">
          <div className="card-header">
            <div className="header-content">
              <span className="card-icon">📊</span>
              <h2>Comparativa de Familias</h2>
            </div>
          </div>
          <div className="card-body">
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Familia</th>
                    <th>Consumo</th>
                    <th>Rendimiento</th>
                    <th>Costo</th>
                    <th>Sostenibilidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PIC (8-bit)</td>
                    <td>Muy bajo</td>
                    <td>Básico</td>
                    <td>Bajo</td>
                    <td>⭐⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td>AVR</td>
                    <td>Bajo</td>
                    <td>Medio</td>
                    <td>Moderado</td>
                    <td>⭐⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td>ARM Cortex-M</td>
                    <td>Variable</td>
                    <td>Alto</td>
                    <td>Moderado/Alto</td>
                    <td>⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td>ESP32</td>
                    <td>Moderado</td>
                    <td>Alto</td>
                    <td>Moderado</td>
                    <td>⭐⭐⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="eco-tip">
              <span className="tip-icon">💡</span>
              <p>Para aplicaciones sostenibles, los microcontroladores de bajo consumo como PIC y AVR suelen ser la mejor opción.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="eco-tech-lab-footer">
        <p>Microcontroladores: La tecnología al servicio de la sostenibilidad</p>
        <div className="footer-icons">
          <span>🔌</span>
          <span>📟</span>
          <span>🌿</span>
        </div>
      </footer>
    </div>
  );
}

export default Lab6Microcontroladores;