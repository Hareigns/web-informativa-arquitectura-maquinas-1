import React, { useState } from 'react';
import '../../assets/styles/lab7.css';

const MemoriaMicro = () => {
  const [mostrarMemorias, setMostrarMemorias] = useState(false);

  return (
    <div className="eco-tech-lab-container">
      <header className="eco-tech-lab-header">
        <h1 className="eco-tech-lab-title">Laboratorio 7: Memoria en Microcontroladores</h1>
        <p className="eco-tech-lab-subtitle">Optimización de recursos de memoria para sistemas sostenibles</p>
        <div className="eco-tech-lab-badge">
          <span>💾</span> Gestión eficiente de memoria para bajo consumo
        </div>
      </header>

      <main className="eco-tech-lab-content">
        <section className="eco-tech-lab-card">
          <div className="card-header">
            <h2>Mapa Conceptual</h2>
          </div>
          <div className="card-body">
            <p className="concept-intro">
              Este laboratorio abarca conceptos clave sobre la memoria y características de los microcontroladores con enfoque en eficiencia energética.
            </p>

            <div className="concept-grid">
              <div className="concept-column">
                <h3 className="concept-title">La Memoria en los Microcontroladores</h3>
                <ul className="concept-list">
                  <li><span className="icon">📝</span> Almacenamiento de programa</li>
                  <li><span className="icon">🔄</span> Área de variables</li>
                  <li><span className="icon">⚙️</span> Registros especiales</li>
                </ul>
              </div>

              <div className="concept-column">
                <h3 className="concept-title">Características de los Microcontroladores</h3>
                <ul className="concept-list">
                  <li><span className="icon">🧮</span> ALU y el registro W</li>
                  <li><span className="icon">⏱️</span> Ciclos de máquina y Pipeline</li>
                  <li><span className="icon">🔌</span> Osciladores</li>
                  <li><span className="icon">🔄</span> Fuentes de Reset</li>
                  <li><span className="icon">🐶</span> Perro Guardián</li>
                  <li><span className="icon">🏭</span> Fabricantes de Microcontroladores</li>
                </ul>
              </div>
            </div>

            <div className="eco-tip">
              <span className="tip-icon">💡</span>
              <p>Una gestión eficiente de memoria reduce el consumo energético al minimizar accesos innecesarios y optimizar el uso de recursos.</p>
            </div>
          </div>
        </section>

        <section className="eco-tech-lab-card">
          <div className="card-header">
            <h2>Tipos de Memoria en Microcontroladores</h2>
          </div>
          <div className="card-body">
            <p>Incluye definición, propósito y diferencias principales con enfoque en sostenibilidad.</p>

            <div className="toggle-section">
              <button 
                className="eco-tech-btn" 
                onClick={() => setMostrarMemorias(!mostrarMemorias)}
              >
                {mostrarMemorias ? 'Ocultar Tipos de Memoria' : 'Mostrar Tipos de Memoria'}
                <span className="toggle-icon">{mostrarMemorias ? '↑' : '↓'}</span>
              </button>
            </div>

            {mostrarMemorias && (
              <div className="memory-types-container">
                {/* RAM */}
                <div className="memory-type-card">
                  <div className="memory-header">
                    <span className="memory-icon">🧠</span>
                    <h3>1. RAM (Memoria de Acceso Aleatorio)</h3>
                  </div>
                  <div className="memory-content">
                    <p>Memoria volátil usada para almacenar variables temporales. Se borra al apagar el sistema.</p>
                    <div className="tech-details">
                      <h4>Impacto energético:</h4>
                      <ul>
                        <li>Requiere alimentación constante</li>
                        <li>Consumo proporcional a la frecuencia de acceso</li>
                        <li>Optimizable mediante técnicas de bajo consumo</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ROM */}
                <div className="memory-type-card">
                  <div className="memory-header">
                    <span className="memory-icon">📜</span>
                    <h3>2. ROM (Memoria de Solo Lectura)</h3>
                  </div>
                  <div className="memory-content">
                    <p>Contiene el programa que no se modifica. Es permanente y se graba durante la fabricación.</p>
                    <div className="tech-details">
                      <h4>Impacto energético:</h4>
                      <ul>
                        <li>Consumo mínimo una vez programada</li>
                        <li>No requiere refresco</li>
                        <li>Ideal para código permanente</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* EPROM */}
                <div className="memory-type-card">
                  <div className="memory-header">
                    <span className="memory-icon">🔆</span>
                    <h3>3. EPROM</h3>
                  </div>
                  <div className="memory-content">
                    <p>Puede borrarse con luz UV y reprogramarse. Fue común antes del uso de memoria Flash.</p>
                    <div className="tech-details">
                      <h4>Impacto energético:</h4>
                      <ul>
                        <li>Proceso de borrado consume energía externa</li>
                        <li>Menos eficiente que tecnologías modernas</li>
                        <li>Poco usado actualmente por su impacto ambiental</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* EEPROM */}
                <div className="memory-type-card">
                  <div className="memory-header">
                    <span className="memory-icon">🔄</span>
                    <h3>4. EEPROM</h3>
                  </div>
                  <div className="memory-content">
                    <p>Permite ser borrada y escrita eléctricamente múltiples veces. Útil para guardar configuraciones.</p>
                    <div className="tech-details">
                      <h4>Impacto energético:</h4>
                      <ul>
                        <li>Alto consumo durante escritura/borrado</li>
                        <li>Bajo consumo en modo lectura</li>
                        <li>Vida útil limitada (~100,000 ciclos)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Flash */}
                <div className="memory-type-card">
                  <div className="memory-header">
                    <span className="memory-icon">⚡</span>
                    <h3>5. Flash</h3>
                  </div>
                  <div className="memory-content">
                    <p>Memoria no volátil moderna, más rápida que EEPROM. Usada para almacenar programas.</p>
                    <div className="tech-details">
                      <h4>Impacto energético:</h4>
                      <ul>
                        <li>Eficiente en operaciones en bloque</li>
                        <li>Bajo consumo en modo standby</li>
                        <li>Mayor densidad = menor energía por bit</li>
                      </ul>
                    </div>
                    <div className="eco-tip">
                      <span className="tip-icon">🌱</span>
                      <p>La memoria Flash es la más ecológica actualmente por su alta densidad y bajo consumo energético por operación.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="eco-tech-lab-card">
          <div className="card-header">
            <h2>Comparativa de Memorias</h2>
          </div>
          <div className="card-body">
            <div className="memory-comparison">
              <table>
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Volatilidad</th>
                    <th>Consumo</th>
                    <th>Velocidad</th>
                    <th>Sostenibilidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RAM</td>
                    <td>Volátil</td>
                    <td>Alto</td>
                    <td>Muy rápida</td>
                    <td>⭐</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>No volátil</td>
                    <td>Muy bajo</td>
                    <td>Rápida</td>
                    <td>⭐⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td>EPROM</td>
                    <td>No volátil</td>
                    <td>Moderado</td>
                    <td>Lenta</td>
                    <td>⭐</td>
                  </tr>
                  <tr>
                    <td>EEPROM</td>
                    <td>No volátil</td>
                    <td>Moderado</td>
                    <td>Lenta</td>
                    <td>⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td>Flash</td>
                    <td>No volátil</td>
                    <td>Bajo</td>
                    <td>Rápida</td>
                    <td>⭐⭐⭐⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <footer className="eco-tech-lab-footer">
        <p>Gestión inteligente de memoria para un futuro tecnológico sostenible</p>
        <div className="footer-icons">
          <span>💾</span>
          <span>🔋</span>
          <span>🌍</span>
        </div>
      </footer>
    </div>
  );
};

export default MemoriaMicro;