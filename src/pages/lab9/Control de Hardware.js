import React, { useState } from 'react';
import "../../assets/styles/lab9.css";
import lab9Image from "../../assets/images/lab9 mapa.webp";
import ejercicio11Image from "../../assets/images/lab9 eje11 arduino.webp";
import ejercicio2Image from "../../assets/images/lab9 eje2.webp";
import ejercicio3Image from "../../assets/images/lab9 eje3.webp";
import ejercicio7Image from "../../assets/images/lab9 eje7.webp";

const Lab9 = () => {
  const [mostrarEjercicios, setMostrarEjercicios] = useState(false);

  return (
    <div className="eco-tech-lab-container">
      <header className="eco-tech-lab-header">
        <h1 className="eco-tech-lab-title">Laboratorio 9: Puertos de E/S</h1>
        <p className="eco-tech-lab-subtitle">Control de Hardware con Enfoque en Eficiencia Energética</p>
        <div className="eco-tech-lab-badge">
          <span>⚡</span> Optimización de consumo energético en E/S
        </div>
      </header>

      <main className="eco-tech-lab-content">
        <section className="eco-tech-lab-card">
          <div className="card-header">
            <h2>Resumen Conceptual</h2>
          </div>
          <div className="card-body">
            <div className="concept-image">
              <img src={lab9Image} alt="Mapa conceptual de puertos E/S" />
            </div>
            <ul className="concept-list">
              <li>Diferencia entre puertos serie y paralelo</li>
              <li>Componentes del puerto paralelo: DATA, STROBE, ACK, BUSY</li>
              <li>Diseño de E/S con flip-flops D y control con WE</li>
              <li>Prevención de conflictos con TRIS (PIC) o DDR (AVR)</li>
            </ul>
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
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 1: Puertos Serie vs Paralelo</h2>
              </div>
              <div className="card-body">
                <p>
                  Un puerto de E/S paralelo transmite múltiples bits simultáneamente, mientras que uno de E/S serie transmite los
                  bits secuencialmente. El puerto paralelo se usa cuando se necesita alta velocidad de transmisión, como en
                  impresoras antiguas. El puerto serie es útil para largas distancias o simplicidad, como en comunicación UART entre
                  microcontroladores.
                </p>
                <div className="eco-tip">
                  <span className="tip-icon">💡</span>
                  <p>Los puertos serie modernos como USB pueden ser más eficientes energéticamente que los paralelos tradicionales.</p>
                </div>
              </div>
            </section>

            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 2: Componentes Puerto Paralelo</h2>
              </div>
              <div className="card-body">
                <div className="exercise-image">
                  <img src={ejercicio2Image} alt="Componentes puerto paralelo" />
                </div>
                <ul className="exercise-list">
                  <li><strong>DATA0 a DATA7:</strong> transmisión de datos.</li>
                  <li><strong>STROBE:</strong> indica que hay datos válidos.</li>
                  <li><strong>ACK:</strong> confirma que los datos fueron recibidos.</li>
                  <li><strong>BUSY:</strong> indica si el receptor está ocupado.</li>
                </ul>
              </div>
            </section>

            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 3: Señales de Control</h2>
              </div>
              <div className="card-body">
                <div className="exercise-image">
                  <img src={ejercicio3Image} alt="Señales de control" />
                </div>
                <ul className="exercise-list">
                  <li><strong>STROBE:</strong> señal del host para indicar que los datos están disponibles.</li>
                  <li><strong>ACK:</strong> respuesta del periférico que confirma recepción.</li>
                  <li><strong>BUSY:</strong> señal de ocupación del dispositivo.</li>
                  <li><strong>DATA0–DATA7:</strong> transmisión paralela.</li>
                </ul>
              </div>
            </section>

            {/* Ejercicio 4 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 4: Pseudocódigo</h2>
              </div>
              <div className="card-body">
                <div className="code-block">
                  <pre>
{`configurar_puerto_como_salida(PUERTO_A)
escribir_en_puerto(PUERTO_A, 0b10101010)`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Ejercicio 5 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 5: Pulsador y LED</h2>
              </div>
              <div className="card-body">
                <div className="code-block">
                  <pre>
{`configurar_puerto(PUERTO_B, ENTRADA)
configurar_puerto(PUERTO_A, SALIDA)

Si leer_puerto(PUERTO_B) == 1 Entonces
    encender_LED(PUERTO_A)
FinSi`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Ejercicio 6 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 6: Comparador Digital</h2>
              </div>
              <div className="card-body">
                <div className="code-block">
                  <pre>
{`configurar_puerto(PUERTO_A, ENTRADA)
configurar_puerto(PUERTO_B, SALIDA)

valor_entrada ← leer_puerto(PUERTO_A)

Si valor_entrada > 128 Entonces
    encender_LED(PUERTO_B)
FinSi`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Ejercicio 7 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 7: Sistema de E/S con Flip-Flops</h2>
              </div>
              <div className="card-body">
                <div className="exercise-image">
                  <img src={ejercicio7Image} alt="Sistema E/S con flip-flops" />
                </div>
                <ul className="exercise-list">
                  <li>Flip-flops D en paralelo con reloj común.</li>
                  <li>Control de escritura mediante WE.</li>
                  <li>Datos almacenados en flanco de subida si WE activa.</li>
                  <li>Lectura directa desde Q.</li>
                </ul>
              </div>
            </section>

            {/* Ejercicio 8 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 8: Tabla de Funcionamiento</h2>
              </div>
              <div className="card-body">
                <div className="table-container">
                  <table className="function-table">
                    <thead>
                      <tr>
                        <th>WE</th><th>CLK</th><th>D1</th><th>D0</th><th>Q1</th><th>Q0</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>0</td><td>X</td><td>X</td><td>X</td><td>Q1</td><td>Q0</td></tr>
                      <tr><td>1</td><td>↑</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
                      <tr><td>1</td><td>↑</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Ejercicio 9 al 11 */}
            {/* ... (estructura similar para los demás ejercicios) ... */}

            {/* Ejercicio 11 */}
            <section className="eco-tech-lab-card exercise-card">
              <div className="card-header">
                <h2>Ejercicio 11: Código Arduino - Contador Binario</h2>
              </div>
              <div className="card-body">
                <div className="exercise-image">
                  <img src={ejercicio11Image} alt="Circuito Arduino contador binario" />
                </div>
                <div className="code-block arduino-code">
                  <pre>
{`const int leds[] = {2, 3, 4, 5, 6, 7, 8, 9};
const int botonIncremento = 10;
const int botonDecremento = 11;
byte contador = 0;

void setup() {
  for (int i = 0; i < 8; i++) pinMode(leds[i], OUTPUT);
  pinMode(botonIncremento, INPUT_PULLUP);
  pinMode(botonDecremento, INPUT_PULLUP);
  actualizarLEDs();
}

void loop() {
  if (digitalRead(botonIncremento) == LOW) {
    if (contador < 255) {
      contador++;
      actualizarLEDs();
      delay(200);
    }
  }

  if (digitalRead(botonDecremento) == LOW) {
    if (contador > 0) {
      contador--;
      actualizarLEDs();
      delay(200);
    }
  }
}

void actualizarLEDs() {
  for (int i = 0; i < 8; i++) {
    digitalWrite(leds[i], (contador >> i) & 0x01);
  }
}`}
                  </pre>
                </div>
                <div className="eco-tip">
                  <span className="tip-icon">🌱</span>
                  <p>Usar resistencias de pull-up internas (INPUT_PULLUP) reduce componentes externos y consumo energético.</p>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="eco-tech-lab-footer">
        <p>Tecnología eficiente para un desarrollo sostenible</p>
        <div className="footer-icons">
          <span>💻</span>
          <span>🔌</span>
          <span>🌍</span>
        </div>
      </footer>
    </div>
  );
};

export default Lab9;