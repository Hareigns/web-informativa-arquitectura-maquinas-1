import React, { useState } from 'react';

const Lab9 = () => {
  const [mostrarEjercicios, setMostrarEjercicios] = useState(false);

  return (
    <div className="lab9-container">
      <h1>Laboratorio 9: Actividad 11 – Puertos de E/S</h1>

      <section>
        <h2>Resumen Conceptual</h2>
        <ul>
          <li>Diferencia entre puertos serie y paralelo</li>
          <li>Componentes del puerto paralelo: DATA, STROBE, ACK, BUSY</li>
          <li>Diseño de E/S con flip-flops D y control con WE</li>
          <li>Prevención de conflictos con TRIS (PIC) o DDR (AVR)</li>
        </ul>
      </section>

      <button className="toggle-btn" onClick={() => setMostrarEjercicios(!mostrarEjercicios)}>
        {mostrarEjercicios ? 'Ocultar Ejercicios' : 'Mostrar Ejercicios'}
      </button>

      {mostrarEjercicios && (
        <div className="ejercicios">

          <h2>Ejercicio 1</h2>
          <p>
            Un puerto de E/S paralelo transmite múltiples bits simultáneamente, mientras que uno de E/S serie transmite los
bits secuencialmente. El puerto paralelo se usa cuando se necesita alta velocidad de transmisión, como en
impresoras antiguas. El puerto serie es útil para largas distancias o simplicidad, como en comunicación UART entre
microcontroladores.

          </p>

          <h2>Ejercicio 2</h2>
          <ul>
            <li>DATA0 a DATA7: transmisión de datos.</li>
            <li>STROBE: indica que hay datos válidos.</li>
            <li>ACK: confirma que los datos fueron recibidos.</li>
            <li>BUSY: indica si el receptor está ocupado.</li>
          </ul>

          <h2>Ejercicio 3</h2>
          <ul>
            <li>STROBE: señal del host para indicar que los datos están disponibles.</li>
            <li>ACK: respuesta del periférico que confirma recepción.</li>
            <li>BUSY: señal de ocupación del dispositivo.</li>
            <li>DATA0–DATA7: transmisión paralela.</li>
          </ul>

          <h2>Ejercicio 4 – Pseudocódigo</h2>
          <pre className="codigo">
{`configurar_puerto_como_salida(PUERTO_A)
escribir_en_puerto(PUERTO_A, 0b10101010)`}
          </pre>

          <h2>Ejercicio 5 – Pulsador y LED</h2>
          <pre className="codigo">
{`configurar_puerto(PUERTO_B, ENTRADA)
configurar_puerto(PUERTO_A, SALIDA)

Si leer_puerto(PUERTO_B) == 1 Entonces
    encender_LED(PUERTO_A)
FinSi`}
          </pre>

          <h2>Ejercicio 6 – Comparador digital</h2>
          <pre className="codigo">
{`configurar_puerto(PUERTO_A, ENTRADA)
configurar_puerto(PUERTO_B, SALIDA)

valor_entrada ← leer_puerto(PUERTO_A)

Si valor_entrada > 128 Entonces
    encender_LED(PUERTO_B)
FinSi`}
          </pre>

          <h2>Ejercicio 7 – Sistema de E/S con flip-flops</h2>
          <ul>
            <li>Flip-flops D en paralelo con reloj común.</li>
            <li>Control de escritura mediante WE.</li>
            <li>Datos almacenados en flanco de subida si WE activa.</li>
            <li>Lectura directa desde Q.</li>
          </ul>

          <h2>Ejercicio 8 – Tabla de funcionamiento</h2>
          <table>
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

          <h2>Ejercicio 9 – Prevención de conflictos</h2>
          <p>
            Se usa TRIS (en PIC) o DDR (en AVR) para definir los pines como entrada o salida.
            Así se evita que dos dispositivos escriban al mismo tiempo en la misma línea.
          </p>

          <h2>Ejercicio 10 – Simulación en Proteus</h2>
          <ul>
            <li>Microcontrolador con 8 LEDs conectados a puerto de salida.</li>
            <li>Código genera patrón ascendente y descendente con retardos.</li>
            <li>Verificar secuencia visual en los LEDs en Proteus.</li>
          </ul>

          <h2>Ejercicio 11 – Código Arduino: contador binario</h2>
          <p>
            8 LEDs conectados a pines digitales, dos botones para incrementar/decrementar valor binario. El valor se
            muestra en binario en los LEDs.
          </p>
          <pre className="codigo">
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
      )}
    </div>
  );
};

export default Lab9;




