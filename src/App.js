import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Aside from "./components/Aside";
import Home from "./paginas/Home";
import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//PAGINAS
import Balancetes from "./paginas/Balancetes";
import Contabilidades from "./paginas/Contabilidades";
import Parametrizacao from "./paginas/Parametrizacao";
import Variaveis from "./paginas/Variaveis";
import Ajudas from "./paginas/Ajudas";
import Empresas from "./paginas/Empresas";
import Planos from "./paginas/Planos";

import IndicadorM from "./paginas/IndicadorM";
import IndicadorT from "./paginas/IndicadorT";

import IndicadorA from "./paginas/IndicadorA";
import Usuario from "./paginas/Usuario";
import Login from "./paginas/Login";
import Dashboard from "./paginas/Dashboard";

axios.defaults.baseURL = "https://emarpe-api.herokuapp.com/api";
//http://localhost:8800/api"

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <Nav />
          <Aside />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/balancetes" element={<Balancetes />} />
            <Route path="/Contabilidades" element={<Contabilidades />} />
            <Route path="/parametrizacao" element={<Parametrizacao />} />
            <Route path="/Variaveis" element={<Variaveis />} />
            <Route path="/ajudas" element={<Ajudas />} />
            <Route exact path="/empresas" element={<Empresas />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/indicador_Mensal" element={<IndicadorM />} />
            <Route path="/indicador_Trimestral" element={<IndicadorT />} />
            <Route path="/indicador_Anual" element={<IndicadorA />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
