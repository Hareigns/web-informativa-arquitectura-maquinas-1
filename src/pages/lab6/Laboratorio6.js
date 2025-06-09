import React from "react";
import { Link } from "react-router-dom";
// Asegúrate de tener una imagen adecuada para el laboratorio 4
import imagenLab5 from '../../assets/images/logoLab_1.webp'; // Cambia por la imagen correcta

// Usaremos el mismo CSS para mantener consistencia
import '../../assets/styles/laboratorio1.css';

const Laboratorio6 = () => {
  return (
        <div className="container text-center">
            <h1>Laboratorio 6</h1>
            <p>Descripción detallada del Laboratorio 6.</p>
            <p><strong>Fecha:</strong> 01/01/2025</p>

            <div className="img-container">
                <img src={imagenLab5} alt="Ensamblador" className="lab-img" />
            </div>

            <Link to="/lab6/Arq-Microcontroladores">
                <button className="btn btn-primary mt-3">Ver informacion sobre arquitectura de microcontroladores</button>
            </Link>
        </div>
    );
};

export default Laboratorio6;