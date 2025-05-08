import React from "react";
import { Link } from "react-router-dom";

const InfografiaEnsamblador = () => {
    const ejercicios = [
        { id: 1, titulo: "Hola Mundo en Ensamblador" },
        { id: 2, titulo: "Suma de dos números" },
        { id: 3, titulo: "Operaciones aritméticas" },
        { id: 4, titulo: "Estructuras de control" },
        { id: 5, titulo: "Manejo de cadenas" },
        { id: 6, titulo: "Llamadas a funciones" }
    ];

    return (
        <div className="max-w-5xl mx-auto p-8 space-y-10 bg-white rounded-3xl shadow-xl">
            <header className="text-center space-y-2">
                <h1 className="text-5xl font-extrabold text-indigo-700">Ensamblador de la familia ix86</h1>
                <p className="text-gray-600 text-lg">Información detallada sobre el ensamblador.</p>
            </header>

            <section className="space-y-8">
                {[
                    {
                        title: "Ensamblador de la familia ix86",
                        content: `Hace referencia al conjunto de instrucciones de los procesadores Intel 8086, 80286, 80386, 80486 y Pentium. 
                        Utiliza registros específicos, modos de direccionamiento y una estructura de instrucciones basada en lenguaje ensamblador. 
                        El código se traduce directamente a código máquina que puede ejecutar el procesador.`,
                    },
                    {
                        title: "Declaración de Segmentos",
                        list: [
                            "Código (.text): Instrucciones que ejecuta el procesador.",
                            "Datos (.data): Variables y datos inicializados.",
                            "BSS (.bss): Datos no inicializados.",
                            "Pila (.stack): Datos temporales como direcciones de retorno y variables locales.",
                        ],
                    },
                    {
                        title: "Modos de Redireccionamiento",
                        list: [
                            "Inmediato: MOV AX, 10",
                            "Directo: MOV AX, [2000h]",
                            "Indirecto: MOV AX, [BX]",
                            "Basado en registros: Usa registros de base/índice.",
                        ],
                    },
                    {
                        title: "Estructuras de Control Fijo",
                        list: [
                            "Condicionales: JE (igual), JNE (no igual).",
                            "Bucles: JMP, JNZ y comparaciones con registros.",
                        ],
                    },
                    {
                        title: "Formato de una Sentencia en Ensamblador",
                        list: [
                            "Instrucción: Acción a realizar (ej. MOV, ADD).",
                            "Operandos: Valores/registros utilizados (ej. MOV AX, 5).",
                        ],
                    },
                    {
                        title: "Palabras Reservadas",
                        list: [
                            "MOV: Mueve un valor.",
                            "ADD: Suma operandos.",
                            "SUB: Resta operandos.",
                            "JMP: Salto incondicional.",
                            "CMP: Compara dos valores.",
                            "JE: Salta si son iguales.",
                            "JNE: Salta si son diferentes.",
                            "CALL: Llama a subrutina.",
                            "RET: Retorna de subrutina.",
                        ],
                    },
                ].map((section, i) => (
                    <div key={i} className="bg-gray-50 p-5 rounded-xl border shadow-sm">
                        <h3 className="text-xl font-semibold text-indigo-600 mb-3">{section.title}</h3>
                        {section.content && <p className="text-gray-700 leading-relaxed">{section.content}</p>}
                        {section.list && (
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                {section.list.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </section>

            {/* Sección de ejercicios mejorada */}
            <section className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ejercicios Prácticos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {ejercicios.map((ejercicio) => (
                        <div key={ejercicio.id} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Ejercicio {ejercicio.id}</h3>
                                <p className="text-gray-600 mb-4">{ejercicio.titulo}</p>
                                <Link
                                    to={`/lab4/ejercicio${ejercicio.id}`}
                                    className="inline-block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                                >
                                    Ver ejercicio
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default InfografiaEnsamblador;