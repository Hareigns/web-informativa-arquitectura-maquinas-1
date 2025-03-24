
import React from "react";
import "../assets/styles/about.css";
import logoAbout from "../assets/images/about-icon.webp"

const About = () => {
  return (
    <div className="container hero-section">
      <div className="col align-items-center">

        <div className="row-md-6">
          <img src={logoAbout} alt="Logo Arquitectura de Maquinas I" className="hero-logo" />
        </div>

        <div className="row-md-6">

          <h1 className="hero-title-about">
            Somos un equipo de dos apasionados<br></br><span className="fw-bold">estudiantes de la Universidad Nacional de Ingeniería (UNI), actualmente cursando la asignatura de Arquitectura de Máquinas I. Este proyecto nace como parte de nuestro trabajo de fin de curso, con el objetivo principal de compartir y difundir el conocimiento que hemos adquirido a lo largo de las clases teóricas y prácticas.</span>
          </h1>

        </div>


      </div>
    </div>
  );
};

export default About;