import React from "react";
import "../../assets/styles/about.css";
import logoAbout from "../../assets/images/about-icon.webp";
import uniLogo from "../../assets/images/uni-icon.webp";
import githubLogo from "../../assets/images/about-icon.webp";
import linkedinLogo from "../../assets/images/about-icon.webp";

const About = () => {
  const teamMembers = [
    {
      name: "Kevin Geovanni Cerpas Gonzalez",
      role: "Ingenieria en computacion",
      bio: "Apasionado por la programación de bajo nivel y optimización de recursos.",
      //github: "https://github.com/juanperez",
      //linkedin: "https://linkedin.com/in/juanperez"
    },
    {
      name: "Harvin Gabriel Gutiérrez Guillen",
      role: "Ingenieria en computacion",
      bio: "Enfocada en aplicaciones sostenibles con tecnología embebida.",
      //github: "https://github.com/mariagarcia",
      //linkedin: "https://linkedin.com/in/mariagarcia"
    },
    {
      name: "Keneth Judel Guzmán Vílchez",
      role: "Ingenieria en computacion",
      bio: "Interesado en el diseño eficiente de sistemas computacionales.",
      //github: "https://github.com/carloslopez",
      //linkedin: "https://linkedin.com/in/carloslopez"
    }
  ];

  return (
    <div className="eco-tech-about-container">
      <header className="eco-tech-about-header">
        <div className="header-content">
          <img src={logoAbout} alt="Logo Arquitectura de Maquinas I" className="about-logo" />
          <div className="title-container">
            <h1 className="eco-tech-about-title">Sobre Nosotros</h1>
            <div className="eco-tech-about-badge">
              <span>👨‍💻</span> Pasión por la tecnología eficiente
            </div>
          </div>
        </div>
      </header>

      <main className="eco-tech-about-content">
        <section className="eco-tech-about-card">
          <div className="card-header">
            <h2>Nuestro Propósito</h2>
          </div>
          <div className="card-body">
            <p className="about-description">
              Somos un equipo de tres apasionados estudiantes de la <strong>Universidad Nacional de Ingeniería (UNI)</strong>, 
              actualmente cursando la asignatura de <strong>Arquitectura de Máquinas I</strong>. Este proyecto nace como parte 
              de nuestro trabajo de fin de curso, con el objetivo principal de compartir y difundir el conocimiento 
              que hemos adquirido a lo largo de las clases teóricas y prácticas.
            </p>
            <div className="university-info">
              <img src={uniLogo} alt="Logo UNI" className="uni-logo" />
              <div>
                <h3>Universidad Nacional de Ingeniería</h3>
                <p>Facultad de Ingeniería Eléctrica y Computación</p>
                <p>Arquitectura de Máquinas I - 2025</p>
              </div>
            </div>
          </div>
        </section>

        <section className="eco-tech-about-card">
          <div className="card-header">
            <h2>Nuestro Equipo</h2>
          </div>
          <div className="card-body">
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div className="team-card" key={index}>
                  <div className="member-photo"></div>
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio"></p>
                  <div className="social-links">
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="eco-tech-about-card">
          <div className="card-header">
            <h2>Nuestra Filosofía</h2>
          </div>
          <div className="card-body">
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <span className="philosophy-icon">🌱</span>
                <h3>Tecnología Sostenible</h3>
                <p>Promovemos el uso eficiente de recursos en el desarrollo de sistemas computacionales.</p>
              </div>
              <div className="philosophy-item">
                <span className="philosophy-icon">📚</span>
                <h3>Conocimiento Abierto</h3>
                <p>Creemos en compartir el conocimiento para impulsar la innovación tecnológica.</p>
              </div>
              <div className="philosophy-item">
                <span className="philosophy-icon">💡</span>
                <h3>Innovación Continua</h3>
                <p>Buscamos constantemente mejorar y optimizar nuestras soluciones tecnológicas.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="eco-tech-about-footer">
        <p>Proyecto de Arquitectura de Máquinas I - UNI 2025</p>
        <div className="footer-icons">
          <span>👨‍🎓</span>
          <span>💻</span>
          <span>🌿</span>
        </div>
      </footer>
    </div>
  );
};

export default About;