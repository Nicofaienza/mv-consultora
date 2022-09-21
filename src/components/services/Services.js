import { HiUsers } from "react-icons/hi";
import { BsFillTelephoneFill, BsFileBarGraph } from "react-icons/bs";
import {
  AiOutlineExclamationCircle,
  AiFillFacebook,
  AiOutlineDatabase,
} from "react-icons/ai";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h2 id="services__title">Servicios</h2>
      <div id="services__articles-container">
        <article className="services__article">
          <div className="article__div-hover">
            <p className="hover-text">
              Nos especializamos en el desarrollo estratégico de campañas online
              encontrando a tu público adecuado en el momento preciso. Generamos
              oportunidades de venta para tu negocio usando Facebook, Instagram,
              Twitter, Google y más.
            </p>
          </div>
          <div className="services__article-wrapper">
            <HiUsers />
            <p>Generacion de clientes potenciales</p>
          </div>
        </article>

        <article className="services__article">
          <div className="article__div-hover">
            <p className="hover-text">
              Con un equipo de más de 60 operadores telefónicos especializados y
              formados para atención y venta telefónica. Nuestros call center
              operan con herramientas de última tecnología permitiendo ejecutar
              campañas y acciones específicas con excelente impacto y
              resultados.
            </p>
          </div>
          <div className="services__article-wrapper">
            <BsFillTelephoneFill />
            <p>Venta Telefónica</p>
          </div>
        </article>

        <article className="services__article">
          <div className="article__div-hover">
            <p className="hover-text">
              Nuestra estructura permite abastecer a diferentes empresas de
              posiciones exclusivas para la atención y gestión de clientes.
              Líneas 0800 y 0810 exclusivas. Operadores específicos para cada
              campaña con capacitación continua. La solución externa de
              excelente eficiencia y bajo riesgo que su empresa estaba buscando.
            </p>
          </div>
          <div className="services__article-wrapper">
            <AiOutlineExclamationCircle />
            <p>Atención al cliente</p>
          </div>
        </article>

        <article className="services__article">
          <div className="article__div-hover">
            <p className="hover-text">
              Generamos contenido para tu comunidad e interactuamos con tus
              seguidores día a día. Monitorizamos tu marca en las redes
              sociales. Optimizamos y creamos tus perfiles sociales
              corporativos. Generamos contenido destinado a tu público objetivo.
              Gestionamos tu comunidad día a día e interactuamos con tus
              seguidores
            </p>
          </div>
          <div className="services__article-wrapper">
            <AiFillFacebook />
            <p>Gestión de Redes Sociales</p>
          </div>
        </article>

        <article className="services__article">
          <div className="article__div-hover">
            <p className="hover-text"></p>
          </div>
          <div className="services__article-wrapper">
            <BsFileBarGraph />
            <p>Logística y distribución en vía pública</p>
          </div>
        </article>

        <article className="services__article">
          <div className="article__div-hover">
            <p className="hover-text"></p>
          </div>
          <div className="services__article-wrapper">
            <AiOutlineDatabase />
            <p>Confección de bases de datos</p>
          </div>
        </article>

        <article className="services__article">
          <div className="article__div-hover">
            <p className="hover-text"></p>
          </div>
          <div className="services__article-wrapper">
            <FaBalanceScaleLeft />
            <p>Administración legal y contable</p>
          </div>
        </article>

        <article className="services__article">
          <div className="article__div-hover">
            <p className="hover-text"></p>
          </div>
          <div className="services__article-wrapper">
            <VscGraphLine />
            <p>Campañas Políticas</p>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Services;
