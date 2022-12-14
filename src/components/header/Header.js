import "./header.css";
import logo from "../../images/logoMV.png";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header id="header">
      <div id="fixedHeader">
        <div className="containerHeader">
          <a title="linkImgHeader" href="#">
            <img className="imgHeader" src={logo} alt="linkImgHeader" />
          </a>
          <ul className="list">
            <li>
              <a className="listElement" href="#" onClick={handleShowMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a
                className="listElement"
                href="#about-us"
                onClick={handleShowMenu}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                className="listElement"
                href="#services"
                onClick={handleShowMenu}
              >
                Servicios
              </a>
            </li>
            <li>
              <a className="listElement" href="#form" onClick={handleShowMenu}>
                Contacto
              </a>
            </li>
          </ul>
          {showMenu ? (
            <ImCross id="btn-close-menu" onClick={handleShowMenu} />
          ) : (
            <FaBars id="btn-open-menu" onClick={handleShowMenu} />
          )}

          <div
            className={showMenu ? "menu-responsive open" : "menu-responsive"}
          >
            <ul id="menu-responsive__ul">
              <li className="menu-responsive__li">
                <a
                  className="menu-responsive__link"
                  href="#"
                  onClick={handleShowMenu}
                >
                  Inicio
                </a>
              </li>
              <li className="menu-responsive__li">
                <a
                  className="menu-responsive__link"
                  href="#about-us"
                  onClick={handleShowMenu}
                >
                  Nosotros
                </a>
              </li>
              <li className="menu-responsive__li">
                <a
                  className="menu-responsive__link"
                  href="#services"
                  onClick={handleShowMenu}
                >
                  Servicios
                </a>
              </li>
              <li className="menu-responsive__li">
                <a
                  className="menu-responsive__link"
                  href="#form"
                  onClick={handleShowMenu}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
