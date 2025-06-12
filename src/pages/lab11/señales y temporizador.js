import React, { useState } from 'react';

const Lab11 = () => {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  return (
    <div className="lab11-container">
      <h1>Laboratorio 11: Clase Práctica – Temporizadores e Interrupciones</h1>

      <section>
        <h2>Resumen General</h2>
        <ul>
          <li>Uso de temporizadores e interrupciones en microcontroladores.</li>
          <li>Generación de señales cuadradas con precisión.</li>
          <li>Implementación de PWM por software.</li>
          <li>Medición de señales externas mediante captura.</li>
        </ul>
      </section>

      <button className="toggle-btn" onClick={() => setMostrarContenido(!mostrarContenido)}>
        {mostrarContenido ? 'Ocultar Ejercicios' : 'Mostrar Ejercicios'}
      </button>

      {mostrarContenido && (
        <div className="contenido">

          <h2>Ejercicio 1 – Señal cuadrada de 1 kHz (AVR – ATmega328P)</h2>
          <p>
            Se genera una señal digital de 1 kHz (frecuencia) en el pin PB0 usando el modo CTC del Timer0 y la interrupción
            TIMER0_COMPA_vect. Se alterna el pin cada 500 µs para producir un ciclo de 1 ms (1 kHz).
          </p>
          <pre className="codigo">
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

          <h2>Ejercicio 2 – PWM por software (25%)</h2>
          <p>
            Simulación de señal PWM con un ciclo de trabajo del 25% mediante software.
            Se compara un contador con el valor 25 de 100.
          </p>
          <pre className="codigo">
{`if (count <= 25)
  PORTB |= (1 << PB0);   // Encendido durante 25%
else
  PORTB &= ~(1 << PB0);  // Apagado el 75% restante`}
          </pre>

          <h2>Ejercicio 3 – Medición de frecuencia (PIC – CCP1)</h2>
          <p>
            El módulo CCP1 en modo captura registra el valor de <code>TMR1</code> cuando detecta flanco ascendente. 
            Se calcula el periodo de la señal como la diferencia entre dos capturas sucesivas.
          </p>
          <pre className="codigo">
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
      )}
    </div>
  );
};

export default Lab11;

