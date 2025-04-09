import { Link } from 'react-router-dom';
import "../assets/styles/laboratorios.css";
import React from "react";
import iconLab from "../assets/images/cpu-icon.webp";

const Laboratorios = () => {
    return (
        <section className="home text-center">
            <div className="container">
                <h1 className="title">
                    Arquitectura de <strong>Máquinas 1</strong>
                </h1>
                <p className="subtitle">
                    Texto para adentrar a lo que sería la página
                </p>
                <div className="row justify-content-center">
                    {[1, 2, 3, 4, 5, 6].map((id) => (
                        <div key={id} className="col-md-4 col-sm-6 mb-4">
                            <div className="lab-item">
                                <Link to={`/laboratorio/${id}`}>
                                    <img
                                        src={iconLab}
                                        alt={`Laboratorio #${id}`}
                                        className="img-fluid"
                                        style={{ cursor: "pointer" }}
                                    />
                                </Link>
                                <p>Laboratorio #{id}</p>
                                <p>Fecha: 00/00/2025</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Laboratorios;
