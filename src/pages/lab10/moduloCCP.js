import React, { useState } from 'react';

const Lab10 = () => {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  return (
    <div className="lab10-container">
      <h1>Laboratorio 10: Actividad 12 – Módulo CCP</h1>

      <section>
        <h2>Resumen General</h2>
        <ul>
          <li>El módulo CCP permite captura, comparación y generación de señales PWM.</li>
          <li>Se configura mediante los registros <code>CCP1CON</code> y <code>CCP2CON</code>.</li>
          <li>Utiliza temporizadores internos como <code>TMR1</code> y <code>TMR2</code>.</li>
          <li>Es útil en sistemas embebidos para controlar salidas de forma precisa.</li>
        </ul>
      </section>

      <button className="toggle-btn" onClick={() => setMostrarContenido(!mostrarContenido)}>
        {mostrarContenido ? 'Ocultar Detalles' : 'Mostrar Detalles'}
      </button>

      {mostrarContenido && (
        <div className="contenido">

          <h2>Módulos CCP</h2>
          <ul>
            <li><strong>Capture:</strong> Guarda el valor del <code>Timer1</code> ante un evento (flanco ascendente o descendente).</li>
            <li><strong>Compare:</strong> Compara un valor con el temporizador y genera una acción.</li>
            <li><strong>PWM:</strong> Genera una señal periódica con ancho de pulso variable.</li>
          </ul>

          <h2>Configuración de CCP1CON y CCP2CON</h2>
          <p>Bits 3:0 determinan el modo:</p>
          <ul>
            <li><code>0000</code>: CCP deshabilitado</li>
            <li><code>0100</code>: Captura por flanco descendente</li>
            <li><code>0101</code>: Captura por flanco ascendente</li>
            <li><code>1000</code>: Comparación con Set</li>
            <li><code>1001</code>: Comparación con Clear</li>
            <li><code>1100</code>: PWM habilitado</li>
          </ul>

          <h2>Modo Captura</h2>
          <ul>
            <li>Usa <code>TMR1</code> como fuente de conteo.</li>
            <li><code>CCP1CON = 0x05</code> activa captura en flanco ascendente.</li>
            <li>Habilitar la interrupción <code>CCP1IE</code>.</li>
          </ul>

          <h2>Modo Comparación</h2>
          <ul>
            <li>Configurar <code>CCPR1</code> con el valor deseado.</li>
            <li><code>CCP1CON = 0x08</code> activa acción "Set".</li>
            <li>Se utiliza para generar señales periódicas.</li>
          </ul>

          <h2>Generación de señales periódicas</h2>
          <p>
            Se usa <code>Timer1</code> y <code>CCP1</code> para generar interrupciones o cambios de estado cuando se alcanza un valor.
          </p>

          <h2>Generación de PWM</h2>
          <p><strong>Fórmula del período:</strong></p>
          <pre className="codigo">
{`PWM Period = (PR2 + 1) × 4 × Tosc × TMR2_Prescaler`}
          </pre>
          <ul>
            <li><code>Tosc = 1 / Fosc</code></li>
            <li><code>PR2</code>: Registro que define el período</li>
            <li><code>TMR2_Prescaler</code>: Preescalador del Timer2</li>
          </ul>

          <h2>Ejercicio 1 – PWM con CCP1 (1 kHz, 50%)</h2>
          <p>Objetivo: Generar señal de 1 kHz con 50% de ciclo de trabajo en PIC16F877A usando cristal de 20 MHz.</p>
          <pre className="codigo">
{`PR2 = 124;
CCPR1L = 0b11111010;
CCP1CON = 0b00001100;
T2CON = 0b00000101;
TRISCbits.TRISC2 = 0;`}
          </pre>

          <h2>Ejercicio 2 – Captura con CCP2</h2>
          <p>Captura de valor de TMR1 al detectar flanco ascendente en pin <code>RC1</code>:</p>
          <ul>
            <li><code>CCP2CON = 0x05</code></li>
            <li>TMR1 habilitado</li>
            <li>RC1 configurado como entrada</li>
            <li>Interrupciones habilitadas</li>
          </ul>

          <h3>Opción A – Interrupción CCP2</h3>
          <pre className="codigo">
{`void __interrupt() ISR() {
  if (PIR2bits.CCP2IF) {
    unsigned int valor = CCPR2;
    PIR2bits.CCP2IF = 0;
    // Procesar valor capturado
  }
}`}
          </pre>

          <h3>Opción B – Mostrar por UART</h3>
          <pre className="codigo">
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
      )}
    </div>
  );
};

export default Lab10;
