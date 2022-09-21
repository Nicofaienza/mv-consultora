import "./App.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Services from "./components/services/Services";
import AboutUs from "./components/aboutus/AboutUs";
import Sponsors from "./components/sponsors/Sponsors";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Form />
      <AboutUs />
      <Services />
      <Sponsors />
      <Footer />
    </>
  );
}

export default App;
