import React from "react";
import { Link } from "react-router-dom";
// Ruta CORRECTA para la imagen
import imagenMicro from '../../assets/images/logoLab_1.webp';

// Ruta CORRECTA para el CSS
import '../../assets/styles/laboratorio1.css';

const Laboratorio1 = () => {
    return (
        <div className="container text-center">
            <h1>Laboratorio 1</h1>
            <p>Descripción detallada del Laboratorio 1.</p>
            <p><strong>Fecha:</strong> 01/01/2025</p>

            <div className="img-container">
                <img src={imagenMicro} alt="Microprocesador" className="lab-img" />
            </div>

            <Link to="/lab1/microprocesadores">
                <button className="btn btn-primary mt-3">Ver Información sobre Microprocesadores</button>
            </Link>
        </div>
    );
};

export default Laboratorio1;
