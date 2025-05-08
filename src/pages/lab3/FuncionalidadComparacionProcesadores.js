import React from "react";
import { Link } from "react-router-dom";

const FuncionalidadComparacionProcesadores = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conceptos y su funcionalidad</h2>
    
            <div className="space-y-4">
              {[
                {
                  title: "Interfaz programable (8255)",
                  points: [
                    "Circuito de Intel para conectar dispositivos E/S con la CPU.",
                    "24 pines divididos en tres puertos de 8 bits: A, B y C.",
                    "Usado en sistemas embebidos, control industrial y automatización."
                  ]
                },
                {
                  title: "Interrupciones programables (8259)",
                  points: [
                    "Controlador de interrupciones para múltiples dispositivos.",
                    "Permite priorizar y manejar interrupciones sin conflictos.",
                    "Usado en sistemas x86 y tiempo real."
                  ]
                },
                {
                  title: "Comunicación serial",
                  points: [
                    "Transmisión de datos bit por bit por un solo canal.",
                    "Ejemplos: RS-232, SPI, I2C, UART.",
                    "Popular por eficiencia y bajo costo."
                  ]
                },
                {
                  title: "Arquitectura de la familia x86",
                  points: [
                    "Procesadores Intel/AMD con instrucciones x86.",
                    "Desde el Intel 8086 hasta modernos de 64 bits.",
                    "Común en PCs y servidores."
                  ]
                },
                {
                  title: "Modelos de memoria",
                  points: [
                    "Segmentada: divide código, datos y pila.",
                    "Plana: acceso continuo a memoria.",
                    "Caché: memoria intermedia rápida entre RAM y CPU."
                  ]
                },
                {
                  title: "Registros",
                  points: [
                    "Espacios internos de CPU para operaciones rápidas.",
                    "Incluye registros AX, BX, CX, DX, entre otros.",
                    "Clave para ejecución eficiente de instrucciones."
                  ]
                }
              ].map((item, index) => (
                <div key={index} className="bg-white shadow-md rounded-xl p-4 border">
                  <h3 className="text-lg font-bold text-blue-700 mb-2">{item.title}</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {item.points.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
    
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cuadro Comparativo de Procesadores</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border text-sm text-left text-gray-700">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-2">Procesador</th>
                    <th className="px-4 py-2">Año</th>
                    <th className="px-4 py-2">Arquitectura</th>
                    <th className="px-4 py-2">Frecuencia</th>
                    <th className="px-4 py-2">Núcleos/Hilos</th>
                    <th className="px-4 py-2">Características</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    ["Intel 4004", "1971", "4 bits", "740 kHz", "1/1", "Primer microprocesador comercial."],
                    ["Intel 8086", "1978", "16 bits", "5–10 MHz", "1/1", "Inicio de la arquitectura x86."],
                    ["Intel 80286", "1982", "16 bits", "6–25 MHz", "1/1", "Soporte para memoria protegida."],
                    ["Intel 80386", "1985", "32 bits", "12–40 MHz", "1/1", "Introduce multitarea y modo protegido."],
                    ["Intel Pentium", "1993", "32 bits", "60–300 MHz", "1/2", "Ejecución en paralelo."],
                    ["AMD Athlon 64", "2003", "64 bits", "1.8–3.0 GHz", "1/2", "Soporte 64 bits, mejora de rendimiento."],
                    ["Intel Core i7", "2008", "64 bits", "2.66–3.33 GHz", "4/8", "Hyper-Threading y Turbo Boost."],
                    ["AMD Ryzen 5000", "2020", "64 bits", "3.4–4.9 GHz", "8–16/16–32", "Eficiencia y rendimiento multinúcleo."],
                    ["Intel Core i9-13900K", "2022", "64 bits", "5.8 GHz", "24/32", "Arquitectura híbrida."]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-blue-50">
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-2">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      );
};

export default FuncionalidadComparacionProcesadores;