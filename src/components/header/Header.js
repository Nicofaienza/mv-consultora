import "./header.css";
import logo from "../../images/logoMV.png";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";

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
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

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
                <a className="listElement" href="#about-us">
                  Nosotros
                </a>
              </li>
              <li>
                <a className="listElement" href="#services">
                  Servicios
                </a>
              </li>
              <li>
                <a className="listElement" href="#form">
                  Contacto
                </a>
              </li>
            </ul>
            {showMenu ? (
              <ImCross id="btn-close-menu" onClick={handleShowMenu} />
            ) : (
              <FaBars id="btn-open-menu" onClick={handleShowMenu} />
            )}

            <div class={showMenu ? "menu-responsive open" : "menu-responsive"}>
              <ul id="menu-responsive__ul">
                <li className="menu-responsive__li">
                  <a className="menu-responsive__link" href="#">
                    Inicio
                  </a>
                </li>
                <li className="menu-responsive__li">
                  <a className="menu-responsive__link" href="#about-us">
                    Nosotros
                  </a>
                </li>
                <li className="menu-responsive__li">
                  <a className="menu-responsive__link" href="#services">
                    Servicios
                  </a>
                </li>
                <li className="menu-responsive__li">
                  <a className="menu-responsive__link" href="#form">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
