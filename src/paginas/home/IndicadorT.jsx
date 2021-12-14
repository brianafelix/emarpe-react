import React from "react";
import Scatte from "../../components/recharts/Scatte";
const IndicadorT = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <h1>Indicador Mensal</h1>
        </div>
        <Scatte />
      </div>
    </div>
  );
};
export default IndicadorT;
