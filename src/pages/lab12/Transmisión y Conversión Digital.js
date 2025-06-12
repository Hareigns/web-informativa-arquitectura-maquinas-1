import React, { useState } from 'react';

const Lab12 = () => {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  return (
    <div className="lab12-container">
      <h1>Laboratorio 12: Actividad 13 – Transmisión y Conversión Digital</h1>

      <section>
        <h2>Resumen Temático (Mapa Mental)</h2>
        <ul>
          <li>🧭 <strong>Puerto de Comunicación Serial</strong></li>
          <li>📤 Módulo Transmisor</li>
          <li>📥 Módulo Receptor</li>
          <li>💻 Comunicación Serial con la Computadora</li>
          <li>🔄 <strong>Conversión Analógico/Digital</strong></li>
          <ul>
            <li>📋 Registros Internos</li>
            <li>⏱ Tiempo de Conversión por Bit</li>
            <li>📶 Consideraciones de Ancho de Banda</li>
            <li>📈 Muestreo Periódico de Señales Continuas</li>
          </ul>
        </ul>
      </section>

      <button className="toggle-btn" onClick={() => setMostrarContenido(!mostrarContenido)}>
        {mostrarContenido ? 'Ocultar Ejercicios' : 'Mostrar Ejercicios'}
      </button>

      {mostrarContenido && (
        <div className="contenido">
          <h2>Ejercicio 1 – Tiempo de conversión a 2 Mbps</h2>
          <p>
            Una señal digital se transmite a 2 Mbps.
            <br />Tiempo por bit: <strong>1 / 2,000,000 = 0.5 µs</strong>
          </p>
          <p><strong>Respuesta:</strong> 0.5 microsegundos por bit.</p>

          <h2>Ejercicio 2 – Tiempo por bit a 9600 bps</h2>
          <p>
            Velocidad: 9600 bps.
            <br />T = 1 / 9600 = 0.00010417 s = <strong>104.17 µs</strong>
          </p>
          <p><strong>Respuesta:</strong> 104.17 microsegundos.</p>

          <h2>Ejercicio 3 – Tiempo por bit a 115200 bps</h2>
          <p>
            T = 1 / 115200 = 0.00000868 s = <strong>8.68 µs</strong>
          </p>
          <p><strong>Respuesta:</strong> 8.68 microsegundos.</p>

          <h2>Ejercicio 4 – Tasa de transmisión para 50 ns</h2>
          <p>
            T = 50 ns = 50 × 10<sup>-9</sup> s<br />
            Velocidad = 1 / T = <strong>20,000,000 bps</strong> = 20 Mbps
          </p>
          <p><strong>Respuesta:</strong> 20 Mbps</p>

          <h2>Ejercicio 5 – Bitrate con 0.25 ms por bit</h2>
          <p>
            T = 0.25 ms = 0.00025 s<br />
            Bitrate = 1 / 0.00025 = <strong>4000 bps</strong>
          </p>
          <p><strong>Respuesta:</strong> 4000 bps</p>
        </div>
      )}
    </div>
  );
};

export default Lab12;
