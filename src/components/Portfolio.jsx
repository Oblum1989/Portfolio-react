import React from 'react';
import '../assets/styles/components/Portfolio.css';

const Portfolio = () => (
  <div id="tf-portfolio">
    <div className="container">
      <div className="section-title">
        <h3>My Latest Works</h3>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="proyecto">
            <img src="img/proy1.png" className="img-responsive" alt='#' />
            <div className="proy-description">
              <p>Network diseño de Apps para empresa</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="proyecto">
            <img src="img/proy2.png" className="img-responsive" alt='#' />
            <div className="proy-description">
              <p>StudioDev creación de aplicaciones </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="proyecto">
            <img src="img/proy3.png" className="img-responsive" alt='#' />
            <div className="proy-description">
              <p>SuperBlog - Blog creado con Rails</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row toppadding">
        <div className="col-md-4">
          <div className="proyecto">
            <img src="img/proy4.png" className="img-responsive" alt='#' />
            <div className="proy-description">
              <p>Aplicacion en Rails clon de Stack OverFlow</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="proyecto">
            <img src="img/proy5.png" className="img-responsive" alt='#' />
            <div className="proy-description">
              <p>PetShop Baco - Ecommerce para una veterinaria</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="proyecto">
            <img src="img/proy6.png" className="img-responsive" alt='#' />
            <div className="proy-description">
              <p>Ecommerce ejercicio practico en Bootstrap</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Portfolio;