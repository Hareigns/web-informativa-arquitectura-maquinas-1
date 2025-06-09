import { useNavigate } from 'react-router-dom';
import React from "react";
import "../../assets/styles/home.css";
import logoPC from "../../assets/images/pc-retro.webp";
import ecoIcon from "../../assets/images/eco-icon.webp";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/laboratorios");
  };

  return (
    <div className="eco-home-container">
      {/* Partículas de fondo */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <div className="eco-hero-section">
        <div className="hero-content">
          <div className="hero-text-content">
            <div className="eco-badge">
              <img src={ecoIcon} alt="Icono ecológico" className="eco-icon" />
              <span>Tecnología sostenible</span>
            </div>
            
            <h1 className="eco-hero-title">
              Explora los <span>laboratorios</span> de <br />
              <span className="highlight">Arquitectura de Máquinas I</span>
            </h1>
            
            <p className="eco-hero-subtitle">
              Aprende sobre microprocesadores, ensamblador y más, con un enfoque en 
              <strong> eficiencia energética</strong> y <strong>tecnología sostenible</strong>.
            </p>
            
            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">💻</span>
                <span>Microprocesadores</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔌</span>
                <span>Ensamblador x86</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌱</span>
                <span>Eficiencia energética</span>
              </div>
            </div>
            
            <button className="eco-btn" onClick={handleClick}>
              <span>Comenzar aprendizaje</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>
          
          <div className="hero-image-container">
            <img src={logoPC} alt="Computadora retro" className="eco-hero-image" />
            <div className="image-overlay">
              <span className="overlay-text">Tecnología del pasado, conocimiento para el futuro</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de beneficios */}
      <div className="eco-benefits">
        <h2 className="benefits-title">¿Por qué aprender con nosotros?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <span className="benefit-icon">📚</span>
            <h3>Contenido actualizado</h3>
            <p>Laboratorios basados en las últimas tecnologías y prácticas sostenibles.</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">♻️</span>
            <h3>Enfoque ecológico</h3>
            <p>Énfasis en eficiencia energética y reducción de huella de carbono.</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">🖥️</span>
            <h3>Práctica real</h3>
            <p>Ejercicios con código real de ensamblador y arquitectura de procesadores.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;