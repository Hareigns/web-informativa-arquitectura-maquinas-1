import { Link } from 'react-router-dom';
import AppLogo from "../assets/images/logoApp.webp";
import "../assets/styles/navbar.css"; 
import React from "react";

const Header = () => { 
  return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={AppLogo}
            alt="Logo Veterinaria Jackson"
          />
          Arquitectura de Maquinas I
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/laboratorios">Laboratorios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Acerca de nosotros</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header; 
