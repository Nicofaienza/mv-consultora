import icbc from "../../images/ICBC_logo.png";
import adt from "../../images/ADT-logo.png";
import interval from "../../images/interval-logo.png";
import passport from "../../images/passport-logo.png";

import "./sponsors.css";

const Sponsors = () => {
  return (
    <section id="sponsors">
      <div id="sponsors__bg"></div>
      <div id="sponsors__wrapper">
        <h2 id="sponsors__title">Formá parte de nuestros casos de éxito</h2>
        <div id="sponsors__logos-container">
          <img className="sponsors__logo" src={icbc} />
          <img className="sponsors__logo" src={adt} />
          <img className="sponsors__logo" src={interval} />
          <img className="sponsors__logo" src={passport} />
        </div>
        <div id="sponsors__form">
          <p id="sponsors__form__text">Ponete en contacto con nosotros</p>
          <a href="#form">
            <button id="sponsors__form__button">
              IR AL FORMULARIO DE CONTACTO
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
