import React, { useState } from 'react';
import '../../assets/styles/lab6.css';

function Lab6Microcontroladores() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="eco-tech-lab6-container">
      <header className="eco-tech-lab6-header">
        <h1 className="eco-tech-lab6-title">Laboratorio 6</h1>
        <p className="eco-tech-lab6-subtitle">Microcontroladores: Arquitectura, Tipos y Aplicaciones</p>
        <div className="eco-tech-lab6-badge">ARQUITECTURA DE MICROCONTROLADORES</div>
      </header>

      <section className="eco-tech-lab6-card">
        <div className="card-header">
          <span className="card-icon">🎯</span>
          <h3>Objetivo</h3>
        </div>
        <div className="card-body">
          <p>
            Definir el Microcontrolador desde la perspectiva de su propósito, arquitectura, características y aplicaciones, 
            categorizándolos en relación con su arquitectura y organización de memoria.
          </p>
        </div>
      </section>

      <section className="eco-tech-lab6-card">
        <div className="card-header">
          <span className="card-icon">📚</span>
          <h3>Conceptos Clave</h3>
        </div>
        <div className="card-body">
          <button className="eco-tech-lab6-button" onClick={toggleModal}>
            {showModal ? 'Ocultar Conceptos' : 'Mostrar Conceptos'}
          </button>

          {showModal && (
            <div className="eco-tech-lab6-modal">
              <ul>
                <li><strong>Arquitectura de los Microcontroladores:</strong> Describe cómo están organizados los componentes internos como CPU, memoria y periféricos.</li>
                <li><strong>Diferentes tipos de Microcontroladores:</strong> Existen de 8, 16 y 32 bits; algunos ejemplos son PIC, AVR y ARM.</li>
                <li><strong>Microcontroladores embebidos:</strong> Aquellos integrados dentro de sistemas para realizar funciones específicas, como en electrodomésticos o automóviles.</li>
                <li><strong>Microcontrolador con memoria externa:</strong> No incluye toda la memoria interna, requiere módulos externos para expandir la memoria.</li>
                <li><strong>Arquitectura Harvard vs Von Neumann:</strong> Harvard separa memoria de datos e instrucciones; Von Neumann usa un solo bus para ambas.</li>
                <li><strong>CISC vs RISC:</strong> CISC (Complex Instruction Set Computing) tiene instrucciones complejas; RISC (Reduced Instruction Set Computing) se enfoca en instrucciones simples y rápidas.</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <footer className="eco-tech-lab6-footer">
        <p>Laboratorio 6 - Microcontroladores</p>
        <div className="footer-icons">🔌📟🧠</div>
      </footer>
    </div>
  );
}

export default Lab6Microcontroladores;
