import React, { useState } from 'react';
import '../../assets/styles/lab7.css';

const MemoriaMicro = () => {
  const [mostrarMemorias, setMostrarMemorias] = useState(false);

  const toggleMemorias = () => {
    setMostrarMemorias(!mostrarMemorias);
  };

  return (
    <div className="lab7-container">
      <h1>Laboratorio 7: Memoria en Microcontroladores</h1>

      <section>
        <h2>Mapa Conceptual</h2>
        <p>
          Este laboratorio abarca conceptos clave sobre la memoria y características de los microcontroladores.
        </p>

        <div className="mapa-conceptual">
          <h3>La Memoria en los Microcontroladores</h3>
          <ul>
            <li>Almacenamiento de programa</li>
            <li>Área de variables</li>
            <li>Registros especiales</li>
          </ul>

          <h3>Características de los Microcontroladores</h3>
          <ul>
            <li>ALU y el registro W</li>
            <li>Ciclos de máquina y Pipeline</li>
            <li>Osciladores</li>
            <li>Fuentes de Reset</li>
            <li>Perro Guardián</li>
            <li>Fabricantes de Microcontroladores</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Tipos de Memoria en Microcontroladores</h2>
        <p>Incluye definición, propósito y diferencias principales.</p>

        <button className="toggle-btn" onClick={toggleMemorias}>
          {mostrarMemorias ? 'Ocultar Memorias' : 'Mostrar Memorias'}
        </button>

        {mostrarMemorias && (
          <div className="memorias-lista">
            <h3>1. RAM (Memoria de Acceso Aleatorio)</h3>
            <p>Memoria volátil usada para almacenar variables temporales. Se borra al apagar el sistema.</p>

            <h3>2. ROM (Memoria de Solo Lectura)</h3>
            <p>Contiene el programa que no se modifica. Es permanente y se graba durante la fabricación.</p>

            <h3>3. EPROM</h3>
            <p>Puede borrarse con luz UV y reprogramarse. Fue común antes del uso de memoria Flash.</p>

            <h3>4. EEPROM</h3>
            <p>Permite ser borrada y escrita eléctricamente múltiples veces. Útil para guardar configuraciones.</p>

            <h3>5. Flash</h3>
            <p>Memoria no volátil moderna, más rápida que EEPROM. Usada para almacenar programas.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default MemoriaMicro;
