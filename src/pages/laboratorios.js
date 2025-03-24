import { Link } from 'react-router-dom';
import AppLogo from "../assets/images/logoApp.webp";
import "../assets/styles/laboratorios.css";
import React from "react";

import iconLab from "../assets/images/cpu-icon.webp"; // Reemplaza con la imagen correcta

const Laboratorios = () => {
    return (
        <section className="home text-center">
            <div className="container">
                <h1 className="title">
                    Arquitectura de <strong>Maquinas 1</strong>
                </h1>
                <p className="subtitle">
                    Texto para adentrar a lo que sería la página
                </p>
                <div className="row justify-content-center">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="col-md-4 col-sm-6 mb-4">
                            <div className="lab-item">
                                <img
                                    src={iconLab}
                                    alt={`Laboratorio #${index + 1}`}
                                    className="img-fluid"
                                />
                                <p>Laboratorio #{index + 1}</p>
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

