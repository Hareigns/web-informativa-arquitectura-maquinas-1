import React from "react";
import { Link } from "react-router-dom";

const InfografiaEnsamblador = () => {
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

            <section className="text-center pt-4 border-t">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Ejercicios</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Link
                            key={i}
                            to={`/lab4/ejercicio${i + 1}`}
                            className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold py-3 px-5 rounded-xl shadow-lg hover:scale-105 transition-transform ring-1 ring-indigo-300"
                        >
                            Ejercicio {i + 1}
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default InfografiaEnsamblador;