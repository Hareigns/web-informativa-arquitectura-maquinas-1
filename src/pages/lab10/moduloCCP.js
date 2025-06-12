import React, { useState } from 'react';
import "../../assets/styles/lab10.css";
//import ccpDiagram from "../../assets/images/ejemploMacro1.png";
//import pwmWaveform from "../../assets/images/ejemploMacro2.png";

const Lab10 = () => {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  return (
    <div className="eco-tech-lab-container">
      <header className="eco-tech-lab-header">
        <h1 className="eco-tech-lab-title">Laboratorio 10: Módulo CCP</h1>
        <p className="eco-tech-lab-subtitle">Captura, Comparación y Modulación por Ancho de Pulso</p>
        <div className="eco-tech-lab-badge">
          <span>⚡</span> Control preciso con eficiencia energética
        </div>
      </header>

      <main className="eco-tech-lab-content">
        <section className="eco-tech-lab-card">
          <div className="card-header">
            <h2>Resumen General</h2>
          </div>
          <div className="card-body">
            <div className="concept-image">
              
            </div>
            <ul className="concept-list">
              <li>El módulo CCP permite captura, comparación y generación de señales PWM.</li>
              <li>Se configura mediante los registros <code>CCP1CON</code> y <code>CCP2CON</code>.</li>
              <li>Utiliza temporizadores internos como <code>TMR1</code> y <code>TMR2</code>.</li>
              <li>Es útil en sistemas embebidos para controlar salidas de forma precisa.</li>
            </ul>
          </div>
        </section>

        <div className="toggle-section">
          <button 
            className="eco-tech-btn" 
            onClick={() => setMostrarContenido(!mostrarContenido)}
          >
            {mostrarContenido ? 'Ocultar Detalles Técnicos' : 'Mostrar Detalles Técnicos'}
            <span className="toggle-icon">{mostrarContenido ? '↑' : '↓'}</span>
          </button>
        </div>

        {mostrarContenido && (
          <div className="detailed-content">
            {/* Módulos CCP */}
            <section className="eco-tech-lab-card">
              <div className="card-header">
                <h2>Modos del Módulo CCP</h2>
              </div>
              <div className="card-body">
                <div className="mode-grid">
                  <div className="mode-card capture-mode">
                    <h3>Capture</h3>
                    <ul>
                      <li>Guarda el valor del <code>Timer1</code> ante eventos</li>
                      <li>Configurable por flanco ascendente o descendente</li>
                      <li>Útil para medir frecuencia o ancho de pulso</li>
                    </ul>
                  </div>
                  
                  <div className="mode-card compare-mode">
                    <h3>Compare</h3>
                    <ul>
                      <li>Compara valor con el temporizador</li>
                      <li>Genera acción (Set/Clear/Interrupción)</li>
                      <li>Para temporización precisa</li>
                    </ul>
                  </div>
                  
                  <div className="mode-card pwm-mode">
                    <h3>PWM</h3>
                    <ul>
                      <li>Genera señal con ancho de pulso variable</li>
                      <li>Control de motores, LEDs, etc.</li>
                      <li>Eficiente energéticamente</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Configuración */}
            <section className="eco-tech-lab-card">
              <div className="card-header">
                <h2>Configuración de CCP1CON y CCP2CON</h2>
              </div>
              <div className="card-body">
                <p>Bits 3:0 determinan el modo:</p>
                <div className="config-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Valor</th>
                        <th>Modo</th>
                        <th>Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td><code>0000</code></td><td>Deshabilitado</td><td>CCP inactivo</td></tr>
                      <tr><td><code>0100</code></td><td>Capture</td><td>Flanco descendente</td></tr>
                      <tr><td><code>0101</code></td><td>Capture</td><td>Flanco ascendente</td></tr>
                      <tr><td><code>1000</code></td><td>Compare</td><td>Set on match</td></tr>
                      <tr><td><code>1001</code></td><td>Compare</td><td>Clear on match</td></tr>
                      <tr><td><code>1100</code></td><td>PWM</td><td>Modulación por ancho de pulso</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Modo Captura */}
            <section className="eco-tech-lab-card">
              <div className="card-header">
                <h2>Modo Captura</h2>
              </div>
              <div className="card-body">
                <ul className="feature-list">
                  <li>Usa <code>TMR1</code> como fuente de conteo</li>
                  <li><code>CCP1CON = 0x05</code> activa captura en flanco ascendente</li>
                  <li>Habilitar la interrupción <code>CCP1IE</code></li>
                </ul>
                <div className="eco-tip">
                  <span className="tip-icon">💡</span>
                  <p>El modo captura es ideal para medir señales con bajo consumo de energía, ya que solo activa el procesador cuando ocurre un evento.</p>
                </div>
              </div>
            </section>

            {/* Modo Comparación */}
            <section className="eco-tech-lab-card">
              <div className="card-header">
                <h2>Modo Comparación</h2>
              </div>
              <div className="card-body">
                <ul className="feature-list">
                  <li>Configurar <code>CCPR1</code> con el valor deseado</li>
                  <li><code>CCP1CON = 0x08</code> activa acción "Set"</li>
                  <li>Se utiliza para generar señales periódicas</li>
                </ul>
              </div>
            </section>

            {/* Generación PWM */}
            <section className="eco-tech-lab-card">
              <div className="card-header">
                <h2>Generación de PWM</h2>
              </div>
              <div className="card-body">
                <div className="pwm-image">
                  
                </div>
                <div className="formula-box">
                  <h3>Fórmula del período:</h3>
                  <pre>
{`PWM Period = (PR2 + 1) × 4 × Tosc × TMR2_Prescaler`}
                  </pre>
                  <p>Donde:</p>
                  <ul>
                    <li><code>Tosc = 1 / Fosc</code></li>
                    <li><code>PR2</code>: Registro que define el período</li>
                    <li><code>TMR2_Prescaler</code>: Preescalador del Timer2</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Ejercicio 1 - PWM */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 1 – PWM con CCP1 (1 kHz, 50%)</h2>
              </div>
              <div className="card-body">
                <p>Objetivo: Generar señal de 1 kHz con 50% de ciclo de trabajo en PIC16F877A usando cristal de 20 MHz.</p>
                <div className="code-block">
                  <pre>
{`PR2 = 124;
CCPR1L = 0b11111010;
CCP1CON = 0b00001100;
T2CON = 0b00000101;
TRISCbits.TRISC2 = 0;`}
                  </pre>
                </div>
                <div className="eco-tip">
                  <span className="tip-icon">🌱</span>
                  <p>El PWM permite controlar eficientemente la potencia entregada a cargas como motores o LEDs, reduciendo el consumo energético.</p>
                </div>
              </div>
            </section>

            {/* Ejercicio 2 - Captura */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 2 – Captura con CCP2</h2>
              </div>
              <div className="card-body">
                <p>Captura de valor de TMR1 al detectar flanco ascendente en pin <code>RC1</code>:</p>
                <ul className="config-list">
                  <li><code>CCP2CON = 0x05</code></li>
                  <li>TMR1 habilitado</li>
                  <li>RC1 configurado como entrada</li>
                  <li>Interrupciones habilitadas</li>
                </ul>

                <div className="option-cards">
                  <div className="option-card">
                    <h3>Opción A – Interrupción CCP2</h3>
                    <div className="code-block">
                      <pre>
{`void __interrupt() ISR() {
  if (PIR2bits.CCP2IF) {
    unsigned int valor = CCPR2;
    PIR2bits.CCP2IF = 0;
    // Procesar valor capturado
  }
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="option-card">
                    <h3>Opción B – Mostrar por UART</h3>
                    <div className="code-block">
                      <pre>
{`void enviarUART(unsigned int valor) {
  char buffer[10];
  sprintf(buffer, "%u", valor);
  for (char* ptr = buffer; *ptr != '\\0'; ptr++) {
    while(!TXIF);
    TXREG = *ptr;
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="eco-tech-lab-footer">
        <p>Control preciso para sistemas embebidos eficientes</p>
        <div className="footer-icons">
          <span>📟</span>
          <span>🔄</span>
          <span>⚡</span>
        </div>
      </footer>
    </div>
  );
};

export default Lab10;