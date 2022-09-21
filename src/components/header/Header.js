import "./header.css";
import logo from "../../images/logoMV.png";

/*
document.ready(function () {
  window.scroll(function () {
    if (this.scrollTop() > 0) {
      "header".addClass("header2");
    } else {
      "header".removeClass("header2");
    }
  });
});
*/
const Header = () => {
  return (
    <>
      <header id="header">
        <div id="fixedHeader">
          <div className="containerHeader">
            <a title="linkImgHeader" href="#">
              <img className="imgHeader" src={logo} alt="linkImgHeader" />
            </a>
            <ul className="list">
              <li>
                <a className="listElement" href="#">
                  Inicio
                </a>
              </li>
              <li>
                <a className="listElement" href="#services">
                  Servicios
                </a>
              </li>
              <li>
                <a className="listElement" href="#about-us">
                  Nosotros
                </a>
              </li>
              <li>
                <a className="listElement" href="#form">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
