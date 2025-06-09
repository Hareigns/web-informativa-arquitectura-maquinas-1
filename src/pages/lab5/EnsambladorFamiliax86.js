import React, { useState } from 'react';
import '../../assets/styles/lab5.css';
import macroEjemplo1 from '../../assets/images/ejemploMacro1.png';
import macroEjemplo2 from '../../assets/images/ejemploMacro2.png';

const EnsambladorFamiliax86 = () => {
  const [mostrarImagenes, setMostrarImagenes] = useState(false);

  const toggleImagenes = () => {
    setMostrarImagenes(!mostrarImagenes);
  };

  return (
    <div className="lab5-container">
      <h1>Laboratorio 5: Ensamblador de la Familia iX86</h1>

      <section className="lab5-section">
        <h2>Glosario</h2>
        <ul>
          <li><strong>Constantes:</strong> Valores fijos utilizados en el código que no cambian durante la ejecución. Ej: <code>10</code>, <code>'A'</code>, <code>0FFh</code>.</li>
          <li><strong>Operadores:</strong> Símbolos para operaciones aritméticas (<code>+</code>, <code>-</code>), lógicas (<code>AND</code>, <code>OR</code>) y comparaciones.</li>
          <li><strong>Tipos de datos:</strong> <code>BYTE</code> (8 bits), <code>WORD</code> (16 bits), <code>DWORD</code> (32 bits).</li>
          <li><strong>Conjunto de Instrucciones:</strong> Instrucciones como <code>MOV</code>, <code>ADD</code>, <code>JMP</code>, <code>CMP</code>, etc.</li>
          <li><strong>Control de dispositivos de entrada/salida:</strong> Instrucciones como <code>IN</code> y <code>OUT</code> para comunicar con periféricos.</li>
          <li><strong>Interrupciones:</strong> Mecanismo como <code>INT 21h</code> para responder a eventos externos o del sistema.</li>
          <li><strong>Uso de procedimientos:</strong> Secciones reutilizables del programa llamadas con <code>CALL</code> y finalizadas con <code>RET</code>.</li>
        </ul>
      </section>

      <section className="lab5-section">
        <h2>Macros en Ensamblador iX86</h2>
        <ul>
          <li><strong>Definición de macros:</strong> Bloques reutilizables que se expanden al compilar.</li>
          <li><strong>Nombre de macro:</strong> Identificador único como una función.</li>
          <li><strong>Número de argumentos:</strong> Las macros pueden aceptar parámetros. Ej: <code>PRINT_TEXT MACRO msg</code></li>
        </ul>

        <div className="macro-ejemplos">
          <h4>Ejemplo básico:</h4>
          <pre>
{`PRINT_TEXT MACRO msg
  MOV AH, 09h
  LEA DX, msg
  INT 21h
ENDM`}
          </pre>

          <h4>Llamada a la macro:</h4>
          <pre>{`PRINT_TEXT mensaje1`}</pre>

          <h4>Macro con múltiples instrucciones:</h4>
          <pre>
{`MULTI_INSTR MACRO
  MOV AX, BX
  ADD AX, 10
  INT 21h
ENDM`}
          </pre>

          <h4>Macro con condicionales:</h4>
          <pre>
{`CONDICIONAL MACRO valor
  IF valor EQ 1
    MOV CX, 01
  ELSE
    MOV CX, 00
  ENDIF
ENDM`}
          </pre>
        </div>
      </section>

      <section className="lab5-section">
        <h2>Ejemplos en Emulador 8086</h2>
        <button className="lab5-btn" onClick={toggleImagenes}>
          {mostrarImagenes ? 'Ocultar Imágenes' : 'Mostrar Imágenes'}
        </button>
        {mostrarImagenes && (
          <div className="lab5-img-gallery">
            <img src={macroEjemplo1} alt="Ejemplo 1 macro en emulador" />
            <img src={macroEjemplo2} alt="Ejemplo 2 macro en emulador" />
          </div>
        )}
      </section>
    </div>
  );
};

export default EnsambladorFamiliax86;
