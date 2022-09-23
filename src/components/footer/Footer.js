import "./footer.css";
import logoFooter from "../../images/rasaNorteLogo.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="containerFooter">
          <a target="_blank" title="linkImgFooter" href="http://rasanorte.com">
            <img className="imgFooter" src={logoFooter} alt="linkImgFooter" />
          </a>
          <ul className="footerList">
            <li>
              <a
                target="_blank"
                className="footerListElement"
                href="https://www.facebook.com/mvconsultoralatam/"
              >
                <RiFacebookCircleLine className="footerIcon" />
                |mvconsultoralatam
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="footerListElement"
                href="https://www.instagram.com/salonarraial/?hl=es-la"
              >
                <RiInstagramLine className="footerIcon" />
                |salonarraial
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="footerListElement"
                href="https://www.instagram.com/zonanortemultiespacio/?hl=es-la"
              >
                <RiInstagramLine className="footerIcon" />
                |zonanortemultiespacio
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
