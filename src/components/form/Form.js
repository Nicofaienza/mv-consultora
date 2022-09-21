import "./form.css";
import backgroundMain from "./video/backgroundMain.mp4";
/*import emailjs from 'emailjs-com';*/
const Form = () => {
  /*render() {
    function enviarEmail(e){
      e.preventDefault();

      email.js.sendform{'service_yso0gbm','template_t0skxjw',e.target,'yT72h64f6dO0r9nD2'}.then(res=>{
        alert("Se ha enviado correctamente.");
        console.log(res);
      })
    }
  }*/
  return (
    <section className="main" id="form">
      <div id="video-container">
        <div id="backgound-video"></div>
        <video muted autoPlay loop>
          <source src={backgroundMain} type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <div className="mainDiv">
          <h3 className="mainDivTitulo">
            Tu entrada al <br /> <span>mundo Digital.</span>
          </h3>
          <p className="mainDivDescripcion">
            Convertite en uno de nuestros casos de exito
          </p>
        </div>
        <form className="mainForm" action="Submit">
          <label className="mainFormLabel" htmlFor="">
            <input
              className="mainFormLabelNombre"
              placeholder="Nombre o empresa"
              type="text"
              required
            ></input>
          </label>
          <label htmlFor="">
            <input
              className="mainFormLabelEmail"
              placeholder="Email"
              type="email"
              required
            ></input>
          </label>
          <label htmlFor="">
            <textarea
              className="textArea"
              placeholder="Dejanos tu mensaje"
              required
            />
          </label>
          <label htmlFor="">
            <button className="btnSubmit">Empezar ya</button>
          </label>
        </form>
      </div>
    </section>
  );
};

export default Form;
