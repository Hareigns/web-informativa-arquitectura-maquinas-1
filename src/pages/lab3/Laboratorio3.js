import React from "react";
import { Link } from "react-router-dom";
import imagenLab3 from '../../assets/images/logoLab_1.webp'; // Cambia por la imagen correcta
import '../../assets/styles/laboratorio1.css';

const Laboratorio3 = () => {
    return (
        <div className="container text-center">
            <h1>Laboratorio 3</h1>
            <p>Descripción detallada del Laboratorio 3.</p>
            <p><strong>Fecha:</strong> 01/01/2025</p>

            <div className="img-container">
                <img src={imagenLab3} alt="Procesadores" className="lab-img" />
            </div>

            <Link to="/lab3/funcionalidad-comparacion">
                <button className="btn btn-primary mt-3">Ver Funcionalidad y Comparación de Procesadores</button>
            </Link>
        </div>
    );
};

export default Laboratorio3;