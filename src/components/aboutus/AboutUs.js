import facebook from "../../images/facebook-logo.png";
import google from "../../images/google-logo.png";
import analytics from "../../images/analytics-logo.png";
import cheque from "../../images/cheque.png";
import img1 from "../../images/aboutus-img1.png";
import img2 from "../../images/aboutus-img2.png";
import img3 from "../../images/aboutus-img3.png";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <section id="about-us">
      <div id="about-us__bg"></div>

      <div id="about-us__wrapper">
        <div id="about-us__info-container">
          <h2 id="about-us__title">
            Hacemos de tu <span>IDEA</span> <br /> un gran <span>PROYECTO</span>{" "}
            <br />
            con herramientas de:
          </h2>

          <div id="about-us__imgs-container">
            <img
              id="about-us__facebook-logo"
              className="about-us__logo"
              src={facebook}
              alt=""
            />
            <img
              id="about-us__google-logo"
              className="about-us__logo"
              src={google}
              alt=""
            />
            <img className="about-us__logo" src={analytics} alt="" />
          </div>
        </div>

        <div id="about-us__info-container__wrapper">
          <div className="about-us__info">
            <p className="about-us__info-number">23</p>
            <p className="about-us__info-text">Años de experiencia</p>
          </div>
          <div className="about-us__info">
            <p className="about-us__info-number">62</p>
            <p className="about-us__info-text">Mentes involucradas</p>
          </div>
          <div className="about-us__info">
            <p className="about-us__info-number">100%</p>
            <p className="about-us__info-text">Clientes Felices</p>
          </div>
        </div>
      </div>
      <div id="about-us__orders-container">
        <h2 id="abouts-us__orders-title">Nos encargamos de todo</h2>

        <div id="about-us__orders__cards-container">
          <div className="about-us___orders__cards">
            <img className="about-us__orders__cards-img" src={img1} />
            <p className="about-us__orders__cards-title">Campañas Multicanal</p>
            <p className="about-us__orders__cards-paragraph">
              Desarrollamos y ejecutamos campañas en distintos canales online y
              offline con el objetivo fijado en resultados.
            </p>
          </div>

          <div className="about-us___orders__cards">
            <img className="about-us__orders__cards-img" src={img2} />
            <p className="about-us__orders__cards-title">
              Materiales de promoción
            </p>
            <p className="about-us__orders__cards-paragraph">
              Planificamos, diseñamos y ponemos en marcha distintas
              creatividades adaptadas para canal.
            </p>
          </div>

          <div className="about-us___orders__cards">
            <img className="about-us__orders__cards-img" src={img3} />
            <p className="about-us__orders__cards-title">Software de Gestión</p>
            <p className="about-us__orders__cards-paragraph">
              Utilizamos diversos software de gestión que son adaptados según la
              necesidad del cliente a sus procesos de venta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
