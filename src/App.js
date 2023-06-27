import React, { useState } from 'react';
import './App.css';
import logo from "./assets/PEMlogo.png";

function App() {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    const section = document.getElementById(buttonName);
    window.scrollTo({
      top: section.offsetTop - 50,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="menu">
          <div className="menu-buttons">
          <img src={logo} alt='Logo' width={85} height={85} style={{ float: 'left' }}/>
            <button
              className={`menu-button ${activeButton === 'nosotros' ? 'active' : ''}`}
              onClick={() => handleButtonClick('nosotros')}
            >
              Nosotros
              {activeButton === 'nosotros' && <div className="line"></div>}
            </button>
            <button
              className={`menu-button ${activeButton === 'cobertura' ? 'active' : ''}`}
              onClick={() => handleButtonClick('cobertura')}
            >
              Cobertura
              {activeButton === 'cobertura' && <div className="line"></div>}
            </button>
            <button
              className={`menu-button ${activeButton === 'servicio' ? 'active' : ''}`}
              onClick={() => handleButtonClick('servicio')}
            >
              Servicio
              {activeButton === 'servicio' && <div className="line"></div>}
            </button>
            <button
              className={`menu-button ${activeButton === 'personal' ? 'active' : ''}`}
              onClick={() => handleButtonClick('personal')}
            >
              Personal
              {activeButton === 'personal' && <div className="line"></div>}
            </button>
            <button
              className={`menu-button ${activeButton === 'ventajas' ? 'active' : ''}`}
              onClick={() => handleButtonClick('ventajas')}
            >
              Ventajas
              {activeButton === 'ventajas' && <div className="line"></div>}
            </button>
            <button
              className={`menu-button ${activeButton === 'contacto' ? 'active' : ''}`}
              onClick={() => handleButtonClick('contacto')}
            >
              Contacto
              {activeButton === 'contacto' && <div className="line"></div>}
            </button>
          </div>
        </nav>
      </header>
      <main>
        <section id="nosotros" >
          <h2 className='title'>Nosotros</h2>
          <p>
            Somos una empresa de Autotransporte que inicia sus operaciones en el año 2018, con el firme propósito de lograr la completa satisfacción de sus clientes, ofreciendo un servicio eficiente que solucione las necesidades de nuestros clientes, con el compromiso de siempre contar con la infraestructura necesaria para cumplir con los requerimientos de puntualidad y seguridad de sus cargas.
          </p>
          <div className="subtitulos">
            <div className="subtitulo">
              <h3>Misión</h3>
              <p>
                Ofrecer un servicio de autotransporte puntual, seguro y confiable. Mejorando continuamente mediante la aplicación de mejores prácticas y tecnologías, contribuyendo de esta manera en el éxito de nuestra empresa, de nuestros clientes y de nuestros colaboradores.
              </p>
            </div>
            <div className="subtitulo">
              <h3>Visión</h3>
              <p>
                Ser la empresa líder de la región en el sector de autotransporte, que se distinga por su atención al cliente y por su constante esfuerzo para superar y cumplir con todos sus requerimientos y expectativas.
              </p>
            </div>
            <div className="subtitulo">
              <h3>Valores</h3>
              <p>
                Honestidad<br />
                <br />Lealtad<br />
                <br />Actitud de servicio<br />
                <br />Compromiso<br />
                <br />Profesionalismo<br />
                <br />Trabajo en equipo
              </p>
            </div>
          </div>
        </section>
        <section id="cobertura">
          <h2 className='title blue'>Cobertura</h2>
          <p>
          Se cuenta con presencia de equipo terrestre para movimientos nacionales, intra US, importación y exportación.
          </p>
        </section>
        <section id="servicio">
          <h2 className='title'>Servicio</h2>
          <p>
              Automotriz<br />
              <br />Manufacturera<br />
          </p>
        </section>
        <section id="personal">
          <h2 className='title blue'>Personal</h2>
          <p>
          Contamos con conductores calificados, con amplia experiencia y capacidad para transportar puntualmente cargas en rutas nacionales e internacionales.<br />
          <br />El personal operativo está capacitado en sistemas de localización y sistemas para el control administrativo.<br />
          <br />Personal administrativo con alto grado de atención y servicio al cliente.
          </p>
        </section>
        <section id="ventajas">
          <h2 className='title'>Ventajas</h2>
          <p>
          Unidades con GPS con Sistema de Bloqueo con monitoreo las 24 horas del dia.<br />
          <br />Unidades de reciente modelo (2017 o superior) que cuentan con mantenimiento   
          continuo y preventivo.<br />
          <br />Comunicación constante con el cliente sobre avances del servicio.<br />
          <br />El mejor trato de servicio al cliente<br />
          <br />Alta tasa de efectividad en tiempos de servicio.
          </p>
        </section>
        <section id="contacto">
          <h2 className='title blue'>Contacto</h2>
        </section>
      </main>
    </div>
  );
}

export default App;