import React from "react";
import { Link } from "react-router-dom";

const Laboratorio12 = () => {
    return (
        <div className="container">
            <h1>Laboratorio 12</h1>
            <p>Descripción detallada del Laboratorio 12.</p>
            <p><strong>Fecha:</strong> 01/01/2025</p>
            <Link to="/lab12/Transmision y conversion digital">
                <button className="btn btn-primary mt-3">transmision y conversion Digital</button>
            </Link>
        </div>
    );
};

export default Laboratorio12;
