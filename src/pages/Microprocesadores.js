import React from "react";

const Microprocesadores = () => {
    return (
        <div className="container">
            <h1>Microprocesadores</h1>

            <section>
                <h2>¿Qué es un Microprocesador?</h2>
                <p>
                    Un <strong>microprocesador</strong> es el circuito integrado central de un computador, encargado de ejecutar instrucciones y procesar datos. Es conocido como la "cerebro" de los dispositivos electrónicos.
                </p>
                <p>
                    Los microprocesadores modernos incluyen múltiples núcleos, caché, unidades de procesamiento vectorial y otras características que optimizan su rendimiento.
                </p>
            </section>

            <section>
                <h2>Arquitectura de Von Neumann vs Harvard</h2>

                <h3>Arquitectura de Von Neumann</h3>
                <p>
                    Fue propuesta por John von Neumann en 1945. En esta arquitectura, la memoria y los buses de datos e instrucciones son compartidos, lo que simplifica el diseño pero puede generar cuellos de botella en el acceso a la memoria.
                </p>
                <ul>
                    <li>Memoria compartida para datos e instrucciones.</li>
                    <li>Ejemplo: Computadoras personales y la mayoría de las CPU.</li>
                    <li>Mayor flexibilidad en la programación.</li>
                </ul>

                <h3>Arquitectura de Harvard</h3>
                <p>
                    En esta arquitectura, los buses de datos e instrucciones están separados, permitiendo un acceso simultáneo más eficiente a la memoria. Se utiliza principalmente en sistemas embebidos y microcontroladores.
                </p>
                <ul>
                    <li>Memoria separada para instrucciones y datos.</li>
                    <li>Ejemplo: Microcontroladores y DSPs.</li>
                    <li>Mayor rendimiento al evitar colisiones en memoria.</li>
                </ul>
            </section>

            <section>
                <h2>Diagrama de Bloques de un Microprocesador</h2>
                <p>
                    Un microprocesador típico consta de varios componentes esenciales que interactúan para ejecutar instrucciones.
                </p>
                <ul>
                    <li><strong>Unidad de Control (CU):</strong> Interpreta instrucciones y dirige el flujo de datos.</li>
                    <li><strong>Unidad Aritmético-Lógica (ALU):</strong> Realiza operaciones matemáticas y lógicas.</li>
                    <li><strong>Registros:</strong> Memoria rápida interna utilizada para almacenar datos temporales.</li>
                    <li><strong>Bus de Datos y Dirección:</strong> Transportan información entre los distintos componentes.</li>
                    <li><strong>Memoria Caché:</strong> Almacena datos frecuentemente utilizados para mejorar la velocidad.</li>
                </ul>
            </section>

            <section>
                <h2>Conclusión</h2>
                <p>
                    Los microprocesadores han evolucionado significativamente desde sus inicios, y comprender sus arquitecturas y funcionamiento es esencial para optimizar su rendimiento y aplicaciones en diversos sistemas.
                </p>
            </section>
        </div>
    );
};

export default Microprocesadores;
