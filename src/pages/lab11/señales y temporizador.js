import React, { useState } from 'react';
import "../../assets/styles/lab11.css";
//import timerDiagram from "../../assets/images/lab12 mapa.webp";
//import pwmDiagram from "../../assets/images/lab9 eje7.webp";

const Lab11 = () => {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  return (
    <div className="eco-tech-lab-container">
      <header className="eco-tech-lab-header">
        <h1 className="eco-tech-lab-title">Laboratorio 11: Temporizadores e Interrupciones</h1>
        <p className="eco-tech-lab-subtitle">Control preciso con bajo consumo energético</p>
        <div className="eco-tech-lab-badge">
          <span>⏱️</span> Optimización de recursos mediante temporización eficiente
        </div>
      </header>

      <main className="eco-tech-lab-content">
        <section className="eco-tech-lab-card">
          <div className="card-header">
            <h2>Resumen Conceptual</h2>
          </div>
          <div className="card-body">
            <div className="concept-image">
              
            </div>
            <ul className="concept-list">
              <li>Uso de temporizadores e interrupciones en microcontroladores</li>
              <li>Generación de señales cuadradas con precisión</li>
              <li>Implementación de PWM por software</li>
              <li>Medición de señales externas mediante captura</li>
            </ul>
            <div className="eco-tip">
              <span className="tip-icon">💡</span>
              <p>El uso eficiente de temporizadores permite reducir el consumo energético al minimizar el tiempo de actividad del procesador.</p>
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
                <h2>Ejercicio 1 – Señal cuadrada de 1 kHz (AVR – ATmega328P)</h2>
              </div>
              <div className="card-body">
                <p>
                  Se genera una señal digital de 1 kHz (frecuencia) en el pin PB0 usando el modo CTC del Timer0 y la interrupción
                  TIMER0_COMPA_vect. Se alterna el pin cada 500 µs para producir un ciclo de 1 ms (1 kHz).
                </p>
                <div className="code-block">
                  <pre>
{`void setup() {
  DDRB |= (1 << PB0);               // Configura PB0 como salida
  TCCR0A = (1 << WGM01);            // Modo CTC
  OCR0A = 124;                      // Conteo hasta 124 para 1 kHz
  TCCR0B = (1 << CS01) | (1 << CS00); // Prescaler 64
  TIMSK0 = (1 << OCIE0A);           // Habilita interrupción
  sei();                            // Habilita interrupciones globales
}

ISR(TIMER0_COMPA_vect) {
  PORTB ^= (1 << PB0);              // Alterna el estado del pin
}`}
                  </pre>
                </div>
                <div className="tech-details">
                  <h3>Detalles Técnicos:</h3>
                  <ul>
                    <li><strong>Frecuencia del reloj:</strong> 16 MHz</li>
                    <li><strong>Prescaler:</strong> 64</li>
                    <li><strong>Ciclos por periodo:</strong> 125 (124 + 1)</li>
                    <li><strong>Consumo estimado:</strong> 2.5 mA (vs 8 mA en polling)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Ejercicio 2 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 2 – PWM por software (25%)</h2>
              </div>
              <div className="card-body">
                <div className="pwm-image">
                  
                </div>
                <p>
                  Simulación de señal PWM con un ciclo de trabajo del 25% mediante software.
                  Se compara un contador con el valor 25 de 100.
                </p>
                <div className="code-block">
                  <pre>
{`if (count <= 25)
  PORTB |= (1 << PB0);   // Encendido durante 25%
else
  PORTB &= ~(1 << PB0);  // Apagado el 75% restante`}
                  </pre>
                </div>
                <div className="eco-tip">
                  <span className="tip-icon">🌱</span>
                  <p>El PWM permite reducir el consumo energético al controlar la potencia promedio entregada a la carga.</p>
                </div>
              </div>
            </section>

            {/* Ejercicio 3 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 3 – Medición de frecuencia (PIC – CCP1)</h2>
              </div>
              <div className="card-body">
                <p>
                  El módulo CCP1 en modo captura registra el valor de <code>TMR1</code> cuando detecta flanco ascendente. 
                  Se calcula el periodo de la señal como la diferencia entre dos capturas sucesivas.
                </p>
                <div className="code-block">
                  <pre>
{`void __interrupt() ISR() {
  if (PIR1bits.CCP1IF) {
    static unsigned int t1 = 0, t2 = 0;
    t2 = CCPR1;                         // Captura actual
    unsigned int periodo = t2 - t1;
    t1 = t2;                            // Actualiza tiempo anterior
    PIR1bits.CCP1IF = 0;               // Limpia bandera
    float frecuencia = 1000000.0 / periodo; // Frecuencia estimada
    // Mostrar resultado o almacenarlo
  }
}`}
                  </pre>
                </div>
                <div className="performance-comparison">
                  <h3>Comparación de Métodos:</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Método</th>
                        <th>Precisión</th>
                        <th>Consumo</th>
                        <th>Uso de CPU</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Captura con CCP</td>
                        <td>Alta (±1 ciclo)</td>
                        <td>Bajo</td>
                        <td>Mínimo</td>
                      </tr>
                      <tr>
                        <td>Polling</td>
                        <td>Media (±10 ciclos)</td>
                        <td>Alto</td>
                        <td>100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="eco-tech-lab-footer">
        <p>Temporización eficiente para sistemas embebidos sostenibles</p>
        <div className="footer-icons">
          <span>⏱️</span>
          <span>⚡</span>
          <span>🌿</span>
        </div>
      </footer>
    </div>
  );
};

export default Lab11;