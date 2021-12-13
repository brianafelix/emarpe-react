import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Aside from "./components/Aside";
import Home from "./components/Home";
import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//PAGINAS
import Balancetes from "./paginas/home/Balancetes";
import Contabilidades from "./paginas/home/Contabilidades";
import Parametrizacao from "./paginas/home/Parametrizacao";
import Variaveis from "./paginas/home/Variaveis";
import Ajudas from "./paginas/home/Ajudas";
import Empresa from "./paginas/home/Empresa";
import Planos from "./paginas/home/Planos";
import LineCh from "./components/recharts/LineCh";
import AreChart from "./components/recharts/AreChart";
import RadChar from "./components/recharts/RadChar";
import RChart from "./components/recharts/RChart";
import LineC from "./components/recharts/LineC";
import LineChar from "./components/recharts/LineChar";

import LineH from "./components/recharts/LineH";
import IndicadorM from "./paginas/home/IndicadorM";
import IndicadorT from "./paginas/home/IndicadorT";
import Piach from "./components/recharts/Piach";
import PiaChar from "./components/recharts/PiaChar";
import GraficoP from "./components/recharts/GraficoP";
import LineL from "./components/recharts/LineL";
import Scatte from "./components/recharts/Scatte";
import LineHart from "./components/recharts/LineHart";
import IndicadorA from "./paginas/home/IndicadorA";
import Usuario from "./paginas/home/Usuario";
import Login from "./paginas/home/Login";
axios.defaults.baseURL = "http://localhost:8800/api";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <Nav />
          <Aside />
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/balancetes" element={<Balancetes />} />
            <Route exact path="/Contabilidades" element={<Contabilidades />} />
            <Route exact path="/parametrizacao" element={<Parametrizacao />} />
            <Route exact path="/Variaveis" element={<Variaveis />} />
            <Route exact path="/ajudas" element={<Ajudas />} />
            <Route exact path="/empresas" element={<Empresa />} />
            <Route exact path="/planos" element={<Planos />} />
            <Route exact path="/indicador_Mensal" element={<IndicadorM />} />
            <Route
              exact
              path="/indicador_Trimestral"
              element={<IndicadorT />}
            />
            <Route exact path="/indicador_Anual" element={<IndicadorA />} />
            <Route exact path="/usuario" element={<Usuario />} />
            <Route exact path="/Login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
