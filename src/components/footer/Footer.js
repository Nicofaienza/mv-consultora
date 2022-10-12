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
                Teléfono: 0810 333 4114
              </li>
              <li className="footer__info-container__li">
                Dirección: Rawson 1857
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
                  href="https://ar.linkedin.com/in/mv-consultora-142403212?trk=public_profile_browsemap"
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
