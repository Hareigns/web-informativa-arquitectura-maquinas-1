import React from "react";
import { Link } from "react-router-dom";

const Laboratorio11 = () => {
    return (
        <div className="container">
            <h1>Laboratorio 11</h1>
            <p>Descripción detallada del Laboratorio 11.</p>
            <p><strong>Fecha:</strong> 01/01/2025</p>
            <Link to="/lab11/señales y temporizador">
                <button className="btn btn-primary mt-3">Señales y temporizador</button>
            </Link>
        </div>
    );
};

export default Laboratorio11;
