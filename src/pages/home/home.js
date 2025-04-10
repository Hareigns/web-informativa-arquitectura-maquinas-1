import { useNavigate } from 'react-router-dom';

import React from "react";
import "../../assets/styles/home.css";
import logoPC from "../../assets/images/pc-retro.webp"

const Home = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    // Cambia la ruta según la página a la que deseas navegar
    navigate("/laboratorios");
  };
  return (

    <div className="container hero-section">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="hero-title">
            Puede investigar <br></br><span className="fw-bold">y repasar los laboratorios impartidos por el docente</span>
          </h1>

          <button className="btn btn-custom mt-3" onClick={handleClick}>Comenzar</button>
        </div>

        <div className="col-md-6">
          <img src={logoPC} alt="Logo Arquitectura de Maquinas I" className="hero-logo" />
        </div>
      </div>
    </div>

  );
};

export default Home;
