import React from "react";

const ProcesosOrdenadosDesordenados = () => {
    return (
        <div className="container">
            <h1>Procesos Ordenados y Desordenados</h1>

            <section>
            <h2>¿Qué es un Proceso?</h2>
            <p>
                Un <strong>proceso</strong> es un programa en ejecución que requiere recursos del sistema para funcionar, como CPU, memoria, archivos y dispositivos de entrada/salida.
            </p>
            <p>
                Los procesos pueden clasificarse por la manera en que son ejecutados, principalmente en procesos ordenados y desordenados.
            </p>
        </section>

        <section>
            <h2>Procesos Ordenados</h2>
            <p>
                Son aquellos que siguen una secuencia lógica y estructurada. Cada paso depende del anterior, por lo que el orden de ejecución es crucial para su correcto funcionamiento.
            </p>
            <ul>
                <li>La ejecución es determinística y predecible.</li>
                <li>Se aplican comúnmente en sistemas donde el control de flujo es estricto.</li>
                <li>Ejemplo: algoritmos secuenciales, carga del sistema operativo, instalación de software.</li>
            </ul>
        </section>

        <section>
            <h2>Procesos Desordenados</h2>
            <p>
                Son procesos cuya ejecución no sigue necesariamente un orden fijo. Pueden depender de eventos externos o ejecutarse en paralelo sin coordinación explícita.
            </p>
            <ul>
                <li>Se presentan en entornos donde la concurrencia es necesaria.</li>
                <li>Ejemplo: procesos en segundo plano, hilos en aplicaciones multiusuario, servicios web.</li>
                <li>Su gestión puede requerir sincronización, semáforos o mecanismos de comunicación entre procesos.</li>
            </ul>
        </section>

        <section>
            <h2>Importancia de esta Clasificación</h2>
            <p>
                Distinguir entre procesos ordenados y desordenados permite diseñar sistemas eficientes, especialmente en entornos multitarea, programación paralela y sistemas distribuidos.
            </p>
        </section>

        <section>
            <h2>Conclusión</h2>
            <p>
                Comprender el comportamiento de los procesos permite al desarrollador o ingeniero tomar decisiones clave sobre la arquitectura del software, el rendimiento del sistema y la eficiencia en la ejecución de tareas.
            </p>
        </section>
    </div>


    );
};

export default ProcesosOrdenadosDesordenados;