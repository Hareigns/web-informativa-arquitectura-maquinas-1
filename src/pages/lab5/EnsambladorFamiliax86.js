import React, { useState } from 'react';
import '../../assets/styles/lab5.css';
import macroEjemplo1 from '../../assets/images/ejemploMacro1.png';
import macroEjemplo2 from '../../assets/images/ejemploMacro2.png';

const EnsambladorFamiliax86 = () => {
  const [mostrarImagenes, setMostrarImagenes] = useState(false);
  const [mostrarMacros, setMostrarMacros] = useState(false);

  return (
    <div className="eco-tech-lab-container">
      <header className="eco-tech-lab-header">
        <h1 className="eco-tech-lab-title">Laboratorio 5: Ensamblador iX86</h1>
        <p className="eco-tech-lab-subtitle">Programación eficiente para sistemas sostenibles</p>
        <div className="eco-tech-lab-badge">
          <span>💻</span> Optimización de recursos a nivel hardware
        </div>
      </header>

      <main className="eco-tech-lab-content">
        {/* Sección de Glosario */}
        <section className="eco-tech-lab-card">
          <div className="card-header">
            <div className="header-content">
              <span className="card-icon">📖</span>
              <h2>Glosario Técnico</h2>
            </div>
          </div>
          <div className="card-body">
            <div className="glossary-grid">
              <div className="glossary-item">
                <h3 className="term-title">
                  <span className="term-icon">🔢</span>
                  Constantes
                </h3>
                <p>Valores fijos utilizados en el código que no cambian durante la ejecución.</p>
                <div className="code-example">
                  <code>10</code>, <code>'A'</code>, <code>0FFh</code>
                </div>
              </div>

              <div className="glossary-item">
                <h3 className="term-title">
                  <span className="term-icon">➕</span>
                  Operadores
                </h3>
                <p>Símbolos para operaciones aritméticas, lógicas y comparaciones.</p>
                <div className="operator-list">
                  <span className="operator">+</span>
                  <span className="operator">-</span>
                  <span className="operator">AND</span>
                  <span className="operator">OR</span>
                </div>
              </div>

              <div className="glossary-item">
                <h3 className="term-title">
                  <span className="term-icon">🗃️</span>
                  Tipos de datos
                </h3>
                <ul className="data-types">
                  <li><code>BYTE</code> (8 bits)</li>
                  <li><code>WORD</code> (16 bits)</li>
                  <li><code>DWORD</code> (32 bits)</li>
                </ul>
              </div>

              <div className="glossary-item">
                <h3 className="term-title">
                  <span className="term-icon">📜</span>
                  Instrucciones
                </h3>
                <ul className="instruction-list">
                  <li><code>MOV</code></li>
                  <li><code>ADD</code></li>
                  <li><code>JMP</code></li>
                  <li><code>CMP</code></li>
                </ul>
              </div>

              <div className="glossary-item">
                <h3 className="term-title">
                  <span className="term-icon">🔌</span>
                  E/S
                </h3>
                <p>Control de dispositivos de entrada/salida.</p>
                <div className="code-example">
                  <code>IN</code>, <code>OUT</code>
                </div>
              </div>

              <div className="glossary-item">
                <h3 className="term-title">
                  <span className="term-icon">⚠️</span>
                  Interrupciones
                </h3>
                <p>Mecanismo para responder a eventos externos o del sistema.</p>
                <div className="code-example">
                  <code>INT 21h</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Macros */}
        <section className="eco-tech-lab-card">
          <div className="card-header">
            <div className="header-content">
              <span className="card-icon">🔄</span>
              <h2>Macros en Ensamblador</h2>
            </div>
          </div>
          <div className="card-body">
            <div className="toggle-section">
              <button 
                className="eco-tech-btn" 
                onClick={() => setMostrarMacros(!mostrarMacros)}
              >
                {mostrarMacros ? 'Ocultar Detalles' : 'Mostrar Detalles'}
                <span className="toggle-icon">{mostrarMacros ? '↑' : '↓'}</span>
              </button>
            </div>

            {mostrarMacros && (
              <div className="macros-container">
                <div className="macro-info">
                  <h3 className="macro-title">
                    <span className="macro-icon">📝</span>
                    ¿Qué son las macros?
                  </h3>
                  <p>
                    Bloques de código reutilizables que se expanden durante el ensamblado, 
                    permitiendo optimizar el desarrollo y reducir errores.
                  </p>
                  <div className="eco-tip">
                    <span className="tip-icon">💡</span>
                    <p>El uso de macros mejora la eficiencia del código y reduce el consumo de recursos al evitar repeticiones.</p>
                  </div>
                </div>

                <div className="macro-examples">
                  <div className="example-card">
                    <h4>Ejemplo básico:</h4>
                    <div className="code-block">
                      <pre>
{`PRINT_TEXT MACRO msg
  MOV AH, 09h
  LEA DX, msg
  INT 21h
ENDM`}
                      </pre>
                    </div>
                    <div className="code-usage">
                      <h5>Uso:</h5>
                      <code>PRINT_TEXT mensaje1</code>
                    </div>
                  </div>

                  <div className="example-card">
                    <h4>Macro con múltiples instrucciones:</h4>
                    <div className="code-block">
                      <pre>
{`MULTI_INSTR MACRO
  MOV AX, BX
  ADD AX, 10
  INT 21h
ENDM`}
                      </pre>
                    </div>
                  </div>

                  <div className="example-card">
                    <h4>Macro con condicionales:</h4>
                    <div className="code-block">
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
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Sección de Ejemplos en Emulador */}
        <section className="eco-tech-lab-card">
          <div className="card-header">
            <div className="header-content">
              <span className="card-icon">🖥️</span>
              <h2>Ejemplos en Emulador 8086</h2>
            </div>
          </div>
          <div className="card-body">
            <div className="toggle-section">
              <button 
                className="eco-tech-btn" 
                onClick={() => setMostrarImagenes(!mostrarImagenes)}
              >
                {mostrarImagenes ? 'Ocultar Imágenes' : 'Mostrar Imágenes'}
                <span className="toggle-icon">{mostrarImagenes ? '↑' : '↓'}</span>
              </button>
            </div>

            {mostrarImagenes && (
              <div className="emulator-gallery">
                <div className="image-container">
                  <img src={macroEjemplo1} alt="Ejemplo 1 macro en emulador" />
                  <p>Ejemplo de implementación de macro</p>
                </div>
                <div className="image-container">
                  <img src={macroEjemplo2} alt="Ejemplo 2 macro en emulador" />
                  <p>Resultado de ejecución en emulador</p>
                </div>
              </div>
            )}

            <div className="emulator-tips">
              <h3>Consejos para el Emulador</h3>
              <ul>
                <li>Usa macros para reducir código repetitivo</li>
                <li>Optimiza el uso de registros para mejor rendimiento</li>
                <li>Prueba secciones de código críticas primero</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sección de Optimización */}
        <section className="eco-tech-lab-card">
          <div className="card-header">
            <div className="header-content">
              <span className="card-icon">⚡</span>
              <h2>Optimización y Eficiencia</h2>
            </div>
          </div>
          <div className="card-body">
            <div className="optimization-content">
              <h3>Técnicas para código eficiente:</h3>
              
              <div className="optimization-card">
                <h4>Reducción de ciclos</h4>
                <ul>
                  <li>Minimiza accesos a memoria</li>
                  <li>Usa registros en lugar de variables</li>
                  <li>Optimiza bucles críticos</li>
                </ul>
              </div>

              <div className="optimization-card">
                <h4>Eficiencia energética</h4>
                <ul>
                  <li>Código más compacto = menos ciclos = menos energía</li>
                  <li>Usa instrucciones de bajo consumo cuando sea posible</li>
                  <li>Implementa modos sleep cuando no hay procesamiento</li>
                </ul>
              </div>

              <div className="eco-tip">
                <span className="tip-icon">🌱</span>
                <p>La programación en ensamblador permite el máximo control sobre el consumo energético del sistema.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="eco-tech-lab-footer">
        <p>Programación eficiente para un futuro tecnológico sostenible</p>
        <div className="footer-icons">
          <span>💻</span>
          <span>⚡</span>
          <span>🌿</span>
        </div>
      </footer>
    </div>
  );
};

export default EnsambladorFamiliax86;