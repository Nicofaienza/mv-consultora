import "./footer.css";
import logoFooter from "../../images/rasaNorteLogo.png";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import logo from "../../images/logoMV.png";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div id="footer__wrapper">
          <img id="footer__logo" src={logo} />
          <div id="footer__info-container">
            <ul id="footer__info-list">
              <li className="footer__info-container__li">
                Email: example@gmail.com
              </li>
              <li className="footer__info-container__li">
                Teléfono: 0223-X-XXXXXX
              </li>
              <li className="footer__info-container__li">
                Dirección: Fake Street 123
              </li>
            </ul>
            <ul id="footer__icons-container">
              <li className="footer__icons-container-li">
                <a
                  target="_blank"
                  className="footer__icons-container-link"
                  href="https://www.facebook.com/mvconsultoralatam/"
                >
                  <FaFacebookSquare className="footer__icon" />
                </a>
              </li>
              <li className="footer__icons-container-li">
                <a
                  target="_blank"
                  className="footer__icons-container-link"
                  href="https://www.linkedin.com/in/mv-consultora-142403212/"
                >
                  <FaLinkedin className="footer__icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="footer__copy">
          © Copyright 2022. All Rights Reserved by MV-Consultora
        </div>
      </footer>
    </>
  );
};

export default Footer;
