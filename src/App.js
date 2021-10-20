import Footer from "./componentes/Footer";
import Nav from "./componentes/Nav";
import Aside from "./componentes/Aside";
import Row from "./paginas/Row";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Nav />
        <Aside />
        <Row />
        <Footer />
      </div>
    </div>
  );
}

export default App;
