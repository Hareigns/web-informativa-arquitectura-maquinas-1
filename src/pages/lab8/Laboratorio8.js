import React from "react";
import { Link } from "react-router-dom";
// Asegúrate de tener una imagen adecuada para el laboratorio 8
import imagenLab5 from '../../assets/images/logoLab_1.webp'; // Cambia por la imagen correcta

// Usaremos el mismo CSS para mantener consistencia
import '../../assets/styles/laboratorio1.css';

const Laboratorio8 = () => {
  return (
        <div className="container text-center">
            <h1>Laboratorio 8</h1>
            <p>Descripción detallada del Laboratorio 8.</p>
            <p><strong>Fecha:</strong> 01/01/2025</p>

            <div className="img-container">
                <img src={imagenLab5} alt="Ensamblador" className="lab-img" />
            </div>

            <Link to="/lab8/Arquitectura-PCI">
                <button className="btn btn-primary mt-3">Ver informacion sobre arquitecturaPCI</button>
            </Link>
        </div>
    );
};

export default Laboratorio8;

