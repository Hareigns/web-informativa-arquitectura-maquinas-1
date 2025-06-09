import React from "react";
import { Link } from "react-router-dom";
// Asegúrate de tener una imagen adecuada para el laboratorio 7
import imagenLab5 from '../../assets/images/logoLab_1.webp'; // Cambia por la imagen correcta

// Usaremos el mismo CSS para mantener consistencia
import '../../assets/styles/laboratorio1.css';

const Laboratorio7 = () => {
  return (
        <div className="container text-center">
            <h1>Laboratorio 7</h1>
            <p>Descripción detallada del Laboratorio 7.</p>
            <p><strong>Fecha:</strong> 01/01/2025</p>

            <div className="img-container">
                <img src={imagenLab5} alt="Ensamblador" className="lab-img" />
            </div>

            <Link to="/lab7/Memoria-Microcontroladores">
                <button className="btn btn-primary mt-3">Ver informacion sobre memoria de Microcontroladores</button>
            </Link>
        </div>
    );
};

export default Laboratorio7;

