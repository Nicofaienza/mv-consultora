import facebook from "../../images/facebook-logo.png";
import google from "../../images/google-logo.png";
import analytics from "../../images/analytics-logo.png";
import cheque from "../../images/cheque.png";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <section id="about-us">
      <div id="about-us__bg"></div>
      <div id="about-us__wrapper">
        <div id="about-us__info-container">
          <h2 id="about-us__title">Hacemos de tu idea un gran proyecto</h2>
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
        <div id="about-us__tools-container">
          <h3>Con herramientas de</h3>
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
      </div>
      <h2 className="abouts-us__title">Nos encargamos de todo</h2>
      <div id="about-us__info-container__wrapper2">
        <div className="about-us__info2">
          <p className="about-us__info2-number">Campañas Multicanal</p>
          <p className="about-us__info2-text">
            Desarrollamos y ejecutamos campañas en distintos canales online y
            offline con el objetivo fijado en resultados.
          </p>
        </div>
        <div className="about-us__info2">
          <p className="about-us__info2-number">Materiales de promoción</p>
          <p className="about-us__info2-text">
            Planificamos, diseñamos y ponemos en marcha distintas creatividades
            adaptadas para canal.
          </p>
        </div>
        <div className="about-us__info2">
          <p className="about-us__info2-number">Software de Gestión</p>
          <p className="about-us__info2-text">
            Utilizamos diversos software de gestión que son adaptados según la
            necesidad del cliente a sus procesos de venta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
