import React, { useState } from 'react';
import '../../assets/styles/lab8.css';

const Lab8 = () => {
  const [mostrarEjercicios, setMostrarEjercicios] = useState(false);

  return (
    <div className="eco-tech-lab-container">
      <header className="eco-tech-lab-header">
        <h1 className="eco-tech-lab-title">Laboratorio 8: Arquitectura de los PIC</h1>
        <p className="eco-tech-lab-subtitle">Optimización de recursos en sistemas embebidos</p>
        <div className="eco-tech-lab-badge">
          <span>🖥️</span> Eficiencia energética en microcontroladores
        </div>
      </header>

      <main className="eco-tech-lab-content">
        <section className="eco-tech-lab-card">
          <div className="card-header">
            <h2>Mapa Mental: Arquitectura de los PIC</h2>
          </div>
          <div className="card-body">
            <ul className="concept-list">
              <li><span className="icon">📊</span> Gamas baja, media y alta</li>
              <li><span className="icon">🧠</span> Memoria de programa</li>
              <li><span className="icon">🔍</span> Modos de Direccionamiento</li>
              <li><span className="icon">💾</span> Memoria de Datos</li>
              <li><span className="icon">🗺️</span> Mapa de Memoria: SFR y GPR – Bancos</li>
              <li><span className="icon">🔋</span> Memoria EEPROM</li>
            </ul>
            <div className="eco-tip">
              <span className="tip-icon">💡</span>
              <p>La arquitectura eficiente de los PIC permite bajo consumo energético, ideal para aplicaciones sostenibles.</p>
            </div>
          </div>
        </section>

        <div className="toggle-section">
          <button 
            className="eco-tech-btn" 
            onClick={() => setMostrarEjercicios(!mostrarEjercicios)}
          >
            {mostrarEjercicios ? 'Ocultar Ejercicios' : 'Mostrar Ejercicios'}
            <span className="toggle-icon">{mostrarEjercicios ? '↑' : '↓'}</span>
          </button>
        </div>

        {mostrarEjercicios && (
          <div className="exercises-container">
            {/* Ejercicio 1 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 1: Identificación de Componentes</h2>
              </div>
              <div className="card-body">
                <ul className="tech-list">
                  <li><strong>CPU:</strong> Ejecuta instrucciones</li>
                  <li><strong>Memoria de Programa:</strong> Almacena el código</li>
                  <li><strong>Memoria de Datos:</strong> Guarda variables</li>
                  <li><strong>Registros GPR:</strong> Uso general</li>
                  <li><strong>Puerto GPIO:</strong> Entrada/Salida</li>
                  <li><strong>Timer/Contador:</strong> Medición de tiempo</li>
                </ul>
              </div>
            </section>

            {/* Ejercicio 2 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 2: Conjunto de Instrucciones</h2>
              </div>
              <div className="card-body">
                <ul className="tech-list">
                  <li><strong>MOVLW:</strong> Carga literal a W</li>
                  <li><strong>BSF:</strong> Setea bit en un registro</li>
                  <li><strong>GOTO:</strong> Salta a una dirección</li>
                </ul>
                <div className="eco-tip">
                  <span className="tip-icon">⚡</span>
                  <p>Las instrucciones optimizadas permiten ejecución más rápida, reduciendo el consumo energético.</p>
                </div>
              </div>
            </section>

            {/* Ejercicio 3 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 3: Uso de Periféricos</h2>
              </div>
              <div className="card-body">
                <p>Aplicación: Encender LED con botón</p>
                <ul className="tech-list">
                  <li>GPIO para LED y botón</li>
                  <li>Uso de interrupción externa para detectar el botón</li>
                </ul>
                <div className="code-block">
                  <pre>
{`; Configurar interrupción
BSF INTCON, INTE   ; Habilitar interrupción externa
BSF INTCON, GIE    ; Habilitar interrupciones globales

; Rutina de interrupción
ORG 0x04
BTFSC INTCON, INTF ; Verificar bandera de interrupción
CALL EncenderLED   ; Llamar subrutina
RETFIE`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Ejercicio 4 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 4: Modos de Direccionamiento</h2>
              </div>
              <div className="card-body">
                <ul className="tech-list">
                  <li><strong>Directo:</strong> Usa dirección absoluta</li>
                  <li><strong>Indirecto:</strong> Usa FSR y INDF</li>
                </ul>
              </div>
            </section>

            {/* Ejercicio 5 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 5: Interrupciones</h2>
              </div>
              <div className="card-body">
                <p>Son eventos que detienen el flujo para atender algo externo.</p>
                <p>Ejemplo: Botón presionado genera interrupción externa.</p>
                <div className="tech-details">
                  <h3>Ventajas de bajo consumo:</h3>
                  <ul>
                    <li>Permite que el procesador entre en modo sleep</li>
                    <li>Solo consume energía cuando hay eventos</li>
                    <li>Reduce el uso de polling ineficiente</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Ejercicio 6 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 6: Identificación de registros</h2>
              </div>
              <div className="card-body">
                <ul className="tech-list">
                  <li>SFR: 0x00 - 0x0B (aprox)</li>
                  <li>GPR: desde 0x0C</li>
                  <li>0x05: TRISA, configura dirección de puerto A</li>
                </ul>
              </div>
            </section>

            {/* Ejercicio 7 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 7: Escritura y lectura de registros</h2>
              </div>
              <div className="card-body">
                <div className="code-block">
                  <pre>
{`; Cambiar al banco 0
BCF STATUS, RP0
; Cargar 0xAA en PORTA
MOVLW 0xAA
MOVWF PORTA
; Regresar a banco 1
BSF STATUS, RP0
; Cargar 0x55 en PORTB
MOVLW 0x55
MOVWF PORTB`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Ejercicio 8 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 8: Mapa de memoria incompleto</h2>
              </div>
              <div className="card-body">
                <ul className="tech-list">
                  <li>0x05: TRISA</li>
                  <li>Escribir 0xF0 configura los bits altos de puerto A como entrada</li>
                </ul>
              </div>
            </section>

            {/* Ejercicio 9 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 9: Crear tu propio mapa de memoria</h2>
              </div>
              <div className="card-body">
                <div className="memory-map">
                  <div className="memory-bank">
                    <h3>Banco 0</h3>
                    <ul>
                      <li>0x00 - INDF</li>
                      <li>0x01 - STATUS</li>
                      <li>0x02 - FSR</li>
                      <li>0x03 - PORTA</li>
                      <li>0x04 - TRISA</li>
                      <li>0x05 - TIMER0</li>
                      <li>0x06 - INTCON</li>
                      <li>0x07 - OPTION_REG</li>
                    </ul>
                    <p>0x08 - 0x17: GPR (General Purpose)</p>
                  </div>
                  <div className="memory-bank">
                    <h3>Banco 1</h3>
                    <ul>
                      <li>0x00 - EEDATA</li>
                      <li>0x01 - EEADR</li>
                      <li>0x02 - EECON1</li>
                      <li>0x03 - EECON2</li>
                      <li>0x04 - PIE1</li>
                      <li>0x05 - PIR1</li>
                      <li>0x06 - TMR1H</li>
                      <li>0x07 - TMR1L</li>
                    </ul>
                    <p>0x08 - 0x17: GPR (General Purpose)</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="eco-tech-lab-footer">
        <p>Arquitectura eficiente para sistemas embebidos sostenibles</p>
        <div className="footer-icons">
          <span>🖥️</span>
          <span>⚡</span>
          <span>🌿</span>
        </div>
      </footer>
    </div>
  );
};

export default Lab8;