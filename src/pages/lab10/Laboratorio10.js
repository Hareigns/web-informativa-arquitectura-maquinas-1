import React from "react";
import { Link } from "react-router-dom";

const Laboratorio10 = () => {
    return (
        <div className="container">
            <h1>Laboratorio 10</h1>
            <p>Descripción detallada del Laboratorio 10.</p>
            <p><strong>Fecha:</strong> 01/01/2025</p>
            <Link to="/lab10/moduloCCP">
                <button className="btn btn-primary mt-3">moduloCCP</button>
            </Link>
        </div>
    );
};

export default Laboratorio10;
