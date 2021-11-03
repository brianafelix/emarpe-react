import Footer from "./componentes/Footer";
import Nav from "./componentes/Nav";
import Aside from "./componentes/Aside";
import Row from "./paginas/Row";
import Home from "./paginas/home/Home";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8800/api";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Nav />
        <Aside />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
