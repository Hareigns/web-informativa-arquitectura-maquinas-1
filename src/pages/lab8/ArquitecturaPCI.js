import React, { useState } from 'react';
import '../../assets/styles/lab8.css';

const Lab8 = () => {
  const [mostrarEjercicios, setMostrarEjercicios] = useState(false);

  return (
    <div className="lab8-container">
      <h1>Laboratorio 8: Arquitectura de los PIC</h1>

      <section>
        <h2>Mapa Mental: Arquitectura de los PIC</h2>
        <ul>
          <li>Gamas baja, media y alta</li>
          <li>Memoria de programa</li>
          <li>Modos de Direccionamiento</li>
          <li>Memoria de Datos</li>
          <li>Mapa de Memoria: SFR y GPR – Bancos</li>
          <li>Memoria EEPROM</li>
        </ul>
      </section>

      <button className="toggle-btn" onClick={() => setMostrarEjercicios(!mostrarEjercicios)}>
        {mostrarEjercicios ? 'Ocultar Ejercicios' : 'Mostrar Ejercicios'}
      </button>

      {mostrarEjercicios && (
        <div className="ejercicios">
          <h2>Ejercicio 1: Identificación de Componentes</h2>
          <ul>
            <li><strong>CPU:</strong> Ejecuta instrucciones.</li>
            <li><strong>Memoria de Programa:</strong> Almacena el código.</li>
            <li><strong>Memoria de Datos:</strong> Guarda variables.</li>
            <li><strong>Registros GPR:</strong> Uso general.</li>
            <li><strong>Puerto GPIO:</strong> Entrada/Salida.</li>
            <li><strong>Timer/Contador:</strong> Medición de tiempo.</li>
          </ul>

          <h2>Ejercicio 2: Conjunto de Instrucciones</h2>
          <ul>
            <li><strong>MOVLW:</strong> Carga literal a W.</li>
            <li><strong>BSF:</strong> Setea bit en un registro.</li>
            <li><strong>GOTO:</strong> Salta a una dirección.</li>
          </ul>

          <h2>Ejercicio 3: Uso de Periféricos</h2>
          <p>Aplicación: Encender LED con botón.</p>
          <ul>
            <li>GPIO para LED y botón</li>
            <li>Uso de interrupción externa para detectar el botón</li>
          </ul>

          <h2>Ejercicio 4: Modos de Direccionamiento</h2>
          <ul>
            <li><strong>Directo:</strong> Usa dirección absoluta.</li>
            <li><strong>Indirecto:</strong> Usa FSR y INDF.</li>
          </ul>

          <h2>Ejercicio 5: Interrupciones</h2>
          <p>Son eventos que detienen el flujo para atender algo externo.</p>
          <p>Ejemplo: Botón presionado genera interrupción externa.</p>

          <h2>Ejercicio 6: Identificación de registros</h2>
          <ul>
            <li>SFR: 0x00 - 0x0B (aprox)</li>
            <li>GPR: desde 0x0C</li>
            <li>0x05: TRISA, configura dirección de puerto A.</li>
          </ul>

          <h2>Ejercicio 7: Escritura y lectura de registros</h2>
          <pre className="codigo">
; Cambiar al banco 0
BCF STATUS, RP0
; Cargar 0xAA en PORTA
MOVLW 0xAA
MOVWF PORTA
; Regresar a banco 1
BSF STATUS, RP0
; Cargar 0x55 en PORTB
MOVLW 0x55
MOVWF PORTB
          </pre>

          <h2>Ejercicio 8: Mapa de memoria incompleto</h2>
          <ul>
            <li>0x05: TRISA</li>
            <li>Escribir 0xF0 configura los bits altos de puerto A como entrada.</li>
          </ul>

          <h2>Ejercicio 9: Crear tu propio mapa de memoria</h2>
          <p><strong>Banco 0</strong></p>
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

          <p><strong>Banco 1</strong></p>
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
      )}
    </div>
  );
};

export default Lab8;